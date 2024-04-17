use anchor_lang::prelude::*;

declare_id!("Bj15Py5uBJqUagv8W3udxNAE1rYkX9cTKhRwT95ASyet");

#[program]
pub mod app {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
