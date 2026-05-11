use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Symbol, Vec};

#[contracttype]
#[derive(Clone)]
pub struct Split {
    pub address: Address,
    pub weight: u32,
}

#[contracttype]
#[derive(Clone)]
pub struct GarmentConfig {
    pub designer: Address,
    pub splits: Vec<Split>,
    pub created_at: u64,
}

#[contract]
pub struct DripWearContract;

#[contractimpl]
impl DripWearContract {
    /// Links a garment ID to a Drips configuration with revenue splits
    pub fn link_garment(
        env: Env,
        garment_id: Symbol,
        designer: Address,
        splits: Vec<Split>,
    ) {
        designer.require_auth();
        
        let config = GarmentConfig {
            designer,
            splits,
            created_at: env.ledger().timestamp(),
        };
        
        env.storage().persistent().set(&garment_id, &config);
    }

    /// Retrieves the Drips configuration for a garment
    pub fn get_config(env: Env, garment_id: Symbol) -> GarmentConfig {
        env.storage()
            .persistent()
            .get(&garment_id)
            .unwrap()
    }

    /// Verifies a garment belongs to a specific designer
    pub fn verify_designer(env: Env, garment_id: Symbol, designer: Address) -> bool {
        if let Some(config) = env.storage().persistent().get::<Symbol, GarmentConfig>(&garment_id) {
            config.designer == designer
        } else {
            false
        }
    }
}
