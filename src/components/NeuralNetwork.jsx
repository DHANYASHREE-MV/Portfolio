import { motion } from "framer-motion";

const nodes = [
    { x: 20, y: 20 },
    { x: 50, y: 10 },
    { x: 80, y: 25 },
    { x: 30, y: 60 },
    { x: 70, y: 70 },
    { x: 50, y: 90 },
];

export default function NeuralNetwork() {
    return (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                {nodes.map((node, i) =>
                    nodes.slice(i + 1).map((target, j) => (
                        <line
                            key={`${i}-${j}`}
                            x1={node.x}
                            y1={node.y}
                            x2={target.x}
                            y2={target.y}
                            stroke="#910A67"
                            strokeWidth="0.2"
                        />
                    ))
                )}

                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.x}
                        cy={node.y}
                        r="1"
                        fill="#EC4899"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}