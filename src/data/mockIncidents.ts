// src/data/mockIncidents.ts
import { Incident } from "../types/incident.types";

export const mockIncidents: Incident[] = [
  {
    id: "1",
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T100000Z",
    isExpanded: false
  },
  {
    id: "2",
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T143000Z",
    isExpanded: false
  },
  {
    id: "3",
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T091500Z",
    isExpanded: false
  },
  {
    id: "4",
    title: "Unintended Model Bias in Hiring Tool",
    description: "AI hiring tool showed bias against candidates from certain universities...",
    severity: "High",
    reported_at: "2025-03-28T110000Z",
    isExpanded: false
  },
  {
    id: "5",
    title: "Incorrect Sentiment Analysis for Reviews",
    description: "Sentiment analysis model mislabeled neutral reviews as negative...",
    severity: "Medium",
    reported_at: "2025-04-03T083000Z",
    isExpanded: false
  },
  {
    id: "6",
    title: "Inconsistent Language Translation Output",
    description: "Translation model returned inaccurate results for lesser-known dialects...",
    severity: "Low",
    reported_at: "2025-03-22T153000Z",
    isExpanded: false
  },
  {
    id: "7",
    title: "Voice Assistant Privacy Concern",
    description: "Assistant accidentally recorded and stored background conversations...",
    severity: "High",
    reported_at: "2025-03-30T174500Z",
    isExpanded: false
  },
  {
    id: "8",
    title: "Autonomous Vehicle Navigation Error",
    description: "Self-driving algorithm failed to correctly identify temporary road signs...",
    severity: "High",
    reported_at: "2025-04-05T070000Z",
    isExpanded: false
  },
  {
    id: "9",
    title: "Fake Content Detection Misses Deepfakes",
    description: "Deepfake detection system failed to flag manipulated media...",
    severity: "High",
    reported_at: "2025-04-02T123000Z",
    isExpanded: false
  },
  {
    id: "10",
    title: "Ad Targeting Model Misclassification",
    description: "Targeting algorithm delivered irrelevant ads to wrong demographics...",
    severity: "Medium",
    reported_at: "2025-03-27T140000Z",
    isExpanded: false
  }
];
