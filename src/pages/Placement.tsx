
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { companies, type Company } from "@/data/companies";
import { Building, FileText, ArrowRight } from "lucide-react";

const Placement = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {!selectedCompany ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-12">
                Placement Preparation
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companies.map((company) => (
                  <Card 
                    key={company.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <CardHeader className="space-y-4">
                      <div className="w-24 h-24 mx-auto">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <CardTitle className="text-center">{company.name}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedCompany(null)}
                >
                  Back to Companies
                </Button>
                <h2 className="text-3xl font-bold">{selectedCompany.name}</h2>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Interview Pattern
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {selectedCompany.interviewPattern.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Previous Question Papers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedCompany.questionPapers.map((paper, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-between"
                      >
                        <span>
                          {paper.title} ({paper.year})
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Placement;
