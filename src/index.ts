import { join } from "path";
import { readdir, readFile, writeFile, ensureDir, remove } from "fs-extra";
import camelCase from "lodash.camelcase";

async function generateIconComponents() {
    const template = (await readFile(join("src", "template.tsx"))).toString();
    const baseDirectoryPath = join(
        "node_modules",
        "ionicons",
        "dist",
        "ionicons",
        "svg"
    );

    const distDirectory = join("dist", "typescript");
    await remove(distDirectory);
    await ensureDir(distDirectory);

    const fileNames = await readdir(baseDirectoryPath);
    for (const fileName of fileNames) {
        let name = camelCase(fileName.replace(/.svg$/, "")) as string;
        name = name.charAt(0).toUpperCase() + name.substring(1);

        const path = join(baseDirectoryPath, fileName);
        const svg = (await readFile(path)).toString();
        const contents = template
            .replace(/IconComponentName/, name)
            .replace(/<svg><\/svg>/, svg);

        await writeFile(join(distDirectory, name + ".tsx"), contents);
    }
}

generateIconComponents().catch(console.error);
