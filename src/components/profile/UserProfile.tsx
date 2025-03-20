
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Briefcase, GraduationCap } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/contexts/AuthContext";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { formatDate } from "@/lib/utils";

export const UserProfile = () => {
  const { user } = useAuth();
  const { profile, isLoading } = useProfile();
  const { allProgress, isLoadingProgress } = useCourseProgress();
  
  // Calculate course completion stats
  const totalCourses = allProgress?.length || 0;
  const completedCourses = allProgress?.filter(course => course.completed)?.length || 0;
  const courseCompletionPercentage = totalCourses > 0 ? (completedCourses / totalCourses) * 100 : 0;
  
  // Calculate quiz completion stats
  const quizAttempts = allProgress?.length || 0;
  const quizPassed = allProgress?.filter(course => course.progress >= 70)?.length || 0;
  const quizCompletionPercentage = quizAttempts > 0 ? (quizPassed / quizAttempts) * 100 : 0;

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile?.avatar_url || ""} alt={profile?.full_name || "User"} />
              <AvatarFallback className="text-2xl">
                {profile?.full_name 
                  ? profile.full_name.split(" ").map(n => n[0]).join("") 
                  : user?.email?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-4 text-center sm:text-left flex-1">
              <div>
                <h3 className="text-xl font-semibold">{profile?.full_name || "User"}</h3>
                <p className="text-muted-foreground">{user?.email}</p>
                {profile?.bio && <p className="mt-2 text-sm">{profile.bio}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p>Student</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Joined</p>
                  <p>{new Date(user?.created_at || Date.now()).toLocaleDateString()}</p>
                </div>
              </div>
              
              {profile?.skills && profile.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              )}
              
              <Button variant="outline" size="sm" className="gap-1">
                <Pencil className="h-3.5 w-3.5" />
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Learning Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Courses Completed</span>
                <span className="text-sm font-medium">{completedCourses}/{totalCourses}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${courseCompletionPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Quizzes Completed</span>
                <span className="text-sm font-medium">{quizPassed}/{quizAttempts}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${quizCompletionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" /> Education
          </TabsTrigger>
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" /> Experience
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="education" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              {profile?.education && profile.education.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Institution</TableHead>
                      <TableHead>Degree</TableHead>
                      <TableHead className="hidden md:table-cell">Field</TableHead>
                      <TableHead className="hidden md:table-cell">Period</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profile.education.map((edu, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{edu.institution}</TableCell>
                        <TableCell>{edu.degree}</TableCell>
                        <TableCell className="hidden md:table-cell">{edu.field}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  No education history added yet.
                </div>
              )}
              <Button variant="outline" size="sm" className="mt-4 gap-1">
                <Pencil className="h-3.5 w-3.5" />
                Add Education
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" /> Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              {profile?.experience && profile.experience.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead className="hidden md:table-cell">Period</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profile.experience.map((exp, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{exp.company}</TableCell>
                        <TableCell>{exp.position}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  No work experience added yet.
                </div>
              )}
              <Button variant="outline" size="sm" className="mt-4 gap-1">
                <Pencil className="h-3.5 w-3.5" />
                Add Experience
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
