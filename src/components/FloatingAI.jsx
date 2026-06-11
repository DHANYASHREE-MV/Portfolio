import { motion } from "framer-motion";

const words = [
    "LangGraph",
    "LangChain",
    "RAG",
    "LLM",
    "Transformers",
    "YOLOv11",
    "MLOps",
    "FastAPI",
    "Agents",
    "Vector DB",
    "PyTorch",
    "TensorFlow",
    "OpenAI",
    "Embeddings",
    "Prompt Engineering",
    "Computer Vision",
    "NLP",
    "Fine Tuning",
    "Hugging Face",
    "PostgreSQL",
    "AI Agents",
    "Neural Networks",
    "CNN",
    "RNN",
    "LSTM",
    "Random Forest",
    "XGBoost",
    "EDA",
    "Generative AI",
    "Scikit-learn",
    "Docker",
    "Kubernetes",
    "CI/CD",
];

const formulas = [
    "y = Wx + b",
    "softmax(x)",
    "σ(x)=1/(1+e⁻ˣ)",
    "Attention(Q,K,V)",
    "argmax P(y|x)",
    "L = -(y log(p))",
    "∇θJ(θ)",
    "f(x)=max(0,x)",
    "cos(θ)",
    "sin(θ)",
    "P(A|B)",
    "R² = 1-SSres/SStot",
    "MSE=(1/n)Σ(y-ŷ)²",
    "Precision=TP/(TP+FP)",
    "Recall=TP/(TP+FN)",
    "F1=2PR/(P+R)",
    "TF-IDF",
    "CrossEntropy",
    "KL Divergence",
    "∂L/∂W",
    "Gradient Descent",
    "Backpropagation",
    "λΣw²",
];

export default function FloatingAI() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* AI Terms */}
            {words.map((word, index) => (
                <motion.div
                    key={`word-${index}`}
                    className="absolute text-white/45 font-mono select-none"
                    style={{
                        top: `${5 + ((index * 11) % 85)}%`,
                        left: `${3 + ((index * 13) % 90)}%`,
                        fontSize: `${14 + (index % 4) * 4}px`,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{
                        duration: 4 + (index % 5),
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {word}
                </motion.div>
            ))}

            {/* ML Formulas */}
            {formulas.map((formula, index) => (
                <motion.div
                    key={`formula-${index}`}
                    className="absolute text-magenta/45 font-mono select-none"
                    style={{
                        top: `${8 + ((index * 17) % 80)}%`,
                        left: `${10 + ((index * 19) % 75)}%`,
                        fontSize: `${12 + (index % 3) * 3}px`,
                    }}
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 5 + (index % 4),
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {formula}
                </motion.div>
            ))}

        </div>
    );
}