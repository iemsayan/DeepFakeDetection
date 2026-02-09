export const projects = [
    {
        title: "Image Deepfake Detection System",
        description: [
            "Designed an end-to-end deepfake detection pipeline focused on facial manipulation artifacts",
            "Implemented face detection and cropping using RetinaFace to improve signal-to-noise ratio",
            "Trained a ConvNeXt-Base model on face-centric data for spatial-domain deepfake detection",
            "Built a FastAPI inference backend for real-time prediction and deployment",
        ],
        tech: [
            "PyTorch",
            "ConvNeXt-Base",
            "RetinaFace",
            "FastAPI",
            "Python",
            "Next.js",
        ],
        link: "https://github.com/nvakumar/deepfake_detection_fastapi",
        featured: true,
    },
    {
        title: "Video Deepfake Detection (In Progress)",
        description: [
            "Researching temporal and frequency-domain artifacts in manipulated videos",
            "Exploring frame-level face extraction and sequence-aware modeling techniques",
            "Planned fusion of spatial and frequency features for improved generalization",
            "Currently under active research and experimentation",
        ],
        tech: [
            "PyTorch",
            "FFT Analysis",
            "CNN + Temporal Modeling",
            "Video Processing",
        ],
        link: "#", // Coming soon
    },
];
