const { lunchRandom } = require("./lunch");

module.exports = async function (context, req) {
    const result_sync = await lunchRandom();

    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        :  `식당 : ${result_sync.식당} / 메뉴 : ${result_sync.메뉴} / 가격:${result_sync.가격} / url:${result_sync.url}`;

    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
            body:{
                response_type: "in_channel",
                unfurl_links: true,
                unfurl_media: true,
                text: "오늘 점심 메뉴는?!",
                attachments: [
                    {
                        text: `${responseMessage}`,
                        color: "#7CD197",
                    }
                ],
            }
    };
}