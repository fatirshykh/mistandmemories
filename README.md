# Mist & Memories — Storefront Preview

Static, responsive HTML/CSS/JavaScript perfume website. Open with VS Code Live Server. Deploy entire folder to Netlify.

Pages: index.html (catalog, brand story, FAQ, WhatsApp contact form), product.html?id=1 (four sample images, fragrance profile, illustrative ingredients, sizes, Add to Cart, Buy Now), cart.html (dedicated bag, delivery form, WhatsApp order).

WhatsApp number is configured in js/products.js: 923006480048.

Important: all products, prices, ingredient descriptions and photography are SAMPLE content, not verified products. The four gallery images are generic illustrative photographs, not four real angles of the same bottle. Replace before taking actual orders. Shipping fees and payment instructions are confirmed by the seller via WhatsApp.

Cart persists in localStorage. Delivery form persists in sessionStorage for this browser tab only. No customer data is transmitted to a backend: pressing checkout opens a prefilled WhatsApp message; customer must press Send there. A static site cannot confirm payment, delivery or receipt of a WhatsApp message. Contact form similarly opens WhatsApp rather than claiming to send an email.

For production: confirm policies and products with the client, replace sample photography with owned assets, test on mobile, configure domain on Netlify, and consider a privacy notice appropriate to the final business.
