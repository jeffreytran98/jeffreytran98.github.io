function sleep(millis) {
    return new Promise((resolve) => { 
        setTimeout(resolve, millis);
    });
}


async function temp() {
    console.log("Hello world");
    await sleep(3000);
    console.log("HEllo world but after 3 seconds")
}

temp();