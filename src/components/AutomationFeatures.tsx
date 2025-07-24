import React from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Users, 
  CreditCard, 
  Package, 
  Settings, 
  Globe, 
  UserPlus, 
  BarChart3, 
  Workflow 
} from 'lucide-react';

export default function AutomationFeatures() {
  const features = [
    {
      icon: Calendar,
      title: "Job Scheduling and Dispatching",
      description: "Online booking forms connected to Google Calendar or CRM with auto-dispatch based on technician availability and location.",
      tools: "n8n, Google Calendar, ServiceM8, Housecall Pro",
      benefits: [
        "Online booking forms (connected to Google Calendar or CRM)",
        "Auto-dispatch based on technician availability and location", 
        "Automated route optimization and notifications to technicians"
      ]
    },
    {
      icon: MessageSquare,
      title: "Customer Communication",
      description: "Automated email/SMS reminders, follow-up surveys, and chatbot responses to keep customers engaged.",
      tools: "n8n + Twilio, SendGrid, WhatsApp API, Gmail, Slack",
      benefits: [
        "Email/SMS reminders for upcoming appointments",
        "Follow-up surveys after service calls",
        "Auto-responses to inquiries through forms or chatbots",
        "Escalation workflows for missed calls or unassigned tickets"
      ]
    },
    {
      icon: Users,
      title: "CRM and Lead Management", 
      description: "Capture leads from multiple sources and automatically route them to your sales team with intelligent scoring.",
      tools: "n8n + HubSpot, Pipedrive, Zoho CRM, Airtable",
      benefits: [
        "New lead capture from website, Facebook ads, or email",
        "Lead scoring and routing to the sales team",
        "Automated quote generation and email follow-up",
        "Task assignment and deal stage automation"
      ]
    },
    {
      icon: CreditCard,
      title: "Invoicing and Payments",
      description: "Generate invoices automatically after job completion and track payments with automated reminders.",
      tools: "n8n + QuickBooks, Stripe, PayPal, Xero",
      benefits: [
        "Auto-generation of invoices after job completion",
        "Email invoices with payment links",
        "Payment status tracking and reminders",
        "Sync with accounting software for reporting"
      ]
    },
    {
      icon: Package,
      title: "Inventory and Parts Management",
      description: "Never run out of parts again with automated low-stock alerts and ordering systems.",
      tools: "n8n + Google Sheets, Notion, Odoo, Zoho Inventory",
      benefits: [
        "Low-stock alerts",
        "Automatic ordering of frequently used parts",
        "Real-time inventory sync across branches or teams"
      ]
    },
    {
      icon: Settings,
      title: "Maintenance Plan Automation",
      description: "Automatically schedule recurring maintenance visits and send seasonal service reminders.",
      tools: "n8n + Calendar/CRM/Email tools",
      benefits: [
        "Auto-scheduling of recurring maintenance visits",
        "Reminder emails to clients for seasonal services",
        "Auto-renewal of contracts and billing"
      ]
    },
    {
      icon: Globe,
      title: "Website & Online Presence",
      description: "Manage your online presence automatically with review alerts and social media posting.",
      tools: "n8n + Webflow/WordPress + Google My Business API",
      benefits: [
        "New review alert automation",
        "Auto-post blog articles to social media",
        "Sync service offerings across platforms"
      ]
    },
    {
      icon: UserPlus,
      title: "Employee Onboarding & HR",
      description: "Streamline employee onboarding with automated checklists, account creation, and compliance tracking.",
      tools: "n8n + BambooHR, Notion, Slack",
      benefits: [
        "Onboarding emails, checklists, and account creation",
        "Timesheet collection and payroll sync",
        "Safety compliance documentation automation"
      ]
    },
    {
      icon: BarChart3,
      title: "Reporting and Analytics",
      description: "Get real-time insights with automated dashboards and performance reports delivered to your inbox.",
      tools: "n8n + Google Sheets, Looker Studio, Airtable",
      benefits: [
        "Real-time dashboards for job stats, revenue, team performance",
        "Daily/weekly summary reports emailed to owners/managers",
        "Auto-logging of completed jobs and satisfaction ratings"
      ]
    },
    {
      icon: Workflow,
      title: "Workflow Integration",
      description: "Connect all your tools with intelligent triggers and actions that work together seamlessly.",
      tools: "n8n's built-in connectors",
      benefits: [
        "Triggers: new form submissions, new support tickets, incoming calls, etc.",
        "Actions: send email, create calendar event, update CRM, generate invoice, etc.",
        "Example: New contact form ➝ Check zip code ➝ Create lead in CRM ➝ Assign technician ➝ Email customer ➝ Add to calendar"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            10 Ways We Automate Your HVAC Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From scheduling to payments, we automate every aspect of your business so you can focus on what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-700 hover:shadow-lg hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-400">Powered by: </span>
                    <span className="text-sm text-gray-400">{feature.tools}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 max-w-4xl mx-auto border border-blue-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Automate Your HVAC Business?
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Stop wasting time on manual tasks. Let us build your custom automation system in just 7 days.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Book Your Free Automation Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}