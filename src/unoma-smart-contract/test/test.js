const hre = require("hardhat")

const main = async() => {
    const unomaContractFactory = await hre.ethers.getContractFactory("Unoma")
    const unomaContract = await unomaContractFactory.deploy()
    await unomaContract.deployed()
    console.log("Contract deployed to: ", unomaContract.address)

    const [deployer, address1, address2] = await hre.ethers.getSigners();

    let profileThumbnailCid = "0xsuhbadcsabacusidsadjadhbuiadsggdxaydsbjadsj"
    let profileName = "Victor Omorogbe"
    let profileBio = "Jesus is king"
    
    let txn = await unomaContract.updateProfile(profileThumbnailCid, profileName, profileBio)
    let wait = await txn.wait()
    console.log("Profile Updated: ", wait.events[0].event, wait.events[0].args)

    let podcastName = "Supreme Labs"
    txn = await unomaContract.updatePodcastName(podcastName)
    wait = await txn.wait()
    console.log("Podcast Name Updated: ", wait.events[0].event, wait.events[0].args)

    let thumbnailCid = "sdhbdschadbcdasuchaibligdaigadsadadshdakxasgadsnxhafgdf"
    let audioCid = "udsnhafflidkfabkufgkybucagkcfgybdagyfadkfnkyadgkgyybgc"
    let audioName = "God is great"
    txn = await unomaContract.post(podcastName, thumbnailCid, audioCid, audioName)
    wait = await txn.wait()
    console.log("Posted: ", wait.events[0].event, wait.events[0].args)

}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};
  
  runMain();