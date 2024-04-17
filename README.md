# hw9_No4_Anchor_Helloworld

### New anchor project step by step:
### to run a Hello World 

### this is not a web based reply that's coming


**anchor init app** 
 

### to correct warnings package.json
### add this to file after first "{"

**cd app**

**nano package.json**

**"license": "MIT",**

**ctl-x y**

**cd ..**

**cd app/programs/app/src**

**nano lib.rs**

### on line 9 add '_' to the ctxt

**ctl-x y**

**cd ..**

**cd ..**

**cd ..**

**cd tests/** 

**nano app.ts**

### on line 14 replace " Your transaction signature" with "\n\nHello World\n\n"

**ctl-x y**

**cd ..**

### add to anchor.toml

**nano anchor.toml**

**[test]**

**startup_wait = 10000**

**clt-x y**

**cd ..**

### sale all changes

**anchor clean**

**anchor build**

### or just run

**anchor test**

# hw9_no4_anchor_helloworld

