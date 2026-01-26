// --- CÂU 1: Khai báo constructor function Product ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- CÂU 2: Khởi tạo mảng products (ít nhất 6 sp, 2 danh mục) ---
const products = [
    new Product(1, "iPhone 15 Pro Max", 35000000, 10, "Phone", true),
    new Product(2, "Samsung Galaxy S24", 25000000, 5, "Phone", true),
    new Product(3, "MacBook Pro M3", 45000000, 0, "Laptop", true), // Hết hàng
    new Product(4, "AirPods Pro 2", 5000000, 20, "Accessories", true),
    new Product(5, "Sony WH-1000XM5", 8000000, 15, "Accessories", true),
    new Product(6, "Dell XPS 13", 32000000, 3, "Laptop", false), // Ngừng bán
    new Product(7, "Sạc dự phòng Anker", 1000000, 50, "Accessories", true)
];

console.log("--- Danh sách sản phẩm ban đầu ---");
console.log(products);

// --- CÂU 3: Tạo mảng mới chỉ chứa name và price ---
const nameAndPrice = products.map(p => {
    return { name: p.name, price: p.price };
});
console.log("\n--- Câu 3: Mảng Name và Price ---");
console.log(nameAndPrice);

// --- CÂU 4: Lọc sản phẩm còn hàng (quantity > 0) ---
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("\n--- Câu 4: Sản phẩm còn hàng ---");
console.log(inStockProducts);

// --- CÂU 5: Kiểm tra có sp giá trên 30.000.000 hay không? ---
// Sử dụng hàm some() trả về true/false
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("\n--- Câu 5: Có sản phẩm giá > 30tr không? ---");
console.log(hasExpensiveProduct ? "Có" : "Không");

// --- CÂU 6: Kiểm tra tất cả sp thuộc 'Accessories' có đang bán (isAvailable=true) không? ---
// Bước 1: Lọc ra Accessories
// Bước 2: Dùng every() để kiểm tra
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log("\n--- Câu 6: Tất cả phụ kiện đều đang bán? ---");
console.log(allAccessoriesAvailable ? "Đúng" : "Sai");

// --- CÂU 7: Tính tổng giá trị kho hàng (price * quantity) ---
// Sử dụng reduce
const totalInventoryValue = products.reduce((total, p) => {
    return total + (p.price * p.quantity);
}, 0);
console.log("\n--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalInventoryValue.toLocaleString('vi-VN') + " VNĐ");

// --- CÂU 8: Dùng for...of in ra: Tên - Danh mục - Trạng thái ---
console.log("\n--- Câu 8: Duyệt mảng bằng for...of ---");
for (const p of products) {
    console.log(`Tên: ${p.name} - Danh mục: ${p.category} - Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// --- CÂU 9: Dùng for...in để in ra tên thuộc tính và giá trị ---
// Demo trên sản phẩm đầu tiên trong mảng
console.log("\n--- Câu 9: Duyệt thuộc tính object bằng for...in (Demo sp đầu tiên) ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`Thuộc tính: ${key} - Giá trị: ${firstProduct[key]}`);
}

// --- CÂU 10: Lấy danh sách TÊN các sp Đang bán (true) VÀ Còn hàng (>0) ---
const activeProducts = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log("\n--- Câu 10: Tên các SP đang bán và còn hàng ---");
console.log(activeProducts);