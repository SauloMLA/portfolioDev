import { chatbotKnowledge, type ChatbotFAQ } from "@/content/chatbot-knowledge";
import type { Locale } from "@/lib/i18n/types";

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents/diacritics
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¿¡]/g, "") // Remove punctuation
    .trim();
}

export type MatchResult = {
  answer: string;
  category: ChatbotFAQ["category"] | "fallback";
  relatedProjects: string[]; // project slugs to suggest
  isFallback: boolean;
};

export function matchChatbotQuery(query: string, locale: Locale): MatchResult {
  const content = chatbotKnowledge[locale] || chatbotKnowledge.es;
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  if (queryWords.length === 0) {
    return {
      answer: content.welcomeMessage,
      category: "general",
      relatedProjects: [],
      isFallback: false,
    };
  }

  let bestMatch: ChatbotFAQ | null = null;
  let bestScore = 0;

  for (const faq of content.faqs) {
    let score = 0;
    
    // Check direct matches of full keywords
    for (const keyword of faq.keywords) {
      const normalizedKeyword = normalizeText(keyword);
      
      // Exact match gets very high score
      if (normalizedQuery === normalizedKeyword) {
        score += 10;
      }
      // Substring match gets medium score
      else if (normalizedQuery.includes(normalizedKeyword)) {
        score += 3;
      }
      
      // Word-by-word matches
      const keywordWords = normalizedKeyword.split(/\s+/);
      for (const word of keywordWords) {
        if (queryWords.includes(word)) {
          score += 1;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  // If we found a good match (score >= 1)
  if (bestMatch && bestScore >= 1) {
    return {
      answer: bestMatch.answer,
      category: bestMatch.category,
      relatedProjects: bestMatch.relatedProjects || [],
      isFallback: false,
    };
  }

  // Fallback response as requested
  return {
    answer: content.fallbackMessage,
    category: "fallback",
    relatedProjects: [],
    isFallback: true,
  };
}
