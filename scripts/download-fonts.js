import fs from "fs";
import https from "https";
import path from "path";

const FONTS = [
  {
    name: "Inter-roman.var.woff2",
    url: "https://rsms.me/inter/font-files/Inter.var.woff2",
  },
  {
    name: "Inter-italic.var.woff2",
    url: "https://rsms.me/inter/font-files/Inter-italic.var.woff2",
  },
  {
    name: "Mona-Sans.var.woff2",
    url: "https://github.com/github/mona-sans/raw/main/fonts/variable/Mona-Sans.woff2",
  },
];

const FONTS_DIR = path.join(process.cwd(), "static", "fonts");

// Create fonts directory if it doesn't exist
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

// Download each font
FONTS.forEach((font) => {
  const filePath = path.join(FONTS_DIR, font.name);

  if (fs.existsSync(filePath)) {
    console.log(`${font.name} already exists, skipping...`);
    return;
  }

  console.log(`Downloading ${font.name}...`);

  https
    .get(font.url, (response) => {
      const file = fs.createWriteStream(filePath);
      response.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log(`Downloaded ${font.name}`);
      });
    })
    .on("error", (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${font.name}:`, err.message);
    });
});
