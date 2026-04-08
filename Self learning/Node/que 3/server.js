const http = require('http');

// 1. Dummy Data Array
let products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 }
];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    res.setHeader('Content-Type', 'application/json');

    // --- GET: Retrieve all products ---
    if (url === '/products' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(products));
    }

    // --- POST: Create a new product ---
    else if (url === '/products' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const newProduct = JSON.parse(body);
            newProduct.id = products.length + 1;
            products.push(newProduct);
            res.writeHead(201); // 201 Created
            res.end(JSON.stringify(newProduct));
        });
    }

    // --- PUT: Update an existing product ---
    else if (url.startsWith('/products/') && method === 'PUT') {
        const id = parseInt(url.split('/')[2]);
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const index = products.findIndex(p => p.id === id);
            if (index !== -1) {
                products[index] = { ...products[index], ...JSON.parse(body) };
                res.writeHead(200);
                res.end(JSON.stringify(products[index]));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: "Product not found" }));
            }
        });
    }

    // --- DELETE: Remove a product ---
    else if (url.startsWith('/products/') && method === 'DELETE') {
        const id = parseInt(url.split('/')[2]);
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            res.writeHead(200);
            res.end(JSON.stringify({ message: "Product deleted" }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "Product not found" }));
        }
    }

    // Default route
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
