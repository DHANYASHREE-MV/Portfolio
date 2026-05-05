import React from "react";
import { profileData } from "../data/mockData";

const Certifications = () => {
    const certifications = profileData?.certifications || [];

    return (
        <section
            id="certifications"
            className="py-20 px-6 bg-[#020c1b] text-white"
        >
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-10 text-teal-300">
                    Certifications
                </h2>

                {/* Safety check */}
                {certifications.length === 0 ? (
                    <p className="text-center text-gray-400">
                        No certifications available
                    </p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">

                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-[#112240] p-5 rounded-xl border border-gray-700 hover:border-teal-400 transition"
                            >
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white">
                                    {cert.name || "No Title"}
                                </h3>

                                {/* Issuer */}
                                <p className="text-sm text-gray-400 mb-2">
                                    {cert.issuer || "Unknown"}
                                </p>

                                {/* Tags */}
                                {cert.tags && (
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {cert.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded bg-[#0a192f] border border-gray-600 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Details */}
                                {cert.details && (
                                    <ul className="text-sm text-gray-300 list-disc ml-4">
                                        {cert.details.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;