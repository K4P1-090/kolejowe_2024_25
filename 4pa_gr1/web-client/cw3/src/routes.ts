import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import { users } from "./data.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const __dirname = path.dirname(new URL(import.meta.url).pathname);
export const routes = (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h2>Hello, World!</h2>`);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h2>About Us</h2>`);
    } else if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else if (req.url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync('./public/index.html', 'utf8');
        res.end(html);
    } else if (req.url?.startsWith('/public/')) {
        const filePath = path.join(__dirname, '..', req.url);
        const ext = path.extname(filePath);
        let contentType = 'text/plain';

        switch (ext) {
            case '.css':
                contentType = 'text/css';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            // Dodaj inne typy plików, jeśli potrzebujesz
        }
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h2>File Not Found</h2>');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h2>Page Not Found</h2>`);
    }

}