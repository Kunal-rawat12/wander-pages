import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Palette, Shield, Heart, Wallet, Wifi, Users } from "lucide-react";

const TravelTabs = () => {
  const [activeTab, setActiveTab] = useState("");

  const tabsData = [
    {
      id: "docs",
      label: "Docs",
      icon: FileText,
      content: {
        title: "Documentation & Visas",
        description: "Essential documents and visa requirements for international travel.",
        items: [
          "Valid passport with at least 6 months remaining",
          "Visa requirements vary by destination and nationality",
          "Travel insurance documentation",
          "Vaccination certificates (if required)",
          "Emergency contact information"
        ]
      }
    },
    {
      id: "culture",
      label: "Culture",
      icon: Palette,
      content: {
        title: "Cultural Insights",
        description: "Understanding local customs, traditions, and social norms.",
        items: [
          "Local greetings and basic phrases",
          "Dress codes and cultural expectations",
          "Tipping customs and etiquette",
          "Religious and cultural holidays",
          "Business meeting protocols"
        ]
      }
    },
    {
      id: "safety",
      label: "Safety",
      icon: Shield,
      content: {
        title: "Safety & Security",
        description: "Essential safety tips and emergency information for travelers.",
        items: [
          "Emergency contact numbers and embassy information",
          "Common scams and how to avoid them",
          "Safe transportation options",
          "Areas to avoid and travel advisories",
          "Personal security best practices"
        ]
      }
    },
    {
      id: "health",
      label: "Health",
      icon: Heart,
      content: {
        title: "Health & Medical",
        description: "Healthcare information and medical preparation for travel.",
        items: [
          "Required vaccinations and health certificates",
          "Travel health insurance recommendations",
          "Local healthcare system overview",
          "Common health risks and prevention",
          "Emergency medical contacts"
        ]
      }
    },
    {
      id: "money",
      label: "Money",
      icon: Wallet,
      content: {
        title: "Currency & Finance",
        description: "Financial tips, currency exchange, and payment methods.",
        items: [
          "Local currency and exchange rates",
          "Credit card acceptance and fees",
          "ATM availability and banking hours",
          "Typical costs for meals, transport, and activities",
          "Bargaining customs and tipping guidelines"
        ]
      }
    },
    {
      id: "connectivity",
      label: "Connectivity",
      icon: Wifi,
      content: {
        title: "Internet & Communication",
        description: "Stay connected with local SIM cards, WiFi, and communication options.",
        items: [
          "Local SIM card providers and data plans",
          "Free WiFi availability in public areas",
          "International roaming costs",
          "Popular local messaging apps",
          "Internet censorship and VPN requirements"
        ]
      }
    },
    {
      id: "adaptation",
      label: "Adaptation",
      icon: Users,
      content: {
        title: "Local Adaptation",
        description: "Tips for adapting to local lifestyle and making the most of your stay.",
        items: [
          "Public transportation systems and apps",
          "Local food customs and dietary considerations",
          "Shopping hours and local markets",
          "Social customs and meeting locals",
          "Weather patterns and seasonal considerations"
        ]
      }
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? "" : tabId);
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-4 p-1 bg-muted/30 rounded-lg">
        {tabsData.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-travel-orange text-white shadow-md' 
                  : 'text-travel-orange hover:bg-travel-orange/10 hover:text-travel-orange/90'
                }
              `}
            >
              <IconComponent className="h-4 w-4" />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Panel */}
      {activeTab && (
        <Card className="mb-6 shadow-lg border-0 bg-gradient-to-br from-card to-muted/20 animate-accordion-down overflow-hidden">
          <CardContent className="p-6">
            {(() => {
              const activeTabData = tabsData.find(tab => tab.id === activeTab);
              const IconComponent = activeTabData.icon;
              
              return (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-travel-orange/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-travel-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{activeTabData.content.title}</h3>
                      <p className="text-muted-foreground">{activeTabData.content.description}</p>
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeTabData.content.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-travel-orange rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <button
                      onClick={() => setActiveTab("")}
                      className="text-sm text-muted-foreground hover:text-travel-orange transition-colors"
                    >
                      Click to close or select another tab above
                    </button>
                  </div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TravelTabs;