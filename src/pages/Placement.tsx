
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { companies, type Company } from "@/data/companies";
import { Building, FileText, ArrowRight, ChevronLeft, Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Placement = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [openQuestionPaper, setOpenQuestionPaper] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<{title: string, year: string} | null>(null);

  const handleOpenQuestionPaper = (title: string, year: string) => {
    setSelectedPaper({ title, year });
    setOpenQuestionPaper(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {!selectedCompany ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-12">
                Placement Preparation
              </h1>
              <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                Explore company-specific preparation resources, interview patterns, and question papers to help you ace your placement interviews.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {companies.map((company) => (
                  <Card 
                    key={company.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow border-gray-200"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <CardHeader className="p-4 space-y-2">
                      <div className="w-full h-20 flex items-center justify-center mb-2">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            // Fallback if image fails to load
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=' + company.name;
                          }}
                        />
                      </div>
                      <CardTitle className="text-center text-lg">{company.name}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedCompany(null)}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                <h2 className="text-3xl font-bold">{selectedCompany.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        Company Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-6">
                        <img 
                          src={selectedCompany.logo} 
                          alt={selectedCompany.name}
                          className="max-w-[180px] max-h-[100px] object-contain"
                          onError={(e) => {
                            // Fallback if image fails to load
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=' + selectedCompany.name;
                          }}
                        />
                      </div>
                      <p className="text-gray-700">
                        {selectedCompany.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2">
                  <Tabs defaultValue="interview-pattern" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="interview-pattern">Interview Pattern</TabsTrigger>
                      <TabsTrigger value="question-papers">Question Papers</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="interview-pattern" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Building className="h-5 w-5" />
                            Interview Pattern
                          </CardTitle>
                          <CardDescription>
                            Typical interview process for {selectedCompany.name}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ol className="space-y-6">
                            {selectedCompany.interviewPattern.map((step, index) => (
                              <li key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                                  {index + 1}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-lg">{step}</h3>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="question-papers" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Previous Question Papers
                          </CardTitle>
                          <CardDescription>
                            Sample question papers from previous years
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {selectedCompany.questionPapers.map((paper, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                className="w-full justify-between"
                                onClick={() => handleOpenQuestionPaper(paper.title, paper.year)}
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
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Dialog open={openQuestionPaper} onOpenChange={setOpenQuestionPaper}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedPaper?.title} ({selectedPaper?.year})</DialogTitle>
            <DialogDescription>
              This is a sample of questions that appeared in this paper.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-gray-500">
              This is a preview of the question paper. Complete question papers with solutions 
              are available for enrolled students.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Question 1:</p>
                <p className="text-sm text-gray-600">What is the time complexity of binary search algorithm?</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Question 2:</p>
                <p className="text-sm text-gray-600">Explain the difference between process and thread.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Question 3:</p>
                <p className="text-sm text-gray-600">Write a program to reverse a linked list.</p>
              </div>
            </div>
            <Button className="w-full mt-4">
              Access Full Question Paper
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Placement;
