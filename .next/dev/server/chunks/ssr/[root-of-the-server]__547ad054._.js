module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/christmas-tree-hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChristmasTreeHero",
    ()=>ChristmasTreeHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const GLOW_COLORS = [
    {
        r: 255,
        g: 42,
        b: 0,
        sizeMultiplier: 1.8
    },
    {
        r: 255,
        g: 90,
        b: 0,
        sizeMultiplier: 1.5
    },
    {
        r: 255,
        g: 140,
        b: 0,
        sizeMultiplier: 1.3
    },
    {
        r: 255,
        g: 210,
        b: 0,
        sizeMultiplier: 1.1
    },
    {
        r: 255,
        g: 255,
        b: 255,
        sizeMultiplier: 0.6
    },
    {
        r: 255,
        g: 255,
        b: 255,
        sizeMultiplier: 0.5
    }
];
const GIFT_COLORS = [
    {
        box: "#c41e3a",
        boxDark: "#8b0000",
        ribbon: "#ffd700",
        ribbonLight: "#fff8dc"
    },
    {
        box: "#1a5f4a",
        boxDark: "#0d3025",
        ribbon: "#ffd700",
        ribbonLight: "#fff8dc"
    },
    {
        box: "#7b2d8e",
        boxDark: "#4a1259",
        ribbon: "#e0b0ff",
        ribbonLight: "#f8f0ff"
    },
    {
        box: "#1e3a5f",
        boxDark: "#0d1f33",
        ribbon: "#87ceeb",
        ribbonLight: "#e0f4ff"
    },
    {
        box: "#8b4513",
        boxDark: "#5c2d0e",
        ribbon: "#daa520",
        ribbonLight: "#fff5e0"
    }
];
const WISHES = [
    "Những ngày này chắc khá bận, mong bạn nhớ giữ sức và đừng tự gây áp lực cho mình.😊",
    "Khối lượng công việc có nhiều, nhưng những gì bạn làm đang đi đúng hướng.💪",
    "Cuối năm rồi, mong bạn vẫn vững tin vào con đường mình đã chọn.😚",
    "Hy vọng những nỗ lực của bạn sớm mang lại kết quả xứng đáng.🤜🤛",
    "Chúc công việc của bạn ngày càng thuận lợi và rõ ràng hơn.👩‍💻",
    "Mong một năm làm việc hiệu quả, thu về nhiều thành quả đáng tự hào.🎁",
    "Giữa guồng quay bận rộn, mong bạn vẫn tìm được cảm giác nhẹ lòng.💖",
    "Chúc bạn luôn giữ được năng lượng tích cực cho những chặng đường phía trước.🤩"
];
const BASE_SPHERE_COUNT = 1900;
const MAX_SPHERE_COUNT = 5000;
const TREE_HEIGHT = 750;
const BASE_RADIUS = 280;
const GIFT_COUNT = 8;
function ChristmasTreeHero() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeWish, setActiveWish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showWish, setShowWish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const rotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rotationXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const explodeFactorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const autoRotateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const hoveredGiftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const giftBoxesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const wishTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetZoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const targetExplodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationId;
        let hoverOffset = 0;
        const resize = ()=>{
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener("resize", resize);
        const spheres = [];
        for(let i = 0; i < MAX_SPHERE_COUNT; i++){
            const heightFactor = Math.random();
            const y = heightFactor * TREE_HEIGHT;
            const taperFactor = Math.pow(1 - heightFactor, 0.7);
            const radiusAtHeight = BASE_RADIUS * taperFactor;
            const angle = Math.random() * Math.PI * 2;
            const distanceFactor = Math.pow(Math.random(), 0.5);
            const distance = distanceFactor * radiusAtHeight;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            const centerY = TREE_HEIGHT / 2;
            const dx = x;
            const dy = y - centerY;
            const dz = z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
            const colorData = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];
            const baseSize = 1.5 + Math.random() * 2;
            // First BASE_SPHERE_COUNT spheres are always visible (threshold = 1)
            // Remaining spheres appear gradually as zoom increases from 1 to 3
            const zoomThreshold = i < BASE_SPHERE_COUNT ? 1 : 1 + (i - BASE_SPHERE_COUNT) / (MAX_SPHERE_COUNT - BASE_SPHERE_COUNT) * 2;
            spheres.push({
                x: x,
                y: y,
                z: z,
                origX: x,
                origY: y,
                origZ: z,
                explodeX: dx / dist * (0.8 + Math.random() * 0.4),
                explodeY: dy / dist * (0.8 + Math.random() * 0.4),
                explodeZ: dz / dist * (0.8 + Math.random() * 0.4),
                color: {
                    r: colorData.r,
                    g: colorData.g,
                    b: colorData.b
                },
                size: baseSize * colorData.sizeMultiplier,
                zoomThreshold: zoomThreshold
            });
        }
        const stars = [];
        for(let i = 0; i < 200; i++){
            stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                alpha: 0.2 + Math.random() * 0.4
            });
        }
        // Generate gift boxes scattered around the tree
        const giftBoxes = [];
        for(let i = 0; i < GIFT_COUNT; i++){
            const heightFactor = 0.1 + Math.random() * 0.6 // Place gifts in lower-mid section
            ;
            const y = heightFactor * TREE_HEIGHT;
            const taperFactor = Math.pow(1 - heightFactor, 0.7);
            const radiusAtHeight = BASE_RADIUS * taperFactor * 0.8;
            const angle = i / GIFT_COUNT * Math.PI * 2 + Math.random() * 0.5;
            const distance = radiusAtHeight * (0.6 + Math.random() * 0.3);
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            giftBoxes.push({
                x,
                y,
                z,
                origX: x,
                origY: y,
                origZ: z,
                size: 28 + Math.random() * 12,
                colorIndex: i % GIFT_COLORS.length,
                wishIndex: i % WISHES.length,
                isOpened: false,
                openAnimation: 0,
                zoomThreshold: 1.5 + Math.random() * 0.5,
                floatOffset: Math.random() * Math.PI * 2,
                sparklePhase: Math.random() * Math.PI * 2
            });
        }
        giftBoxesRef.current = giftBoxes;
        const project = (x, y, z)=>{
            const fov = 900;
            const zoom = zoomRef.current;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2 + 280;
            const cosR = Math.cos(rotationRef.current);
            const sinR = Math.sin(rotationRef.current);
            let rotatedX = x * cosR - z * sinR;
            let rotatedZ = x * sinR + z * cosR;
            const cosRX = Math.cos(rotationXRef.current);
            const sinRX = Math.sin(rotationXRef.current);
            const rotatedY = y * cosRX - rotatedZ * sinRX;
            rotatedZ = y * sinRX + rotatedZ * cosRX;
            const scale = fov / (fov + rotatedZ + 200) * zoom;
            return {
                x: centerX + rotatedX * scale,
                y: centerY - (rotatedY + hoverOffset) * scale,
                scale: scale,
                z: rotatedZ
            };
        };
        const drawSphere = (ctx, x, y, size, color, scale, alpha = 1)=>{
            const actualSize = size * scale;
            ctx.globalAlpha = alpha;
            const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, actualSize * 4);
            glowGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
            glowGradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`);
            glowGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
            ctx.beginPath();
            ctx.arc(x, y, actualSize * 4, 0, Math.PI * 2);
            ctx.fillStyle = glowGradient;
            ctx.fill();
            const shellGradient = ctx.createRadialGradient(x - actualSize * 0.3, y - actualSize * 0.3, 0, x, y, actualSize * 1.2);
            shellGradient.addColorStop(0, `rgba(255, 255, 255, 0.3)`);
            shellGradient.addColorStop(0.5, `rgba(255, 255, 255, 0.1)`);
            shellGradient.addColorStop(0.8, `rgba(200, 200, 200, 0.05)`);
            shellGradient.addColorStop(1, `rgba(150, 150, 150, 0.15)`);
            ctx.beginPath();
            ctx.arc(x, y, actualSize * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = shellGradient;
            ctx.fill();
            const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, actualSize * 0.7);
            coreGradient.addColorStop(0, `rgba(${Math.min(255, color.r + 50)}, ${Math.min(255, color.g + 50)}, ${Math.min(255, color.b + 50)}, 1)`);
            coreGradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`);
            coreGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`);
            ctx.beginPath();
            ctx.arc(x, y, actualSize * 0.7, 0, Math.PI * 2);
            ctx.fillStyle = coreGradient;
            ctx.fill();
            const highlightGradient = ctx.createRadialGradient(x - actualSize * 0.4, y - actualSize * 0.4, 0, x - actualSize * 0.4, y - actualSize * 0.4, actualSize * 0.5);
            highlightGradient.addColorStop(0, `rgba(255, 255, 255, 0.5)`);
            highlightGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
            ctx.beginPath();
            ctx.arc(x - actualSize * 0.4, y - actualSize * 0.4, actualSize * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = highlightGradient;
            ctx.fill();
            ctx.globalAlpha = 1;
        };
        const drawStar = (ctx, cx, cy, outerRadius, innerRadius, points, alpha = 1)=>{
            ctx.globalAlpha = alpha;
            const glowGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerRadius * 3);
            glowGradient.addColorStop(0, "rgba(255, 210, 0, 0.8)");
            glowGradient.addColorStop(0.3, "rgba(255, 180, 0, 0.4)");
            glowGradient.addColorStop(0.6, "rgba(255, 140, 0, 0.15)");
            glowGradient.addColorStop(1, "rgba(255, 100, 0, 0)");
            ctx.beginPath();
            ctx.arc(cx, cy, outerRadius * 3, 0, Math.PI * 2);
            ctx.fillStyle = glowGradient;
            ctx.fill();
            ctx.beginPath();
            for(let i = 0; i < points * 2; i++){
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = Math.PI / points * i - Math.PI / 2;
                const x = cx + radius * Math.cos(angle);
                const y = cy + radius * Math.sin(angle);
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            const starGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerRadius);
            starGradient.addColorStop(0, "rgba(255, 255, 200, 1)");
            starGradient.addColorStop(0.5, "rgba(255, 220, 80, 1)");
            starGradient.addColorStop(1, "rgba(255, 180, 0, 0.9)");
            ctx.fillStyle = starGradient;
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 255, 150, 0.8)";
            ctx.lineWidth = 2;
            ctx.stroke();
            // Center highlight
            const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerRadius * 0.8);
            centerGlow.addColorStop(0, "rgba(255, 255, 255, 0.9)");
            centerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.beginPath();
            ctx.arc(cx, cy, innerRadius * 0.8, 0, Math.PI * 2);
            ctx.fillStyle = centerGlow;
            ctx.fill();
            ctx.globalAlpha = 1;
        };
        // Draw a beautiful 3D gift box with refined design
        const drawGiftBox = (ctx, x, y, size, scale, colorIndex, isHovered, openAnimation, floatOffset, sparklePhase, alpha = 1)=>{
            const time = Date.now() * 0.001;
            const actualSize = size * scale;
            const colors = GIFT_COLORS[colorIndex];
            // Floating animation
            const floatY = Math.sin(time * 1.5 + floatOffset) * actualSize * 0.08;
            const floatRotation = Math.sin(time * 0.8 + floatOffset) * 0.03;
            y += floatY;
            // Hover scale animation
            const hoverScale = isHovered ? 1 + Math.sin(time * 4) * 0.05 + 0.08 : 1;
            const finalSize = actualSize * hoverScale;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.translate(x, y);
            ctx.rotate(floatRotation);
            ctx.translate(-x, -y);
            const boxWidth = finalSize * 0.9;
            const boxHeight = finalSize * 0.75;
            const cornerRadius = finalSize * 0.08;
            const depth3D = finalSize * 0.15;
            // Opening animation values
            const lidLift = openAnimation * finalSize * 0.8;
            const lidTilt = openAnimation * 0.6;
            const lightBurst = openAnimation;
            // === SUBTLE SPARKLES around gift (only when not opened) ===
            if (!openAnimation && isHovered) {
                const sparkleCount = 4;
                for(let i = 0; i < sparkleCount; i++){
                    const angle = time * 0.5 + sparklePhase + i * Math.PI * 2 / sparkleCount;
                    const dist = finalSize * (0.7 + Math.sin(time * 2 + i) * 0.1);
                    const sx = x + Math.cos(angle) * dist;
                    const sy = y + Math.sin(angle) * dist * 0.6 - finalSize * 0.1;
                    const sparkleSize = finalSize * 0.03 * (0.5 + Math.sin(time * 4 + i * 1.5) * 0.5);
                    if (sparkleSize > 0.5) {
                        ctx.fillStyle = `rgba(255, 255, 220, ${0.4 + Math.sin(time * 5 + i) * 0.3})`;
                        ctx.beginPath();
                        ctx.arc(sx, sy, sparkleSize, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
            // === SOFT SHADOW ===
            const shadowY = y + boxHeight * 0.5 + depth3D;
            const shadowScale = 1 - openAnimation * 0.3;
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.beginPath();
            ctx.ellipse(x, shadowY + 5, boxWidth * 0.5 * shadowScale, boxWidth * 0.12 * shadowScale, 0, 0, Math.PI * 2);
            ctx.fill();
            // === BOX BODY (3D) ===
            // Right side (darker)
            ctx.fillStyle = colors.boxDark;
            ctx.beginPath();
            ctx.moveTo(x + boxWidth / 2, y - boxHeight / 2 + cornerRadius);
            ctx.lineTo(x + boxWidth / 2 + depth3D, y - boxHeight / 2 + cornerRadius - depth3D * 0.5);
            ctx.lineTo(x + boxWidth / 2 + depth3D, y + boxHeight / 2 - depth3D * 0.5);
            ctx.lineTo(x + boxWidth / 2, y + boxHeight / 2);
            ctx.closePath();
            ctx.fill();
            // Top edge (lighter for depth)
            const topGradient = ctx.createLinearGradient(x, y - boxHeight / 2 - depth3D, x, y - boxHeight / 2);
            topGradient.addColorStop(0, colors.box);
            topGradient.addColorStop(1, colors.boxDark);
            ctx.fillStyle = topGradient;
            ctx.beginPath();
            ctx.moveTo(x - boxWidth / 2 + cornerRadius, y - boxHeight / 2);
            ctx.lineTo(x - boxWidth / 2 + cornerRadius + depth3D, y - boxHeight / 2 - depth3D * 0.5);
            ctx.lineTo(x + boxWidth / 2 + depth3D, y - boxHeight / 2 - depth3D * 0.5);
            ctx.lineTo(x + boxWidth / 2, y - boxHeight / 2);
            ctx.closePath();
            ctx.fill();
            // Main front face
            const boxGradient = ctx.createLinearGradient(x - boxWidth / 2, y - boxHeight / 2, x + boxWidth / 2, y + boxHeight / 2);
            boxGradient.addColorStop(0, colors.box);
            boxGradient.addColorStop(0.3, colors.box);
            boxGradient.addColorStop(1, colors.boxDark);
            ctx.fillStyle = boxGradient;
            ctx.beginPath();
            ctx.roundRect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight, cornerRadius);
            ctx.fill();
            // Shine overlay on box
            const shineGradient = ctx.createLinearGradient(x - boxWidth / 2, y - boxHeight / 2, x - boxWidth / 4, y);
            shineGradient.addColorStop(0, "rgba(255, 255, 255, 0.25)");
            shineGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.08)");
            shineGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.fillStyle = shineGradient;
            ctx.beginPath();
            ctx.roundRect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight, cornerRadius);
            ctx.fill();
            // === RIBBON (Vertical) ===
            const ribbonWidth = boxWidth * 0.18;
            const ribbonGradient = ctx.createLinearGradient(x - ribbonWidth / 2, 0, x + ribbonWidth / 2, 0);
            ribbonGradient.addColorStop(0, colors.ribbon);
            ribbonGradient.addColorStop(0.3, colors.ribbonLight);
            ribbonGradient.addColorStop(0.5, colors.ribbon);
            ribbonGradient.addColorStop(0.7, colors.ribbonLight);
            ribbonGradient.addColorStop(1, colors.ribbon);
            ctx.fillStyle = ribbonGradient;
            ctx.fillRect(x - ribbonWidth / 2, y - boxHeight / 2, ribbonWidth, boxHeight);
            // Ribbon on 3D top
            ctx.fillRect(x - ribbonWidth / 2 + depth3D * 0.5, y - boxHeight / 2 - depth3D * 0.4, ribbonWidth, depth3D * 0.5);
            // === RIBBON (Horizontal) ===
            const hRibbonGradient = ctx.createLinearGradient(0, y - ribbonWidth / 2, 0, y + ribbonWidth / 2);
            hRibbonGradient.addColorStop(0, colors.ribbon);
            hRibbonGradient.addColorStop(0.3, colors.ribbonLight);
            hRibbonGradient.addColorStop(0.5, colors.ribbon);
            hRibbonGradient.addColorStop(0.7, colors.ribbonLight);
            hRibbonGradient.addColorStop(1, colors.ribbon);
            ctx.fillStyle = hRibbonGradient;
            ctx.fillRect(x - boxWidth / 2, y - ribbonWidth / 2, boxWidth, ribbonWidth);
            // === ELEGANT BOW ===
            const bowY = y - boxHeight / 2 - lidLift - finalSize * 0.05;
            const bowScale = 1 - lidTilt * 0.5;
            ctx.save();
            ctx.translate(x, bowY);
            ctx.rotate(-lidTilt);
            ctx.translate(-x, -bowY);
            // Bow ribbon tails
            ctx.strokeStyle = colors.ribbon;
            ctx.lineWidth = ribbonWidth * 0.6;
            ctx.lineCap = "round";
            // Left tail
            ctx.beginPath();
            ctx.moveTo(x - finalSize * 0.05, bowY + finalSize * 0.02);
            ctx.quadraticCurveTo(x - finalSize * 0.2, bowY + finalSize * 0.15, x - finalSize * 0.25 * bowScale, bowY + finalSize * 0.25 * bowScale);
            ctx.stroke();
            // Right tail  
            ctx.beginPath();
            ctx.moveTo(x + finalSize * 0.05, bowY + finalSize * 0.02);
            ctx.quadraticCurveTo(x + finalSize * 0.2, bowY + finalSize * 0.15, x + finalSize * 0.25 * bowScale, bowY + finalSize * 0.25 * bowScale);
            ctx.stroke();
            // Bow loops with gradient
            const loopSize = finalSize * 0.18 * bowScale;
            // Left loop
            const leftLoopGrad = ctx.createRadialGradient(x - loopSize * 0.8, bowY, 0, x - loopSize * 0.8, bowY, loopSize);
            leftLoopGrad.addColorStop(0, colors.ribbonLight);
            leftLoopGrad.addColorStop(0.5, colors.ribbon);
            leftLoopGrad.addColorStop(1, colors.ribbon);
            ctx.fillStyle = leftLoopGrad;
            ctx.beginPath();
            ctx.ellipse(x - loopSize * 0.9, bowY, loopSize, loopSize * 0.55, -0.4, 0, Math.PI * 2);
            ctx.fill();
            // Right loop
            const rightLoopGrad = ctx.createRadialGradient(x + loopSize * 0.8, bowY, 0, x + loopSize * 0.8, bowY, loopSize);
            rightLoopGrad.addColorStop(0, colors.ribbonLight);
            rightLoopGrad.addColorStop(0.5, colors.ribbon);
            rightLoopGrad.addColorStop(1, colors.ribbon);
            ctx.fillStyle = rightLoopGrad;
            ctx.beginPath();
            ctx.ellipse(x + loopSize * 0.9, bowY, loopSize, loopSize * 0.55, 0.4, 0, Math.PI * 2);
            ctx.fill();
            // Center knot with highlight
            const knotGrad = ctx.createRadialGradient(x - finalSize * 0.02, bowY - finalSize * 0.02, 0, x, bowY, finalSize * 0.1);
            knotGrad.addColorStop(0, colors.ribbonLight);
            knotGrad.addColorStop(0.7, colors.ribbon);
            knotGrad.addColorStop(1, colors.ribbon);
            ctx.fillStyle = knotGrad;
            ctx.beginPath();
            ctx.ellipse(x, bowY, finalSize * 0.08 * bowScale, finalSize * 0.06 * bowScale, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            // === HOVER INDICATOR (subtle) ===
            if (isHovered && !openAnimation) {
                const pulsePhase = Math.sin(time * 3) * 0.5 + 0.5;
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + pulsePhase * 0.15})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.roundRect(x - boxWidth / 2 - 4, y - boxHeight / 2 - 4, boxWidth + 8, boxHeight + 8, cornerRadius + 3);
                ctx.stroke();
            }
            ctx.restore();
            ctx.globalAlpha = 1;
            // Return hit box for click detection
            return {
                minX: x - boxWidth / 2 - 10,
                maxX: x + boxWidth / 2 + 10,
                minY: y - boxHeight / 2 - finalSize * 0.4 - 10,
                maxY: y + boxHeight / 2 + 10
            };
        };
        // Spawn subtle particles when gift opens
        const spawnParticles = (x, y, count)=>{
            const colors = [
                "#ffd700",
                "#fff8dc",
                "#ffffff"
            ];
            // Small confetti-like particles rising up
            for(let i = 0; i < count; i++){
                const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.2 // Mostly upward
                ;
                const speed = 2 + Math.random() * 3;
                particlesRef.current.push({
                    x: x + (Math.random() - 0.5) * 30,
                    y: y - 10,
                    vx: Math.cos(angle) * speed * 0.5,
                    vy: -2 - Math.random() * 3,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: 2 + Math.random() * 3,
                    life: 1,
                    maxLife: 60 + Math.random() * 40
                });
            }
        };
        // Update and draw particles
        const updateParticles = (ctx)=>{
            particlesRef.current = particlesRef.current.filter((p)=>p.life > 0.01);
            for (const p of particlesRef.current){
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.15; // gravity
                p.vx *= 0.98; // friction
                p.life -= 1 / p.maxLife;
                // Ensure life is positive for rendering
                const lifeValue = Math.max(0.01, p.life);
                const alpha = lifeValue;
                ctx.globalAlpha = alpha;
                // Sparkle effect - ensure radius is always positive
                const sparkle = Math.sin(Date.now() * 0.02 + p.x) * 0.3 + 0.7;
                const particleRadius = Math.max(0.5, p.size * sparkle * lifeValue);
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
                ctx.fill();
                // Glow - ensure radius is always positive
                const glowRadius = Math.max(1, p.size * 2 * lifeValue);
                const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
                glowGradient.addColorStop(0, p.color);
                glowGradient.addColorStop(1, "transparent");
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        };
        // Store projected gift positions for click detection
        let projectedGifts = [];
        // Mouse/Touch handlers for 360 rotation
        const handleMouseDown = (e)=>{
            // Check if clicking on a gift
            const clickedGift = projectedGifts.find((g)=>{
                const { hitBox } = g;
                return e.clientX >= hitBox.minX && e.clientX <= hitBox.maxX && e.clientY >= hitBox.minY && e.clientY <= hitBox.maxY && zoomRef.current >= g.gift.zoomThreshold && !g.gift.isOpened;
            });
            if (clickedGift) {
                // Open the gift!
                clickedGift.gift.isOpened = true;
                spawnParticles(clickedGift.proj.x, clickedGift.proj.y, 15);
                // Clear previous timeout if clicking another gift quickly
                if (wishTimeoutRef.current) {
                    clearTimeout(wishTimeoutRef.current);
                }
                // Show wish with animation
                setActiveWish({
                    text: WISHES[clickedGift.gift.wishIndex],
                    x: clickedGift.proj.x,
                    y: clickedGift.proj.y
                });
                setShowWish(true);
                // Hide wish after 3.5 seconds, allowing click on other gifts
                wishTimeoutRef.current = setTimeout(()=>{
                    setShowWish(false);
                }, 3500);
                return;
            }
            isDraggingRef.current = true;
            lastMouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            autoRotateRef.current = false;
        };
        const handleMouseMove = (e)=>{
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            // Check hover on gifts
            const hoveredGift = projectedGifts.findIndex((g)=>{
                const { hitBox } = g;
                return e.clientX >= hitBox.minX && e.clientX <= hitBox.maxX && e.clientY >= hitBox.minY && e.clientY <= hitBox.maxY && zoomRef.current >= g.gift.zoomThreshold && !g.gift.isOpened;
            });
            hoveredGiftRef.current = hoveredGift >= 0 ? hoveredGift : null;
            // Update cursor
            canvas.style.cursor = hoveredGift >= 0 ? "pointer" : isDraggingRef.current ? "grabbing" : "grab";
            if (!isDraggingRef.current) return;
            const deltaX = e.clientX - lastMouseRef.current.x;
            const deltaY = e.clientY - lastMouseRef.current.y;
            rotationRef.current -= deltaX * 0.005;
            rotationXRef.current -= deltaY * 0.005;
            rotationXRef.current = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotationXRef.current));
            lastMouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        const handleMouseUp = ()=>{
            isDraggingRef.current = false;
            setTimeout(()=>{
                if (!isDraggingRef.current) {
                    autoRotateRef.current = true;
                }
            }, 2000);
        };
        const handleWheel = (e)=>{
            e.preventDefault();
            // Momentum: 1 scroll tick = 7x effect
            const MOMENTUM_MULTIPLIER = 7;
            const ZOOM_STEP = 0.1 * MOMENTUM_MULTIPLIER // 0.7 per scroll
            ;
            const EXPLODE_STEP = 0.05 * MOMENTUM_MULTIPLIER // 0.35 per scroll
            ;
            // Scroll UP = zoom IN + explode
            // Scroll DOWN = zoom OUT back to default
            const scrollingUp = e.deltaY < 0;
            if (scrollingUp) {
                // Zoom in + explode (with momentum)
                targetZoomRef.current = Math.min(3, targetZoomRef.current + ZOOM_STEP);
                targetExplodeRef.current = Math.min(1, targetExplodeRef.current + EXPLODE_STEP);
            } else {
                // Zoom out + implode back to default (with momentum)
                // Can't go smaller than default (zoom = 1, explode = 0)
                targetZoomRef.current = Math.max(1, targetZoomRef.current - ZOOM_STEP);
                targetExplodeRef.current = Math.max(0, targetExplodeRef.current - EXPLODE_STEP);
            }
        };
        // Touch handlers
        const handleTouchStart = (e)=>{
            if (e.touches.length === 1) {
                isDraggingRef.current = true;
                lastMouseRef.current = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                };
                autoRotateRef.current = false;
            }
        };
        const handleTouchMove = (e)=>{
            if (!isDraggingRef.current || e.touches.length !== 1) return;
            const deltaX = e.touches[0].clientX - lastMouseRef.current.x;
            const deltaY = e.touches[0].clientY - lastMouseRef.current.y;
            // Inverted direction for more natural feel
            rotationRef.current -= deltaX * 0.005;
            rotationXRef.current -= deltaY * 0.005;
            rotationXRef.current = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotationXRef.current));
            lastMouseRef.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        };
        const handleTouchEnd = ()=>{
            isDraggingRef.current = false;
            setTimeout(()=>{
                if (!isDraggingRef.current) {
                    autoRotateRef.current = true;
                }
            }, 2000);
        };
        // Add event listeners
        canvas.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("wheel", handleWheel, {
            passive: false
        });
        canvas.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);
        // Animation loop
        const animate = ()=>{
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            // Clear with dark background
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            // Draw stars
            ctx.fillStyle = "#333";
            for (const star of stars){
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            // Auto-rotate if enabled
            if (autoRotateRef.current) {
                rotationRef.current += 0.003;
            }
            // Smooth momentum animation: interpolate toward target values
            const LERP_SPEED = 0.08;
            zoomRef.current += (targetZoomRef.current - zoomRef.current) * LERP_SPEED;
            explodeFactorRef.current += (targetExplodeRef.current - explodeFactorRef.current) * LERP_SPEED;
            hoverOffset = Math.sin(Date.now() * 0.001) * 10;
            // Update sphere positions based on explode factor
            const explodeFactor = explodeFactorRef.current;
            const explodeDistance = 800 // Maximum explode distance
            ;
            for (const sphere of spheres){
                // Interpolate between original position and exploded position
                sphere.x = sphere.origX + sphere.explodeX * explodeDistance * explodeFactor;
                sphere.y = sphere.origY + sphere.explodeY * explodeDistance * explodeFactor;
                sphere.z = sphere.origZ + sphere.explodeZ * explodeDistance * explodeFactor;
            }
            // Sort spheres by z-depth for proper rendering
            const projected = spheres.map((sphere)=>{
                const proj = project(sphere.x, sphere.y, sphere.z);
                return {
                    ...sphere,
                    ...proj
                };
            });
            projected.sort((a, b)=>a.z - b.z);
            // Calculate alpha based on explode factor (fade out as they explode)
            const sphereAlpha = 1 - explodeFactor * 0.3;
            // Draw spheres (only those visible at current zoom level)
            const currentZoom = zoomRef.current;
            for (const sphere of projected){
                if (sphere.scale > 0.1 && currentZoom >= sphere.zoomThreshold) {
                    const fadeIn = Math.min(1, (currentZoom - sphere.zoomThreshold) * 2 + 0.5);
                    drawSphere(ctx, sphere.x, sphere.y, sphere.size, sphere.color, sphere.scale, sphereAlpha * fadeIn);
                }
            }
            // Update gift box positions and draw them
            projectedGifts = [];
            for(let i = 0; i < giftBoxes.length; i++){
                const gift = giftBoxes[i];
                // Update position based on explode factor
                gift.x = gift.origX + gift.origX / 100 * explodeDistance * explodeFactor * 0.3;
                gift.y = gift.origY + (gift.origY / TREE_HEIGHT - 0.5) * explodeDistance * explodeFactor * 0.3;
                gift.z = gift.origZ + gift.origZ / 100 * explodeDistance * explodeFactor * 0.3;
                // Update open animation
                if (gift.isOpened && gift.openAnimation < 1) {
                    gift.openAnimation += 0.05;
                }
                const proj = project(gift.x, gift.y, gift.z);
                // Only draw if visible at current zoom
                if (currentZoom >= gift.zoomThreshold && proj.scale > 0.1) {
                    const fadeIn = Math.min(1, (currentZoom - gift.zoomThreshold) * 3);
                    const isHovered = hoveredGiftRef.current === i;
                    const hitBox = drawGiftBox(ctx, proj.x, proj.y, gift.size, proj.scale, gift.colorIndex, isHovered, gift.openAnimation, gift.floatOffset, gift.sparklePhase, fadeIn * (1 - explodeFactor * 0.5));
                    projectedGifts.push({
                        gift,
                        proj,
                        hitBox
                    });
                }
            }
            // Draw particles
            updateParticles(ctx);
            // Draw star (also affected by explode)
            const starExplodeY = explodeFactor * 200;
            const starPos = project(0, TREE_HEIGHT + 40 + starExplodeY, 0);
            const starAlpha = 1 - explodeFactor * 0.5;
            drawStar(ctx, starPos.x, starPos.y, 40 * starPos.scale, 18 * starPos.scale, 5, starAlpha);
            // Vignette overlay
            const vignette = ctx.createRadialGradient(window.innerWidth / 2, window.innerHeight / 2, 0, window.innerWidth / 2, window.innerHeight / 2, window.innerWidth * 0.7);
            vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
            vignette.addColorStop(1, "rgba(0, 0, 0, 0.4)");
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            animationId = requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("wheel", handleWheel);
            canvas.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
            if (wishTimeoutRef.current) {
                clearTimeout(wishTimeoutRef.current);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen w-full overflow-hidden bg-[#050505]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 cursor-grab active:cursor-grabbing"
            }, void 0, false, {
                fileName: "[project]/components/christmas-tree-hero.tsx",
                lineNumber: 942,
                columnNumber: 7
            }, this),
            activeWish && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute z-30",
                style: {
                    left: activeWish.x,
                    top: activeWish.y,
                    transform: "translate(-50%, -50%)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `transition-all duration-700 ease-out ${showWish ? "opacity-100 translate-y-[-120px] scale-100" : "opacity-0 translate-y-0 scale-75"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-2xl border border-white/20 bg-gray-900/95 px-6 py-5 shadow-xl backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/christmas-tree-hero.tsx",
                                lineNumber: 965,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-xs text-center text-base font-light leading-relaxed text-white/90",
                                children: activeWish.text
                            }, void 0, false, {
                                fileName: "[project]/components/christmas-tree-hero.tsx",
                                lineNumber: 968,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/christmas-tree-hero.tsx",
                                lineNumber: 973,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-2 left-1/2 -translate-x-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-0 w-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-900/95"
                                }, void 0, false, {
                                    fileName: "[project]/components/christmas-tree-hero.tsx",
                                    lineNumber: 977,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/christmas-tree-hero.tsx",
                                lineNumber: 976,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/christmas-tree-hero.tsx",
                        lineNumber: 962,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/christmas-tree-hero.tsx",
                    lineNumber: 954,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/christmas-tree-hero.tsx",
                lineNumber: 946,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-16 z-10 flex flex-col items-center justify-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extralight tracking-[0.4em] text-white/90 sm:text-5xl md:text-6xl",
                        style: {
                            fontFamily: "system-ui, -apple-system, sans-serif"
                        },
                        children: "CHRISTMAS"
                    }, void 0, false, {
                        fileName: "[project]/components/christmas-tree-hero.tsx",
                        lineNumber: 987,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm font-light tracking-[0.3em] text-white/50 sm:text-base",
                        style: {
                            fontFamily: "system-ui, -apple-system, sans-serif"
                        },
                        children: "2025"
                    }, void 0, false, {
                        fileName: "[project]/components/christmas-tree-hero.tsx",
                        lineNumber: 993,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/christmas-tree-hero.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/christmas-tree-hero.tsx",
        lineNumber: 941,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__547ad054._.js.map