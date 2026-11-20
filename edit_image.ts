import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

async function editImage() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY not found");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });
  const imagePath = path.join(process.cwd(), "public/pulpit.webp");
  const imageData = fs.readFileSync(imagePath);
  const base64Image = imageData.toString("base64");

  console.log("Calling Gemini to edit image...");
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: {
      parts: [
        {
          inlineData: {
            data: base64Image,
            mimeType: "image/webp",
          },
        },
        {
          text: "Please add the text 'Acts 2:42' onto the red curtain in the background of this image. The text should look like it is embroidered or printed on the fabric in a elegant, golden serif font. It should be centered and subtle, blending naturally with the folds of the curtain.",
        },
      ],
    },
  });

  console.log("Gemini response received.");

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      const outputData = Buffer.from(part.inlineData.data, "base64");
      const outputPath = path.join(process.cwd(), "public/pulpit_with_verse.webp");
      fs.writeFileSync(outputPath, outputData);
      console.log(`Image saved to ${outputPath}`);
      return;
    }
  }

  console.error("No image data found in response");
  process.exit(1);
}

editImage().catch(console.error);
