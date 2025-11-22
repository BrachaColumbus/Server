function sleep(ms: number, fail: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) reject("---We failed while waiting----");
            else resolve();
        }, ms);
    });
}

sleep(2000, false)
    .then(() => console.log("---We finished successfully---"))
    .catch(err => console.error(err));
