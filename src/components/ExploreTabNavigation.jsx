import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const ExploreTabNavigation = () => {
  const [activeTab, setActiveTab] = useState("docs");

  const tabs = [
    {
      id: "docs",
      label: "Docs",
      content: {
        title: "Travel Documents & Visas",
        description: "Essential information about passports, visas, and travel documentation requirements.",
        items: [
          "Check passport validity (6+ months remaining)",
          "Research visa requirements for your destination",
          "Consider travel insurance coverage",
          "Keep digital copies of important documents",
          "Register with your embassy if traveling long-term"
        ]
      }
    },
    {
      id: "culture",
      label: "Culture",
      content: {
        title: "Cultural Insights & Etiquette",
        description: "Learn about local customs, traditions, and social norms to enhance your travel experience.",
        items: [
          "Research local customs and traditions",
          "Learn basic phrases in the local language",
          "Understand dress codes and social etiquette",
          "Respect religious sites and practices",
          "Be aware of tipping customs and business hours"
        ]
      }
    },
    {
      id: "safety",
      label: "Safety",
      content: {
        title: "Travel Safety & Security",
        description: "Stay informed about safety conditions and take necessary precautions for a secure trip.",
        items: [
          "Check government travel advisories",
          "Research common scams and safety concerns",
          "Share your itinerary with trusted contacts",
          "Keep emergency contacts readily available",
          "Stay aware of your surroundings and trust your instincts"
        ]
      }
    },
    {
      id: "health",
      label: "Health",
      content: {
        title: "Health & Medical Preparation",
        description: "Ensure you're prepared for health requirements and medical needs while traveling.",
        items: [
          "Check required vaccinations and health certificates",
          "Pack a comprehensive first-aid kit",
          "Research local healthcare facilities",
          "Consider travel health insurance",
          "Bring prescription medications with proper documentation"
        ]
      }
    },
    {
      id: "money",
      label: "Money",
      content: {
        title: "Currency & Financial Planning",
        description: "Manage your finances effectively and understand local currency and payment methods.",
        items: [
          "Research local currency and exchange rates",
          "Notify banks of your travel plans",
          "Understand local payment methods and tipping culture",
          "Keep multiple payment options available",
          "Budget for unexpected expenses and emergencies"
        ]
      }
    },
    {
      id: "connectivity",
      label: "Connectivity",
      content: {
        title: "Internet & Communication",
        description: "Stay connected with reliable internet and communication options while abroad.",
        items: [
          "Research local SIM card options and data plans",
          "Consider international roaming packages",
          "Download offline maps and translation apps",
          "Identify WiFi hotspots and internet cafes",
          "Backup important contacts and information offline"
        ]
      }
    },
    {
      id: "adaptation",
      label: "Adaptation",
      content: {
        title: "Cultural Adaptation & Integration",
        description: "Tips for adapting to new environments and making the most of your cultural experience.",
        items: [
          "Be open-minded and embrace new experiences",
          "Connect with locals and fellow travelers",
          "Try local cuisine and participate in cultural activities",
          "Learn from cultural differences and challenges",
          "Keep a travel journal to document your experiences"
        ]
      }
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-travel-orange text-white shadow-lg"
                : "text-travel-orange bg-transparent border border-travel-orange hover:bg-travel-orange/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      {activeTab && activeTabContent && (
        <Card className="mb-8 overflow-hidden border-0 shadow-lg bg-gradient-to-br from-background to-muted animate-in slide-in-from-top-2 duration-300">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {activeTabContent.content.title}
                </h3>
                <p className="text-muted-foreground">
                  {activeTabContent.content.description}
                </p>
              </div>
              <button
                onClick={() => setActiveTab(null)}
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {activeTabContent.content.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-travel-orange mt-2 flex-shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ExploreTabNavigation;