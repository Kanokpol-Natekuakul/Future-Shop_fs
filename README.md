# Future Shop - ร้านค้าออนไลน์

เว็บแอปพลิเคชันร้านค้าออนไลน์ที่สร้างด้วย HTML, CSS และ JavaScript แบบ Vanilla พร้อมระบบตะกร้าสินค้าที่ทำงานได้จริง

## ✨ ฟีเจอร์

- **แสดงสินค้า** - ดึงข้อมูลสินค้าจาก API และแสดงในรูปแบบ Grid Layout
- **ระบบตะกร้าสินค้า** - เพิ่ม ลบ และแก้ไขจำนวนสินค้าในตะกร้า
- **สรุปตะกร้า** - แสดงรายการสินค้าและราคารวมแบบเรียลไทม์
- **Responsive Design** - ปรับขนาดตามหน้าจออัตโนมัติ
- **Dark Theme** - ธีมสีเข้มที่ดูทันสมัย
- **Hover Effects** - เอฟเฟกต์เมื่อเลื่อนเมาส์ผ่านสินค้า
- **การจัดการ State** - ระบบจัดการสถานะตะกร้าสินค้า

## 🚀 เทคโนโลยีที่ใช้

- **HTML5** - โครงสร้างหน้าเว็บ
- **CSS3** - การจัดรูปแบบและเอฟเฟกต์
- **Vanilla JavaScript** - ฟังก์ชันการทำงานและการจัดการ DOM
- **DummyJSON API** - แหล่งข้อมูลสินค้าจำลอง
- **Google Fonts** - ฟอนต์ Anuphan และ Open Sans

## 📁 โครงสร้างโปรเจค

```
future-shop/
├── index.html          # หน้าเว็บหลัก
├── index.css           # สไตล์และการจัดรูปแบบ
├── index.js            # JavaScript สำหรับฟังก์ชันการทำงาน
└── README.md           # ไฟล์นี้
```

## 🛠️ การติดตั้งและรัน

### ข้อกำหนดเบื้องต้น

- เว็บเบราว์เซอร์ที่ทันสมัย (Chrome, Firefox, Safari, Edge)
- เชื่อมต่ออินเทอร์เน็ต (สำหรับดึงข้อมูลจาก API)

### เริ่มต้นใช้งาน

1. **ดาวน์โหลดหรือโคลนโปรเจค**
   ```bash
   git clone <repository-url>
   cd future-shop
   ```

2. **เปิดไฟล์ในเบราว์เซอร์**
   - เปิดไฟล์ `index.html` ในเบราว์เซอร์โดยตรง
   - หรือใช้ Live Server ใน VS Code

3. **ใช้งานแอปพลิเคชัน**
   - รอให้สินค้าโหลดจาก API
   - คลิกปุ่ม `+` เพื่อเพิ่มสินค้าลงตะกร้า
   - คลิก "ดูตะกร้าสินค้า" เพื่อดูสรุปคำสั่งซื้อ

## 🎮 การใช้งาน

### การเพิ่มสินค้าลงตะกร้า
1. เลื่อนดูสินค้าในหน้าหลัก
2. คลิกปุ่ม `+` ที่มุมขวาล่างของสินค้าที่ต้องการ
3. สินค้าจะถูกเพิ่มลงในตะกร้าทันที

### การดูและจัดการตะกร้าสินค้า
1. คลิกปุ่ม "ดูตะกร้าสินค้า" ที่มุมขวาบน
2. ตาราง สรุปตะกร้าจะแสดงขึ้น
3. ใช้ปุ่ม `-` และ `+` เพื่อปรับจำนวน
4. ราคารวมจะอัปเดตอัตโนมัติ

### การซ่อน/แสดงตะกร้า
- คลิกปุ่ม "ดูตะกร้าสินค้า" อีกครั้งเพื่อซ่อนตะกร้า
- ตะกร้าจะถูกซ่อนโดยอัตโนมัติเมื่อคลิกที่อื่น

## 💻 รายละเอียดโค้ด

### HTML Structure
```html
<nav>
    <div><h1>Future Shop</h1></div>
    <div>
        <button id="viewCart">ดูตะกร้าสินค้า</button>
        <div id="cartSummary"><!-- ตารางสรุปตะกร้า --></div>
    </div>
</nav>
<main>
    <section id="productList"><!-- รายการสินค้า --></section>
</main>
```

### CSS Highlights
```css
/* Grid Layout สำหรับแสดงสินค้า */
#productList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    gap: 2em;
}

/* การ์ดสินค้าพร้อมเอฟเฟกต์ hover */
.productCard:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 6px 24px #000a;
}
```

### JavaScript Functions

#### การดึงข้อมูลสินค้า
```javascript
const fetchProduct = () => {
    fetch('https://dummyjson.com/products/category/motorcycle')
        .then(res => res.json())
        .then((productResponse) => {
            products = productResponse.products;
            products.forEach(product => {
                createCard(product);
            });
        });
}
```

#### การอัปเดตตะกร้า
```javascript
const updateCart = () => {
    let totalPrice = 0;
    // อัปเดตรายการสินค้าในตะกร้า
    // คำนวณราคารวม
    // แสดงผลในตาราง
}
```

#### การสร้างการ์ดสินค้า
```javascript
const createCard = (product) => {
    // สร้าง DOM elements
    // เพิ่ม event listeners
    // แสดงผลในหน้าเว็บ
}
```

## 🎨 ธีมและการออกแบบ

### Color Scheme
- **พื้นหลังหลัก**: `#181818` (เทาเข้ม)
- **พื้นหลังการ์ด**: `#232323` (เทาอ่อน)
- **ข้อความ**: `#f1f1f1` (ขาวอ่อน)
- **ปุ่ม**: `#111` พร้อมเอฟเฟกต์ `#ffd700` เมื่อ hover

### Typography
- **หลัก**: Anuphan (ฟอนต์ไทย)
- **สำรอง**: Open Sans
- **น้ำหนัก**: 400 (ปกติ) และ 700 (หนา)

### Layout
- **Grid System**: Auto-fit columns ขั้นต่ำ 300px
- **Responsive**: ปรับตัวตามขนาดหน้าจอ
- **Gap**: 2em ระหว่างการ์ด

## 🔧 การปรับแต่ง

### เปลี่ยนหมวดหมู่สินค้า
แก้ไขใน `fetchProduct()`:
```javascript
fetch('https://dummyjson.com/products/category/smartphones') // เปลี่ยนจาก motorcycle
```

### ปรับสีธีม
แก้ไขตัวแปรสีใน `index.css`:
```css
html, body {
    background: #YOUR_COLOR; /* เปลี่ยนสีพื้นหลัง */
    color: #YOUR_TEXT_COLOR; /* เปลี่ยนสีข้อความ */
}
```

### เพิ่มฟีเจอร์ใหม่
- **LocalStorage**: บันทึกตะกร้าสินค้าในเบราว์เซอร์
- **การค้นหา**: เพิ่มช่องค้นหาสินค้า
- **หมวดหมู่**: กรองสินค้าตามหมวดหมู่
- **Pagination**: แบ่งหน้าสำหรับสินค้าจำนวนมาก

## 📱 Responsive Design

### Desktop (> 768px)
- แสดงสินค้าแบบ multi-column grid
- ตะกร้าสินค้าแสดงเป็น dropdown

### Tablet (768px - 480px)  
- ลดจำนวน columns ใน grid
- ปรับขนาดการ์ดให้เหมาะสม

### Mobile (< 480px)
- แสดงสินค้าแบบ single column
- ปรับขนาดปุ่มให้ใหญ่ขึ้น

## 🚀 การพัฒนาต่อ

### ฟีเจอร์ที่แนะนำ
- **ระบบสมาชิก**: การสมัครและเข้าสู่ระบบ
- **การชำระเงิน**: เชื่อมต่อ Payment Gateway
- **ประวัติการสั่งซื้อ**: เก็บบันทึกคำสั่งซื้อ
- **รีวิวสินค้า**: ระบบให้คะแนนและรีวิว
- **Wishlist**: รายการสินค้าที่ต้องการ

### ปรับปรุงเทคนิค
- **Framework**: อัพเกรดเป็น React หรือ Vue.js
- **State Management**: ใช้ Redux หรือ Vuex
- **Build Tools**: เพิ่ม Webpack หรือ Vite
- **Testing**: เพิ่มการทดสอบอัตโนมัติ
- **PWA**: พัฒนาเป็น Progressive Web App

## 🐛 การแก้ปัญหา

### สินค้าไม่แสดง
- ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
- เปิด Developer Tools ดู Console errors
- ตรวจสอบว่า API ทำงานปกติ

### ตะกร้าไม่อัปเดต
- รีเฟรชหน้าเว็บ
- ตรวจสอบ JavaScript errors ใน Console
- ล้าง Browser Cache

### ปัญหาการแสดงผล
- ตรวจสอบว่าไฟล์ CSS โหลดสำเร็จ
- ทดสอบในเบราว์เซอร์อื่น
- ตรวจสอบความเข้ากันได้ของเบราว์เซอร์

## 📄 API ที่ใช้

### DummyJSON Products API
- **URL**: `https://dummyjson.com/products/category/motorcycle`
- **Method**: GET
- **Response**: JSON object พร้อมรายการสินค้า

### โครงสร้างข้อมูล Product
```json
{
  "id": 1,
  "title": "ชื่อสินค้า",
  "price": 999,
  "thumbnail": "URL_รูปภาพ",
  "category": "หมวดหมู่"
}

---
```

**สร้างด้วย ❤️ โดยใช้ HTML, CSS และ JavaScript**
