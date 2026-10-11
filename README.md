# Wood & Working — beginner launch guide

A free static website with four pages. No installs, subscriptions, frameworks, or build commands are needed. The website hosting is free on GitHub Free with a public repository; your existing domain renewal still costs money.

## 1. Preview on your Mac
Download and unzip woodandworking-site.zip. Double-click index.html. Click Home, Projects, About, and Contact. Resize the window to see the mobile layout. The workshop image is a labeled illustration, not a photograph of a completed build.

## 2. Add contact details
Open assets/config.js in a plain-text editor (VS Code is free; if using TextEdit choose Format > Make Plain Text). Put your real public email between the email quotes and the exact YouTube channel URL between the youtubeUrl quotes. Save as config.js, not config.js.txt. Contact uses an email link that opens the visitor’s email app; there is no form or server. Leave either value blank if unavailable. A domain purchase does not create an inbox.

## 3. Create the GitHub repository
Go to https://github.com and create/sign into a free account. Click + > New repository. Name it woodandworking. Choose Public. Turn Add README on. Click Create repository. A repository is simply the folder containing your site online. Its files and history will be public.

## 4. Upload the website
In the repository click Add file > Upload files (or the upload link). Drag the CONTENTS of the unzipped folder into the upload area, including the assets folder. Do not upload the ZIP or an enclosing woodandworking folder. index.html must appear at the top level next to about.html, projects.html, and contact.html. Scroll down and choose Commit changes. You can overwrite GitHub’s initial README with this one.

The .nojekyll file may be hidden on a Mac. Press Command+Shift+Period to show hidden files and include it. If omitted, these plain HTML files should still work with GitHub’s default build, but including it bypasses Jekyll.

## 5. Turn on GitHub Pages
Open repository Settings > Pages. Under Build and deployment select Deploy from a branch. Select main and /(root), then Save. Allow up to 10 minutes. Refresh Pages and click Visit site. The initial URL is https://YOUR-USERNAME.github.io/woodandworking/. Check all four pages before connecting the domain.

## 6. Verify ownership of woodandworking.com
In your PERSONAL GitHub account Settings > Pages, choose Add a domain, enter woodandworking.com, and follow its verification instructions. GitHub supplies a unique TXT record name and value. Add exactly those in Cloudflare > woodandworking.com > DNS > Records > Add record. Then return to GitHub and verify. Keep the TXT record. This is separate from repository Settings > Pages.

## 7. Tell GitHub which domain to use
In repository Settings > Pages > Custom domain enter woodandworking.com and Save BEFORE changing the website DNS records. GitHub creates a CNAME file automatically when publishing from a branch. A failed DNS check is normal until step 8. Do not manually create CNAME before the initial github.io preview; it would redirect the preview prematurely.

## 8. Connect Cloudflare DNS
Open Cloudflare > woodandworking.com > DNS > Records. This uses Cloudflare for DNS, not Cloudflare Pages hosting. Leave nameservers and unrelated records alone. Preserve MX and TXT records for email and verification.

Create these records, TTL Auto, Proxy status DNS only (gray cloud):

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

Replace YOUR-USERNAME with your actual GitHub username. No https:// and no /woodandworking/ in the www target. @ means the root domain woodandworking.com. Gray cloud keeps the initial setup direct to GitHub.

Before adding records, review any existing A, AAAA, or CNAME records for @ and www. Replace conflicting website targets rather than leaving old ones alongside GitHub’s targets. If an old AAAA points elsewhere, remove or replace that specific website record. If you are unsure what existing records do, stop and share the record list for review. Do not delete all DNS records. GitHub’s A records alone are sufficient; IPv6 records are optional.

## 9. Enable HTTPS and verify
Allow DNS changes up to 24 hours. Return to repository Settings > Pages and wait for the DNS check and HTTPS certificate. Enable Enforce HTTPS once available. Test https://woodandworking.com and https://www.woodandworking.com. www should redirect to the root domain. Test the navigation and contact links on a phone too. Keep DNS only for this simple setup.

## 10. Make future edits
In GitHub open a file, click the pencil/Edit button, edit and Commit changes. Updates publish automatically, usually within 10 minutes. Home is index.html; projects are in projects.html; biography is about.html; contact text is contact.html; colors/layout are assets/styles.css; email and YouTube URL are assets/config.js. Keep the CNAME file GitHub created when doing future uploads. Never upload account passwords or tokens.

To add your real workshop photo: upload assets/workshop.jpg, then in index.html change assets/workshop.svg to assets/workshop.jpg, update the alt text, and replace the illustration caption. The SVG is an original illustration supplied with this site.

## Before calling it finished
- Confirm biography and project descriptions are accurate.
- Set your public email and/or exact YouTube channel URL.
- Replace the illustration with your own photo if desired.
- Test all navigation, contact links, narrow-screen layout, www redirect, and HTTPS.

## Official references
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://developers.cloudflare.com/dns/proxy-status/
