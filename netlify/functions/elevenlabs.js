exports.handler = async function (event) {
  try {
    const { text } = JSON.parse(event.body || "{}");

    if (!text) {
      return {
        statusCode: 400,
        body: "Missing text"
      };
    }

    const response = await fetch(
      "https://api.elevenlabs.io/v1/text-to-speech/Gubgw9l4dtIoQA9YZHgx",
      {
        method: "POST",
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      }
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: "ElevenLabs failed"
      };
    }

    const audioBuffer = await response.arrayBuffer();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "audio/mpeg"
      },
      body: Buffer.from(audioBuffer).toString("base64"),
      isBase64Encoded: true
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    };
  }
};
