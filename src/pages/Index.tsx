import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  BookOpen, 
  Settings, 
  Layout, 
  Palette, 
  FileText, 
  Code, 
  LayoutTemplate, 
  Menu,
  Tag, 
  Upload, 
  Bot, 
  Image, 
  HelpCircle,
  ExternalLink,
  Play,
  ChevronRight
} from 'lucide-react';
import ImageViewer from '@/components/ui/image-viewer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'core-concepts', label: 'Core Concepts', icon: Layout },
    { id: 'website-manager', label: 'Website Manager', icon: Settings },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'pages', label: 'Pages', icon: FileText },
    { id: 'page-editor', label: 'Page Editor', icon: Code },
    { id: 'templates', label: 'Templates', icon: LayoutTemplate },
    { id: 'template-versioning', label: 'Template Versioning', icon: LayoutTemplate },
    { id: 'menu-manager', label: 'Menu Manager', icon: Menu },
    { id: 'tags-system', label: 'Tags System', icon: Tag },
    { id: 'ftp-deployment', label: 'FTP / Deployment', icon: Upload },
    { id: 'ai-assistant', label: 'AI Content Assistant', icon: Bot },
    { id: 'media-manager', label: 'Media Manager', icon: Image },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: HelpCircle },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="#">
              <img src="/favicon.ico" alt="Logo" className="h-6 w-6 rounded object-cover" />
              <span className="font-bold">Cite Builder Docs</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="cite-casts" className="transition-colors hover:text-foreground/80 text-foreground/60">CiteCast</a>
              {/* <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">API</a>
              <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Support</a> */}
            </nav>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar Navigation */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <nav className="grid items-start gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
                      activeSection === item.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
          <div className="mx-auto w-full min-w-0">
            {/* Overview Section */}
            <section id="overview" className="mb-16">
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Cite Builder Documentation</h1>
                <p className="text-xl text-muted-foreground">
                  Advanced Website Management Platform for Multi-Brand Operations
                </p>
              </div>
              
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 h-24">
                      <Layout className="h-5 w-5" />
                      Multi-Brand Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Centralized control of 100+ websites with unified branding and deployment.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 h-24">
                      <Code className="h-5 w-5" />
                      Hybrid Editor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      WYSIWYG editor for content creators, full code access for developers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 h-24">
                      <Bot className="h-5 w-5" />
                      AI-Powered
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Generate content automatically with built-in AI content assistant.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <ImageViewer
                  src="./images/docs_interface_2.png"
                  alt="Cite Builder Dashboard Interface"
                  caption={"Cite Builder's intuitive dashboard interface for managing multiple websites"}
                  className="rounded-lg border shadow-lg w-full"
                />
              </div>
            </section>

            {/* Core Concepts Section */}
            <section id="core-concepts" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Core Concepts
              </h2>
              
              <div className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology Stack</CardTitle>
                    <CardDescription>Modern web technologies powering Cite Builder</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend Framework</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>React + Next.js for dynamic user interfaces</li>
                        <li>Real-time rendering with live preview functionality</li>
                        <li>Responsive design supporting all device types</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Backend Infrastructure</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Firebase Database for real-time data storage</li>
                        <li>Cloud Storage for media file management</li>
                        <li>Secure authentication and role management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Code Editor Capabilities</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Multi-language support: HTML, CSS, JavaScript</li>
                        <li>Syntax highlighting for improved readability</li>
                        <li>Split-screen editor with live preview</li>
                        <li>Template integration system</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Website Manager Section */}
            <section id="website-manager" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Website Manager
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  The central hub for managing all website configurations. The Website Manager provides a unified dashboard 
                  to view, create, edit, and delete websites across your entire portfolio.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4" />
                          <span className="text-sm">Add Website Button - Create new configurations instantly</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4" />
                          <span className="text-sm">Website Cards - Grid view of all managed websites</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4" />
                          <span className="text-sm">Quick Actions - View and Delete buttons for each site</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4" />
                          <span className="text-sm">Multi-website Support - Manage 100+ websites from single dashboard</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <Badge variant="secondary" className="mb-2">Efficiency</Badge>
                          <p className="text-sm text-muted-foreground">60-70% reduction in administrative overhead</p>
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">Cost Savings</Badge>
                          <p className="text-sm text-muted-foreground">Single team manages portfolio vs. individual teams per brand</p>
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">Scalability</Badge>
                          <p className="text-sm text-muted-foreground">Unlimited website management from one platform</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <ImageViewer
                  src="./images/docs_interface_2.png"
                  alt="Website Manager Dashboard"
                  className="rounded-lg border shadow-lg w-full"
                />
              </div>
            </section>

            {/* Branding Section */}
            <section id="branding" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Branding Configuration
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Centralized brand management ensures consistency across all websites in your portfolio. 
                  Configure logos, colors, fonts, and domain settings from a single interface.
                </p>
                
                <Tabs defaultValue="website-info" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="website-info">Website Info</TabsTrigger>
                    <TabsTrigger value="logos">Logos</TabsTrigger>
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                    <TabsTrigger value="fonts">Fonts</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="website-info" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Website Information</CardTitle>
                        <CardDescription>Basic website configuration and FTP settings</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Website Name</h4>
                              <p className="text-sm text-muted-foreground">Example: "1st Latin Women"</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Domain Name</h4>
                              <p className="text-sm text-muted-foreground">Example: "1stlatinwomen.com"</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">FTP Path</h4>
                            <p className="text-sm text-muted-foreground">Example: "/webServers2/1stlatinwomen.com"</p>
                          </div>
                          <div>
                            <Badge variant="outline">SFTP Configuration Available</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="logos" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Logo Management</CardTitle>
                        <CardDescription>Upload and manage logos for different device types</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2">Desktop Logo</h4>
                            <p className="text-sm text-muted-foreground">Primary website logo for desktop view</p>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2">Mobile Logo</h4>
                            <p className="text-sm text-muted-foreground">Optimized logo for mobile devices</p>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2">Favicon</h4>
                            <p className="text-sm text-muted-foreground">Browser tab icon (16x16 or 32x32)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="colors" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Color Palette</CardTitle>
                        <CardDescription>Define your brand colors for consistent theming</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-3">
                            <div>
                              <h4 className="font-semibold mb-2">Primary Color</h4>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded border" style={{backgroundColor: '#b3b9dd'}}></div>
                                <span className="text-sm text-muted-foreground">#b3b9dd</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">Main UI elements, CTA buttons, links</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Secondary Color</h4>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded border" style={{backgroundColor: '#000000'}}></div>
                                <span className="text-sm text-muted-foreground">#000000</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">Background accents, secondary UI</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Accent Color</h4>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded border" style={{backgroundColor: '#000000'}}></div>
                                <span className="text-sm text-muted-foreground">#000000</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">Highlights, notifications, emphasis</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="fonts" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Typography</CardTitle>
                        <CardDescription>Configure font families for consistent text styling</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="font-semibold mb-2">Primary Font</h4>
                            <p className="text-sm text-muted-foreground">Main text font for body content and paragraphs</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Secondary Font</h4>
                            <p className="text-sm text-muted-foreground">Heading typography for titles and headers</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            {/* Pages Section */}
            <section id="pages" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Pages Management
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Comprehensive page management system with organization table, bulk actions, and detailed tracking.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Page Organization Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-2">Page Information</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Page Title - Clear identification</li>
                          <li>• Author Information - Track creators/editors</li>
                          <li>• Category Classification - Organize by topic</li>
                          <li>• Page Type - Define purpose (article, landing, schedule)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Status & SEO</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Status Tracking - Published, Draft, or Trash</li>
                          <li>• Keyword Management - SEO keyword assignment</li>
                          <li>• Created At - Timestamp for audit trails</li>
                          <li>• Bulk Actions - Select multiple pages for batch operations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Available Page Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <FileText className="h-4 w-4" />
                        <div>
                          <p className="font-semibold text-sm">Generate Page</p>
                          <p className="text-xs text-muted-foreground">Create static HTML version</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <ExternalLink className="h-4 w-4" />
                        <div>
                          <p className="font-semibold text-sm">Open Link</p>
                          <p className="text-xs text-muted-foreground">Preview live page</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <Upload className="h-4 w-4" />
                        <div>
                          <p className="font-semibold text-sm">Sync FTP</p>
                          <p className="text-xs text-muted-foreground">Upload to server</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Page Editor Section */}
            <section id="page-editor" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Page Editor (Tiptap + Code)
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Hybrid editing environment combining WYSIWYG editing with full code access. 
                  Perfect for both content creators and developers.
                </p>
                
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Content Creation Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Metadata Input</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Title Field - Page title for display and SEO</li>
                          <li>• Slug Field - URL-friendly page identifier</li>
                          <li>• Meta Description - SEO description for search results</li>
                          <li>• Main Keyword - Primary search term</li>
                          <li>• SKP Keywords - Additional search keywords (0/500 limit)</li>
                          <li>• FAQs Schema - Structured data for FAQ sections</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Editor Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Editing Options</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Generate Content - AI-powered text generation</li>
                          <li>• Tiptap Editor - WYSIWYG content editor</li>
                          <li>• HTML/CSS/JavaScript Tabs - Code-level editing</li>
                          <li>• Templates Integration - Apply templates to page</li>
                          <li>• Live Preview - Real-time rendering</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <ImageViewer
                  src="./images/code_editor_2.png"
                  alt="Page Editor Interface"
                  className="rounded-lg border shadow-lg w-full"
                />
                
                <Card>
                  <CardHeader>
                    <CardTitle>Publication Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Schedule</h4>
                        <p className="text-sm text-muted-foreground">Plan future publication with specific date and time</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Save as Draft</h4>
                        <p className="text-sm text-muted-foreground">Save without publishing for later editing</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Publish</h4>
                        <p className="text-sm text-muted-foreground">Make page live immediately</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Templates Section */}
            <section id="templates" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Templates
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Pre-built template library for rapid page creation. Templates ensure consistency 
                  and accelerate development by 4-5x compared to building from scratch.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Available Template Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="p-4 border rounded-lg">
                        <Badge variant="secondary" className="mb-2">Page Template</Badge>
                        <h4 className="font-semibold mb-1">Tour Schedule - Europe</h4>
                        <p className="text-sm text-muted-foreground">European tour scheduling template with accordion layout</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <Badge variant="secondary" className="mb-2">Profile Template</Badge>
                        <h4 className="font-semibold mb-1">Featured Ladies v3</h4>
                        <p className="text-sm text-muted-foreground">Profile showcase template for member highlights</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <Badge variant="secondary" className="mb-2">Guide Template</Badge>
                        <h4 className="font-semibold mb-1">How to Meet</h4>
                        <p className="text-sm text-muted-foreground">Tutorial and guide template with step-by-step layout</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <Badge variant="secondary" className="mb-2">Homepage Template</Badge>
                        <h4 className="font-semibold mb-1">Homepage v3</h4>
                        <p className="text-sm text-muted-foreground">Full homepage layout with hero section and features</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <Badge variant="secondary" className="mb-2">Sidebar Template</Badge>
                        <h4 className="font-semibold mb-1">Sidebar Version 3</h4>
                        <p className="text-sm text-muted-foreground">Sidebar layout template for navigation and content</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Template Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-2">Template Features</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Template ID - Unique identifier for each template</li>
                          <li>• Type Labels - "page", "sidebar", "footer" designations</li>
                          <li>• Edit Function - Modify template code</li>
                          <li>• Delete Function - Remove unused templates</li>
                          <li>• Search Functionality - Find templates by type or version</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Template Usage</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Apply to new pages during creation</li>
                          <li>• Use in menu configuration</li>
                          <li>• Reuse for consistent design</li>
                          <li>• Clone for variations</li>
                          <li>• Add new custom templates</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Template Versioning Section */}
            <section id="template-versioning" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Template Versioning
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Version control system for templates enables safe updates, rollbacks, and A/B testing. 
                  Use versioned templates (v1, v2, v3) instead of editing the same template repeatedly.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Best Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">✓ Recommended Approach</h4>
                        <p className="text-sm text-green-700">
                          Create new versions (v1, v2, v3) for template updates. This keeps history, 
                          enables rollback, and allows A/B testing between versions.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">✗ Avoid This</h4>
                        <p className="text-sm text-red-700">
                          Don't repeatedly edit the same template. This loses version history 
                          and makes it impossible to revert changes if issues arise.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Template Editor Interface</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ImageViewer
                        src="./images/code_editor_1.png"
                        alt="Template Editor Interface"
                        className="rounded-lg border shadow-lg w-full"
                      />
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-semibold mb-2">Editor Features</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• HTML Code Editor - Full HTML coding environment</li>
                            <li>• CSS Tab - Style sheet editing</li>
                            <li>• JavaScript Tab - Script functionality</li>
                            <li>• Line Numbers - Track code position</li>
                            <li>• Syntax Highlighting - Colored code elements</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Template Settings</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Template Type Selector - Define template category</li>
                            <li>• Template Name - Descriptive naming</li>
                            <li>• Update Button - Save template changes</li>
                            <li>• Live Preview Area - Real-time template rendering</li>
                            <li>• Mobile Responsiveness Testing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Menu Manager Section */}
            <section id="menu-manager" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Menu Manager
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Comprehensive menu configuration system supporting header, footer, and sidebar navigation 
                  with custom HTML, CSS, and JavaScript capabilities.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Menu Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center p-4 border rounded-lg">
                        <Menu className="h-8 w-8 mx-auto mb-2" />
                        <h4 className="font-semibold mb-2">Header Menu</h4>
                        <p className="text-sm text-muted-foreground">Primary navigation for page top</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <Menu className="h-8 w-8 mx-auto mb-2" />
                        <h4 className="font-semibold mb-2">Footer Menu</h4>
                        <p className="text-sm text-muted-foreground">Secondary navigation for page bottom</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <Menu className="h-8 w-8 mx-auto mb-2" />
                        <h4 className="font-semibold mb-2">Sidebar Menu</h4>
                        <p className="text-sm text-muted-foreground">Side navigation for content areas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Menu Creation Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-2">Creation Methods</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            <span className="text-sm">Custom HTML/CSS/JavaScript coding</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <LayoutTemplate className="h-4 w-4" />
                            <span className="text-sm">Apply pre-built template</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Upload className="h-4 w-4" />
                            <span className="text-sm">Upload from file</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Bot className="h-4 w-4" />
                            <span className="text-sm">Auto-generate menu</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Menu Tools</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">Dropdown Selection - Switch between menu types</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">HTML Editor - Write custom menu code</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">CSS Styling - Style menu appearance</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">JavaScript Interactivity - Add dynamic behaviors</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Tags System Section */}
            <section id="tags-system" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Tags System
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Global tag management for header and footer sections. Add CDN links, tracking codes, 
                  and custom scripts across all pages in your website.
                </p>
                
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader className="h-24">
                      <CardTitle>Header Tags Management</CardTitle>
                      <CardDescription>Scripts and stylesheets loaded in the &lt;head&gt; section</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded border">
                          <code className="text-sm break-all">
                            &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3..."&gt;
                          </code>
                          <p className="text-xs text-muted-foreground mt-1">Bootstrap CDN</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded border">
                          <code className="text-sm break-all">
                            &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity..."&gt;
                          </code>
                          <p className="text-xs text-muted-foreground mt-1">Cloudflare CSS</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="h-24">
                      <CardTitle>Footer Tags Management</CardTitle>
                      <CardDescription>Scripts loaded before the closing &lt;/body&gt; tag</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded border">
                          <code className="text-sm break-all">
                            &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3..."&gt;
                          </code>
                          <p className="text-xs text-muted-foreground mt-1">Bootstrap JS</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded border">
                          <code className="text-sm break-all">
                            &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity..."&gt;
                          </code>
                          <p className="text-xs text-muted-foreground mt-1">Cloudflare AJAX</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tag Operations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-2">Management Actions</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Add New Tag - Input field for new tags</li>
                          <li>• Edit Existing Tags - Modify tag code</li>
                          <li>• Delete Tags - Remove unused tags</li>
                          <li>• Tag Duplication - Copy existing tags</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Best Practices</h4>
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                          <p className="text-sm text-yellow-800">
                            <strong>Performance Tip:</strong> Keep global tags minimal and necessary. 
                            Avoid loading unnecessary scripts/CDNs to improve site speed and Core Web Vitals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FTP Deployment Section */}
            <section id="ftp-deployment" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                FTP / Deployment
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Flexible deployment system supporting FTP and SFTP protocols. Deploy to any web server 
                  with real-time synchronization and multi-server support.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-3">Connection Types</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 border rounded">
                            <Upload className="h-5 w-5" />
                            <div>
                              <p className="font-semibold text-sm">FTP Integration</p>
                              <p className="text-xs text-muted-foreground">Standard file transfer protocol</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 border rounded">
                            <Upload className="h-5 w-5" />
                            <div>
                              <p className="font-semibold text-sm">SFTP Support</p>
                              <p className="text-xs text-muted-foreground">Encrypted file transfer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Advanced Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">Real-time synchronization with FTP servers</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">Multi-server support for different hosting providers</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">Upload status tracking</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-sm">Batch deployment for multiple pages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Workflow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                        <div>
                          <h4 className="font-semibold">Generate Page</h4>
                          <p className="text-sm text-muted-foreground">Create static HTML version of your page</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                        <div>
                          <h4 className="font-semibold">Sync FTP</h4>
                          <p className="text-sm text-muted-foreground">Upload page to configured web server</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                        <div>
                          <h4 className="font-semibold">Verify Status</h4>
                          <p className="text-sm text-muted-foreground">Confirm "Uploaded to FTP" status shows as enabled</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* AI Content Assistant Section */}
            <section id="ai-assistant" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                AI Content Assistant
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Integrated AI-powered content generation to accelerate content creation. 
                  Generate high-quality text content automatically based on your requirements.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>AI Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-3">Content Generation</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Bot className="h-4 w-4" />
                            <span className="text-sm">Generate Content button in page editor</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Bot className="h-4 w-4" />
                            <span className="text-sm">AI-powered text generation for any topic</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Bot className="h-4 w-4" />
                            <span className="text-sm">Context-aware content creation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Bot className="h-4 w-4" />
                            <span className="text-sm">SEO-optimized content suggestions</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Business Impact</h4>
                        <div className="space-y-3">
                          <div>
                            <Badge variant="secondary" className="mb-1">Productivity</Badge>
                            <p className="text-sm text-muted-foreground">Reduce content creation time by 60-80%</p>
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-1">Quality</Badge>
                            <p className="text-sm text-muted-foreground">Consistent, professional content output</p>
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-1">Scalability</Badge>
                            <p className="text-sm text-muted-foreground">Generate content for multiple pages simultaneously</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>User Empowerment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Non-Technical User Benefits</h4>
                      <ul className="space-y-1 text-sm text-blue-700">
                        <li>• Content writers can create pages without developer assistance</li>
                        <li>• AI generation reduces dependency on copywriting expertise</li>
                        <li>• Team scalability: hire content managers instead of developers</li>
                        <li>• Cost reduction: 30-50% savings compared to developer hourly rates</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Media Manager Section */}
            <section id="media-manager" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Media Manager
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Centralized media management system for logos, images, and files across all websites. 
                  Cloud storage integration ensures reliable access and backup.
                </p>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Media Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center p-4 border rounded-lg">
                        <Image className="h-8 w-8 mx-auto mb-2" />
                        <h4 className="font-semibold mb-2">Images</h4>
                        <p className="text-sm text-muted-foreground">Photos, graphics, and visual content</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <Palette className="h-8 w-8 mx-auto mb-2" />
                        <h4 className="font-semibold mb-2">Logos</h4>
                        <p className="text-sm text-muted-foreground">Brand logos and favicons</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <FileText className="h-8 w-8 mx-auto mb-2" />
                        <h4 className="font-semibold mb-2">Documents</h4>
                        <p className="text-sm text-muted-foreground">PDFs, documents, and files</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Storage Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-2">Cloud Integration</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Firebase Cloud Storage integration</li>
                          <li>• Automatic backup and synchronization</li>
                          <li>• CDN delivery for fast loading</li>
                          <li>• Scalable storage capacity</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Management Tools</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Upload interface for multiple file types</li>
                          <li>• Organize files by website or category</li>
                          <li>• Preview and thumbnail generation</li>
                          <li>• File size optimization</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Settings Section */}
            <section id="settings" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Settings
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Global configuration settings for user preferences, security, and system behavior.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>User Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">Default editor preferences</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">Theme and appearance settings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">Notification preferences</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">Language and localization</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">User authentication and roles</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">FTP connection credentials</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">API keys and integrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          <span className="text-sm">Backup and recovery options</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="troubleshooting" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Troubleshooting
              </h2>
              
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground">
                  Common issues and solutions to help you resolve problems quickly.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ftp-issues">
                    <AccordionTrigger>FTP Connection Issues</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold mb-1">Problem: Cannot connect to FTP server</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Verify FTP credentials (username, password, server address)</li>
                            <li>Check if SFTP is required instead of standard FTP</li>
                            <li>Ensure firewall allows FTP connections</li>
                            <li>Test connection with a standalone FTP client</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Problem: Files not uploading</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Check FTP path configuration</li>
                            <li>Verify write permissions on target directory</li>
                            <li>Ensure sufficient disk space on server</li>
                            <li>Check file size limits</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="template-issues">
                    <AccordionTrigger>Template and Editor Issues</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold mb-1">Problem: Template not applying correctly</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Clear browser cache and refresh</li>
                            <li>Check template syntax for HTML/CSS errors</li>
                            <li>Verify template type matches page requirements</li>
                            <li>Test template in preview mode before publishing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Problem: Editor not loading</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Disable browser extensions temporarily</li>
                            <li>Check internet connection stability</li>
                            <li>Try different browser or incognito mode</li>
                            <li>Clear browser data and cookies</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="performance-issues">
                    <AccordionTrigger>Performance Issues</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold mb-1">Problem: Slow page loading</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Optimize images before uploading</li>
                            <li>Minimize global tags and unnecessary scripts</li>
                            <li>Use CDN links for external libraries</li>
                            <li>Test mobile responsiveness in preview mode</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Problem: Editor running slowly</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Close unused browser tabs</li>
                            <li>Reduce number of open pages in editor</li>
                            <li>Clear browser cache regularly</li>
                            <li>Use latest browser version</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Frequently Asked Questions
              </h2>
              
              <div className="mt-6 space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="getting-started">
                    <AccordionTrigger>How do I get started with Cite Builder?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Getting started is simple:
                      </p>
                      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                        <li>Create your first website in the Website Manager</li>
                        <li>Configure branding (logos, colors, fonts)</li>
                        <li>Set up your menu structure</li>
                        <li>Add global tags if needed</li>
                        <li>Create your first page using templates or custom code</li>
                        <li>Deploy to your web server via FTP</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="multiple-websites">
                    <AccordionTrigger>Can I manage multiple websites?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Yes! Cite Builder is designed for multi-brand management. You can manage 100+ websites 
                        from a single dashboard, each with its own branding, templates, and deployment settings. 
                        This provides significant operational efficiency and cost savings.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="technical-skills">
                    <AccordionTrigger>Do I need technical skills to use Cite Builder?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Cite Builder offers a hybrid approach. Content creators can use the WYSIWYG Tiptap editor 
                        and AI content generation without any coding knowledge. For advanced customization, 
                        developers have full access to HTML, CSS, and JavaScript editing. This flexibility 
                        allows teams to scale efficiently.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="templates">
                    <AccordionTrigger>How do templates work?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Templates accelerate page creation by 4-5x:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Pre-built templates for common page types (tours, profiles, guides)</li>
                        <li>Version control system (v1, v2, v3) for safe updates</li>
                        <li>Apply templates during page creation or to existing pages</li>
                        <li>Customize templates with your branding automatically</li>
                        <li>Create custom templates for reuse across projects</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="deployment">
                    <AccordionTrigger>What deployment options are available?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Cite Builder supports flexible deployment via FTP and SFTP to any web server. 
                        You're not locked into any specific hosting provider. The system generates static HTML 
                        files and uploads them directly to your server with real-time synchronization.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="seo">
                    <AccordionTrigger>How does Cite Builder help with SEO?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Built-in SEO optimization includes:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Automatic meta tag implementation</li>
                        <li>Structured keyword management</li>
                        <li>FAQs schema for rich snippets</li>
                        <li>Mobile-responsive templates</li>
                        <li>Fast-loading static HTML generation</li>
                        <li>20-30% increase in search visibility from proper markup</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-16">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Resources & Links
              </h2>
              
              <div className="mt-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="h-5 w-5" />
                        External Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Bootstrap Documentation <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Tiptap Editor Guide <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            FTP Setup Tutorial <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            SEO Best Practices <ExternalLink className="h-3 w-3" />
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Play className="h-5 w-5" />
                        Video Tutorials
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Getting Started with Cite Builder <Play className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Template Creation Walkthrough <Play className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            FTP Deployment Setup <Play className="h-3 w-3" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            Advanced Customization Tips <Play className="h-3 w-3" />
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
