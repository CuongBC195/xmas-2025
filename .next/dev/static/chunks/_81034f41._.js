(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/christmas-tree-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChristmasTreeHero",
    ()=>ChristmasTreeHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const BASE_SPHERE_COUNT = 1900 // Spheres visible at default zoom
;
const MAX_SPHERE_COUNT = 5000 // Total spheres (revealed when zooming in)
;
const TREE_HEIGHT = 750;
const BASE_RADIUS = 280;
function ChristmasTreeHero() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rotationXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const zoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const explodeFactorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const autoRotateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const targetZoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const targetExplodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChristmasTreeHero.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationId;
            let hoverOffset = 0;
            const resize = {
                "ChristmasTreeHero.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth * window.devicePixelRatio;
                    canvas.height = window.innerHeight * window.devicePixelRatio;
                    canvas.style.width = `${window.innerWidth}px`;
                    canvas.style.height = `${window.innerHeight}px`;
                    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                }
            }["ChristmasTreeHero.useEffect.resize"];
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
            const project = {
                "ChristmasTreeHero.useEffect.project": (x, y, z)=>{
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
                }
            }["ChristmasTreeHero.useEffect.project"];
            const drawSphere = {
                "ChristmasTreeHero.useEffect.drawSphere": (ctx, x, y, size, color, scale, alpha = 1)=>{
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
                }
            }["ChristmasTreeHero.useEffect.drawSphere"];
            const drawStar = {
                "ChristmasTreeHero.useEffect.drawStar": (ctx, cx, cy, outerRadius, innerRadius, points, alpha = 1)=>{
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
                }
            }["ChristmasTreeHero.useEffect.drawStar"];
            // Mouse/Touch handlers for 360 rotation
            const handleMouseDown = {
                "ChristmasTreeHero.useEffect.handleMouseDown": (e)=>{
                    isDraggingRef.current = true;
                    lastMouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    autoRotateRef.current = false;
                }
            }["ChristmasTreeHero.useEffect.handleMouseDown"];
            const handleMouseMove = {
                "ChristmasTreeHero.useEffect.handleMouseMove": (e)=>{
                    if (!isDraggingRef.current) return;
                    const deltaX = e.clientX - lastMouseRef.current.x;
                    const deltaY = e.clientY - lastMouseRef.current.y;
                    // Inverted direction for more natural feel
                    rotationRef.current -= deltaX * 0.005;
                    rotationXRef.current -= deltaY * 0.005;
                    // Clamp vertical rotation
                    rotationXRef.current = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotationXRef.current));
                    lastMouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["ChristmasTreeHero.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "ChristmasTreeHero.useEffect.handleMouseUp": ()=>{
                    isDraggingRef.current = false;
                    // Resume auto-rotate after 2 seconds of no interaction
                    setTimeout({
                        "ChristmasTreeHero.useEffect.handleMouseUp": ()=>{
                            if (!isDraggingRef.current) {
                                autoRotateRef.current = true;
                            }
                        }
                    }["ChristmasTreeHero.useEffect.handleMouseUp"], 2000);
                }
            }["ChristmasTreeHero.useEffect.handleMouseUp"];
            const handleWheel = {
                "ChristmasTreeHero.useEffect.handleWheel": (e)=>{
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
                }
            }["ChristmasTreeHero.useEffect.handleWheel"];
            // Touch handlers
            const handleTouchStart = {
                "ChristmasTreeHero.useEffect.handleTouchStart": (e)=>{
                    if (e.touches.length === 1) {
                        isDraggingRef.current = true;
                        lastMouseRef.current = {
                            x: e.touches[0].clientX,
                            y: e.touches[0].clientY
                        };
                        autoRotateRef.current = false;
                    }
                }
            }["ChristmasTreeHero.useEffect.handleTouchStart"];
            const handleTouchMove = {
                "ChristmasTreeHero.useEffect.handleTouchMove": (e)=>{
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
                }
            }["ChristmasTreeHero.useEffect.handleTouchMove"];
            const handleTouchEnd = {
                "ChristmasTreeHero.useEffect.handleTouchEnd": ()=>{
                    isDraggingRef.current = false;
                    setTimeout({
                        "ChristmasTreeHero.useEffect.handleTouchEnd": ()=>{
                            if (!isDraggingRef.current) {
                                autoRotateRef.current = true;
                            }
                        }
                    }["ChristmasTreeHero.useEffect.handleTouchEnd"], 2000);
                }
            }["ChristmasTreeHero.useEffect.handleTouchEnd"];
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
            const animate = {
                "ChristmasTreeHero.useEffect.animate": ()=>{
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
                    const projected = spheres.map({
                        "ChristmasTreeHero.useEffect.animate.projected": (sphere)=>{
                            const proj = project(sphere.x, sphere.y, sphere.z);
                            return {
                                ...sphere,
                                ...proj
                            };
                        }
                    }["ChristmasTreeHero.useEffect.animate.projected"]);
                    projected.sort({
                        "ChristmasTreeHero.useEffect.animate": (a, b)=>a.z - b.z
                    }["ChristmasTreeHero.useEffect.animate"]);
                    // Calculate alpha based on explode factor (fade out as they explode)
                    const sphereAlpha = 1 - explodeFactor * 0.3;
                    // Draw spheres (only those visible at current zoom level)
                    const currentZoom = zoomRef.current;
                    for (const sphere of projected){
                        if (sphere.scale > 0.1 && currentZoom >= sphere.zoomThreshold) {
                            // Fade in spheres as they become visible
                            const fadeIn = Math.min(1, (currentZoom - sphere.zoomThreshold) * 2 + 0.5);
                            drawSphere(ctx, sphere.x, sphere.y, sphere.size, sphere.color, sphere.scale, sphereAlpha * fadeIn);
                        }
                    }
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
                }
            }["ChristmasTreeHero.useEffect.animate"];
            animate();
            return ({
                "ChristmasTreeHero.useEffect": ()=>{
                    cancelAnimationFrame(animationId);
                    window.removeEventListener("resize", resize);
                    canvas.removeEventListener("mousedown", handleMouseDown);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                    canvas.removeEventListener("wheel", handleWheel);
                    canvas.removeEventListener("touchstart", handleTouchStart);
                    window.removeEventListener("touchmove", handleTouchMove);
                    window.removeEventListener("touchend", handleTouchEnd);
                }
            })["ChristmasTreeHero.useEffect"];
        }
    }["ChristmasTreeHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen w-full overflow-hidden bg-[#050505]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 cursor-grab active:cursor-grabbing"
            }, void 0, false, {
                fileName: "[project]/components/christmas-tree-hero.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute top-6 right-6 z-20 text-right text-[10px] font-light tracking-wider text-white/30",
                children: [
                    "DRAG TO ROTATE",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/christmas-tree-hero.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    "SCROLL ↑ EXPLODE",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/christmas-tree-hero.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this),
                    "SCROLL ↓ REFORM"
                ]
            }, void 0, true, {
                fileName: "[project]/components/christmas-tree-hero.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-16 z-10 flex flex-col items-center justify-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extralight tracking-[0.4em] text-white/90 sm:text-5xl md:text-6xl",
                        style: {
                            fontFamily: "system-ui, -apple-system, sans-serif"
                        },
                        children: "CHRISTMAS"
                    }, void 0, false, {
                        fileName: "[project]/components/christmas-tree-hero.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm font-light tracking-[0.3em] text-white/50 sm:text-base",
                        style: {
                            fontFamily: "system-ui, -apple-system, sans-serif"
                        },
                        children: "2025"
                    }, void 0, false, {
                        fileName: "[project]/components/christmas-tree-hero.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/christmas-tree-hero.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/christmas-tree-hero.tsx",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
_s(ChristmasTreeHero, "t5Ipdq6GVW7b5n9yoHaYdfogUPg=");
_c = ChristmasTreeHero;
var _c;
__turbopack_context__.k.register(_c, "ChristmasTreeHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_81034f41._.js.map