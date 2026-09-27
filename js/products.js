// DEMONSTRATION DATA: replace names, ingredients, images and prices before launch.
const PHOTO_IDS=['1594035910387-fea47794261f','1588405748880-12d1d2a59f75','1523293182086-7651a899d37f','1592945403244-b3fbafd7f539','1541643600914-78b084683601','1615397349754-cfa2066a298e','1595425970377-c9703cf48b6d','1583445013765-d6c20c4a2782','1528740561666-dc2479dc08ab','1563178406-4cdc2923acbc','1547887537-6158d64c35b3'];
const photo=(id,w=900)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;
const raw=[
['Oud Royale','Woody',6400,'Cambodian Oud, Saffron','Smoky Rose, Birch','Amber, Dark Musk','An opulent oud composition with golden spice and warm, resinous depth.'],
['Velvet Rose','Floral',5200,'Damask Rose, Pink Pepper','Peony, Clove','Praline, Agarwood','A romantic rose scent softened by delicate petals and gentle spice.'],
['Santal Night','Woody',5800,'Sandalwood, Cardamom','Iris, Violet','Cedar, Leather','Creamy sandalwood meets powdery florals in a calm evening scent.'],
['Noir Intense','Oriental',6100,'Black Pepper, Bergamot','Incense, Plum','Vanilla, Vetiver, Amber','A dark, expressive fragrance combining fruit, spice and incense.'],
['Citrus Blossom','Citrus',4400,'Bergamot, Neroli','Orange Blossom, Jasmine','White Amber, Musk','Fresh citrus blossoms with an airy floral finish.'],
['Amber Mystique','Oriental',6300,'Amber, Cinnamon','Labdanum, Patchouli','Vanilla, Benzoin','Warm amber and soft spice wrapped in sweet resinous notes.'],
['Vanilla Noir','Oriental',5100,'Vanilla, Almond','Orchid, Tonka','Sandalwood, Cocoa','Dark vanilla balanced with woods and soft cocoa.'],
['Saffron Silk','Oriental',6900,'Saffron, Thyme','Jasmine, Leather','Amberwood, Cedar','A rich saffron fragrance with floral warmth and a woody base.'],
['Neroli Breeze','Fresh',4700,'Sea Salt, Mandarin','Neroli, Petitgrain','Driftwood, Musk','A bright coastal fragrance with citrus and soft marine notes.'],
['Imperial Musk','Fresh',5900,'White Tea, Aldehydes','Lily, Cashmere','Crystal Musk, Woods','A clean, subtle scent inspired by soft fabrics and fresh air.'],
['Leather Reserve','Woody',7100,'Leather, Raspberry','Thyme, Jasmine','Suede, Amber','Smooth leather with a surprising fruity opening.'],
['Tobacco Absolute','Woody',6600,'Tobacco Leaf, Ginger','Honey, Tonka, Cocoa','Dried Fruits, Woods','An enveloping scent of warm spice, tobacco and woods.'],
['Fleur de Soie','Floral',5300,'Freesia, Peach Blossom','Magnolia, Tuberose','Soft Woods, Amber','A delicate bouquet of soft white flowers.'],
['Solaris Gold','Fresh',5600,'Grapefruit, Solar Accord','Frangipani, Tiare','Coconut, Sandalwood','Golden sunshine captured in tropical flowers and light woods.'],
['Ocean Drift','Fresh',4600,'Bergamot, Marine Accord','Sage, Marine Notes','Oakmoss, Cedar','Fresh ocean air meets green herbs and weathered woods.']
];
const products=raw.map((r,i)=>({id:i+1,name:r[0],category:r[1],prices:{'50ml':Math.round(r[2]*0.7/100)*100,'100ml':r[2]},topNotes:r[3],heartNotes:r[4],baseNotes:r[5],description:r[6],ingredients:`Illustrative fragrance accords: ${r[3]}, ${r[4]}, ${r[5]}. Actual formula and allergens must be confirmed by the brand.`,images:[photo(PHOTO_IDS[i%PHOTO_IDS.length]),photo(PHOTO_IDS[(i+3)%PHOTO_IDS.length]),photo(PHOTO_IDS[(i+6)%PHOTO_IDS.length]),photo(PHOTO_IDS[(i+9)%PHOTO_IDS.length])]}));
const BRAND={name:'Mist & Memories',whatsapp:'923006480048'};
const money=n=>`Rs. ${n.toLocaleString('en-PK')}`;
const productById=id=>products.find(p=>p.id===Number(id));
const waLink=message=>`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
