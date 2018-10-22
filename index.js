const CDP = require('chrome-remote-interface');

async function example() {
    let client;
    try {
        client = await CDP();
        const {Network, Page, Log, Runtime} = client;
        await Log.enable();
        await Runtime.enable();
        await Network.enable();
        await Page.enable();
        Log.entryAdded(PrintLog);
        Runtime.consoleAPICalled(PrintLog);
		await Page.navigate({url: 'https://issue-896650.herokuapp.com/'});
        setTimeout(async () => {
			if (client) {
				await client.close();
			}
		}, 20000);
    } catch (err) {
        console.error(err);
    }
}


function PrintLog(params){
    console.log(params)
}

example();