import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { App } from "../target/types/app";

describe("app", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.App as Program<App>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("\n\nHello World\n\n", tx);
  });
});
