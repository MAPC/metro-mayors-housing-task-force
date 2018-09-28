const engagement = 'Stakeholder and Municipal Engagement';
const affordability = 'Housing Affordability';
const complete = 'Complete Neighborhoods';
const design = 'Housing Design';
const diversity = 'Housing Diversity';
const location = 'Housing Location';
const preservation = 'Housing Preservation';
const production = 'Housing Production';
const stability = 'Housing Stability';
const fair = 'Fair Housing';


const strategies = [
  {
    title: "Planning + Policy",
    practices: [
      {
        "considerations": "Depending on their capacity, municipalities should consider working with a technical assistance provider or other project partner to develop an HPP. Communities should also provide opportunities for community engagement, have a clear action plan for implementing the strategies outlined in the HPP, and build coalitions to advance implementation of the HPP.",
        "what": "An HPP provides communities with a plan to guide housing development that is consistent with MGL Chapter 40B under the Massachusetts Department of Housing and Community Development (DHCD) 760 CMR 56.00. As such, it contains the following components:\n\n\u2022 Comprehensive Housing Need Assessment: An analysis of current demographics and housing stock, as well as future population and housing needs\n\n\u2022 Development Constraints and Opportunity: Regulatory and non-regulatory constraints on housing development, and the municipality's capacity to meet current and anticipated future growth\n\n\u2022 Affordable Housing Goals and Strategies: A set of goals guided by the Housing Need Assessment, including a numerical goal for annual housing production, and specific strategies by which the municipality will achieve its goals\n\nCommunities with an approved HPP can obtain certification from the MA Department of Housing and Community Development (DHCD) if they produce affordable units equal to at least 0.5% or 1% of their year-round housing stock and if they are in accordance with their approved HPP. Communities that achieve certification can deny Comprehensive Permit applications under MGL Chapter 40B, even if less than 10% of their housing stock is on the Subsidized Housing Inventory (SHI). Certification lasts for one year if the community has produced SHI-eligible units at 0.5% of year-round housing units or two years if it has produced at 1.0%.  ",
        "title": "Housing Production Plan (HPP)",
        "overview": "A five-year plan to meet existing and projected housing need and demand and to respond to MGL Chapter 40B development. The three-part plan analyzes housing need and demand in a community, considers housing development capacity and opportunities, and establishes housing goals and strategies.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location
        ],
        "adoption": "Local Action",
        "location": "Massachusetts",
        "where": "Massachusetts - Over 60 communities around Massachusetts have a DHCD-approved HPP. Approximately 10 communities have a certified HPP. ",
        "resources": {
          "titles": "MGL Chapter 40B Housing Production Plan",
          "links": "https://www.mass.gov/service-details/chapter-40-b-housing-production-plan",
        }
      },
      {
        "considerations": "Massachusetts has an existing Expiring Use Preservation Law (MGL Chapter 40T) that has similar tenant notice requirements to CA's law and provides the opportunity for the MA Department of Housing and Community Development (DHCD) or a qualified designee to make and/or match a purchase offer when a subsidized property is offered for sale. However, 40T does not give DHCD or its alternate a right to purchase when affordability is terminating and the property is not being sold. Since the inception of 40T, an estimated 2,400 net affordable units in properties with subsidized mortgages have been lost through prepayment, mortgage maturity, or related subsidy contract opt-outs without replacement restrictions, all of which create the potential for market-rate conversion. The vast majority of these losses have occurred in properties not being sold, which are outside the reach of 40T\u2019s preservation provisions but are susceptible to CA AB 1521. ",
        "what": "This law has been enacted in California (AB 1521), where owners of income-restricted affordable housing are required to provide a one-year notice of proposed termination of rental restrictions to current tenants and prospective tenants at the time of interviewing. The law also requires owners to accept a competitive offer to purchase an apartment complex with expiring affordability restrictions from an entity that pledges to continue renting the units to low-income residents (even if the owner intended to convert the complex to market rate). The purchasing entity can be either nonprofit or for-profit, but is required to already own at least three other rent-restricted developments as a condition of qualification.  ",
        "title": "Expiring Affordability First Right of Refusal",
        "overview": "Requires owners to accept a qualified offer to purchase an apartment complex with expiring affordability restrictions from a buyer that pledges to continue renting the units to low-income residents.",
        "who": "Organizations that own at least three other rent-restricted affordable housing developments are eligible to purchase properties with expiring affordability restrictions. \n\nTenant associations and other tenant groups are authorized to enforce the requirements of the law in court. ",
        "principles": [
          engagement,
          fair,
          stability,
          affordability,
          preservation
        ],
        "adoption": "Legislation",
        "location": "California",
        "where": "California - State law was adopted in summer 2017.",
        "resources": {
          'titles': 'California AB 1521 Factsheet\nMGL Chapter 40T\nMGL Chapter 40T at 5: A Retrospective',
          'links': 'http://nonprofithousing.org/wp-content/uploads/AB-1521-Fact-Sheet-3.1.17.pdf\nhttps://malegislature.gov/Laws/GeneralLaws/PartI/TitleVII/Chapter40T\nhttps://www.cctvcambridge.org/sites/default/files/40T_2015%20copy.pdf',
        },
      },
      {
        "considerations": "Local preference policies can conflict with Fair Housing rules aimed at ensuring equal access to housing. Opponents argue that local preference can entrench segregation by preserving neighborhood racial makeup. For this reason, communities that are less diverse than their would-be broader applicant pool are strongly discouraged from adopting local resident preference.\n\nIn fact, HUD and the courts have been clear that communities cannot use local resident preference to discriminate. As Judge Gertner of the U.S. District Court for the District of Massachusetts wrote in an influential 2002 decision ruling against local preference by Boston-area suburbs, there is an \u201coverarching intuitive principle here: where a community has a smaller proportion of minority residents than does the larger geographical area from which it draws applicants, a selection process that favors its residents cannot but work a disparate impact on minorities.\u201d  \n\nTherefore, local preference policies should only apply to a portion of affordable housing units and should be accompanied by other community need preferences to ensure a diverse applicant pool. ",
        "what": "Cities and towns can use preferences or \"points\" to prioritize certain types of individuals or households for subsidized affordable housing. These preferences often correspond to specific community goals, such as retaining teachers, providing housing for locally-employed low-wage workers, or ensuring that individuals with disabilities have access to housing that meets their needs. Many local governments also assign preference to local residents to help those at risk of displacement remain in their neighborhoods and enjoy the benefits of reinvestment.",
        "title": "Preference for Affordable Housing",
        "overview": "Individuals vulnerable to displacement are given priority when selecting applications for subsidized housing units. ",
        "who": "Local government",
        "principles": [
          engagement,
          stability
        ],
        "adoption": "Local Action",
        "location": "Boston, MA\nNew York, NY                San Francisco, CA                 ",
        "where": "Boston, MA - The City assigns several preferences when conducting lotteries for subsidized affordable units. Preferences include individuals in need of an accessible unit, those previously displaced by urban renewal, and current Boston residents.\n\nSan Francisco, CA - In 2015, San Francisco adopted a Neighborhood Resident Housing Preference that set aside 40% of units in City-funded affordable housing developments for current residents of the Western Addition, a historically African-American neighborhood experiencing gentrification. HUD challenged the policy on the grounds that it violated Fair Housing protections of equal access to affordable housing. San Francisco and HUD reached an agreement in 2016; rather than setting aside units exclusively for residents of the immediate neighborhood, the city would give preference to residents of any neighborhood facing \u201cextreme displacement pressure.\" \n",
        "resources": {
          "titles": "San Francisco Local Preference Policy\n\nLewis Center Neighborhood Resident Preference\n\nCommunity Preferences and Fair Housing",
          "links": "https://sfmohcd.org/lottery-preference-programs\n\nhttps://www.lewis.ucla.edu/can-tool-segregation-used-fight-displacement-delicate-balance-residential-preference-policies/\n\nhttp://furmancenter.org/research/iri/discussions/community-preferences-and-fair-housing"
        }
      },
      {
        "considerations": "HUD and the courts have been clear that communities cannot use resident preference to discriminate. As  Judge Gertner of the U.S. District Court for the District of Massachusetts wrote in an influential 2002 decision ruling against local preference by Boston-area suburbs, there is an \u201coverarching intuitive principle here: where a community has a smaller proportion of minority residents than does the larger geographical area from which it draws applicants, a selection process that favors its residents cannot but work a disparate impact on minorities.\u201d \n\nIt is critical that Right of Return policies do not conflict with Fair Housing rules, which ensure equal access to housing. Preference policies should only apply to a portion of affordable housing units, and should be accompanied by other community need preferences to ensure a diverse applicant pool. Communities that are less diverse than their would-be broader applicant pool are strongly discouraged from adopting preference policies, including Right of Return. ",
        "what": "Cities and towns can use preferences or \"points\" to prioritize certain types of individuals or households for subsidized affordable housing, including specifically targeting individuals and families that have been displaced though market-driven gentrification and/or past government policy, such as urban renewal. Preference for formerly displaced residents is often referred to as a \"right to return\" policy.",
        "title": "Right to Return",
        "overview": "Individuals that have experienced displacement are given priority when selecting applications for subsidized housing units. ",
        "who": "Local government",
        "principles": [
          engagement,
          stability
        ],
        "adoption": "Local Action",
        "location": "Boston, MA\nPortland, OR",
        "where": "Portland, OR - Preference for affordable housing or downpayment assistance opportunities is given to applicants who have been displaced, who are at risk of displacement, or who are the descendants of families that were displaced due to urban renewal in certain Portland neighborhoods. This is referred to as a Right of Return policy because it enables the return of long-displaced residents. ",
        "resources": {
          "titles": "Portland North/Northeast Housing Strategy\n\nThe Guardian: Un-Gentrifying Portland",
          "links": "https://www.portlandoregon.gov/phb/75027\n\nhttps://www.theguardian.com/cities/2018/mar/01/portland-anti-gentrification-housing-scheme-right-return"
        }
      },
      {
        "considerations": "Rent regulation policies must be drafted carefully to ensure that they are legally sound and do not create counterproductive outcomes for tenants. Policies should be balanced, providing landlords with avenues to claim hardship while offering tenant protections like just cause eviction and anti-harassment policies. Without these protections, landlords may against tenants in rent-controlled units, particularly when rent control policies allow landlords of rent-regulated units to reset rents to market value when a unit is vacated. \n\nThere is general consensus among economists that rent control greatly benefits existing occupants of rent-regulated units, but that it tends to slow supply growth, thereby contributing to rental cost increases in the rest of the market. Proponents of rent control argue that housing costs are influenced by many other factors beyond rent control, and that many communities that have enacted rent control continue to experience high rates of housing production. Without the ability to compare across a truly randomized sample of communities, it is difficult to verify each claim. Many cities and towns have sought to control for rent control's impact on supply by exempting new construction. ",
        "what": "Rent control protects tenants in privately-owned rental units from excessive rent increases by mandating caps on the rents that can be charged to tenants. While the terms are often used interchangeably, rent stabilization additionally sets limits on the degree to which rent can be raised from year to year. Rent regulation aims to prevent displacement while guaranteeing landlords a fair return on their investment. Municipalities with rent regulation typically cap year-to-year rent increases at one-to-five percent or base rent increases on growth in the Consumer Price Index. Many rent control policies allow for additional increases following capital improvements or unit vacancy. Rent control has not existed in Massachusetts since 1994, when it was prohibited by ballot measure. ",
        "title": "Rent Control",
        "overview": "Mandates reasonable and gradual rent increases while ensuring landlords receive a fair return on investment.",
        "who": "Typically, local municipalities adopt rent regulation policies, while a local Rent Board or Office of Rent Administration would administer and enforce the program. Because rent control is currently prohibited statewide in Massachusetts, initial action would be required at the state level. ",
        "principles": [
          engagement,
          preservation,
          stability,
          fair
        ],
        "adoption": "Legislation ",
        "location": "Baltimore, MD\nHoboken, NJ\nNew York, NY\nOakland, CA\nSan Francisco, CA\nSanta Monica, CA\nWashington, DC",
        "where": "Santa Monica, CA - Santa Monica adopted rent control in 1979. As of 2015, there were roughly 28,000 rent-regulated units across the city, representing about 70% of the city's rental housing supply. The policy applies to most multifamily rental buildings, as well as some condominiums and single-family homes. In addition to limiting rent increases to 75% of the Consumer Price Index, the policy also includes a just cause eviction requirement. \n\nWashington, DC \u2013 Washington, DC, adopted rent control in 1985. The City estimates that it has approximately 4,800 rental buildings that are potentially subject to rent control. The policy limits year-to-year rent increases based on the Consumer Price Index. Exemptions are available for units built after 1978, buildings with five or fewer units, and government-owned or publicly-assisted units. ",
        "resources": {
          "titles": "Policy Link Rent Control ",
          "links": "\n\nhttp://www.policylink.org/resources-tools/rent-control"
        }
      },
      {
        "considerations": "ROFR policies works best when paired with technical assistance for tenants and access to an affordable housing funding program, such as an Affordable Housing Trust Fund. \n\nRelevant bills introduced in the 2017-18 MA legislative session did not pass:  H.3017 (tenant ROFR at market value), H.1089 (cities ROFR foreclosed property), and H.655/S.859 (tenant ROFR foreclosed property).",
        "what": "Right of first refusal (ROFR) prevents displacement and preserves naturally occurring affordable housing by facilitating the transfer of residential properties to owners committed to maintaining lower cost housing. ROFR requires that residential tenants of any property for sale be offered the first opportunity to buy the property or to assign their right to purchase to a third party in order to retain the property as naturally affordable rental housing. Tenants or their designee must pay fair market value for the property. ",
        "title": "Tenant Right of First Refusal (ROFR)",
        "overview": "Requires that residential tenants in any building for sale or demolition must be offered the first opportunity to buy the building\u2014either individually as tenants, turning the building into condominiums, or by forming a tenant association and buying the building as a whole, usually in partnership with a developer of their choosing.",
        "who": "In MA, the state legislature must approve a home rule petition or pass authorizing legislation. \n\nThe local municipality adopts and administers the policy, as well as any technical assistance or funding programs. \n\nNon-profit developers, for-profit developers, land trusts, and public agencies (typically Housing Authorities or the MA Department of Housing and Community Development) are eligible designees that can be granted tenants' right to purchase.",
        "principles": [
          engagement,
          stability,
          affordability,
          preservation
        ],
        "adoption": "Legislation",
        "location": "Baltimore, MD\nWashington, DC       ",
        "where": "Washington, DC - The Tenant Opportunity to Purchase Act provides technical assistance and low-interest loans to tenant groups that want to purchase their buildings when landlords decide to sell. The policy applies to both single-family and multifamily housing. Between 2002 and 2013, the program helped preserve over 1,400 units housing units. DC's Department of Housing and Community Development administers the program; funding comes from the City's Housing Production Trust Fund and its Community Development Block Grant allocation. \n\nMassachusetts - The Massachusetts Condominium Conversion Statute, Chapter 527 of the Acts of 1983, allows right of first refusal for buildings undergoing condominium conversion. Under this policy, a landlord must present tenants with a Purchase and Sale Agreement that lists the asking price for the apartment. The landlord must wait 90 days for the tenants to respond before advertising the sale or selling the apartment to a third party. To apply to all more generally, the MA state legislature would need to pass legislation that expands ROFR to for-sale or intent-to-demolish buildings in general.",
        "resources": {
          "titles": "Washington D.C. Right of First Refusal Report",
          "links": "\n\nhttps://www.dcfpi.org/wp-content/uploads/2013/09/9-24-13-First_Right_Purchase_Paper-Final.pdf"
        }
      },
      {
        "considerations": "",
        "what": "Under the current Massachusetts Condominium Conversion Statute, Chapter 527 of the Acts of 1983, tenants are entitled to at least a one-year notice when a property owner intends to convert rental housing into condominiums. Elderly, disabled, and low-to-moderate-income households are entitled to at least two years' notice. The tenant's lease is effectively terminated at the end of the notice period.\n\nSome MA municipalities have tenant protections that surpass those provided by the state, including Boston, which requires a five-year notice period for elderly, handicapped, or low-to-moderate-income households during which tenants can renew their leases. Outside the state, much longer lease extension periods can be found.",
        "title": "Right to Remain",
        "overview": "Ensures a tenant's right to remain in their unit or renew a tenancy following a condominium conversation or sale.",
        "who": "Local government",
        "principles": [
          engagement,
          preservation,
          stability,
          fair
        ],
        "adoption": "Legislation",
        "location": "Boston, MA\nChicago, IL\nMontgomery County, MD\nSan Francisco, CA",
        "where": "Chicago, IL - Tenants are entitled to a 180-day lease extension prior to a condominium conversation. Tenants who are over 65 years of age or who have certain disabilities are entitled to a 210-day lease extension.\n\nMontgomery County, MD - A property owner who converts an apartment building to condominiums must offer a certain number of extended leases to qualified tenants (up to 20% of the total number of units in the building). Elderly, disabled, and low-income tenants are eligible to receive either three-year or lifetime tenancies. ",
        "resources": {
          "titles": "Mass Legal Help Condominium Control \n\n\nMontgomery County Condominium Conversion",
          "links": "https://www.masslegalhelp.org/housing/lt1-chapter-17-condos.pdf\n\nhttps://montgomerycountymd.gov/DHCA/Resources/Files/housing/landlordtenant/handbook_condo_conversion.pdf"
        }
      },
      {
        "considerations": "",
        "what": "Under the current Massachusetts Condominium Conversion Statute, Chapter 527 of the Acts of 1983, tenants are entitled to at least a one-year notice when a property owner intends to convert rental housing into condominiums. Elderly, disabled, and low-to-moderate-income households are entitled to at least two years' notice. Elderly and disabled residents are also entitled to a two-year extension if the property owner fails to provide relocation assistance. Local municipalities may require longer notification periods. ",
        "title": "Notice of Sale",
        "overview": "Requires that landlords give tenants extended notice before a condominium conversion or property sale.",
        "who": "Local government",
        "principles": [
          engagement,
          preservation,
          stability,
          fair
        ],
        "adoption": "Local Action",
        "location": "Boston, MA\nLexington, MA\nMarlborough, MA\nNewburyport, MA",
        "where": "Boston, MA - Boston requires a 5-year notice period for elderly, disabled, and low-to-moderate-income households. Boston's ordinance covers residents with mental as well as physical disabilities. \n\nMarlborough, MA - Marlborough requires at least a 3-year notice period for all tenants. Elderly, disabled, and low-to-moderate-income households are entitled to a 5-year notice period, which can be extended by 2 years if the property owner fails to find substitute comparable rental housing in Marlborough at similar rents. ",
        "resources": {
          "titles": "Mass Legal Help Condominium Control ",
          "links": "https://www.masslegalhelp.org/housing/lt1-chapter-17-condos.pdf"
        }
      },
      {
        "considerations": "Many of these ordinances have been adopted in hot-market cities with rent-regulated units where landlords may have strong financial incentive to encourage tenants to relocate. ",
        "what": "Across the country, municipalities with increasingly expensive housing markets are adopting robust tenant protection laws. Tenant harassment has spiked in recent years as rents have climbed and landlords feel market pressure to push out current tenants, especially those occupying rent-regulated units. Tenant protection ordinances typically include at least some of the following components: \n\n\u2022 A list of prohibited forms of tenant harassment, including failure to make needed repairs, threats to report a tenant\u2019s immigration status, or removal of property\n\u2022 New administrative units within cities whose role is to share information and to address tenant harassment complaints\n\u2022 Authorization of the municipality's attorney to enforce the tenant protection ordinance",
        "title": "Tenant Protection Ordinances",
        "overview": "Ensures a wide range of tenant protections, from prohibiting harassment to the creation of affirmative enforcement mechanisms.",
        "who": "Local government",
        "principles": [
          engagement,
          fair,
          stability
        ],
        "adoption": "Legislation",
        "location": "New York, NY \nOakland, CA                    \nSan Francisco, CA\nSan Jose, CA\nSanta Monica, CA\nWest Hollywood, CA",
        "where": "Oakland, CA - Adopted in 2014, the Tenant Protection Ordinance (TPO) prohibits 16 forms of harassment, including failure to make needed repairs, threats to report a tenant\u2019s immigration status, removal of property, and physical abuse. The Oakland City Attorney's Division of Affirmative Litigation, Innovation, and Enforcement has pursued a number of tenant harassment cases under the city's TPO, including a $1 million settlement on behalf of 14 elderly tenants. \n\nNew York, NY - In 2017, New York City adopted a comprehensive list of tenant protections. The City also established an Office of the Tenant Advocate that monitors various protection plans for tenants and responds to complaints from tenants about construction-related harassment. ",
        "resources": {
          "titles": "Oakland City Attorney's Community Lawering & Civil Rights Unit\n\nOakland Tenant Protection Ordinance\n\nSan Jose Tenant Protection Ordinance",
          "links": "https://civilrightsoaklandcityattorney.squarespace.com/\n\nhttps://www.oaklandca.gov/services/housing-index-a-z/housing-resource-center/read-the-tenant-protection-ordinance\n\nhttp://www.sanjoseca.gov/index.aspx?NID=5518"
        }
      },
      {
        "considerations": "",
        "what": "In Massachusetts, a landlord can evict a tenant or refuse to renew a lease through no fault of the tenant, with as little as 30 days notice. Just cause eviction requires that the landlord demonstrate a \"good cause\" for evicting a tenant. Evictions can only occur under specific conditions, such as failure to pay rent, intentional damage to the property, or need of the landlord to vacate a unit to accommodate a relative. Just cause eviction is not meant to protect a tenant who has failed to pay rent or violated their lease, but can be an effective tool in reducing the incidence of indiscriminate evictions. ",
        "title": "Just Cause Eviction",
        "overview": "Prevents landlords from evicting tenants without a justifiable reason. ",
        "who": "State legislature \n\nLocal government  \n\nHousing Courts",
        "principles": [
          engagement,
          fair,
          stability
        ],
        "adoption": "Legislation",
        "location": "Chicago, IL    \nLos Angeles, CA    \nNew Hampshire\nNew Jersey \nOakland, CA         \nSan Francisco, CA                 \nSeattle, WA        Washington, DC        ",
        "where": "New Jersey - New Jersey tenants can be evicted only under one of the 18 different causes or grounds for eviction listed in the state's Anti-Eviction Act. The law covers tenants living in all types of rental property, including single-family dwellings, multi-family apartments, or mobile homes, but exempts tenants living in owner-occupied buildings with three or fewer units. Legal causes for eviction include failure to pay rent or habitual lateness in paying rent, violation of a lease agreement, conviction of a crime, or the landlord's desire to vacate unit for personal use. ",
        "resources": {
          "titles": "Oakland Just Cause Eviction Ordinance\n\n\n\nPolicy Link: Just Cause Eviction Controls",
          "links": "https://www.oaklandca.gov/services/eviction/read-the-just-cause-for-eviction-ordinance\n\nhttp://www.policylink.org/sites/default/files/just-cause-eviction-controls.pdf"
        }
      },
      {
        "considerations": "",
        "what": "Tenant screening reports create a number of barriers to housing for low-income renters and people with a history of housing instability. In a competitive rental market, tenants often have to apply for multiple apartments, incurring fees for individual application screenings. Moreover, traditional background reports may turn up outdated or inaccurate information about a tenant's eviction, criminal, or credit history. Individual states have resorted to a number of strategies to address these barriers, including sealing eviction records, allowing tenants to appeal the disclosure of certain records, and encouraging the use of reusable tenant screening reports. Reusable reports save tenants from paying multiple application fees, give applicants control over what information they would like to share with the landlord, and allow tenants to verify that all of the information collected about them is true. ",
        "title": "Fair Tenant Screening",
        "overview": "Reduces financial and discriminatory barriers associated with having to pay for multiple tenant screening reports and with the potential dissemination of inaccurate tenant credit, eviction, or criminal history data. ",
        "who": "State legislature\n\nLocal government  \n\nHousing Courts",
        "principles": [
          engagement,
          fair,
          stability
        ],
        "adoption": "Legislation",
        "location": "California\nDelaware\nIllinois\nMinnesota\nNew York, NY\nOregon\nPennsylvania\nWashington",
        "where": "Washington - Senate Bill 6413, passed in 2016, requires landlords to inform prospective tenants whether a reusable tenant screening report is acceptable. Tenants can purchase these reports from a tenant screening company and can use it to apply for housing an unlimited number of times within 30 days. The law also creates a procedure by which tenants can request to have their past eviction case records excluded from future screening if \"there was insufficient basis for the lawsuit in the first place\" or if \"their tenancy was reinstated after paying off eviction judgement, or on a showing of 'other good cause.'\u201d The legislation had support from tenants groups and landlords. In exchange for the added tenant protections, landlords won an extended length of time in which to return security deposits. \n\nCalifornia - Passed in 2016, AB 2819 ensures that court records in eviction lawsuits become public only if a landlord wins in court. Tenant screening report companies can only list the names of tenants who were actually evicted. ",
        "resources": {
          "titles": "Belonging Richmond: Reusable Tenant Screening Report\n\nCombating Tenant Blacklisting ",
          "links": "\n\nhttps://haasinstitute.berkeley.edu/belongingrichmond-reusabletenantreport\n\nhttp://povertylaw.org/clearinghouse/article/blacklisting"
        }
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          location,
          complete
        ],
        "overview": "Ensures new development is consistent with a community's neighborhood character. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide",
          "links": "https://www.greenbelt.org/research/smart-infill/"
        },
        "title": "Design Guidelines"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "Provides outside support to communities planning for housing development.",
        "location": "Massachusetts",
        "resources": {
          "titles": "MAPC Funding Opportunities",
          "links": "https://www.mapc.org/about-mapc/funding-opportunities/"
        },
        "title": "Technical Assistance"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          location
        ],
        "overview": "Authorizes a state grant or loan to a local government for planning and environmental reviews of a particular neighborhood. Developers working in the designated area provide a certain percentage of affordable units in exchange for expedited review. ",
        "location": "California",
        "resources": {
          "titles": "SB 540 Text\n\nCalifornia Budget & Policy Center: 2017 Housing Legislative Package",
          "links": "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB540\n\nhttp://calbudgetcenter.org/blog/understanding-recently-enacted-2017-state-legislative-housing-package/"
        },
        "title": "Workforce Housing Opportunity Zone Planning"
      },

    ]
  },
  {
    title: 'Zoning + Regulatory',
    practices: [
      {
        "considerations": "Any effort to expedite the permitting process first begin with a detailed analysis of a municipality's existing permitting and review process. This analysis should be ongoing in order to evaluate the performance of, and make adjustments to, any amendments and/or new strategies.",
        "what": "Expedited permitting and reviews of affordable housing projects reduces developer costs associated with delays during the development process at little to no cost to the municipality. Strategies to expedite project permitting and reviews are myriad: early application assistance in the form of pre-application meetings with relevant site plan review staff or leaders of municipal departments, agreements among permitting authorities and municipal departments to conduct concurrent reviews of projects, use of guidelines and performance standards rather than discretionary reviews, project review prioritization over other non-affordable housing projects, assignment of a liaison or ombudsman, and decoupling of permitting processes that can be granted after the beginning of construction. These are just a few of the many strategies in practice today across the country.",
        "title": "Affordable Housing Expedited Permitting",
        "overview": "Facilitates faster permitting of affordable housing development projects. ",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Austin, TX\nPinellas County, FL\nPortland, OR",
        "where": "Pinellas County, FL \u2013 The County prioritizes affordable housing developments in the permitting review process and establishes a two-week deadline for processing site plans and conferring approvals. The County strategy for achieving a fast turnaround includes a pre-application meeting between the applicant and County site plan review staff. The development review administrator serves as an ombudsman to assist the applicant in achieving an expeditious review.",
        "resources": {
          "titles": "Portland Housing Development GATR\n\nPortland Streamline Development Process Presentation",
          "links": "\n\nhttps://www.portlandoregon.gov/cbo/article/568331\n\nhttps://www.portlandoregon.gov/cbo/72474"
        }
      },
      {
        "considerations": "Reducing or eliminating parking minimums alone may not  work to discourage developers from providing excess parking or encourage new residents to opt for alternative modes of transportation. Reductions in parking requirements can be paired with \"residential transportation options programs,\" which require or incentivize developers to provide transit passes, car share memberships, and other mobility options for residents of new buildings. ",
        "what": "Off-street parking spaces can considerably increase the cost of housing development, whether by taking up valuable land or by increasing construction costs through the addition of expensive structured parking; these added costs are often passed on to occupants. For example, requiring two parking spaces per unit can increase the cost of affordable housing construction by approximately 25%, according to a 2016 study by the Victoria Transport Policy Institute (\"Parking Requirement Impacts on Housing Affordability). Alternatively, researchers have found that eliminating parking requirements results in more housing units and a greater mix of housing types, including redevelopment of older buildings as housing. Reducing parking requirements allows developers to provide an appropriate amount of parking based on demand; it does not prevent a developer from building parking. Most provisions do not reduce or eliminate parking requirements uniformly across a municipality, but rather target lower parking requirements to downtown areas, areas with greater accessibility to alternative modes of transit, or to specific types of development, such as affordable and senior housing. Some municipalities also allow developers to count public parking towards minimum requirements, to provide car share spaces and bike parking, or to pay a fee in lieu of additional parking spaces. ",
        "title": "Reduce or Eliminate Parking Requirements",
        "overview": "Caps or eliminates parking requirements in location-appropriate areas to reduce development costs.",
        "who": "Local government",
        "principles": [
          production,
          affordability,
          location
        ],
        "adoption": "Local Action",
        "location": "Arlington, MA\nCoral Gables, FL\nFort Myers, FL\nMalden, MA\nMelrose, MA\nMilwaukee, WI\nSeattle, WA\nSpokane, WA",
        "where": "Needham, MA - The Town of Needham allows developers that construct buildings within certain districts to pay a one-time fee to the Needham Center Off-Street Parking Fund in exchange for constructing fewer spaces than are otherwise required. The fee per space increases proportionally with the number of spaces not constructed.\n\nArlington, MA, and Melrose, MA - In April 2016, the Town of Arlington voted to reduce minimum parking requirements in some downtown districts. Around the same time, the City of Melrose approved a similar zoning amendment in their downtown and around three commuter rail station areas.",
        "resources": {
          "titles": "MAPC Perfect Fit Parking\n\n\n\nCityLab: The High Cost of Residential Parking",
          "links": "http://perfectfitparking.mapc.org/uploads/FINAL_Metro%20Boston%20Perfect%20Fit%20Parking%20Initiative%20Report_2-3-17.pdf\n\nhttps://www.citylab.com/solutions/2015/05/how-parking-keeps-your-rent-too-damn-high-in-2-charts/392894/"
        }
      },
      {
        "considerations": "As with any rental housing, there is a risk in hot markets that ADUs will be used for short-term rentals rather than to meet resident needs. The City of Portland officially allowed ADUs to function as short-term rentals in 2014, but the City Commissioner is now pushing to limit this practice by requiring homeowners building an ADU for use as a short-term rental  to pay additional development fees. ",
        "what": "An accessory dwelling unit (ADU) is a secondary unit that shares a lot with a single-family house. ADUs can take the form of an existing space conversion (often a garage or a basement), an attached addition to an existing building, or a new detached building. ADUs make more efficient use of residential land and provide a greater mix of housing options, while maintaining the character of a neighborhood's built environment \n\nIn many municipalities, zoning discourages or prevents the construction of ADUs. Such regulations include limits on ADU occupancy, parking requirements, setbacks and other dimensional requirements, rent restrictions, and requirements for owner occupancy. Eliminating or reducing these barriers will make it possible for homeowners to create ADUs.",
        "title": "Zoning for Accessory Dwelling Units (ADUs)",
        "overview": "Reduces regulatory barriers to increasing the supply of ADUs.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          design
        ],
        "adoption": "Local Action",
        "location": "California\nCanada\nOregon\nWashington ",
        "where": "Portland, OR - The City of Portland has permitted over 2,000 ADUs since 2010. Portland\u2019s first ADU reforms in 1997 reduced minimum square footage and owner occupancy requirements, but these alone did not spur ADU construction. In 2004, the City allowed ADUs to be built city-wide, including in converted garages, and eliminated on-site parking requirements. Then in 2010 the City waived the System Development Charges (SDC), an impact fee on new or increased use of a property, for ADUs. After these measures, the number of ADU permits doubled from about 100 in 2010 to 250 in 2014. In 2014, ADUs were officially allowed to be used as short-term rentals, and increased citywide to 600 by 2016. \n\nNewton, MA - In 2017, the City of Newton passed one of the most progressive accessory dwelling unit (ADU) bylaws in the Commonwealth. It allows attached ADUs by right and detached ADUs by special permit on all single- and two-family lots. Newton had first allowed ADUs in 1991, but virtually none were built due to the restrictiveness of the ordinance, which limited ADUs to unusually large lots.",
        "resources": {
          "titles": "Pioneer Institute: Boston-Area ADU Study\n\n\nTerner Center: ADU Update",
          "links": "https://pioneerinstitute.org/economic_opportunity/study-boston-area-communities-should-loosen-restrictions-for-accessory-dwelling-units/\n\nhttps://ternercenter.berkeley.edu/blog/adu-update-early-lessons-and-impacts-of-californias-state-and-local-policy"
        }
      },
      {
        "considerations": "A successful inclusionary housing ordinance must be carefully calibrated with the local housing market. An overly aggressive policy can negatively impact housing production, prompting developers to stop building or to switch to a housing type not subject to inclusionary requirements. IZ requirements should reflect local development trends and the types of buildings that are allowed by local zoning requirements. \n\nThe policy should stipulate the geography it will cover, whether participation is mandatory or voluntary, the number of units or level of development cost that trigger the ordinance, percentage of affordable units, level of affordability, duration of deed restriction, whether off-site or payment in-lieu will be permitted, and what incentives are available.",
        "what": "Inclusionary Zoning (IZ) mandates that housing projects above a certain size include a percentage of deed-restricted units affordable to low-, moderate-, or middle-income households. Projects must be in a district that has been zoned for inclusionary housing. IZ ensures that affordable housing is integrated into new market-rate developments, with minimal or no cost to municipalities. IZ policies are usually accompanied by incentives for developers, such as increased density, parking waivers, lot and unit size waivers, or expedited permitting, so that the affordable housing does not result in undue financial burden for developers. Usually, the inclusionary units are deed-restricted in perpetuity to ensure long-term affordability.",
        "title": "Inclusionary Zoning (IZ)",
        "overview": "New residential development of a certain scale must include a certain percentage of affordable housing units. ",
        "who": "Local government",
        "principles": [
          engagement,
          affordability,
          location,
          production
        ],
        "adoption": "Local Action",
        "location": "Nationwide",
        "where": "Nationwide - Nearly 800 jurisdictions around the country have enacted some form of IZ, but the vast majority are located in municipalities in New Jersey (45%), Massachusetts (27%), and California (17%). These policies cover a wide range of affordability levels, from extremely low income to middle income, though income levels above 50% AMI are most typical. The policy works best in strong economies with robust levels of construction. In Southern California, for example, inclusionary programs produce as many units annually as the federal Low Income Housing Tax Credit program.",
        "resources": {
          "titles": "National Housing Conference: Inclusionary Housing Basics\n\n\nCenter for Housing Policy: Inclusionary Housing\n\n\nGrounded Solutions Network: Inclusionary Housing\n\nLincoln Institute of Land Policy: Inclusionary Housing in the United States",
          "links": "\n\nhttps://www.nhc.org/policy-guide/inclusionary-housing-the-basics/\n\nhttps://www.nhc.org/wp-content/uploads/2017/10/Separating-Fact-from-Fiction-to-Design.pdf\n\nhttps://inclusionaryhousing.org/\n\nhttps://www.lincolninst.edu/publications/working-papers/inclusionary-housing-united-states "
        }
      },
      {
        "considerations": "There are hurdles to multifamily development in many cities and towns in the Greater Boston region. A forthcoming analysis of regional zoning and project approval practices - funded by a collaborative of organizations including the Massachusetts Smart Growth Alliance and the Citizens Housing and Planning Association - reveals that about a third of the region\u2019s cities and towns only allow multifamily housing by special permit. This additional regulation submits multifamily projects to lengthy and costly approval processes that can be derailed by local opposition. Alternatively, allowing multifamily housing \u201cby right\u201d \u2013 as opposed to subject to discretionary reviews \u2013 is an effective way to support development of this housing type.",
        "what": "Multifamily housing expands housing options for a range of households, including first-time homebuyers, households with low incomes, and older adults looking to downsize. The majority of subsidized affordable housing stock is in multifamily housing, and even market-rate multifamily housing is generally more affordable than single-family housing. Multifamily housing can be built at a range of heights and densities to complement the character of the built environment. When built near employment centers and public transit, it can also support sustainability and economic development goals. Multifamily housing tends to include a range of unit sizes and can integrate retail or community facilities such as day care centers and community gathering spaces through mixed-use development with residential.",
        "title": "Zoning for Multifamily Housing",
        "overview": "Expands housing choice beyond single-family housing and increases affordability by facilitating multifamily housing development.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location
        ],
        "adoption": "Local Action",
        "location": "Nationwide",
        "where": "Needham, MA - In 2011, the Town of Needham adopted a mixed-use overlay district for Needham Crossing as part of a strategic economic development effort. The overlay district allows multifamily and mixed-use development by right, up to a maximum of 250 total units. The Town hired consultants to review the potential fiscal impacts of the proposed zoning and concluded that 250 apartments could produce a net financial benefit to the town of $350,000 per year. The success of the overlay district is due in large part to linking the town\u2019s economic development goals to the need for affordable housing. ",
        "resources": {
          "titles": "Joint Center for Housing Studies: Multifamily Rental Housing\n\n\nGreenbelt Alliance: Smart Infill Guide",
          "links": "\n\nhttp://www.jchs.harvard.edu/sites/default/files/rr07-14_obrinsky_stein.pdf\n\nhttps://www.greenbelt.org/research/smart-infill/"
        }
      },
      {
        "considerations": "Changing the zoning code in Massachusetts municipalities requires approval by a two-thirds supermajority vote. This threshold, especially in town meeting forms of government, makes any zoning update a challenge. Resistance to increased density can come from a variety of sources, including local planning and zoning officials, politicians, and residents from the neighborhoods in which new zoning is proposed. Municipalities must address genuine concerns about the impact of increased development, but must also raise awareness about misperceptions. For example, most research has concluded that neither multifamily housing nor subsidized affordable housing causes neighborhood property values to decline. Thoughtful consideration of community concerns and substantial engagement early in the planning process is critical to overcoming these misperceptions and to identifying and empowering members of the community who are supportive of new development. ",
        "what": "Higher residential densities can more easily support diverse housing types and more efficient use of land, and can help provide the population necessary to support a vibrant business community and robust public transportation network. Municipalities can achieve higher densities through multiple zoning strategies. They can amend their zoning codes to raise densities directly or use overlay zones to reduce restrictions on new development, such as dwelling unit per acre maximums, lot coverage limits, excessive setbacks, or low floor-area ratios. Some municipalities have approached upzoning through \u201cgentle density\u201d strategies that more subtly incorporate denser development into existing residential neighborhoods. These strategies include allowing accessory dwelling units, allowing conversion of large homes into smaller apartment units, and carefully integrating townhomes or duplexes into single-family districts. Additionally, some communities make higher density contingent on the inclusion of deed-restricted affordable housing, using density bonuses as an incentive. Design guidelines can ensure that new, denser development can be sensitively incorporated into neighborhoods to be compatible with the character of the existing built environment.",
        "title": "Upzoning",
        "overview": "Increases capacity for new residential development, including affordable housing.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          complete
        ],
        "adoption": "Local Action",
        "location": "Nationwide",
        "where": "San Rafael, CA \u2013 San Rafael\u2019s rezoning process began with a downtown planning effort that drew on extensive community engagement. The city\u2019s 1993 Downtown Community Plan established goals for improving the downtown\u2019s image, architecture, cultural activities, and walkability. The City followed the plan with key zoning changes that doubled height limits from three to six stories, halved residential parking requirements to one space per unit, and increased density limits from 42 to 72 units per acre. The downtown plan\u2019s design recommendations guided new development. Over the next 10 years, the City added nearly 400 homes in the downtown area, representing a 50% increase in housing. \n\nMinneapolis, MN - Minneapolis's draft 2040 Comprehensive Plan includes many bold proposals for new higher-density zoning throughout the city, but the proposal to allow fourplexes in all single-family neighborhoods has garnered the most attention. About two-thirds of the city is currently zoned for single-family housing. Allowing fourplexes in these districts would increase housing production and diversity in the city's neighborhoods. ",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide\n\nNext City: Minneapolis Proposes Fourplexes",
          "links": "https://www.greenbelt.org/research/smart-infill/\n\nhttps://nextcity.org/daily/entry/hoping-for-more-density-minneapolis-proposes-fourplexes"
        }
      },
      {
        "considerations": "Changing the zoning code in Massachusetts municipalities requires approval by a two-thirds supermajority vote. This threshold, especially in town meeting forms of government, makes any zoning update a challenge. Resistance to increased density can come from a variety of sources, including local planning and zoning officials, politicians, and residents from the neighborhoods in which new zoning is proposed. Municipalities must address genuine concerns about the impact of increased development, but must also raise awareness about misperceptions. For example, most research has concluded that neither multifamily housing nor subsidized affordable housing causes neighborhood property values to decline. Thoughtful consideration of community concerns and substantial engagement early in the planning process is critical to overcoming these misperceptions and to identifying and empowering members of the community who are supportive of new development. ",
        "what": "Design guidelines or form-based code ensures new development is consistent with the character of the existing built environment. Form-based codes focus less explicitly on building uses and density, and instead regulate built form through dimensional requirements (such as heights, setbacks, and frontage) and design standards. ",
        "title": "Form-Based Code",
        "overview": "A form of municipal zoning that focuses on desired form and character of buildings, rather than on specific density and use requirements. ",
        "who": "Local government",
        "principles": [
          engagement,
          complete,
          production,
          diversity,
          location
        ],
        "adoption": "Local Action",
        "location": "Denver, CO\nRedwood City, CA\nSanta Rosa, CA",
        "where": "Denver, CO - In 2010, Denver completely updated its zoning code. The new code takes a context and form-based approach to zoning. Neighborhoods are broken down into various typologies in recognition of the various patterns that have defined the city's development history, and each typology is assigned its own zoning framework. The new code abandons the use of FAR and dwelling units per acre. Instead, it defines how buildings relate to their lots through the regulation of height, setbacks, building form, and \"street level activation.\" \n\nRedwood City, CA - In 2007, Redwood City adopted its Downtown Precise Plan, which included a new form-based zoning code. Rather than prescribing specific densities for the downtown, the new code focuses on buildings' height, shape, and design, with increased heights in the center of the district and lower heights adjacent to residential areas. It allows housing throughout the downtown. ",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide\n\nColorado Urbanist: Denver Form-Based Zoning Code\n\nHarriman: Conventional Zoning Versus Form Based Code\n\nForm-Based Codes Institute",
          "links": "https://www.greenbelt.org/research/smart-infill/\n\nhttps://cnuchaptercolorado.files.wordpress.com/2012/02/co_urbanist-jan12.pdf\n\nhttp://harriman.com/inspirations/conventional-zoning-vs-form-based-code/\n\nhttps://formbasedcodes.org/"
        }
      },
      {
        "considerations": "Unlike MGL Chapter 40B, SB 35 considers housing production at all income levels, not just affordable housing; but it also only applies to development that is consistent with local zoning.\n\nProject sites must meet specific criteria to be eligible for SB 35 streamlined permitting; for example, sites must not be the location of a protected species habitat. In addition to meeting affordability requirements, any streamlined project must pay construction workers union-level wages. ",
        "what": "In 2017, the California state legislature passed SB 35, the Housing for a Growing California Act. Under SB 35, any municipality or county that has failed to meet its home-building targets as set by California\u2019s fair share housing law is required to approve, by right, housing projects that include a share of affordable housing and ordinarily require a special permit within a 180-day period. SB 35 applies to projects on sites that have been zoned for mixed-use development or multifamily housing but required a special permit, conditional use permit, or discretionary review of some component of the project. The exact streamlining requirements depend on the extent to which the municipality has missed its production target. Municipalities and counties that have failed to build sufficient housing affordable to very-low- and low-income households are subject to SB 35 streamlining for all projects with at least 50% affordable units. Municipalities and counties that have failed to build sufficient housing at all income levels are subject to the more strenuous requirement of approving all projects with at least 10% affordability.  ",
        "title": "As-of-Right Approval for Affordable Housing",
        "overview": "Municipalities must waive special permit requirements for affordable housing developments if housing production has not kept pace with state home-building targets.",
        "who": "Local governments are required to plan for and meet fair share home-building targets. Failing to meet targets for any income group subjects municipalities to the SB 35 streamlining development approval process. \n\nThe CA Housing and Community Development Department publishes an annual report of cities and counties subject to SB 35 streamlining. Determinations are made based on each city or county's reported progress towards their home-building targets. ",
        "principles": [
          engagement,
          affordability,
          location,
          production
        ],
        "adoption": "Legislation",
        "location": "California",
        "where": "California - SB 35 took effect in January of 2018. The state Housing and Community Development Department determined that 526 cities and counties, 97.6% of those in the state, failed to meet housing production targets and are now subject to SB 35 streamlining.\n\nIn 2014, Sand Hill Property Company purchased the Vallco Mall property in Cupertino. The 1970s shopping mall, now mostly vacant, is located about a mile south of Apple\u2019s new campus. For years, the developer has tried to develop the site into a mixed-use urban center. Development plans even went before voters in 2016, but the ballot measure lost. In March of 2018, the developer again applied for permits, this time invoking SB 35. The application included more than 2,400 homes, 50% of which would be affordable. Per SB 25, the City of Cupertino had 180 days to respond to the request for permits. In September of 2018, the Cupertino City Council approved a separate plan for the site that had been in development for more than a year, giving the developer the option of moving forward with its own plan or implementing the City\u2019s, which called for over 2,900 housing units. The developer has not yet select a plan to implement.\n\n",
        "resources": {
          "titles": "League of California Cities: SB 35",
          "links": "\n\n\nhttps://www.cacities.org/Top/News/News-Articles/2018/February/SB-35-Determinations-Issued;-What-s-Next-for-Citie"
        }
      },
      {
        "considerations": "In Massachusetts, Housing Production Plan (HPP) guidelines already require consideration of development constraints: \"Development constraints and limitations on current and future needs should be clearly articulated.\" A more specific constraints analysis, similar to that required by AB 879, could be integrated into individual HPPs or into the state HPP requirements.  ",
        "what": "In 2017, California passed AB 879, legislation requiring its municipalities and counties to include an expanded analysis of constraints on housing development in their Housing Elements of their General Plans, and then take steps to remove them. Local governments had already been required to document constraints including land use controls, building codes and their enforcement, site improvements, fees and other exactions required of developers, local processing and permit procedures, availability of financing, the price of land, and the cost of construction. AB 879 expands the list of constraints to include locally adopted ordinances that directly impact the cost and supply of residential development, requests to develop housing at lower densities, the length of time between zoning approval and submission of a building permit, and other factors that may hinder the construction of a locality\u2019s share of the regional housing need. Local governments must also document existing and proposed efforts to remove stated constraints. ",
        "title": "Streamlined Project Permitting and Review ",
        "overview": "Efficient and clear development permitting processes based on analysis of the existing framework and identification of areas for improvement",
        "who": "Local governments in CA prepare housing elements, including an analysis of constraints, and carry out activities to remove stated constraints. \n\nCA Housing and Community Development Department reviews and approves local housing elements.",
        "principles": [
          engagement,
          production
        ],
        "adoption": "Legislation",
        "location": "California",
        "where": "California - This new legislation became effective in California in 2017. Its utility and consequences remain to be seen. ",
        "resources": {
          "titles": "AB 879 Analysis\n\nBill 879 Text",
          "links": "http://alcl.assembly.ca.gov/sites/alcl.assembly.ca.gov/files/AB%20879%20analysis.pdf\n\nhttps://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB879"
        }
      },
      {
        "considerations": "Technically, bill H.4075 can still pass this year in what is called \u201cinformal session\" if it has unanimous support from both the House and Senate. If the bill fails to pass before the end of informal session, the Governor will have to reintroduce it at the start of the next legislative session in 2019. ",
        "what": "Massachusetts is one of only ten states in the country that requires cities and towns to secure a two-thirds supermajority vote of its legislative body to change local zoning law. All other states in New England allow municipalities to rezone by simple majority. The supermajority requirement is a barrier to new zoning that would allow for increased housing production, especially in towns where Town Meeting must approve zoning amendments. There are several examples throughout the state in the last decade where municipalities have achieved majority support for zoning changes, but have failed to secure a supermajority. Changing the threshold to a simple majority would make it easier to secure passage of zoning amendments that promote the creation of new housing while still requiring municipalities to build substantial constituent support for zoning changes.",
        "title": "Zoning Change by Simple Majority",
        "overview": "Removes barriers to new Allows cities and towns to adopt certain zoning changes by a simple majority vote, rather than two-thirds super majority.",
        "who": "The MA legislature has the power to lower the vote threshold from supermajority to simple majority.\n\nLocal governments can independently approve zoning changes by simple majority.",
        "principles": [
          engagement,
          production,
          diversity,
          location,
          affordability,
          complete
        ],
        "adoption": "Local Action",
        "location": "Nationwide (including all Northeastern states except MA)",
        "where": "Nationwide - Zoning changes by simple majority is a best practice across the country with little exception, Massachusetts being one. In 2017, Governor Baker introduced bill H.4075, \"An Act to Promote Housing Choices,\" to allow cities and towns to adopt certain zoning best practices by a simple majority vote, rather than the two-thirds supermajority currently required. Zoning changes that would qualify for the simple majority threshold include changes to promote development of mixed-use and multifamily development, starter homes, and accessory dwelling units; 40R \u201cSmart Growth\u201d zoning in town centers and near transit; granting increased density through a special permit process; allowing for the transfer of development rights; enacting natural resource protection zoning; and reducing parking requirements and dimensional requirements, such as minimum lot sizes.",
        "resources": {
          "titles": "Governor Charlie Baker Housing Choice Legislation Testimony\n\nBill H.4075: An Act to Promote Housing Choices",
          "links": "https://www.mass.gov/news/baker-polito-administration-testifies-on-housing-choice-initiative\n\nhttps://malegislature.gov/Bills/190/H4075"
        }
      },
      {
        "considerations": "Zoning reform advocates would have to reintroduce new bills in the next legislative session in order for comprehensive zoning reform or any of the individual provisions of the Great Neighborhoods legislation to be realized at a statewide scale. There are several provisions that municipalities can adopt on their own without legislation, such as expanding zoning for multifamily housing and accessory dwelling units. Advocates for zoning reform can encourage their local municipalities and legislators to support these changes. ",
        "what": "The Great Neighborhoods legislation aims to update Massachusetts zoning law, which has not been significantly changed in over 50 years, to prevent the kind of restrictive zoning that suppresses housing production even in the face of widespread demand. This legislation consists of a set of new requirements and planning tools to encourage greater housing production and more inclusive communities, including:\n\u2022 Requiring that communities allow multifamily housing, accessory dwelling units, and live-work spaces in sensible locations\n\u2022 Authorizing inclusionary zoning, site plan reviews, greater discretion in decisions regarding variances, and development impact fees for nearby but off-site impacts\n\u2022 Providing developers the option to cluster developments on smaller adjacent lots to conserve open space\n\u2022 Reducing excessive vesting rights for developers\n\u2022 Prohibiting exclusionary zoning practices that discriminate on the basis of race, income, and family status\n\u2022 Streamlining requirements for master planning \n\u2022 Establishing a training program for planning boards and boards of appeals\n\u2022 Allowing cities and towns to decide what voting majority (simple majority vs. supermajority) to use for rezoning and project approvals",
        "title": "Great Neighborhoods Legislation (House 2420 and Senate 81)",
        "overview": "Supports increased housing choices for households by limiting restrictive zoning against multifamily housing and accessory dwelling units.",
        "who": "State legislature\n\nLocal governments can independently adopt some of these reforms.",
        "principles": [
          engagement,
          production,
          diversity,
          location,
          affordability
        ],
        "adoption": "Legislation",
        "location": "Massachusetts",
        "where": "Massachusetts - In the 2017-18 legislative session, an attempt to pass certain provisions of the Great Neighborhoods legislation, including those pertaining to multifamily housing and accessory dwelling units, as amendments to the Housing Choice bill was unsuccessful. Despite being endorsed by over 100 organizations and local leaders, demonstrating broad support from advocacy organizations, business groups and municipal officials, the Great Neighborhoods legislation failed to secure sufficient support in the House of Representatives. ",
        "resources": {
          "titles": "Smart Growth Alliance: Great Neighborhoods",
          "links": "https://www.great-neighborhoods.org/"
        }
      },
      {
        "considerations": "Right size parking is a planning tool. Findings from this type of data collection and analysis can inform parking recommendations in local plans, updates to zoning code for a particular district or across a municipality, or specific changes during the site plan review processes.    ",
        "what": "Parking requirements that are uniform across an entire municipality and development types typically lead to the construction of excess parking. Constructing parking facilities is costly, and that cost can be passed on to the occupants of the housing units those spaces are tied to. Right Size Parking (RSP) leverages up-to-date local parking demand information to guide parking supply and management decisions. Data collection and demand modeling form the core of RSP. Planners collect parking utilization data on a statistical sample of properties within a defined area during a period when utilization is highest, typically midnight on weekdays. Planners feed this data into a model of parking demand to understand the key drivers of parking utilization in a given area, such as location, neighborhood characteristics, and development site conditions. Some local governments have shared this information through web-based tools that allow users to estimate parking demand for specific building and neighborhood contexts in order to support local decision making. Parking requirements are then updated through local zoning in response to the findings of these analyses so that they meet but do not exceed parking demand.",
        "title": "Right Size Parking",
        "overview": "Uses parking demand data to inform development of parking requirements and demand management programs.",
        "who": "Local government\n\nRegional government\n\nAcademic institutions",
        "principles": [
          engagement,
          production,
          location
        ],
        "adoption": "Local Action",
        "location": "Greater Boston Region, MA\nKing County, WA\nWashington, DC",
        "where": "King County, WA - The King County Right Size Parking Project provides context-sensitive multifamily residential parking demand information on a website to guide stakeholder decisions about building new parking and managing existing parking. The County's web-based mapping tool allows users to estimate parking use for multifamily developments in the context of specific sites. The tool is based on a model using parking utilization data collected in 2012 at over 200 developments across King County. The County also provides a number of resources and incentives for municipalities and developers that adopt data-informed parking pricing and right-sizing strategies in residential and commercial developments. \n\nArlington, Chelsea, Everett, Malden, and Melrose, MA - In 2017, the Metropolitan Area Planning Council released findings from the first phase of the Metro Boston Perfect Fit Parking Initiative. The agency conducted a survey of parking supply and utilization for 265 properties across the 5 municipalities. The initiative found that nearly one-quarter of the observed parking spaces were vacant during anticipated peak utilization hours. In 2019, MAPC plans to collect data from additional communities and create a web-based tool to support decision-making about parking requirements. ",
        "resources": {
          "titles": "King County Right Size Parking\n\nDC Parking Tool\n\nMetro Boston Perfect Fit Parking Initiative",
          "links": "https://www.kingcounty.gov/depts/transportation/metro/programs-projects/transit-corridors-parking-and-facilities/right-size-parking.aspx#calculator\n\nhttp://parkrightdc.org/\n\nhttp://perfectfitparking.mapc.org/"
        }
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          design,
          stability,
          fair
        ],
        "overview": "Municipal zoning requiring new developments in a TOD Overlay District to include a certain percentage of affordable housing units. ",
        "location": "Abington, MA\nAtlanta, GA\nCanton, MA\nColumbus, OH\nConcord, MA\nDenver, CO\nNeedham, MA\nSomerville, MA",
        "resources": {
          "titles": "Transit-Oriented Development Overlay District Model Bylaw",
          "links": "\n\nhttp://www.mass.gov/envir/smart_growth_toolkit/bylaws/TOD-Bylaw.pdf"
        },
        "title": "Transit-Oriented Development (TOD) Overlay"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location
        ],
        "overview": "Municipal strategy to encourage developers and building managers to separate parking charges from rent or purchase prices. ",
        "location": "Nationwide",
        "resources": {
          "titles": "MAPC Perfect Fit Parking \n\nGreenbelt Alliance: Smart Infill Guide",
          "links": "http://perfectfitparking.mapc.org/\n\nhttps://www.greenbelt.org/research/smart-infill/"
        },
        "title": "Unbundled Parking and Housing"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity
        ],
        "overview": "Municipal or state regulation waiving or reducing certain requirements and fees that disproportionately impact ADU construction, such as water and sewer connection fees or parking requirements.",
        "location": "Santa Cruz, CA              \nCalifornia",
        "resources": {
          "titles": "Terner Center ADU Update\n\n\n\n\n\nPioneer Institute ADU Report",
          "links": "https://ternercenter.berkeley.edu/blog/adu-update-early-lessons-and-impacts-of-californias-state-and-local-policy\n\nhttps://pioneerinstitute.org/economic_opportunity/study-boston-area-communities-should-loosen-restrictions-for-accessory-dwelling-units/"
        },
        "title": "Accessory Dwelling Unit (ADU) Regulations"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          location,
          complete
        ],
        "overview": "TDR allows density rights from at-risk affordable housing units to be \"bought\" by developers as density credits; some cities and towns establish TDR banks to purchase development rights and sell them at a later date when there is more demand for development rights.",
        "location": "Palm Beach County, FL\nSeattle, WA",
        "resources": {
          "titles": "Smart Growth Toolkit: Transfer of Development Rights",
          "links": "https://www.mass.gov/service-details/smart-growth-smart-energy-toolkit-modules-transfer-of-development-rights-tdr"
        },
        "title": "Transferable Development Rights Bank (TDR)"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          diversity
        ],
        "overview": "Municipal zoning that allows individual lot sizes within a development to vary from maximum allowable density, provided that the average size in the development as a whole meets the requirements. ",
        "location": "New Hampshire",
        "resources": {
          "titles": "New Hampshire Lot Size Averaging",
          "links": "https://nnecapa.org/blog/toolkit/location/new-hampshire/lot-size-averaging/"
        },
        "title": "Lot Size Averaging"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          diversity,
          location
        ],
        "overview": "Municipal zoning that establishes minimum, rather that maximum, densities in districts targeted for growth. ",
        "location": "Concord, CA",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide",
          "links": "https://www.greenbelt.org/research/smart-infill/"
        },
        "title": "Minimum Densities"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          diversity,
          location,
          complete
        ],
        "overview": "Municipal zoning that allows different uses to co-locate within a zone as long as the development achieves specified performance criteria based on planning goals.",
        "location": "Bedford, NH",
        "resources": {
          "titles": "Performance Zoning",
          "links": "http://www.nashuarpc.org/files/7213/9042/4981/FS34_Performance_Zoning.pdf"
        },
        "title": "Performance Zoning"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          diversity,
          location,
          complete
        ],
        "overview": "Municipal zoning that groups residential properties on a site in order to preserve the remaining land as open space.  ",
        "location": "Wayland, MA",
        "resources": {
          "titles": "Livable New York Resource Manual: Cluster Zoning",
          "links": "https://aging.ny.gov/LivableNY/ResourceManual/PlanningZoningAndDevelopment/II2b.pdf"
        },
        "title": "Cluster Development"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          complete
        ],
        "overview": "Municipal zoning that allows for smaller dwelling units within areas zoned for single-family housing. ",
        "location": "Seattle, WA",
        "resources": {
          "titles": "MRSC Cottage Housing",
          "links": "http://mrsc.org/Home/Explore-Topics/Planning/Specific-Planning-Subjects,-Plan-Elements/Cottage-Housing.aspx"
        },
        "title": "Cottage Housing"
      },
      {
        "additional": true,
        "principles": [
          production,
          diversity,
          location
        ],
        "overview": "Municipal zoning that encourages development in existing built-out areas, taking advantage of existing infrastructure and preserving undeveloped greenfields. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide",
          "links": "https://www.greenbelt.org/research/smart-infill/"
        },
        "title": "Infill Development"
      },
      {
        "additional": true,
        "principles": [
          production,
          diversity,
          location,
          complete
        ],
        "overview": "Municipal zoning that co-locates two or more types of land uses within a single building or project. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide",
          "links": "http://www.greenbelt.org/wp-content/uploads/2011/11/SmartInfill_forweb.pdf"
        },
        "title": "Mixed-Use Development"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          diversity,
          location
        ],
        "overview": "Municipal zoning that allows development on lots smaller than that typically permitted in single-family zoning districts. ",
        "location": "Eugene, OR\nEverett, WA\nLos Angeles, CA\nMarysville, WA\nPortland, OR",
        "resources": {
          "titles": "HUD Small Lot Ordinance\n\nPuget Sound Regional Council: Small Lot Development",
          "links": "https://www.huduser.gov/portal/casestudies/study_102011_1.html\n\nhttps://www.psrc.org/sites/default/files/hip_small_lots.pdf"
        },
        "title": "Small Lot Development"
      },
      {
        "additional": true,
        "principles": [
          production,
          diversity,
          location
        ],
        "overview": "Municipal zoning that allows housing to be sited on the property line, creating more compact development and maximizing usable space. ",
        "location": "New York, NY",
        "resources": {
          "titles": "Zero Lot Line Development",
          "links": "https://www.psrc.org/zero-lot-line-development"
        },
        "title": "Zero Lot Line Development"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          diversity,
          location,
          stability,
          fair
        ],
        "overview": "Municipal zoning that allows mobile and manufactured homes to be located in single-family zones to increase affordability and housing choice. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Curbed: Mobile Manufactured Housing",
          "links": "https://www.curbed.com/2018/3/2/17058882/mobile-manufactured-homes-affordable-housing-crisis"
        },
        "title": "Mobile/Manufactured Homes"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          diversity,
          design,
          stability,
          fair
        ],
        "overview": "Municipal zoning that allows smaller unit sizes in exchange for shared amenities.",
        "location": "Chicago, IL\nChattanooga, TN\nHouston, TX\nKalamazoo, MI\nLos Angeles, CA\nNew York, NY\nPhiladelphia, PA\nSeattle, WA\nSan Francisco, CA\nWashington, DC",
        "resources": {
          "titles": "Urban Land Institute: The Macro View on Micro Units\n\nCurbed: Micro Housing Map",
          "links": "http://uli.org/wp-content/uploads/ULI-Documents/MicroUnit_full_rev_2015.pdf\n\nhttps://www.curbed.com/maps/microhousing-micro-dwelling-small-space-living-apartment"
        },
        "title": "Microhousing/Single Room Occupancy Housing"
      },
      {
        "additional": true,
        "principles": [
          production,
          preservation,
          affordability,
          diversity,
          stability,
          fair
        ],
        "overview": "Municipal zoning that enables co-ops, co-housing, rent-to-own and other hybrid tenures as a way to improve affordability and access for a broader range of households. ",
        "location": "Vancouver, Canada",
        "resources": {
          "titles": "Housing Vancouver Strategy\n\nHomes for All: Communities Over Commodities",
          "links": "https://council.vancouver.ca/20171128/documents/rr1appendixa.pdf\n\nhttps://homesforall.org/wp-content/uploads/2018/03/Communities-Over-Commodities_Full-Report.pdf"
        },
        "title": "Diverse Housing Tenures"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          diversity,
          location
        ],
        "overview": "Allows larger single-family lots to be subdivided into two or more narrower lots, each of which can accommodate a house. ",
        "location": "Nashville, TN\nPortland, OR\nSeattle, WA",
        "resources": {
          "titles": "Portland Narrow Lots\n\nPortland Narrow Lots Presentation",
          "links": "https://www.portlandoregon.gov/bps/article/657700\n\nhttps://www.portlandoregon.gov/bps/article/558043"
        },
        "title": "Lot Subdivision for \"Skinny\" Housing"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          location,
          complete
        ],
        "overview": "Municipal zoning that allows housing to be built on the same property as public assets, such as schools, libraries, and community centers. ",
        "location": "Miami, FL",
        "resources": {
          "titles": "Miami-Dade Wheatley Project\n\n\n\nBoston New Urban Mechanics: Housing with Public Assets",
          "links": "https://www.miamiherald.com/news/local/community/miami-dade/article206839799.html\n\nhttps://www.boston.gov/departments/new-urban-mechanics/housing-innovation-lab/housing-public-assets"
        },
        "title": "Co-location of Housing and Public Land Uses"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          design,
          stability,
          fair
        ],
        "overview": "Requires municipalities to zone a sufficient amount of land to accommodate their \"fair share\" of affordable housing (based on state and regional job and population growth projections), and ensures that the land is appropriate for housing development. ",
        "location": "California",
        "resources": {
          "titles": "Bill 1397 Text\n\nCalifornia Budget & Policy Center: 2017 Housing Legislative Package",
          "links": "\n\nhttps://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180AB1397\n\nhttp://calbudgetcenter.org/blog/understanding-recently-enacted-2017-state-legislative-housing-package/"
        },
        "title": "Fair Share Zoning "
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          design,
          stability,
          fair
        ],
        "overview": "Allows developers to override local zoning in communities that have less than 10% of their housing stock on the MA Subsidized Housing Inventory if the development project includes 20-25% affordable housing.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Chapter 40B",
          "links": "https://www.mass.gov/chapter-40-b-planning-and-information"
        },
        "title": "MGL Chapter 40B"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          design,
          stability,
          fair
        ],
        "overview": "Used by municipalities to reduce or eliminate permitting fees for affordable housing developments.",
        "location": "",
        "resources": {
          "titles": "Alliance for Housing Affordability: Fee Waivers and Reductions",
          "links": "https://www.housingallies.org/guide/minimize-barriers/fee-waivers/"
        },
        "title": "Fee Waivers"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          preservation,
          affordability,
          diversity,
          design,
          stability,
          fair
        ],
        "overview": "Used by municipalities to incentivize owners of existing unpermitted ADUs to obtain the building permits and inspections necessary to legalize the units.",
        "location": "Santa Cruz, CA                              Seattle, WA",
        "resources": {
          "titles": "Terner Center: Jumpstarting Accessory Dwelling Units",
          "links": "\n\nhttp://ternercenter.berkeley.edu/more-ADUs"
        },
        "title": "Accessory Dwelling Unit (ADU) Amnesty "
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          location,
          design,
          stability,
          fair
        ],
        "overview": "Used by municipalities to allow a developer to build to higher density levels in exchange for affordable housing. ",
        "location": "",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide",
          "links": "https://www.greenbelt.org/research/smart-infill/"
        },
        "title": "Density Bonus"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "Used by municipalities to allow developers the flexibility to depart from existing zoning requirements in exchange for fulfilling specific goals for the site, such as providing a certain number of affordable units. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Planned Unit Development Tool",
          "links": "ftp://ftp.wi.gov/DOA/public/comprehensiveplans/ImplementationToolkit/Documents/PUD.pdf"
        },
        "title": "Planned Unit Development"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "Encourages municipalities to adopt overlay districts that encourage denser and mixed-use residential development.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Chapter 40R",
          "links": "https://www.mass.gov/service-details/chapter-40r"
        },
        "title": "MGL Chapter 40R"
      },
    ],
  },
  {
    title: 'Programming',
    practices: [
      {
        "considerations": "Cities and towns must be proactive in building consensus around which areas comprise the sending and receiving sites, and also closely monitor market conditions to ensure that there is sufficient market demand for development rights.\n\nA major issue in the success of a TDR program is the difficulty of connecting willing sellers with interested purchasers, given that a developer in a receiving area may need additional rights at a time that the private market has none for sale, or vice versa. This is a particular challenge in geographically small TDR programs with few parcels. Some programs have tried to eliminate timing issues by establishing TDR banks that can act as an interim title holder. To accomplish this, cities and towns must have access to funding with which they can purchase development rights. MAPC has recommended that the state legislature establish a TDR revolving loan fund. \n\nTDR should complement, rather than compete with, other housing affordability programs. In communities that already provide bonus density in exchange for affordable units, cities and towns should include an affordability requirement in their TDR program. Developers should not have the option to achieve increased density by choosing TDR over another bonus density program that requires affordable units. ",
        "what": "Transferable Development Rights (TDR) is a market-based tool that municipalities can use to facilitate the transfer of density rights from one site to another. Generally, municipalities can use this tool preserve rural \"sending sites\" for open space or agricultural land preservation. The owners of these sites can transfer their density rights to \"receiving sites\" for higher-density development. Purchasers of development rights can build at higher densities than would otherwise be allowed by zoning. Some cities and towns establish TDR banks to purchase development rights and sell them at a later date when there is more demand. \n\nTDR can be used to preserve or develop affordable housing by designating existing affordable housing properties as sending sites; once the excess density is purchased, the payment can be used to fund renovations or preservation of affordability at the sending site. Alternatively, municipalities can require that a portion of units developed through a TDR bonus be set aside as affordable. ",
        "title": "Transferable Development Rights (TDR)",
        "overview": "Allows density rights from one site to be \"bought\" by developers or landowners and used on other sites.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          location,
          complete
        ],
        "adoption": "Local Action ",
        "location": "Falmouth, MA\nPalm Beach County, FL\nSeattle, WA",
        "where": "Falmouth, MA - Falmouth adopted one of Massachusetts' first TDR bylaws. The Falmouth TDR bylaw establishes \"sending\" and \"receiving\" sites based on a variety of criteria such as allowable use and the size of the parcel(s) in either site. TDR can only be used as part of a subdivision application. Incentives are added in the form of density bonuses. Bonuses range 20 to 40% depending on which area is sending and which area is receiving.\n\nPalm Beach County, FL - The county adopted a TDR program in 1980 primarily to preserve environmentally sensitive land and agricultural lands. In 2006, Palm Beach County amended its TDR program to require that at least 50 percent of housing units developed through the use of TDRs be set aside as workforce units. Developers can purchase TDRs from property owners in sending areas, as well as through the county's TDR bank. The county sells TDRs for proposed workforce units at a cost of $1.00 per TDR, as opposed to the market-rate cost of $50,000 per TDR. ",
        "resources": {
          "titles": "Smart Growth Toolkit: Transfer of Development Rights",
          "links": "\n\nhttps://www.mass.gov/service-details/smart-growth-smart-energy-toolkit-modules-transfer-of-development-rights-tdr"
        }
      },
      {
        "considerations": "Municipalities with Good Landlord Programs should ensure they have the capacity to provide support to participating landlords. Educational campaigns may be needed to recruit landlord participants. Partnerships with qualified homeless service agencies may help refer qualifying households to the program.",
        "what": "Good Landlord programs encourage landlords to rent their units to households with housing vouchers and to low-income or formerly homeless households at below-market rents. Landlord incentives vary by program, and can include tax breaks; signing bonuses; access to funds that can cover security deposits, damage costs, or monthly rental costs if a tenant vacates the unit unexpectedly; waived permit fees for repairs or improvements; loans to cover building renovations; and trainings for handling tenant relations.",
        "title": "Good Landlord Program",
        "overview": "Offers incentives and training for landlords who agree to rent to low-income households at affordable rents, households with vouchers, or the formerly homeless. ",
        "who": "Local government",
        "principles": [
          engagement,
          preservation,
          affordability,
          stability
        ],
        "adoption": "Local Action",
        "location": "Austin, TX\nBoston, MA\nChicago, IL\nNew York, NY\nSan Francisco, CA",
        "where": "\n\nBoston, MA - In Boston, the Landlord Guarantee Pilot Program supports landlords that choose to rent to formerly homeless households. Participating landlords receive a dedicated landlord partner from the Boston Office of Housing Stability, access to mediation services, and access to funds covering potential losses such as unpaid rent and excessive damages. \n\nSeattle, WA - In Seattle, the Landlord Liaison Project (LLP) connects previously homeless households with willing landlords. In return for housing, the City provides landlords with access to a 24-hour landlord hotline, rapid response to issues within two business days, and a mechanism to file damage claims and receive compensation via a Landlord Risk Reduction Fund (comprised of funding from King County, the City, and United Way). LLP partners with human service agencies that identify households eligible for Good Landlord housing and provide one year of ongoing case management to them, enabling tenants to build the skills and resources needed for long-term stability.\n\n",
        "resources": {
          "titles": "Urban Institute: Incentivizing Landlords\n\n\nBoston Landlord Guarantee Program",
          "links": "https://www.urban.org/urban-wire/increase-housing-choice-try-incentivizing-landlords\n\nhttps://www.boston.gov/news/landlord-guarantee-program-encourages-renting-homeless"
        }
      },
      {
        "considerations": "\nDeveloping a CBA is often a highly complex, laborious, and lengthy process. Community groups entering into CBAs must have the technical capacity and resources to stay committed through the entire negotiation and implementation process. \n\nAlthough it is rare for local governments to participate in CBAs, they can support the use of CBAs by ensuring that residents and community-based organizations are well-informed of proposed development projects and their progress, encouraging developers to negotiate in good faith with community coalitions, and being respectful of and responsive to the negotiation process. \n\nCBAs are often negotiated concurrently with a development agreement made between a developer and public agency. CBAs have some advantages over developer agreements; as agreements between two private parties, CBAs are free from the legal constraints that often limit agreements between government agencies and private developers. However, development agreements are often easier to enforce. ",
        "what": "A Community Benefit Agreement (CBA) is a legally binding contract between a developer and a coalition of community groups that establishes public benefits to which the developer has agreed in exchange for the coalition's commitment to support the project. These benefits can be wide-ranging, including living wage provisions, local hiring, affordable housing, health or recreational facilities, and childcare centers. The CBA may even include specific project mitigation, such as provision of playground facilities to replace open space lost to the project. ",
        "title": "Community Benefit Agreements (CBAs)",
        "overview": "Agreements between a developer and a coalition of community groups that establishes public benefits provided by the developer in exchange for the coalition\u2019s commitment to support the project.",
        "who": "Community groups \n\nPrivate developers",
        "principles": [
          engagement,
          production,
          preservation,
          complete
        ],
        "adoption": "Local Action",
        "location": "Los Angeles, CA\nMilwaukee, WI\nSan Francisco, CA",
        "where": "Los Angeles, CA - One of the country's first CBAs was negotiated between the Figueroa Corridor Coalition for Economic Justice and developers of an entertainment district adjacent to LA's Staples Center arena in 2001. The CBA included living wages for construction workers and employees of any on-site commercial or retail development, local hiring provisions, consultation rights for the coalition regarding future commercial tenants, an assessment of local recreational needs and funding to implement recommendations, a residential parking program, and an affordable housing commitment equal to 20% of the units constructed. \n\nMilwaukee, WI - Adopted in 2005, the Park East Redevelopment Compact represents a rare example of a CBA between a public agency and a community group coalition. The Good Jobs and Livable Neighborhoods Coalition, made up of 27 community based organizations, secured a CBA with Milwaukee to ensure specific public benefits in connection to a 64-acre redevelopment in the middle of the downtown. The CBA requires affordable housing equal to 20% of any new housing built on county-owned land, green building features, expanded transit, contracting with minority- and women-owned businesses, workforce development opportunities, and living wage provisions. ",
        "resources": {
          "titles": "Community Benefits 101\n\nNational Examples of Community Benefit Agreements\n\n\n\nBoston Fed: Community Benefits\n\n",
          "links": "\n\nhttp://www.forworkingfamilies.org/page/cba-101\n\nhttp://somervillecdc.org/sites/default/files/scc-minimal/files/national_examples_of_community_benefits_agreements_cbas.pdf\n\nhttps://www.bostonfed.org/publications/communities-and-banking/2017/spring/do-community-benefits-agreements-benefit-communities.aspx"
        }
      },
      {
        "considerations": "Shared equity ownership is successful because it is known and marketed as an \"ownership\" opportunity despite the restrictions on the units. However, shared equity agreements are often complex and difficult to translate, leaving some shared equity owners frustrated or confused when they wish to finance repairs or sell. A successful program ensures that buyers can accumulate sufficient equity to justify long-term maintenance costs and support some wealth creation for lower-income homeowners. Cities and towns should also invest in capacity to ensure that prospective buyers are well-informed of the resale restrictions associated with shared equity. ",
        "what": "Shared equity ownership allows income-eligible households to purchase homes at below-market prices; in exchange, the new homeowners accept deed restrictions that ensure the units will be resold to other income-eligible households when the times comes. Owners are therefore limited in the accumulated equity they can extract from future sales, but the home remains affordable to future low- or moderate-income households. \n\nThese programs are typically administered by local municipalities, which  accept and select applicants and assist with resale. Programs vary in how much equity they allow the owner to keep, balancing the goals of wealth creation for lower-income households with the need for continued housing affordability. Shared equity ownership is a broad designation that covers deed-restricted affordable housing (often created though inclusionary zoning), community land trusts, and limited-equity housing cooperatives. ",
        "title": "Shared Equity Ownership Program",
        "overview": "Enables income-eligible households to share in the cost of a home purchase in return for restricting future sales to income-eligible households.  ",
        "who": "Local government\n\nDevelopers",
        "principles": [
          engagement,
          production,
          affordability,
          diversity
        ],
        "adoption": "Local Action",
        "location": "Austin, TX\nBoston, MA\nCambridge, MA\nFlorida\nSan Francisco, CA\nWashington, DC\nWellfleet, MA",
        "where": "Breckenridge, CO - In 1988, Breckenridge adopted a deed-restricted workforce housing program to address a lack of affordable housing and the long commutes experienced by the workforce needed to maintain the town's tourism economy. The program has created roughly 1,000 affordable units since its inception, about half of which are owner-occupied. Occupants must work in Breckenridge in order to qualify for a deed-restricted home, and the equity they are allowed to keep when selling the home varies in relation to when the housing was purchased. Breckenridge developed its deed-restricted housing stock through a variety of developer incentives including bonus density, annexation fee waivers, investment fees for water service, building permit fee waivers, and a real estate transfer tax exemption. The town has also generated public funding for use towards deed-restricted housing development, including a county-wide sales tax and an affordable housing impact fee.",
        "resources": {
          "titles": "Urban Institute: Affordable Homeownership\n\n\nNational Housing Institute: Shared Equity Homeownership",
          "links": "https://www.urban.org/research/publication/affordable-homeownership\n\nhttps://www.nationalservice.gov/sites/default/files/evidenceexchange/FR_CHIP%20Final%20Report_2017.pdf"
        }
      },
      {
        "considerations": "Cooperatives are democratically managed by their members. Their success requires that members have the capacity to be informed and actively engaged. Cooperative management involved the combined skills of real estate asset management and non-profit financial management. Establishing the cooperative and ensuring it runs in an efficient and democratic manner requires technical and financial resources that should be factored into pre-development and ongoing operating costs. \n\nLimited Equity Cooperatives require subsidy like any other affordable housing development. Additionally, local lenders and property appraisers may not be familiar with the cooperative model, making it more challenging to secure funding. Local governments can support cooperative development by ensuring these projects are eligible for public subsidy and facilitating access to appropriate lending, either by independently developing a loan product or connecting cooperatives and their advocates to technical assistance. ",
        "what": "A housing cooperative (co-op) is a form of shared ownership wherein residents buy shares or membership in the cooperative housing corporation rather than directly owning their particular unit. Cooperatives are most commonly either market-rate or limited-equity. A limited-equity cooperative, designed to promote long-term affordability, restricts the amount of equity a member can earn from the resale of their cooperative shares.\n\nCooperatives typically obtain a blanket mortgage to acquire, build, or renovate a building. Members are not personally liable and need not individually qualify for the co-op blanket mortgage, which makes it easier for people who may not qualify individually to acquire an ownership stake in housing. Co-op members can finance their share of the cooperative through a share loan, secured by their interest in the cooperative. Members are considered homeowners for tax purposes and benefit from mortgage interest and real estate tax deductions. Co-ops further promote affordable ownership through economies of scale; cost-sharing among members facilitates major home improvements and emergency repairs that may otherwise jeopardize a homeowner's ability to stay in his or her home. ",
        "title": "Housing Cooperatives",
        "overview": "A housing construct within which participating households share housing costs and equity accrual.",
        "who": "\n\nCommunity groups and technical assistance providers \n\nCo-op members \n\nLocal governments can facilitate access to financing and ensure the permitting process does not obstruct development of a cooperative.",
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          preservation
        ],
        "adoption": "Local Action",
        "location": "Boston, MA\nBoulder, CO\nCambridge, MA\nNew York, NY\nSt. Paul-Minneapolis, MN",
        "where": "Minneapolis-St. Paul, MN - Shared Capital Cooperative was founded in 1978 to facilitate bank financing for cooperatives. A cooperative itself, the organization now consists of 225 member cooperatives spread across 35 states. Shared Capital Cooperative raises funding from social investors and operates a self-help revolving loan fund to provide financing to housing and worker cooperatives. It is considered a Community Development Financial Institution that made 850 loans totaling $50 million to cooperatives across the country. ",
        "resources": {
          "titles": "Policy Link: Limited Equity Cooperatives\n\nNorthcountry Cooperative Development Fund: Housing Cooperatives \n\nNational Association of Housing Cooperatives",
          "links": "\n\nhttp://www.policylink.org/sites/default/files/limited-equity-housing-cooperatives.pdf\n\nhttp://www.uwcc.wisc.edu/pdf/HousingCoopsAccessibleLastingHomeOwnership.pdf\n\nhttps://coophousing.org/resources/owning-a-cooperative/buying-into-a-housing-cooperative/"
        }
      },
      {
        "considerations": "The dual ownership aspect of Community Land Trusts can be challenging for prospective homeowners. It is critical that prospective homeowners clearly understand the resale restrictions on their CLT home and the benefits and restrictions that come with the CLT's permanent ownership of the land. \n\nFormation of a CLT is a highly technical process that can be daunting for even the most experienced developers. A number of technical assistance providers, such as the National Community Land Trust Network and the Greater Boston Community Land Trust Network, have organized to provide assistance to new CLT initiatives. Many cities and towns also support CLT development through technical assistance, grants, low-interest loans, land donation, and reduced regulatory fees. ",
        "what": "A Community Land Trust (CLT) is a private, non-profit corporation created to provide lasting affordability by retaining permanent ownership of the CLT land. CLT homeowners purchase only the building, not the land itself, reducing the barrier to entry for low- and moderate-income homebuyers. CLT homes are often sold with deed restrictions requiring that the house be sold back to the CLT or to a low-income household for an affordable price. Many CLTs allow homeowners to retain some of the appreciation on the home, but a CLT's primary goal is to ensure continued affordability for future homeowners. \n\nCLTs are usually organized as \"membership corporations\" with representation from both CLT residents and other members of the community. CLTs acquire property in a variety of ways. Many purchase properties on the open market with the help of funding from public or philanthropic sources. Cities and towns may also prioritize CLTs when disbursing public land. ",
        "title": "Community Land Trust",
        "overview": "Promotes affordable housing by selling the housing units but retaining ownership of the land on which the housing sits",
        "who": "Local governments often help establish CLTs through land donation and/or technical and financial assistance.\n\nCommunity groups typically advocate for resources to establish or grow CLTs, and can be effective partners in assembling community land trust governance bodies and training residents to participate. ",
        "principles": [
          engagement,
          production,
          diversity,
          preservation,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Athens, GA   \nBoston, MA    \nBurlington, VT                                  Chapel Hill, NC                  ",
        "where": "Boston, MA \u2013 By the early 1980\u2019s the Dudley Street neighborhood had experienced decades of disinvestment and vacancy. In 1984, members of the community aided by new organizations La Alianza Hispana and the Riley Foundation came together to form the Dudley Street Neighborhood Initiative (DSNI). DSNI\u2019s early focus was on addressing widespread dumping in the neighborhood and advocacy for greater community voice in redevelopment efforts. DSNI later produced a revitalization plan that called for a community land trust that could ensure community control of land so that future redevelopment would not result in displacement. DSNI secured approval from the City to use eminent domain to acquire many of the vacant and blighted lots in the neighborhood. Over the next two decades, DSNI acquired and developed over thirty acres of land. Today, the land trust consists of 225 homes, a 10,000-square-foot community greenhouse, urban farm, a playground, gardens, and other amenities. A diverse board consisting of land trust residents and local community members governs the organization. \n\nGreater Boston, MA - Launched in 2015, the Greater Boston Community Land Trust Network aims to provide peer support and share best practices for the creation of CLTs as part of a broader housing strategy to preserve affordable housing and diverse neighborhoods, prevent eviction and speculation, and advocate for policy that aids in the creation and maintenance of CLTs. Dudley Street Neighborhood Initiative, a well-established CLT, provides technical expertise and connects potential partners. ",
        "resources": {
          "titles": "Lincoln Institute City: CLT Partnership Report\n\n\nBuilding a Livable Boston: The Case for Community Land Trusts\n\n\nPolicy Link: Community Land Trusts",
          "links": "https://www.lincolninst.edu/sites/default/files/pubfiles/the-city-clt-partnership-full.pdf\n\nhttps://pennloh.files.wordpress.com/2016/05/building-a-livable-boston-april2016ver.pdf\n\nhttp://www.policylink.org/sites/default/files/community-land-trusts.pdf"
        }
      },
      {
        "considerations": "In high-cost housing markets, EAH assistance - especially  homebuyer assistance - may not bridge the affordability gap for moderate- or low-income workers.\n\nEAH in gentrifying neighborhoods can contribute to the housing pressures faced by lower-income households who are not eligible employees. When possible, EAH should provide units for lower-income employees at prices they can afford.\n\nEAH program administrators must be knowledgeable of housing assistance, mortgage finance, and community development. EAH programs must have adequate financing and oversight.",
        "what": "EAH helps working households secure affordable housing near their workplaces and helps employers attract and keep qualified workers.  EAH can serve as a supply or demand tool for housing: programs that help workers obtain affordable housing help to meet demand through downpayment or rental assistance, while those that create new affordable housing help to build the supply through gap financing or direct contributions. In weaker housing markets, EAH can be used to attract residents and revitalize neighborhoods that have experienced disinvestment. In strong markets, it can support affordable housing options where demand is greater than supply. Most EAH programs are for homeownership, and are generally aimed at households earning 80-120% AMI. As a smart growth tool, EAH promotes clustering of jobs, housing, and transportation. Most EAH programs also provide housing counseling and forgivable loans to help with housing costs. ",
        "title": "Employer Assisted Housing (EAH)",
        "overview": "Any housing program that is financed or assisted by an employer.",
        "who": "Private companies\n\nLocal government",
        "principles": [
          engagement,
          production,
          diversity,
          affordability
        ],
        "adoption": "Local Action",
        "location": "California\nIllinois\nPennsylvania\nUniversities across the country",
        "where": "Nationwide - Numerous universities around the country have created an EAH program to provide lower-cost housing for their employees. \n\nPhiladelphia, PA - The University of Pennsylvania c+K44:K45reated an EAH program in 1998, which has enabled over 400 families to purchase homes in neighborhoods around the university's campus, and about 150 families to make home improvements.\n\nPennsylvania - The Pennsylvania Housing Finance Agency's Employer Assisted Housing Initiative allows participating employers who offer a monetary home purchase benefit to partner with the PHFA to provide homeownership loans to employees with competitive interest rates, fewer fees, and free homebuyer education.\n\nChicago, IL - The University of Chicago launched their EAH program in 2003 to promote homeownership and investment in redeveloping neighborhoods on the mid-South Side of Chicago. The program grants interest-free forgivable loans, as well as credit and homebuyer counseling services. Eligible homebuyers receive an interest-free $7,500 loan toward downpayment and closing costs. \n\nWashington, DC - The Employer Assisted Housing Program offers a deferred 0% interest loan and a matching funds grant for downpayment and closing costs to eligible government employees through community-based organizations funded by the District's Department of Housing and Community Development.",
        "resources": {
          "titles": "Policy Link: Employer Assisted Housing\n\nNeighborhood Housing Services of Chicago: Employer Assisted Housing Guidebook",
          "links": "http://www.policylink.org/resources-tools/employer-assisted-housing\n\nhttps://www.nhschicago.org/eahguidebook/index.html#page"
        }
      },
      {
        "considerations": " ",
        "what": "Affordable housing developers often struggle to compete with market-rate developers during site acquisition and hold on to acquired properties while assembling project financing, conducting community engagement, and securing regulatory approvals. Vacant site acquisition programs can facilitate access to technical assistance, financing, and regulatory streamlining to support affordable housing developers acquire vacant and underutilized properties. The services available through these programs vary greatly across communities. In areas with a high proportion of vacant land and slow market conditions, these programs may independently acquire, hold, and dispose of land to eligible developers (i.e. land banking). This practice is much less common in higher-rent cities with limited vacant land availability. In that context, technical assistance, such as help identifying and appraising potential sites, and regulatory streamlining are often features of these programs. Financial products are diverse and reflect local lending partners and context-specific challenges. Typically, a developer can access a long-term low-interest loan for site acquisition. Low- or no-interest pre-development bridge loans may also be available to assist developers in making deposits on potential acquisition sites and to defray costs of holding properties while the developer assembles other financing. ",
        "title": "Vacant Site Acquisition Program",
        "overview": "Assists affordable housing developers with land purchases for affordable housing development.",
        "who": "Local government\n\nCDFI or other lending partners\n\nAffordable housing developers",
        "principles": [
          engagement,
          production,
          diversity,
          location,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Boston, MA\nMinnesota",
        "where": "Boston, MA - In 2017, Boston's Department of Neighborhood Development (DND) partnered with LISC Boston and the Community Economic Development Assistance Corporation (CEDAC) to develop the Vacant Site Acquisition Fund to assist non-profit affordable housing developers with site acquisition. The program offers three financial products: (1) a short-term zero-interest bridge loan to assist non-profit developers with making deposits on development sites, (2) a low-interest rate acquisition loan that has a longer borrowing term than typical, and (3) short-term zero-interest loans to defray the cost of holding property for 3-5 years prior to construction. Developers also have access to assistance with finding and assessing sites and to a streamlined regulatory process. The fund is administered by CEDAC, which screens and selects applicants. Developers using Boston's program are required to dedicate at least 40% of units as affordable to households at 70% AMI or lower. ",
        "resources": {
          "titles": "Boston Vacant Site Acquisition Fund",
          "links": "\n\n\nhttps://www.boston.gov/news/vacant-site-acquisition-fund-create-more-affordable-housing"
        }
      },
      {
        "considerations": "Like Community Land Trusts, land banks tend to work best where land values are low. They primarily operate in contexts with a supply of vacant, blighted properties ready for acquisition and where strong non-profit organizations and community development corporations are ready to take ownership. \n\nIn order to be successful, land banks must find consistent and dedicated funding sources.\n\nLand banks operating at the county or regional level require ongoing coordination with state and municipal entities.",
        "what": "A land bank returns vacant, abandoned, and/or tax foreclosed property to productive use efficiently and strategically. Land banks are usually controlled by municipal or quasi-governmental entities, and have special powers, such as acquiring and holding property tax free, clearing title and back taxes, and leasing, selling, or giving property for an intentional purpose, not just to the highest bidder. This allows them to deal in vacant or abandoned properties that oftentimes have great financial and legal barriers to use, which deter potential investors from purchasing and redeveloping them. Land banks can demolish obsolete structures, remediate soil, donate land to non-profit organizations, or assemble properties for large developments. Unlike community land trusts, a land bank typically does not maintain long-term interest in or restrictions on the land it sells. \n\nA land bank can be created as a public entity through a local ordinance, or developed within existing municipal entities such as redevelopment authorities, housing departments, or planning departments. The majority of land banks are at the county or regional level, though there are municipal and state examples. Land banks are usually funded through multiple sources, including property tax revenue, grants from foundations, state and federal grants, and general fund appropriations. ",
        "title": "Land Bank",
        "overview": "Public, quasi-public, or community-owned entities created to acquire, manage, maintain, and repurpose vacant, abandoned, and foreclosed properties.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          preservation,
          diversity,
          location,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Illinois\nMichigan\nNew York\nOhio",
        "where": "Ohio - In Ohio, special fees imposed on delinquent taxpayers provide land bank funding.\n\nOhio's Neighborhood Initiative Program (NIP) is funded through the federal Hardest Hit Fund, created to aid states hit hardest by the subprime mortgage crisis. The NIP removes and greens vacant and blighted properties in targeted areas to prevent future foreclosures. County land banks can receive a reimbursement from NIP to acquire vacant property and demolish blighted structures. The land bank must identify a nonprofit organization to use the land for a community-oriented purpose. The land bank can also identify an eligible residential or business developer, or a public division, to begin construction or operations within one year.\n\nNew York - In New York, land banks are able to capture 50% of the taxes on properties returned to the tax rolls for a period of 5 years. \n\nThe New York State Land Bank Community Revitalization Initiative (Land Bank CRI) secures funding through settlements with the nation's largest banks over misconduct perpetrated during the federal housing crisis. The land bank acquires blighted or vacant property and rehabilitates (or demolishes) it to sell for affordable homeownership or rental purposes or to otherwise restore it to productive use. \n\nThe Greater Syracuse Land Bank offers several programs for land usage, including side lot sales to neighbors, greening lots, neighborhood-based lot maintenance, volunteer beautification prior to redevelopment, a home-ownership choice program, renovation energy improvements, a tenant to homeowner program, stabilization and renovation, demolition, and land assembly/banking.\n\n",
        "resources": {
          "titles": "Center for Community Progress: Land Bank Information\n\n\n\nOhio Finance Agency: Neighborhood Initiative Program\n\n\n\nBoston Fed: Modern Land Banking in Southern New England",
          "links": "\n\n\n\n\n\nhttps://www.communityprogress.net/land-bank-information-headquarters-pages-446.php\n\nhttp://ohiohome.org/savethedream/neighborhoodinitiative.aspx\n\n\nhttps://www.bostonfed.org/publications/communities-and-banking/2013/summer/modern-land-banking-can-it-work-in-southern-new-england.aspx"
        }
      },
      {
        "considerations": "RFPs for land disposition should be consistent with community goals and strategies of prior comprehensive plans, as well as with existing community needs.\n\nDisposition policies should be clearly stated to create a unified and consistent approach to land disposition through public agencies.\n\nEach parcel to be sold or disposed of should have an independent disposition appraisal, unless the cost of appraisal exceeds the value of the parcel.\n\nMunicipalities with numerous parcels eligible for disposition should consider creating a land bank or a land coordinator position to ensure consistency.\n",
        "what": "Municipalities generally start a process of land disposition by analyzing public properties where redevelopment could be feasible in a manner consistent with long-term community plans. The analysis covers public benefits and drawbacks of redevelopment, possible financial impacts, and future development potential. \n\nFollowing analysis, a Request for Qualifications (RFQ) can be posted to identify potential purchasers. Generally, qualified purchasers must not owe back taxes to the municipality, is current with any municipality-related obligations, and does not own properties that are in violation of municipal codes or ordinances.\n\nFollowing identification of eligible purchasers, a Request for Proposals (RFP) is drafted and shared to ensure that potential redevelopment meets community needs. RFPs for land disposition tend to include selling conditions and the disposition price, usually set at the fair market value of the land. Properties can be offered at a lower price if the proposed redevelopment provides significant community benefits, such as affordable housing or open space. \n\nFollowing a successful request, the municipality and selected purchasing part usually enter a legally binding \"Land Disposition Agreement\" that delineates the project\u2019s length of time and other stipulations.\n",
        "title": "Land Disposition Processes",
        "overview": "The sale, transfer, lease, rental, or exchange of public-owned property to a private entity to serve a community\u2019s needs and goals.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          diversity,
          location,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Nationwide",
        "where": "Philadelphia, PA \u2013 The City of Philadelphia established the Philadelphia Land Bank to turn vacant and tax-delinquent properties into productive uses. Residents, community groups, non-profit organizations, and for-profit businesses can purchase or lease Land Bank properties. Properties for sale or lease are listed on the Land Bank\u2019s website, which functions as an online real estate database. The Land Bank can also solicit buyers through a RFP. In addition to the Land Bank, the City created Disposition Policies to guide the disposition process for land owned by the City of Philadelphia, the Philadelphia Land Bank, the Philadelphia Redevelopment Authority, and the Philadelphia Housing Development Corporation. \n\nSan Francisco, CA \u2013 The Public Land for Housing program was created to combat San Francisco\u2019s affordability challenges by using underutilized public sites for housing. Prior to program development, an inter-agency working group was created to draft principles to guide site analysis, development criteria, and engagement with stakeholders. The draft principles for the program encourage projects that optimize land, provide public benefits, fund public services, innovate project delivery and public benefits, complement neighborhood context, and engage the community. The finalized program will include the City-supported development principles, a comprehensive menu of public benefits for the sites, policy tools and innovative strategies to achieve public benefits, and a rolling review of underutilized properties to establish a portfolio of sites.\n",
        "resources": {
          "titles": "Philadelphia Land Bank\n\nHUD Example Acquisition and Disposition Process Map\n\nMixed-Income TOD Action Guide: Public Land Disposition Plan\n\nUsing Public Land to Create Equitable Communities\n\nSF Public Land for Housing",
          "links": "http://www.philadelphialandbank.org/ \n\nhttps://www.hudexchange.info/resources/documents/ExampleLBProcessMap.pdf \n\nhttp://www.mitod.org/publiclanddispositionplan.php\n\nhttps://www.livingcities.org/blog/1056-using-public-land-to-create-equitable-communities-policy-best-practices\n\nhttp://sf-planning.org/public-land-housing-formerly-public-sites-portfolio#sites "
        }
      },
      {
        "considerations": "The US Housing and Urban Development (HUD)\u2019s reversal on implementation of Affirmatively Furthering Fair Housing and diminishing enforcement of fair housing underscore the need for municipalities to be proactive and creative about creating more inclusive communities and reducing barriers to accessing housing. \n\nTechnological changes are also making traditional marketing platforms, such as newspapers, less of a reliable resource for spreading awareness of housing programs and opportunities. Some of the best examples of affirmative marketing leverage partnerships with community-based organizations and new communication mediums to engage hard-to-reach populations. ",
        "what": "Affirmative marketing helps those least likely to apply for housing programs - because of location, language, disability, or other access barriers - to do so. Many housing funding streams include requirements for affirmative marketing plans. Massachusetts requires developers who receive Low-Income Housing Tax Credits (LIHTC) to use the State's Affirmative Marketing Guidelines. These guidelines require substantial notice of affordable housing opportunities and set standards for publicity and access to applications. Municipalities can further improve the effectiveness of affirmative marketing through creative outreach strategies that include issuing promotional materials in multiple languages and forms of media, building partnerships with local groups to conduct targeted marketing, developing materials that describe resources in the housing opportunity area, making community visits, offering application assistance, and addressing \u201cnot-in-my-backyard\u201d (NIMBY) attitudes that are hostile toward diversity. ",
        "title": "Affirmative Marketing",
        "overview": "Ensure that those least likely to apply for housing programs -because of location, language, disability, or other access barriers -are specifically encouraged to do so. ",
        "who": "Local government\n\nDevelopers \n\nLocal community groups can facilitate outreach to prospective residents.",
        "principles": [
          engagement,
          fair,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Nationwide",
        "where": "Baltimore, MD - The Baltimore Housing Mobility Program was developed to enable low-income families to relocate to racially integrated neighborhoods with low rates of poverty. The Program provides housing vouchers that can be used anywhere in the metropolitan area and takes prospective residents on tours of suburban neighborhoods. During the tour, guides point out the location of resources and amenities like transportation, shopping, housing, healthcare, and schools. Later, a housing search assistant, a former participant in the program, meets with program participants who are ready to obtain housing.\n\nOak Park Village, IL - Oak Park Village has a strong legacy of promoting racial segregation, starting with the adoption of its own fair housing ordinance in 1968, the same year as the adoption of the federal Fair Housing Act. In 1972, residents established the Oak Park Housing Center to promote integration by ensuring equal access and discouraging white flight. One of the Center's first goals was to attract more black residents to the community. They held open houses, pot luck suppers, and block parties, and conducted anti-discrimination training with realtors. The Center continuous to coordinate outreach to prospective residents and fair housing trainings for landlords and realtors to counteract discrimination and steering and promote integration. ",
        "resources": {
          "titles": "Affirmative Marketing Policy Brief\n\nBoston Affirmative Marketing Brochure\n\nMAPC Affirmative Marketing ",
          "links": "\n\nhttps://prrac.org/pdf/affirmativemarketing.pdf\n\nhttps://www.boston.gov/sites/default/files/brochure_english.pdf\n\nhttps://www.mapc.org/resource-library/affirmative-marketing/"
        }
      },
      {
        "considerations": "Eviction greatly increases a person's risk of homelessness. To wit, the number of families receiving Massachusetts Emergency Assistance has dramatically increased over the past decade to a rate much higher than the national average. Roughly half of these households cited eviction as the reason they were homeless. And yet, while Massachusetts tenants have certain rights with regards to evictions, including their day in court, few seek legal remedy either because they do not have legal counsel or do not understand their rights. Even if they do, the limited capacity of existing legal aid services means that very few tenants seeking legal representation actually receive it. Less than 6% of Massachusetts tenants have legal representation in eviction proceedings, compared to more than 2/3rds of landlords. \n\nA 2012 Boston Bar Association report (\"The Importance of Representation in Eviction Cases and Homelessness Prevention: A Report on the BBA Civil Right to Counsel Housing Pilots\") assessed the results of two pilot projects - one in Quincy District Court and one in the Northeast Housing Court in Lawrence and Lynn - in which tenants were provided with the right to legal counsel for eviction proceedings. It found that legal representation greatly improved tenants\u2019 ability to preserve their housing. Even represented tenants who were required to move out were better able to negotiate the timeline and conditions of their eviction. \n\nMunicipalities need to invest time and work with community-based organizations to build support for new investment in tenant legal aid, especially if a municipality proposes to fund these new services through new fees. However, tenant legal aid also has the potential to generate substantial public savings when evictions are prevented.",
        "what": "Tenants without legal representation enter eviction proceedings at a clear disadvantage. A tenant legal aid fund provides tenants with greater equity in eviction proceedings, potentially reducing the incident of homelessness and the demand for costly state-funded homelessness expenditures. A tenant legal aid fund can be financed through a variety of sources: dedicated municipal revenue, fines and fees, federal Community Development Block Grant (CDBG) funding, and grants from private foundations and charities. The Fund can be administered directly by the municipality or by a foundation with experience awarding and administering grants to legal aid providers (e.g. in Washington, DC, the fund is administered by the D.C. Bar Foundation). Legal aid providers apply for funding from the Fund and provide legal services to tenants at risk of eviction. Not all municipalities have set up a formal fund structure. Many municipalities are simply dedicating funding from their budget and contracting with non-profit legal services providers in the community. ",
        "title": "Tenant Legal Aid Fund",
        "overview": "Provides funding for tenants seeking counsel in eviction cases.",
        "who": "Municipalities take initiative to establish tenant legal aid funds or to dedicate budget revenues to tenant legal services. Municipalities or foundations administer the fund. \n\nCommunity-based organizations advocate for dedicated funding for tenant legal services and have been critical in building support in many of the municipalities that have recently started these funds or set aside new funding for legal services. \n\nLegal aid organizations and law firms deliver legal services to tenants pro bono or through the new funding. ",
        "principles": [
          engagement,
          fair,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Baltimore, MD\nBoston, MA\nMinneapolis, MN\nNew York, NY\nPhiladelphia, PA\nSan Francisco, CA\nSanta Rosa, CA\nWashington, DC",
        "where": "New York, NY - In 2014, New York City committed to increase legal aid spending by $93 million over 5 years. Just two years later, evictions in the city had dropped to their lowest rates in over a decade. Evictions declined by 18% between 2014 and 2016, even as the number of cases filed by landlords for non-payment of rent decreased by only 2%. \n\nBaltimore, MD - Baltimore decision makers are eager to realize public savings through reduced evictions. In 2016, the City spent more than twice as much money to fund the sheriff's office to oversee evictions than it spent on tenant and homelessness prevention services. So in November 2018, Baltimore residents will be voting on a referendum to establish a tenants legal assistance fund. Funding would come from a variety of sources, but would be dedicated exclusively to pay for legal counsel for low-income tenants facing eviction proceedings and for efforts to educate tenants about their legal rights.\n",
        "resources": {
          "titles": "NYC Decreases Evictions As Access to Legal Assistance Increases\n\n\n\n\nBoston Bar Association: Right to Counsel Pilot Report",
          "links": "\n\nhttps://www1.nyc.gov/office-of-the-mayor/news/065-18/de-blasio-administration-reports-record-27-decrease-evictions-access-legal-assistance-for\n\n\nhttp://www.bostonbar.org/docs/default-document-library/bba-crtc-final-3-1-12.pdf"
        }
      },
      {
        "considerations": "In Massachusetts, less than 6% of tenants have legal representation in eviction proceedings, compared to more than 2/3rds of landlords. A 2012 Boston Bar Association report (\"The Importance of Representation in Eviction Cases and Homelessness Prevention: A Report on the BBA Civil Right to Counsel Housing Pilots\") assessed the results of two pilot projects - one in Quincy District Court and one in the Northeast Housing Court in Lawrence and Lynn - in which tenants were provided with the right to legal counsel for eviction proceedings. It found that legal representation greatly improved tenants\u2019 ability to preserve their housing. Even represented tenants who were required to move out were better able to negotiate the timeline and conditions of their eviction. \n\nIt is important to understand that Tenant Right to Counsel is a right and not a fund. Municipalities should seek to understand the scale of evictions in their community in order to ensure they are setting aside adequate funding for counsel and to estimate and communicate the potential benefit. Tenant legal aid has the potential to generate substantial public savings when evictions are prevented.  \n\nThe City of Boston, working with Senator Sal DiDomenico and Representative Chynah Tyler, introduced a Tenant Right to Counsel bill (S.831/H.968) in the 2017-2018 state legislative session. The bill was sent to study, meaning it did not pass in the legislature. Legislators would need to reintroduce the bill in the 2018-2019 session in order to establish a statewide right. \n",
        "what": "A Tenant Right to Counsel law guarantees legal representation to tenants in eviction cases. That right may be limited to individuals below a certain income threshold, such as in New York City where the law only applies to tenants at or below 200%  of the poverty level.  San Francisco\u2019s Tenant Right to Counsel law applies to anyone at risk of eviction, regardless of income. Delivering on right to counsel can take different forms in different municipalities, but largely consists of increasing funding for existing legal aid organizations with experience representing tenants in eviction proceedings. \n\nIn the United States, only San Francisco and New York City have established a legal right to counsel. However, other areas including Washington, DC, are piloting right to counsel programs and right to counsel legislation is currently moving forward in Los Angeles. \n",
        "title": "Tenant Right to Counsel",
        "overview": "Supports free, universal access to lawyers for tenants in housing court who earn up to 200% of the poverty line.",
        "who": "Elected and appointed city officials can dedicate public funds to support legal representation for individuals vulnerable to displacement.\n \nBusiness leaders can devote philanthropic support to public and non-profit programs that provide pro bono legal representation for low-income individuals.\n \nLaw firms can dedicate pro bono attorney resources toward legal representation for vulnerable households, including tenants threatened with eviction.\n \nCommunity-based organizations and other advocates can urge city and county officials to dedicate resources to ensuring legal representation to vulnerable households.",
        "principles": [
          engagement,
          fair,
          affordability
        ],
        "adoption": "Local Action",
        "location": "\nNew York, NY    \nSan Francisco, CA\nWashington, DC",
        "where": "New York, NY - In 2017, New York City became the first city in the nation to guarantee free access to legal counsel for tenants who earn up to 200% of the poverty line and face evictions proceedings. This commitment follows a pilot started in 2014, which greatly increased funding to legal services for tenants. Evictions decreased by 5% in the city in 2017, part of a 27% decline since 2013. New York City's annual funding for legal services for tenants will increase to $155 million by 2022, when the policy is fully implemented, but officials expect it will save the city twice that amount in costs related to homelessness. \n\nWashington, DC - The District approved a $4.5 million pilot program in 2017 to provide free legal counsel to tenants making up to 200% of the federal poverty level who are in evictions proceedings. The program is administered by the D.C. Bar Foundation. ",
        "resources": {
          "titles": "Boston Bar Association: Right to Counsel Pilot Report\n\n\n\nMassachusetts Right to Counsel Legislation",
          "links": "\n\n\nhttp://www.bostonbar.org/docs/default-document-library/bba-crtc-final-3-1-12.pdf\n\nhttps://www.boston.gov/sites/default/files/imce-uploads/2017-12/right_to_counsel_faq_12.11.pdf"
        }
      },
      {
        "considerations": "Municipalities may develop their own relocation assistance programs if they plan to use only local public funds to support it. However, many of the relocation assistance programs in effect across the country are either partially or fully funded by landlords. A MA municipality cannot require landlords to provide relocation assistance without authorization from the state legislature. The legislature can either pass a law granting municipalities authority to set up landlord funded programs or an individual municipality can develop its own program and secure authorization through home rule petition. ",
        "what": "Displacement from rental housing imposes costs on tenants, like expenses related to moving and often new transportation costs as part of daily life. Consequently, many cities provide or require landlords to provide relocation assistance to displaced tenants. Relocation assistance programs vary considerably across communities. Sometimes relocation assistance is provided city-wide or in specific areas of the city. It can be conditional upon rezoning, a no cause eviction, or a move following a specific rent increase. All renters may be eligible, or the program can be limited to specific classes of tenants, such as the elderly, low-income households, or persons with disabilities.\n\nIn Massachusetts, property owners are required to pay relocation assistance to households displaced because of a condominium conversion. Municipalities may increase the assistance amount by a 2/3rds vote of their local legislative body. In 2014, Boston signed an ordinance doubling the amount of relocation assistance offered to tenants when they are displaced by a condo conversion. ",
        "title": "Relocation Assistance ",
        "overview": "Payments to displaced tenants and counseling services to help with the apartment search and application process.",
        "who": "Local government",
        "principles": [
          engagement,
          fair,
          affordability
        ],
        "adoption": "Legislation",
        "location": "Los Angeles, CA\nNew York, NY (renters of rent stabilized units)\nSan Francisco, CA\nSan Rafael, CA  \nSeattle, WA                 \nSt. Louis Park, MN    ",
        "where": "St. Louis Park, MN -  St. Louis Park's Tenant Protection Ordinance requires landlords to pay relocation assistance to  low-income tenants if they decide to raise rents, not renew leases, or re-screen tenants within the first three months of owning a property. The ordinance only applies to properties where at least 18% of the units are affordable to tenants making below 60% of the area median household income. The amount of assistance provided is based on the size of the unit, which varies from $2,600 for tenants renting studios to up to $4,100 for a three-bedroom unit or larger.\n\nPortland, OR - Portland  mandates that the city's renters who are served a no cause eviction, charged a rent increase of 10% or higher over a 12-month period, receive a substantial change in their lease terms, or who do not receive the option to renew their lease must be paid relocation assistance by their landlord. The amount of assistance is based on the size of the unit, from $2,900 for a studio or single room occupancy (SRO) to $4,500 for a three-bedroom or larger. The policy affords 12 exemptions, including duplexes and accessory dwelling units where the owner also lives on the property and vacancy of the unit is required to accommodate a family member. ",
        "resources": {
          "titles": "Austin Tenant Relocation Policy\n\n\n\nPortland Mandatory Renter Relocation Assistance",
          "links": "\n\nhttps://law.utexas.edu/wp-content/uploads/sites/11/2015/07/2012-08-ECDC-TENANT_DISPLACEMENT_IN_AUSTIN.pdf\n\nhttps://www.portlandoregon.gov/phb/74544"
        }
      },
      {
        "considerations": "For housing acquisition programs to function effectively, municipalities or other program implementers must offer loans at a lower rate and at more flexible terms, whether its public or private funding (municipal, Community Development Financial Institutions, etc.). Developers benefiting from these programs must be able to balance long-term affordability and financial feasibility.",
        "what": "Housing acquisition programs provide loans to responsible investor-owners to purchase multifamily rental properties in order to expand the affordable housing supply. These programs offer affordable housing developers the opportunity to access capital by pre-qualifying them for a set amount. Property owners must keep existing tenants, set aside a number of units for low- and moderate-income households, and agree to not displace tenants in good standing.",
        "title": "Housing Acquisition Program",
        "overview": "Public or private funding for developers, non-profits organizations, and others to purchase rental buildings or units to maintain or increase the affordable housing supply.",
        "who": "Local government \n\nState government\n\nPhilanthropic entities",
        "principles": [
          engagement,
          preservation,
          affordability,
          location,
          stability
        ],
        "adoption": "Local Action",
        "location": "Boston, MA\nNew York, NY\nSan Francisco, CA\nSomerville, MA\nWashington, DC\nOregon\nNationwide through private initiatives",
        "where": "California - In partnership with local governments, the California Housing Finance Agency (CalHFA) offers tax-exempt acquisition/rehabilitation loans for preservation or increased affordability of existing multifamily housing developments. CalHFA funding is available to for- and non-profit developers and public agency sponsors. Properties benefiting from these loans must have 20% of units deed-restricted to households with incomes less than 50% AMI, or 40% to households with incomes less than 60% AMI. \n\nOregon - The Oregon Housing Acquisition Fund (OHAF) provides financing from four banks, as well as philanthropic and public capital, to acquire market-rate properties and convert them to affordable housing. Properties benefitting from the fund must have at least five units. \n\nNew York, NY - NYC's multifamily disposition and finance programs (both the Third Party Transfer Program and Multifamily Preservation Loan Program) support qualified sponsors with purchasing foreclosed City-owned multifamily properties, rehabilitating them, and converting them to affordable housing for low- and moderate-income households. The NYC Department of Housing Preservation and Development provides loans using City Capital and/or Federal HOME funds, private institutional lending, NYC Housing Development Corporation funds, and Low-Income Housing Tax Credits (LIHTC). The NYC Acquisition Fund provides flexible bridge loans to developers committed to creating or preserving affordable housing in NYC. In this case, the loan is a partnership between the City, major foundations, and commercial lending institutions. \n\nSan Francisco, CA - The SF Housing Accelerator Fund (SFHAF) provides acquisition and rehabilitation funding to affordable housing developers through a public-private partnership that includes the City, banks, and philanthropic entities.\n\nBoston, MA - Boston's Acquisition Opportunity Program provides loans for responsible investor-owners to buy occupied multifamily rental properties. Developers that demonstrate their financial and management experience can pre-qualify for a set amount of funding to compete with private investors for properties. Property owners must maintain affordable rent levels for at least 50 years, set aside at least 40% of units for low- and moderate-income households, ensure investor-owned properties are fully or partially occupied, and agree not to displace tenants in good standing.",
        "resources": {
          "titles": "Boston Acquisition Opportunity Property Program\n\n\nShelterforce: Non-Profit Housing Acquisition Program\n\n\nBetter Institutions: Private Development, Public/Non-Profit Ownership",
          "links": "\n\nhttps://www.boston.gov/departments/neighborhood-development/acquisition-opportunity-property-program\n\nhttps://shelterforce.org/2016/08/23/a-non-profit-housing-acquisition-program-could-protect-the-displaced/\n\nhttp://www.betterinstitutions.com/blog/2016/6/19/private-development-public-ownership-housing-affordability"
        }
      },
      {
        "considerations": "Across the country, most existing rehabilitation/code compliance loan and grant programs for smaller properties are only available to homeowners, not landlords. Expanding these programs so that small or low-income landlords are also eligible would bring home improvements to a broader residential base. ",
        "what": "Municipal financial assistance in the form of a grant, low-to-no interest loan, or tax abatement to help fund capital improvements that will enable income-eligible households to stay in their homes. Eligible improvements typically include work needed to address a building code deficiency or to provide accommodations for persons with disabilities. The assistance can be conditional on matching funds by the landlord, on the landlord's continued commitment to rent the unit to a low-income household, or on limits to the amount by which a landlord can raise the rent following rehabilitation. Most programs usually a cap the number of units that can be owned by the landlord, and some programs also integrate technical assistance and tenant/landlord education. ",
        "title": "Small Landlord Rental Rehabilitation Assistance",
        "overview": "Financial assistance for residential property rehabilitation and improvement to qualifying landlords who agree to rent to income-eligible tenants.",
        "who": "Local government",
        "principles": [
          engagement,
          preservation,
          affordability,
          stability,
          fair
        ],
        "adoption": "Local Action",
        "location": "Boston, MA (lead paint removal)\nColumbus, OH\nDuluth, MN\nMilwaukee, WI\nSt. Paul, MN\nWashington, DC\nMaryland (radon mitigation)",
        "where": "St. Paul, MN - The Rental Rehabilitation Loan program provides no-interest loans of up to $30,000 to responsible landlords wanting to make property improvements that increase the safety and quality of rental units. Eligible properties can have up to four units and must have an existing code enforcement violation or be located in a designated area of concentrated poverty where 50% or more of the residents are people of color. Participating landlords cannot increase rents on the assisted units by more than 3% per year for the entirety of the loan term, which is typically 10 years. ",
        "resources": {
          "titles": "St. Paul Rental Rehabilitation Loan Program\n\nExamples of Incentives for Healthy Housing\n\nNational Center for Healthy Housing: Incentivizing Healthy Housing",
          "links": "\n\n\n\nhttps://www.stpaul.gov/departments/planning-economic-development/housing/rental-rehabilitation-loan-program\n\nhttps://sonaomaha.files.wordpress.com/2012/09/examples-of-code-enforcement-and-healthy-homes.pdf\n\nhttp://nchh.org/resources/policy/incentivizing-healthy-housing/"
        }
      },
      {
        "considerations": "ADU financing programs require substantial outreach to homeowners and collaboration among housing, construction, lending, and government partners. LA's Backyard Homes Project came to fruition after months of focus groups with homeowners to assess appetite for the incentive program, as well as technical assistance and financing needs. The number of needed partners depends on the breadth of incentives included in the program. Municipalities may have to secure partners in architecture, construction, and housing services to provide technical assistance. Financing for ADUs can be provided directly by a municipality or a financial services partner. If the goal of the program is to secure housing for voucher recipients, the municipality should ensure local housing authorities are engaged in planning and implementation. ",
        "what": "Several cities are currently piloting programs to make it more feasible for homeowners to build ADUs targeted to homeless households and Section 8 voucher recipients. Homeowners who agree to construct ADUs and rent them to eligible households for a minimum of five years can access the following incentives: streamlined permitting processes, technical assistance, discounted architectural and engineering services, and financial incentives that may include fully funded construction costs, forgivable loans, and tax exemptions/abatements. ",
        "title": "Accessory Dwelling Unit (ADU) Financing",
        "overview": "Forgivable loans for developing ADUs in exchange for renting to a voucher recipient.",
        "who": "Local government \n\nLenders \n\nLocal housing authority \n\nLow-income and homeless housing service providers \n\nDiscounted architectural services provider ",
        "principles": [
          engagement,
          production,
          affordability,
          diversity
        ],
        "adoption": "Local Action",
        "location": "Austin, TX\nLos Angeles, CA",
        "where": "Austin, TX - The Alley Flat Initiative provides homeowners access to discounted architectural services, permit fee waivers and streamlining, and low interest loans in exchange for renting their ADUs at a rate affordable to households making 80% or less of the area median household income for a minimum of 5 years. \n\nLos Angeles, CA - The Backyard Home Project provides a homeowner incentive package to low-to-moderate income homeowners renting their ADUs to Section 8 voucher holders for a minimum of 5 years. The incentive package includes program oversight by the  Housing Authority of the City of Los Angeles, tenant support provided by low-income and homeless housing service providers, potential permit fee deferrals from the Los Angeles Department of Building and Safety, access to a new low-barrier financial mortgage product, and discounted architectural and project management services. \n\n",
        "resources": {
          "titles": "LA Mas: The Backyard Home Project\n\nMultnomah County: A Place for You Pilot",
          "links": "https://www.mas.la/affordable-adus\n\nhttps://multco.us/dchs/a-place-for-you"
        }
      },
      {
        "considerations": "New York City's J-51 program has come under some recent scrutiny following class action lawsuits targeted at landlords that received tax abatements but failed to rent-stabilize their units, a condition of the program. Prior to the lawsuits, many of the tenants were unaware that they were eligible for rent-stabilized units. Any proposed program should ensure transparency of tenant eligibility. Municipalities implementing tax incentive programs should conduct, require, or fund targeted outreach to residents of the participating properties to ensure that residents are aware of any conditions of the tax incentive that impact their tenancy. \n\nIn Massachusetts, a home rule petition would be required in order for a municipality to implement any tax abatement or exemption program.",
        "what": "A municipality grants a property tax abatement or exemption for a specified period of time in order to encourage multifamily housing rehabilitation or development. The duration of the tax incentive and eligibility requirements vary widely across communities. Tax incentives can either be granted as of right or in exchange for creation of affordable housing, integration of green building technologies, additional mixed-use components, contracting with women- or minority-owned businesses, or other public benefits. The tax incentive typically lasts 10-15 years, but can be longer in targeted neighborhoods or as a result of increased affordability. These programs are based on a split tax formula whereby the incentive is applied only to the assessed value of the building or the specific improvements and land is taxed at the regular, higher rate.",
        "title": "Property Tax Abatement/Exemption for renovation and conversion",
        "overview": "Tax incentives to renovate multifamily buildings or convert commercial to multifamily residential.",
        "who": "Local government",
        "principles": [
          engagement,
          preservation,
          affordability
        ],
        "adoption": "Legislation",
        "location": "New York, NY\nPortland, OR\nVancouver, WA",
        "where": "New York, NY - The J-51 tax program offers developers a tax exemption or abatement for rehabilitation or conversions of multi-family dwellings. Upon completion, the landlord has to rent stabilize all of the units for at least the duration of the tax benefit, and can only increase the rents in accordance with a rent guidelines board. Landlords get up to a 34-year exemption from increases in real estate taxes resulting from the work. In addition, existing real estate taxes receive an abatement of up to 12.5 percent.\n\nPortland, OR - Under the Multiple-Unit Limited Tax Exemption (MULTE) Program, owners of multifamily developments receive a ten-year property tax exemption on structural improvements to the property as long as program requirements are met. During the term of the exemption, a minimum of 20% of units must be affordable to households earning 60% or less of the area median household income (MHI), or to households earning 80% or less of the area MHI when the project\u2019s market rents are at or exceed 120% of the area MHI levels or a market study supports rents of similar units in the same geographic area at or above 120% of the area MHI.",
        "resources": {
          "titles": "Portland Multiple-Unit Limited Tax Exemption\n\nNew York City J-51 Exemption and Abatement",
          "links": "https://www.portlandoregon.gov/phb/74691\n\nhttp://www1.nyc.gov/site/finance/benefits/benefits-j51.page"
        }
      },
      {
        "considerations": "In Massachusetts, a home rule petition would be required in order for a municipality to implement any tax abatement or exemption program.\n\nCities and towns must carefully consider whether to apply tax exemption to the entire residential property or just to the portion that meets specific conditions (e.g. rent restricted units). NYC's earlier 421a program came under heavy scrutiny with critics claiming it was a \"giveaway to developers\" because it is a broad tax incentive that subsidizes the whole development, even market-rate units. \n\nDepth of affordability for deed-restricted units in these properties should not be so great that tax exemption is not sufficient incentive for development. \n\nThese programs are popular with for-profit developers, who may not be familiar with affordable housing processes. Municipalities should ensure that the standards of the program are clear, as well as the rules and regulations of affordable housing. Regular monitoring is important to identify and remedy issues of non-compliance. ",
        "what": "A municipality grants a reduction or exemption from property taxes for a specified period of time in order to encourage multifamily housing development in areas with insufficient housing. The duration of the tax exemption and eligibility requirements vary widely across communities. Tax exemption can be granted as of right or in exchange for creation of affordable housing, integration of green building technologies, additional mixed-use components, contracting with women- or minority-owned businesses, or other public benefits. Tax exemption typically last 10-15 years, but can be longer in targeted neighborhoods or as a result of increased affordability. These programs are based on a split rate tax formula whereby the incentive is applied only to the assessed value of the building and land is taxed at a regular, higher rate.",
        "title": "Property Tax Exemption/Abatement for new development",
        "overview": "Property tax exemption/abatement for multifamily housing development.",
        "who": "Local government",
        "principles": [
          engagement,
          production,
          affordability,
          location
        ],
        "adoption": "Legislation",
        "location": "Chicago, IL\nMemphis, TN\nNew York, NY\nSeattle, WA            ",
        "where": "Memphis, TN - Under the Residential PILOT program, market-rate multifamily rental development with a minimum of 25 units is eligible for an abatement of 75% of city and county property taxes. Developers have to hold a specific percentage of units for low-to-moderate-income households. Developments with 25-50 units are required to designate 10% of them affordable, projects with 51-75 units must designate 15% affordable,  and projects with 76 or more units must designate 20% affordable.\n\nNew York, NY - The newly named Affordable New York Housing Program (formerly 421a) encourages the development of affordable housing through a temporary tax abatement. Thousands of units have been developed in NYC through this almost 50-year-old program. The exemption usually lasts for 10 years, but can be extended to 15 or 25 years in some areas targeted for more robust development. The exemption gives unit owners a 100% exemption from any increases in their property taxes for the first 2 years. Then taxes are phased in at an increase of 20% of the normal tax rate every other year, so 0% in year 0, 20% of the normal rate in year 2, 40% of the normal rate in year 4, until year 10 when the property tax is consistent with non-participating properties.  Developers of buildings with 300 or more rental units in certain neighborhoods can get up to a 35-year tax exemption if they set aside 25-30% of the units for low- and moderate-income tenants.",
        "resources": {
          "titles": "New York City 421a Exemption\n\nVancouver Multi-Family Tax Exemption\n\n\n\nMemphis and Shelby County Residential PILOT\n\n\n\nAlliance for Housing Affordability: Multifamily Tax Exemption",
          "links": "https://www1.nyc.gov/site/finance/benefits/benefits-421a.page\n\nhttp://www.cityofvancouver.us/sites/default/files/fileattachments/city_council/page/17998/00_ws1_presentation_multifamily_tax_exemption_program.pdf\n\nhttp://www.growth-engine.org/business-assistance/tax-incentives/\n\nhttp://www.housingallies.org/guide/expanding-affordability/mfte/"
        }
      },
      {
        "considerations": "In Massachusetts, a home rule petition would be required in order for a municipality to implement any tax abatement or exemption program. \n\nIn 2017, Representative Kevin Honan and Senator Joseph Boncore introduced Bill S.1494/H.1534, An Act Regarding State Income Tax Credit for Renting Unsubsidized Properties at Below Market Rents. It proposed a $1,500 tax credit incentive for residential property owners for each unit rented in a two-to-four unit building at rates at or below market rents as established by the federal Housing and Urban Development Department (HUD). Landlords participating in tenant-based subsidy programs such as Section 8, MRVP, and VASH would be eligible. Landlords would not be able to claim the credit for any unit rented to an immediate family member. The credit would be carried over for three years. The bill was sent to study, and thus failed to pass in the 2017-2018 legislative session. ",
        "what": "A tax credit/exemption that applies only to the portion of the property that is used as affordable housing, so there is less concern that municipalities are subsidizing market-rate housing that with other tax exemption programs. By encouraging property owners of small residential properties to rent units at or below market rate, a property tax abatement or exemption can help build the supply of lower-cost housing and prevent displacement. Participating landlords benefit by avoiding potential loss of rent revenue from tenants having to relocate and additional maintenance costs associated with preparing a unit for a new tenant. Proposed and existing tax incentive programs for landlords that commit to provide below market rents vary broadly. In some cases, the landlord is only eligible for a tax incentive if he or she rents to an income-eligible household, senior, or person with a disability. The tax incentive can consist of all of the property tax that would be due for the below-market unit, a specified amount that is not necessarily based on the assessed value of the unit, or the difference between market rent and the rent actually charged to the participating tenant. ",
        "title": "Property Tax Credit/Exemption for landlords",
        "overview": "Property tax exemption for landlords who provide below market-rent housing.",
        "who": "Local government with property tax assessor ",
        "principles": [
          engagement,
          production,
          affordability,
          location
        ],
        "adoption": "Legislation",
        "location": "New York, NY\nPhiladelphia, PA                \nProvincetown, MA",
        "where": "New York, NY - NYC's Senior Citizen Rent Increase Exemption (SCRIE) program freezes the rent for head-of-household seniors age 62 and older who live in rent-stabilized apartments. Owners of rent-stabilized units, as opposed to rent control, can raise rents each year by a specified percentage. However, landlords whose tenants participate in the SCRIE program cannot raise rents by any amount. In order to satisfy the income eligibility requirement, the senior's household income must be $50,000 or less. Landlords are given a property tax abatement credit applied to their property tax bill in the same amount as the increase that the tenant is exempted from paying.\n\nProvincetown, MA - Provincetown has operated an affordable housing tax incentive program since 2002. The program provides a tax exemption to property owners who provide year round rental housing affordable to low-income households with incomes equivalent to 80% or less of the regional median household income. The exemption, granted on a year to year basis, applies only to the portion of the property that is rented to low-income renters. ",
        "resources": {
          "titles": "Provincetown Affordable Housing Rental Exemption\n\n\n\nBelow Market Rent Tax Credit",
          "links": "\nhttp://ma-provincetown.civicplus.com/DocumentCenter/Home/View/303\n\nhttps://www.boston.gov/sites/default/files/imce-uploads/2017-12/tax_credit_faq_12.11.pdf"
        }
      },
      {
        "additional": true,
        "principles": [
          affordability,
          stability,
          fair
        ],
        "overview": "The state or municipality requires landlords to provide extended notice (up to 90 days) for any rent increase. ",
        "location": "Portland, OR                \nCalifornia                           \nRhode Island",
        "resources": {
          "titles": "Mass Legal Help: Rent Increase Notice",
          "links": "https://www.masslegalhelp.org/housing/lt1-chapter-5-notice-rent-increase"
        },
        "title": "Rent Increase Notification"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          stability,
          fair
        ],
        "overview": "Used by municipalities to give affordable housing priority to residents (or their descendants) whose property was taken through eminent domain. ",
        "location": "Boston, MA\nPortland, OR                ",
        "resources": {
          "titles": "Portland Urban Renewal Preference\n\nBoston Urban Renewal Preference ",
          "links": "https://www.portlandoregon.gov/phb/75027\n\nhttp://www.bostonplans.org/housing/finding-housing/lottery-preferences"
        },
        "title": "Urban Renewal Preference Policy"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "A movement led by local governments, community-based non-profit organizations, and academic and philanthropic institutions that encourages application of a racial equity lens to municipal policies and programs, including implementation and monitoring. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Racial Equity Alliance",
          "links": "https://www.racialequityalliance.org/"
        },
        "title": "Racial Equity Best Practices"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "Local and state public agencies and non-profit organizations provide direct monetary assistance to low-income renters, first-time homebuyers, and owners in the form of monthly rent and utility support, housing upgrades and repairs, or closing costs and mortgage assistance.",
        "location": "Nationwide",
        "resources": {
          "titles": "Residential Assistance for Families in Transition",
          "links": "https://www.mass.gov/service-details/learn-about-residential-assistance-for-families-in-transition-raft"
        },
        "title": "Direct Household Assistance"
      },
      {
        "additional": true,
        "principles": [
          affordability,
          diversity,
          location,
          design,
          stability,
          fair
        ],
        "overview": "Federal vouchers that increase affordable housing choices for very low-income households by covering a portion of their rent in privately owned housing.",
        "location": "Nationwide",
        "resources": {
          "titles": "Section 8 Housing Choice Voucher Program",
          "links": "https://www.mass.gov/service-details/section-8-housing-choice-voucher-program-hcvp"
        },
        "title": "Section 8 Housing Choice Voucher Program"
      },
      {
        "additional": true,
        "principles": [
          affordability,
          diversity,
          location,
          design,
          stability,
          fair
        ],
        "overview": "State vouchers that increases affordable housing choices for very low-income households by covering a portion of their rent in privately owned housing.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Massachusetts Rental Voucher Program",
          "links": "https://www.mass.gov/service-details/massachusetts-rental-voucher-program-mrvp"
        },
        "title": "Massachusetts Rental Housing Voucher Program"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          location,
          design,
          stability,
          fair
        ],
        "overview": "Municipal program providing two years of rental assistance for families earning 40-80% of Denver\u2019s area median income. Funding for the rental subsidies comes from a combination of local public and private dollars, including local foundations and businesses. ",
        "location": "Denver, CO",
        "resources": {
          "titles": "Denver Lower Income Voucher Equity Program",
          "links": "http://livedenver.org/"
        },
        "title": "Lower Income Voucher Equity Program"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          preservation,
          affordability,
          design
        ],
        "overview": "State or municipal government or utility corporations can provide assistance with utility expenses, weatherization, and energy efficiency audits.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Boston ABCD Fuel Assistance\n\nRenew Boston",
          "links": "https://bostonabcd.org/service/fuel-assistance/\n\nhttps://www.boston.gov/departments/environment/no-cost-energy-visits-renew-boston"
        },
        "title": "Utility and Weatherization Assistance"
      },
      {
        "additional": true,
        "principles": [
          affordability,
          stability,
          fair
        ],
        "overview": "Using state and municipal funding, foundations and housing authorities provide temporary rental assistance and programming for pregnant women at risk of homelessness with the goal of reducing the area's infant mortality rate. ",
        "location": "Columbus, OH",
        "resources": {
          "titles": "Columbus Rental Aid for Pregnant Women\n\n\n\nOHIO Healthy Beginnings Pilot Program",
          "links": "http://www.dispatch.com/news/20180217/rental-aid-set-up-for-pregnant-women\n\nhttp://www.governing.com/topics/health-human-services/tns-infant-mortality-ohio-rent.html"
        },
        "title": "Rental Assistance for At-risk Pregnant Women"
      },
      {
        "additional": true,
        "principles": [
          affordability,
          diversity,
          stability,
          fair
        ],
        "overview": "Municipal policy prohibiting discrimination against prospective tenants with a past criminal history. ",
        "location": "Richmond, CA\nSeattle, WA\nSan Francisco, CA",
        "resources": {
          "titles": "Seattle Fair Chance Housing Ordinance\n\n\nRacial Equity Alliance: Richmond Fair Chance Housing Ordinance",
          "links": "\nhttps://www.seattle.gov/civilrights/civil-rights/fair-housing/fair-chance-housing-law\n\nhttps://www.racialequityalliance.org/2017/02/21/gare-jurisdiction-richmond-california/"
        },
        "title": "Fair Chance Housing Ordinance"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          stability,
          fair
        ],
        "overview": "Municipal office dedicated to the investigation of tenant harassment complaints, including those associated with construction in occupied buildings. ",
        "location": "New York, NY    ",
        "resources": {
          "titles": "Office of the Tenant Advocate",
          "links": "https://www1.nyc.gov/site/buildings/renter/ota.page"
        },
        "title": "Office of the Tenant Advocate"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          stability,
          fair
        ],
        "overview": "Municipal regulation that makes it unlawful for an owner, in connection with a buyout offer, to threaten a tenant, to contact a tenant at odd hours, or to provide false information to a tenant.",
        "location": "New York, NY",
        "resources": {
          "titles": "New York City Regulation of Buyouts",
          "links": "http://www1.nyc.gov/office-of-the-mayor/news/590-15/mayor-de-blasio-signs-three-new-laws-protecting-tenants-harassment"
        },
        "title": "Regulation of Buyouts"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          stability,
          fair
        ],
        "overview": "Municipal program requiring developers to certify that they have not harassed existing tenants prior to seeking permits for renovating or demolishing rent-stabilized residential buildings.",
        "location": "New York, NY",
        "resources": {
          "titles": "New York City CONH Program",
          "links": "http://www1.nyc.gov/nyc-resources/service/1353/certification-of-no-harassment-or-exemption-application\n\nhttps://nextcity.org/daily/entry/nyc-tenants-right-advocates-score-another-victory"
        },
        "title": "Certificate of No Harassment (CONH) Program"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          stability,
          fair
        ],
        "overview": "Municipal law prohibiting tenant harassment and creates affirmative enforcement mechanisms.",
        "location": "New York, NY \nOakland, CA                    ",
        "resources": {
          "titles": "New York Tenant Harassment Law",
          "links": "https://www1.nyc.gov/site/hpd/renters/harassment.page"
        },
        "title": "Tenant Harassment Law"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          stability,
          fair
        ],
        "overview": "Municipal program supporting tenant organizing activities in multifamily buildings occupied by low- or moderate-income tenants. ",
        "location": "Boston, MA",
        "resources": {
          "titles": "Boston Tenant Organizing Program",
          "links": "https://cedac.org/wp-content/uploads/2016/06/BTOP-NOFA-Jan-2017-1.pdf"
        },
        "title": "Tenant Organizing Program"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          design,
          stability,
          fair
        ],
        "overview": "Municipal zoning to ensure rental housing meets basic housing safety standards by requiring that all rental units be registered with the city and undergo proactive inspection for habitability. ",
        "location": "Boston, MA\nChelsea, MA\nLos Angeles, CA      \nSeattle, WA",
        "resources": {
          "titles": "Change Lab Solutions: Healthy Housing Through Proactive Rental Inspection",
          "links": "https://www.changelabsolutions.org/publications/PRI-programs"
        },
        "title": "Rental Registration and Inspection Ordinances"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          stability,
          fair
        ],
        "overview": "Municipality or non-profit organization funds tenant and landlord trainings to ensure awareness of tenant rights and responsibilities. ",
        "location": "Boston, MA\nNew York, NY             Seattle, WA\nWashington, DC",
        "resources": {
          "titles": "Boston Office of Housing Stability",
          "links": "\n\nhttps://www.boston.gov/departments/neighborhood-development/office-housing-stability"
        },
        "title": "Know and Enforce Your Rights Assistance"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          affordability,
          design,
          stability,
          fair
        ],
        "overview": "Municipality or state provides property tax abatements or exemptions for low-income homeowners, veterans, seniors, or other special classes of individuals.",
        "location": "Nationwide",
        "resources": {
          "titles": "Massachusetts Property Tax Forms and Guides",
          "links": "https://www.mass.gov/lists/property-tax-forms-and-guides"
        },
        "title": "Property Tax Exemption"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "State program that encourages municipalities to adopt best practices in exchange for grants and technical assistance. ",
        "location": "Massachusetts",
        "resources": {
          "titles": "Community Compact Program",
          "links": "https://www.mass.gov/orgs/community-compact-cabinet"
        },
        "title": "Community Compact Program"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          preservation,
          affordability,
          design,
          stability,
          fair
        ],
        "overview": "Municipal resources for private developers to upgrade affordable housing. ",
        "location": "Chicago, IL\nNew York, NY\nPortland, OR",
        "resources": {
          "titles": "Portland Multiple-Unit Limited Tax Exemption\n\nNew York Property Tax Exemption",
          "links": "https://www.portlandoregon.gov/phb/74691\n\nhttp://www.ibo.nyc.ny.us/iboreports/J51overview.pdf"
        },
        "title": "Private Property Rehabilitation Fund"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          preservation,
          affordability,
          diversity,
          design,
          stability,
          fair
        ],
        "overview": "Municipal program encouraging the creation and preservation of housing that is affordable without government subsidy through a combination of financing and planning strategies, including acquisition assistance and special zoning district designation.",
        "location": "Arlington, VA",
        "resources": {
          "titles": "Arlington Market-Rate Affordable Housing Report",
          "links": "https://arlingtonva.s3.dualstack.us-east-1.amazonaws.com/wp-content/uploads/sites/15/2017/03/MARKS-REPORT-3-31-2017.pdf"
        },
        "title": "Market-Rate Affordable Housing Preservation Program"
      },
      {
        "additional": true,
        "principles": [
          preservation,
          affordability,
          diversity,
          stability,
          fair
        ],
        "overview": "State law aimed at preserving existing privately-owned affordable housing by allowing the MA Department of Housing and Community Development (DHCD), or its designee, the right of first refusal to purchase housing with expiring affordability restrictions.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Chapter 40T",
          "links": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleVII/Chapter40T\n\n"
        },
        "title": "MGL Chapter 40T"
      },
      {
        "additional": true,
        "principles": [
          preservation,
          affordability,
          diversity,
          design,
          stability,
          fair
        ],
        "overview": "Municipal program providing forgivable loans to homeowners to make critical upgrades to their houses, prioritizing repairs targeting health and safety, energy efficiency, and deferred maintenance.",
        "location": "Atlanta, GA        \nBoston, MA\nFramingham, MA   Philadelphia, PA ",
        "resources": {
          "titles": "Atlanta Heritage Owner Occupant Rehab Programs",
          "links": "https://www.investatlanta.com/homebuyers/owner-occupied-rehab"
        },
        "title": "Owner-Occupant Rehab Program"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          location
        ],
        "overview": "Municipal strategy of applying a higher tax rate to land and a lower rate to structures on the land to stimulate development or improvements to existing structures, and to penalize speculative owners that leave lots unimproved.",
        "location": "Pittsburgh, PA\nScranton, PA",
        "resources": {
          "titles": "Lincoln Institute: Split-Rate Tax Report",
          "links": "https://www.lincolninst.edu/publications/working-papers/how-smart-split-rate-property-tax"
        },
        "title": "Split-rate Taxation"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          design,
          stability,
          fair
        ],
        "overview": "Interest-free loans from the City to homeowners for developing ADUs, with payments deferred until the owner sells, transfers ownership, or refinances their home. ",
        "location": "Boston, MA",
        "resources": {
          "titles": "Boston Additional Dwelling Unit Pilot Loan",
          "links": "https://www.boston.gov/departments/new-urban-mechanics/addition-dwelling-unit-pilot/how-apply-additional-dwelling-unit-pilot-loan"
        },
        "title": "Accessory Dwelling Unit (ADU) Pilot Loan"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "Surplus or underutilized public land is donated, sold, or leased for affordable housing development. ",
        "location": "Boston, MA\nKing County, WA\nNew York, NY                    ",
        "resources": {
          "titles": "HUD: Public Land to Defray the Cost of Affordable Housing\n\nUrban Land Institute Washington: Public Land & Affordable Housing Report",
          "links": "https://www.huduser.gov/portal/pdredge/pdr_edge_trending_091415.html\n\nhttp://washington.uli.org/wp-content/uploads/sites/56/2015/02/ULI_PublicLandReport_Final020215.pdf"
        },
        "title": "Public Land for Affordable Housing"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          diversity,
          location,
          design,
          stability,
          fair
        ],
        "overview": "A publicly-accessible inventory of potential or available infill development opportunities promoted to developers. ",
        "location": "Boston, MA\nEmeryville, CA\nSan Jose, CA",
        "resources": {
          "titles": "Greenbelt Alliance: Smart Infill Guide\n\nBoston Department of Neighborhood Development",
          "links": "https://www.greenbelt.org/research/smart-infill/\n\nhttps://buildinghousing.boston.gov/"
        },
        "title": "Developable Land Inventory"
      },
    ],
  },
  {
    title: 'Funding',
    practices: [
      {
        "considerations": "A NOAH Impact Fund should provide readily available capital and the professional capacity necessary to close deals within 60 days due to the speed at which speculators and national investors acquire NOAH properties. Properties in opportunity areas near transportation, jobs, and quality schools increases quality of life and outcomes for low-income individuals, families and children. In order to be financially feasible and benefit from economies of scale, funds should be reserved for properties of at least 45 units in one or more buildings and/or locations.\n\nStrategic property improvements include modest upfront and ongoing repairs to address tenant needs and provide curb appeal. The need for large-scale improvements in a potential acquisition is generally cost-prohibitive and deleterious to the success of a NOAH project. Energy-saving, green improvements may help increase cash flow by lowering operating costs.\n\nIn hot housing markets, NOAH must be purchased promptly by affordable housing investors to avoid speculation and flipping. Towards that end, NOAH Impact Fund asset managers must have the capital and professional capacity to act quickly.",
        "what": "Naturally-occurring affordable housing (NOAH) is unsubsidized housing that is affordable due to its size or age. Types of NOAH include smaller apartment buildings, accessory dwelling units, manufactured housing, and older housing stock. NOAH Impact Funds can finance the acquisition and preservation of NOAH units at risk of redevelopment or conversion to condominiums, with the goal of preserving long-term affordability. A NOAH Impact Fund can be privately financed, often through a social impact investment company, or publicly financed at the city or state level. Funds tend to partner with socially-motivated institutional investors and NOAH owner-operators to close deals at a speed and price competitive with market-rate developers. NOAH Impact Funds are typically targeted to smaller buildings with 4-10 units that are over 30 years old.",
        "title": "NOAH Impact Fund",
        "overview": "A public or private fund offering equity investment to non-profit developers and for-profit owner-operators to support the rehabilitation and preservation of naturally-occurring affordable housing (NOAH).",
        "who": "State Housing Funds\n\nLocal lenders and banks\n\nNational lenders (FreddieMac)",
        "principles": [
          engagement,
          preservation,
          affordability,
          location
        ],
        "adoption": "Local Action",
        "location": "\nCalifornia\nChicago, IL \nMiami, FL \nMinnesota",
        "where": "Minnesota - The Greater Minnesota Housing Fund  - a blend of private, patient, and public agency capital - supports NOAH by provide financing and planning and technical assistance to housing organizations, local governments, housing developers, and owner-operators. Financing is easily accessible and targeted to properties with social benefits. The Fund provides 90% of the equity required to acquire a property, while the operating partner co-invests the remaining 10%. Housing affordability is preserved for a minimum of 15 years for households with low and moderate incomes. NOAH near public transit, high-performing schools, employment opportunities, and community services is given preference.  \n\nOregon - Created in 2009, the Oregon Housing Acquisition Fund provides acquisition and refinance loans to convert NOAH multifamily properties with more than 5 units to deed-restricted affordable housing. The loans provide short-term financing that enable the borrower to seek public subsidies and construction financing following property acquisition. To date, there has been 29 acquisitions at a cost of $45.4 million, resulting in the preservation of 1,137 units.\n\nChicago, IL - Chicago's CDFI Community Investment Corporation provides loans for groups interested in converting buildings with 1-4 units to affordable rental housing.\n\nNationwide - FreddieMac provides housing preservation funding to non-profit organizations for the acquisition and preservation of NOAH.\n\nThe Turner Multifamily Impact Fund is focused on protecting the supply of affordable workforce housing in urban areas around the country, including Maryland, Florida, Texas, Georgia, and Nevada. The Fund owns 5,187 units, where tenants receive targeted resident services.",
        "resources": {
          "titles": "NOAH Impact Fund\n\nPreserve Oregon Housing",
          "links": "\n\nhttps://noahimpactfund.com/\n\nhttp://www.preserveoregonhousing.org/ "
        }
      },
      {
        "considerations": "Staff and boards of CDFIs should have financing and lending expertise. CDFIs dedicated to affordable housing development specifically must understand affordable housing production and preservation processes.",
        "what": "CDFIs are private financing institutions that provide funding to low-income, low-wealth community groups that may not be able to receive funding through traditional financing institutions. Eligible groups include small businesses, microenterprises, non-profit organizations, and affordable housing developers. \n\nThere are approximately 1,000 CDFIs in operation around the country, and they primarily include banks, credit unions, loan funds, and venture capital funds. In addition to community banks, CDFIs can receive federal funding if they are certified. In 2017, $5 billion in loans and investments were originated by CDFIs that received federal funding. \n\nCDFIs that focus on community development loan funds (CDLFs) can provide financing and development services to non-profit housing developers. CDFLs are usually non-profit and are governed by a board of directors with community participation.\n\nCommunity Development Corporations are another type of CDFI, entrusted with revitalizing neighborhoods by producing affordable housing, creating jobs, and providing social services to low-income communities. They usually function as a non-profit, formed with local community residents and operated by a volunteer board.\n\n\n\n",
        "title": "Community Development Financing Institutions (CDFI)",
        "overview": "Provides credit and financial services to under-served markets and populations.",
        "who": "Community institutions\n\nFederal government",
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity
        ],
        "adoption": "Local Action ",
        "location": "Nationwide",
        "where": "Chicago, IL - Chicago's CDFI Community Investment Corporation provides expedited acquisition loans for acquisition and rehab of multifamily rental housing in low- and moderate-income communities with flexible financing and no prepayment penalty, legal fees, or payments during construction.\n\nMassachusetts - There are numerous CDFIs in operation all around MA. They include The Community Builders, Dorchester Bay Neighborhood, Boston Community Loan Fund, and The Housing Partnership neighborhood.\n\nNationwide - The Local Initiatives Support Coalition (LISC) is a nationwide non-profit that receives funding from banks, corporations, foundations and government agencies to provide financing in the form of grants, loans, and equity, as well as technical and management assistance, to local partners and developers. LISC has invested over $18.6 billion since 1979, and has financed more than 376,000 homes through multifamily rental development, preservation, rehabilitation, and foreclosure intervention. ",
        "resources": {
          "titles": "US Treasury CDFI Fund\n\nCDFI Coalition",
          "links": "\n\nhttps://www.cdfifund.gov/Pages/default.aspx\n\nhttp://cdfi.org/"
        }
      },
      {
        "considerations": "Research shows that TIF districts grow much faster than other areas that don't offer incentivizing tax exemptions. When using TIF, the chance of slower growth in other parts of the municipality must be considered.\n\nTIF funds set aside for affordable housing should have clear requirements of how they should be be used, including affordability limits, tenure types, and length of affordability.",
        "what": "A tax increment is the difference in the assessed property value before and after a planned improvement. Tax Increment Financing (TIF) funds infrastructure and other public improvements through anticipated increases in property taxes resulting from new investments. As of 2014, TIF programs were possible at the municipal and county levels in 48 states and Washington, DC.\n\nMassachusetts allows for two types of tax increment incentive tools. Under Tax Increment Financing (TIF), municipalities may grant property tax exemptions of up to 100% of the tax increment for up to 20 years in exchange for redevelopment activities within the specified district. District Improvement Financing (DIF) allows municipalities to redirect tax increment revenues to fund specific improvements within the specified district. DIF can be used for land acquisition, construction, and incurring indebtedness. TIF can be used as an incentive for housing development in urban centers, while DIF can be used to directly finance the construction and/or rehabilitation of affordable housing. Both tools require that municipalities first designate the district and specify improvements within a detailed plan. ",
        "title": "Place-based Tax Increment Financing (TIF)",
        "overview": "Provides TIF around transit nodes or other high-value public infrastructure.",
        "who": "Local government\n\nThe State Economic Assistance Coordinating Council must approve the use of TIF/DIF in a specific municipality.",
        "principles": [
          engagement,
          production,
          affordability,
          location,
          complete
        ],
        "adoption": "Local Action",
        "location": "Maine\nPennsylvania\nPortland, OR\nQuincy, MA",
        "where": "Portland, OR - The City of Portland has established a 45% TIF set-aside  for the development, preservation, and rehabilitation of affordable housing for households earning below the area median income. \n\nMaine - The Maine Affordable Housing Tax Increment Financing (AHTIF) Program allows municipalities to designate a specific area as an affordable housing development district, and enables them to use tax increment revenues in the district towards affordable housing. Specific uses of funds include capital and operating costs of affordable housing, support services for residents of affordable housing, and costs of recreational and childcare facilities in the AHTIF district.\n\nQuincy, MA - The first city in Massachusetts to use DIF, Quincy's program dates to 2005 and has driven much of the downtown revitalization. The City is in the process of transforming over 50 acres of downtown property into mixed-use development with new housing, shopping, office, and open space. DIF has been used to finance utility upgrades, streetscape improvements, and parking. \n\nMassachusetts - The Urban Center Housing Tax Increment Financing (UCH-TIF) Program authorizes cities and towns to promote housing (including affordable housing) and commercial development through TIF. Municipalities must adopt a detailed UCH-TIF Plan for proposed public and private projects within the UCH-TIF Zone, including agreements with property owners undertaking new development who will receive tax exemptions. ",
        "resources": {
          "titles": "Smart Growth Toolkit: Tax Increment Financing\n\nLincoln Institute: Tax Increment Financing\n",
          "links": "https://www.mass.gov/service-details/smart-growth-smart-energy-toolkit-modules-district-improvement-financing-diftax\n\nhttps://www.lincolninst.edu/sites/default/files/pubfiles/tax-increment-financing-lla060102.pdf"
        }
      },
      {
        "considerations": "In Massachusetts, RETFs require passage of a home rule petition, but statewide passage - pursued in California and Florida - could be an alternative. Bill H. 4196, introduced by Representative Mike Connolly to the 2017-18 legislative session, is currently moving through the state legislature. It would authorize cities and towns with Affordable Housing Trust Funds to establish a fee on real estate transactions of more than $2,500,000. If it fails to pass by December, Representative Connolly can reintroduce the bill in the 2019-2020 session. ",
        "what": "Real estate transfer fees (RETFs) are a source of funding that cities, counties, and states can target towards affordable housing development and programs. Typically, real estate transfer fees are applied as a percentage of the sales price or as a set dollar amount per $1,000 of property value. Unlike property taxes, they are only applied at the time a property is sold, so revenue from a RETF is largely based on the performance of the local real estate market. Communities can leverage RETFs to more equitably share increased property values and investment in local neighborhoods. As new homeowners and businesses move into a neighborhood, localities can use RETFs to redirect a portion of that investment to programs that mitigate displacement of low-income residents. \n\nRETF programs vary in scope and use of revenues. While most programs cover residential properties, some can be extended to include commercial and/or industrial real estate transactions. RETFs are set at a low enough level so as not to discourage real estate transactions. They can also include exemptions (e.g. low income homeowners). Alternatively, RETFs can be deployed as tools to discourage speculation and property flipping, by adjusting tax rates based on amount of time the property is held. \n\nExamples of RETFs dedicated to affordable housing exist throughout the country, including statewide programs in Florida and more recently in California. In Massachusetts, RETFs require passage of a home rule petition by the legislature. Both Martha\u2019s Vineyard and Nantucket each have an existing real estate transfer fee charge of 2%, with revenue directed to open space conservation. ",
        "title": "Real Estate Transfer Fee (RETF)",
        "overview": "Dedicated source of funding raised through a fee on real estate transactions set as a percent of sales price or set dollar amount per $1,000 of property value.",
        "who": "State and local government",
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          complete
        ],
        "adoption": "Legislation",
        "location": "Block Island, RI  \nCalifornia\nChicago, IL                   Cook County, IL  \nFlorida \nOakland, CA (proposed)\nSomerville, MA (proposed)                                              ",
        "where": "Martha's Vineyard and Nantucket, MA - Both Martha\u2019s Vineyard and Nantucket each have an existing real estate transfer fee charge of 2%, with revenues directed open space conservation. \n\nSomerville, MA - Somerville's RETF exempts owner-occupant sellers as well as all buyers who will be owner-occupants. The  proposal would authorize the City to impose a fee of up to 1% on investors and developers who buy property in the City of Somerville, as well as up to a 1% fee on investors and developers who sell property in the city. The city submitted a home rule petition to implement the fee, but did not receive approval in the 2017-2018 legislative session. ",
        "resources": {
          "titles": "Policy Link: Real Estate Transfer Taxes\n\nSomerville Real Estate Transfer Fee",
          "links": "http://www.policylink.org/resources-tools/real-estate-transfer-taxes\n\nhttps://www.somervillema.gov/departments/transfer-fee-home-rule-petition"
        }
      },
      {
        "considerations": "Anti-speculation taxes have been proposed in Philadelphia, PA, and San Francisco, CA, but were not successfully passed. In Somerville, MA, the Board of Alderman unanimously passed an anti-speculation tax, but it requires a home rule petition that was rejected by the state legislature. In New York, NY, there are two bills pending in the state legislature (AB 7406 and SB 6488).\n\nAnti-speculation taxes could both discourage speculation and raise revenue, but these goals are not always complementary. If the rate is set high enough to effectively deter speculation, it is unlikely that it will raise much revenue. ",
        "what": "Anti-speculation taxes target speculative investors and house flippers who buy, renovate, and rapidly resell properties, forcing households to compete for housing by paying higher prices to purchase or rent a home. In most communities where anti-speculation taxes have been proposed or adopted, the tax is structured as a graduated transfer tax. Transfer taxes are only applied at the time the property is sold, and are based off a percentage of the sales price or as a set dollar amount per $1,000 of property value. In order to deter flipping and encourage long-term investment, taxes are initially set at a higher rate and gradually decline as the length of property ownership increases. Transfer taxes are often set low enough to maintain real estate activity and contain exemptions (potentially for subsidized affordable housing developments or transfers among long-term owner-occupants) to ensure that the policy's impact is limited to investors. ",
        "title": "Anti-Speculation Tax",
        "overview": "A tax targeted at homes that are bought, renovated, and sold within a short time frame (typically up to 24 months) intended to deter speculation and property flipping.",
        "who": "Local government",
        "principles": [
          engagement,
          affordability
        ],
        "adoption": "Legislation",
        "location": "Vermont ",
        "where": "Vermont - In 1973, Vermont adopted a Land Gains Tax to prevent out of state resort interests from driving up land prices for Vermont residents. The Land Gains Tax is a graduated transfer tax applied to land held for fewer than six years. The tax amount depends on the length of time the owner has held the land and the capital gain on the land. The maximum rate is 60% of the capital gain for land held for less than 1 year with a 200% or greater gain in land value. The transfer tax declines to 5% for land held for at least 5 years and where the capital gain is less than 100% of the land value. \n\nSan Francisco, CA - In 2014, San Francisco voters rejected Proposition G, which would have imposed a graduated transfer tax on multifamily property speculation. The tax amount would have initially been set at 24% of the assessed value and then gradually decreased to 14% by the 5th year. Some of the exemptions included newly built housing, properties sold for an amount equal to or less than the seller's purchase price, property sold within one year of a property owner's death, and properties with rent-restricted units.",
        "resources": {
          "titles": "Belonging Richmond: Anti-Speculation Tax\n\nVermont Land Gains Tax\n\nCenter for NYC Neighborhoods: House Flipping in NYC",
          "links": "https://haasinstitute.berkeley.edu/belongingrichmond-antispeculationtax\n\nhttp://tax.vermont.gov/property-owners/real-estate-transaction-taxes/land-gains-tax\n\nhttps://cnycn.org/wp-content/uploads/2018/04/Center-Flip-Report_April2018.pdf"
        }
      },
      {
        "considerations": "Outside of Washington, DC, there are no examples of vacancy taxes in the United States. Recently, U.S. cities have begun exploring this tool, including San Francisco for retail space and NYC and Boston for residential.",
        "what": "In high-priced cities, housing is often used as an investment for high-income households and companies. Some cities that have had a significant portion of their housing units taken off the market and left vacant have used taxes or fees to deter this type of use. A vacancy fee or tax has been used to deter this type of investment in other countries, and several cities in the United States have began to investigate the strategy: San Francisco, Seattle, New York, and others.",
        "title": "Vacancy Tax",
        "overview": "A tax on property owners with vacant or under-utilized residential properties intended to motivate owners to rent our their empty or under-utilized properties. ",
        "who": "Local government",
        "principles": [
          engagement,
          affordability
        ],
        "adoption": "Legislation",
        "location": "\nAustralia\nFrance\nWashington, DC\nVancouver, Canada",
        "where": "San Francisco, CA - The City is currently exploring a vacancy tax on large property owners that leave residential and commercial buildings empty. \n\nWashington, DC - The District taxes vacant property at a higher rate.\n\nVancouver, Canada - The City implemented an annual tax of 1% of the assessed property value on vacant or underutilized residential properties. Every residential property owner must submit a property status declaration annually to determine whether they are subject to the tax. The tax applies to homes rented for less than six months of the year and those that are not a primary residence. Exemptions apply to homes that have been recently sold or are under construction. Funds from the tax are used for affordable housing initiatives.\n\nParis, France - The City taxes vacant rental units at 60% of the fair market value of rent, and second homes in neighborhoods with housing shortages an additional 60% on top of base property taxes. ",
        "resources": {
          "titles": "Vancouver Empty Homes Tax\n\nWashington, DC Vacant Real Property",
          "links": "https://vancouver.ca/home-property-development/empty-homes-tax.aspx\n\nhttps://otr.cfo.dc.gov/page/otr-vacant-real-property"
        }
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          location
        ],
        "overview": "Provides funding to developers for affordable rental housing development through tax credits. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Federal LIHTC",
          "links": "https://www.huduser.gov/portal/datasets/lihtc.html"
        },
        "title": "Federal Low-Income Housing Tax Credit (LIHTC)"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          location
        ],
        "overview": "Modeled after the federal program, this state program provides funding to developers for affordable rental housing development through tax credits. ",
        "location": "Massachusetts",
        "resources": {
          "titles": "Massachusetts LIHTC",
          "links": "https://www.mass.gov/service-details/low-income-housing-tax-credit-lihtc"
        },
        "title": "State Low-Income Housing Tax Credits "
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability
        ],
        "overview": "Offers loans for permanent financing of affordable rental housing to developers.",
        "location": "Massachusetts",
        "resources": {
          "titles": "MassHousing Programs",
          "links": "https://www.masshousing.com/portal/server.pt/community/about_masshousing/221/agency_backgrounder"
        },
        "title": "Permanent Financing"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability
        ],
        "overview": "Provides funding to developers of small-scale projects in communities with less than 200,000 people.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Community Scale Housing Initiative",
          "links": "https://www.mass.gov/service-details/community-scale-housing-initiative-cshi"
        },
        "title": "Community Scale Housing Initiative (CSHI)"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability
        ],
        "overview": "Exempts affordable housing construction materials from the state sales tax.",
        "location": "Minnesota",
        "resources": {
          "titles": "Construction Materials Sales Tax Exemption Factsheet",
          "links": "http://www.mhponline.org/files/Sales_Tax_Exemption_fact_sheet.pdf"
        },
        "title": "Affordable Housing Construction Materials Sales Tax Exemption"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability
        ],
        "overview": "Provides funding to developers for technical assistance and pre-development activities.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Massachusetts Housing Partnership\n\nCEDAC Affordable Housing",
          "links": "https://www.mhp.net/\n\nhttps://cedac.org/housing/affordable-housing/"
        },
        "title": "Pre-Development Funding"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          location
        ],
        "overview": "Provides grants to municipalities and non-profit organizations for brownfield site assessment.",
        "location": "Massachusetts",
        "resources": {
          "titles": "MassDevelopment Financing",
          "links": "https://www.massdevelopment.com/what-we-offer/financing/"
        },
        "title": "Pre-Development Loans"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          complete
        ],
        "overview": "Provides funding for capital projects to municipalities that have demonstrated a commitment to increasing housing supply in their communities.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Housing Choice Initiative",
          "links": "https://www.mass.gov/housing-choice-initiative"
        },
        "title": "Housing Choice Initiative"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability,
          location
        ],
        "overview": "Provides funding to municipalities that designate certain areas for additional housing development, at least 20% of which is reserved for low- or middle-income residents.",
        "location": "California",
        "resources": {
          "titles": "SB 540 Text\n\nCalifornia Budget & Policy Center: 2017 Housing Legislative Package",
          "links": "\n\nhttps://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB73\n\nhttp://calbudgetcenter.org/blog/understanding-recently-enacted-2017-state-legislative-housing-package/"
        },
        "title": "Housing Sustainability Districts"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability
        ],
        "overview": "Municipalities can levy a property tax whose proceeds are dedicated to producing and preserving affordable housing for low-income households.",
        "location": "Seattle, WA",
        "resources": {
          "titles": "Seattle Housing Levy",
          "links": "https://www.seattle.gov/housing/levy"
        },
        "title": "Housing Levy"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability
        ],
        "overview": "The municipality or county dedicates a percentage of a sales tax for affordable housing.",
        "location": "Los Angeles County, CA\nMiami-Dade County, FL\nOklahoma City, OK\nOlympia, WA",
        "resources": {
          "titles": "LA County Measure H",
          "links": "http://homeless.lacounty.gov/"
        },
        "title": "Dedicated Tax Revenue"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability
        ],
        "overview": "Enables local jurisdictions to levy a tax on residential construction, proceeds of which fund affordable housing production and downpayment assistance programs. ",
        "location": "Oregon",
        "resources": {
          "titles": "Oregon Housing Alliance: Construction Excise Tax",
          "links": "https://www.oregonhousingalliance.org/construction-excise-tax/"
        },
        "title": "Construction Excise Tax"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability
        ],
        "overview": "Municipalities assess a fee on non-residential development projects to offset the increased demand for affordable housing. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Belonging Richmond: Affordable Housing Linkage Fees",
          "links": "https://haasinstitute.berkeley.edu/belongingrichmond-affordablehousinglinkagefees"
        },
        "title": "Linkage Fees"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability
        ],
        "overview": "The state assesses a recording fee on real estate transactions (excluding new home purchases), the proceeds of which fund affordable housing production. ",
        "location": "California",
        "resources": {
          "titles": "SB 2 Text\n\nCalifornia Budget & Policy Center: 2017 Housing Legislative Package\n",
          "links": "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB2\n\nhttp://calbudgetcenter.org/blog/understanding-recently-enacted-2017-state-legislative-housing-package/"
        },
        "title": "Real Estate Transactions Recording Fee"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          affordability
        ],
        "overview": "Local government backs a loan or bond for an affordable housing project to make it more attractive for banks and investors, lowering interest rates.",
        "location": "",
        "resources": {
          "titles": "Credit Enhancement",
          "links": "https://www.psrc.org/credit-enhancement"
        },
        "title": "Credit Enhancement"
      },
      {
        "additional": true,
        "principles": [
          production,
          preservation,
          affordability,
          diversity,
          design
        ],
        "overview": "Federal program that provides funding for a wide range of activities, including building, buying, and/or rehabilitating affordable housing for rent or homeownership.",
        "location": "Nationwide",
        "resources": {
          "titles": "HOME Investment Partnership Program",
          "links": "https://www.hudexchange.info/programs/home/"
        },
        "title": "HOME Investment Partnership Program"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          diversity
        ],
        "overview": "Provides grants, interest subsidies, and advances to developers for affordable rental and ownership projects.",
        "location": "Nationwide",
        "resources": {
          "titles": "Federal Home Loan Bank Affordable Housing Program",
          "links": "http://www.fhlbboston.com/communitydevelopment/ahp/index.jsp"
        },
        "title": "Federal Home Loan Bank Affordable Housing Program "
      },
      {
        "additional": true,
        "principles": [
          production,
          preservation,
          affordability,
          diversity,
          design
        ],
        "overview": "Provides communities with funds to build, preserve, and rehabilitate rental homes for low-income households.",
        "location": "Nationwide",
        "resources": {
          "titles": "National Housing Trust Fund",
          "links": "https://www.hudexchange.info/programs/htf/"
        },
        "title": "National Housing Trust Fund"
      },
      {
        "additional": true,
        "principles": [
          production,
          preservation,
          affordability,
          design
        ],
        "overview": "Provides communities with funds to build, preserve, and rehabilitate rental homes for low-income households.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Massachusetts Affordable Housing Trust Fund",
          "links": "https://www.mass.gov/service-details/affordable-housing-trust-fund-ahtf"
        },
        "title": "Massachusetts Affordable Housing Trust Fund"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          design
        ],
        "overview": "Serves as a repository for linkage fees, inclusionary zoning payment in-lieu of unit fees, and other affordable housing payments.",
        "location": "\nAustin, TX\nBoston, MA\nChicago, IL\nColumbus, OH\nPhiladelphia, PA\nSalt Lake City, UT\nSan Francisco, CA\nSomerville, MA",
        "resources": {
          "titles": "MHP Municipal Housing Trust Fund Guidebook\n\nPolicy Link Housing Trust Fund",
          "links": "https://www.mhp.net/writable/resources/documents/municipal_affordable_housing_trust_guidebook.pdf\n\nhttps://www.policylink.org/sites/default/files/housing-trust-funds_0.pdf"
        },
        "title": "Municipal Housing Trust Fund"
      },
      {
        "additional": true,
        "principles": [
          production,
          preservation,
          affordability,
          design
        ],
        "overview": "Provides funding to developers for affordable housing production and preservation through long-term bonds.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Massachusetts 2018 Housing Bond",
          "links": "https://www.mass.gov/news/governor-baker-signs-18-billion-affordable-housing-bill-to-increase-housing-production"
        },
        "title": "State Affordable Housing Bonds"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          design
        ],
        "overview": "Provides funding to developers for affordable housing production and preservation through long-term bonds.",
        "location": "Austin, TX\nMiami-Dade County, FL\nOakland, CA\nPortland, OR\nSan Francisco, CA",
        "resources": {
          "titles": "Belonging Richmond: Affordable Housing Bonds",
          "links": "https://haasinstitute.berkeley.edu/belongingrichmond-affordablehousingbonds"
        },
        "title": "Municipal Affordable Housing Bonds"
      },
      {
        "additional": true,
        "principles": [
          production,
          affordability,
          location,
          complete,
          design
        ],
        "overview": "Municipal, county, or regional fund supporting developers with acquisition and development of affordable housing within areas served by public transit. ",
        "location": "Denver, CO   \nLos Angeles, CA                     Seattle, WA                     ",
        "resources": {
          "titles": "Enterprise Equitable Transit Oriented Development\n\nDenver Regional TOD Fund",
          "links": "https://www.enterprisecommunity.org/solutions-and-innovation/equitable-transit-oriented-development\n\nhttps://www.enterprisecommunity.org/financing-and-development/community-loan-fund/denver-regional-tod-fund"
        },
        "title": "Transit-Oriented Development (TOD) Fund"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability
        ],
        "overview": "Adopted at the municipal level to fund affordable housing development and preservation activities (as well as open space and historic preservation activities) through a local property tax surcharge and state match. ",
        "location": "Massachusetts",
        "resources": {
          "titles": "Community Preservation Act (CPA)\n\nCommunity Preservation Act Adoption",
          "links": "https://www.mass.gov/service-details/community-preservation-act\n\nhttp://communitypreservation.org/sites/default/files/CPA_Adoption_Map_5.17.2018.pdf"
        },
        "title": "Community Preservation Act (CPA)"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          complete
        ],
        "overview": "Municipality can charge a one-time fee on new development to offset the impacts of that development on infrastructure and municipal services. ",
        "location": "Nationwide",
        "resources": {
          "titles": "Brookings Institute: Impact Fees and Job Growth",
          "links": "https://www.brookings.edu/research/paying-for-prosperity-impact-fees-and-job-growth/"
        },
        "title": "Impact Fees"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "Municipalities with less than 13% of their housing stock on the MA Subsidized Housing Inventory can apply for state funds to support new zoning, public infrastructure improvements, community development, and education for increased housing production.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Planning for Housing Production Program",
          "links": "https://www.masshousing.com/portal/server.pt/community/planning___programs/207/planning_for_housing_production"
        },
        "title": "Planning for Housing Production Program"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          location,
          complete
        ],
        "overview": "A private equity fund administered by the Conservation Law Foundation and Massachusetts Housing Investment Corporation supportive of housing projects that meet community, environmental, and health outcome criteria. ",
        "location": "Massachusetts",
        "resources": {
          "titles": "Healthy Neighborhood Equity Fund",
          "links": "http://www.hnefund.org/"
        },
        "title": "Healthy Neighborhoods Equity Fund"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          preservation,
          affordability,
          diversity,
          location,
          complete,
          design,
          stability,
          fair
        ],
        "overview": "Performance-based financing to a public agency, non-profit organization, or foundation to accomplish a specific objective (e.g. homelessness mitigation, affordable housing production). The private and/or philanthropic lenders are repaid based on whether the program achieves its goals.",
        "location": "Chicago, IL\nDenver, CO    \nHouston, TX    \nRichmond, CA\nMassachusetts",
        "resources": {
          "titles": "Pay for Success Basics\n\nMassachusetts Housing and Shelter Alliance: Pay for Success",
          "links": "https://payforsuccess.org/learn/basics\n\nhttp://www.mhsa.net/PFS"
        },
        "title": "Social Impact Bonds"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          production,
          location
        ],
        "overview": "Reimbursement through the State for costs associated with increased school enrollment following adoption of a Chapter 40R Smart Growth Overlay District.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Chapter 40S",
          "links": "https://www.mass.gov/service-details/chapter-40-s"
        },
        "title": "MGL Chapter 40S"
      },
    ],
  },
  {
    title: 'Construction + Development Techniques',
    practices: [
      {
        "considerations": "\nProjects in Portland, OR, and in New York, NY, were proposed, designed, then put on hold for various reasons, such as construction costs and challenges with tax credits.\n\nRoadblocks to using mass timber for tall buildings in the United States include restrictive building codes, which typically don\u2019t allow wood construction over six stories, and a lack of manufacturers in certain regions of the country. The Massachusetts Board of Building Regulations and Standards and individual municipalities can update building codes to support the use of mass timber construction for mid- and high-rise buildings.",
        "what": "Mass timber is an engineered wood product typically made by laminating and compressing multiple layers into solid panels, which are used to frame a building\u2019s walls, floors, and roofs. Mass timber is a broad category that includes cross-laminated, glue-laminated, nail-laminated, and dowel-laminated timber. Each allows for a different design aesthetic and varying level of on- versus off-site manufacturing. \n\nAdvances in technology contributing to increased affordability are driving a resurgence in mass timber construction for commercial, mid-rise, and even high rise construction, although it is considered most appropriate for mid-rise construction. Today, mass timber construction is increasingly cost-competitive with steel and concrete. On-site installation time is shorter than with these other materials, while mass timber's weight-to-strength ratio is comparable to that of steel or reinforced concrete. Fire resistance has greatly improved.",
        "title": "Mass Timber Construction",
        "overview": "Construction with cross-laminated timber increases savings on installation and materials.",
        "who": "Local government\n\nThe Massachusetts Board of Building Regulations",
        "principles": [
          engagement,
          production,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Portland, OR",
        "where": "Amherst, MA - In 2017, the University of Massachusetts Amherst completed the 87,000-square-foot John W. Olver Design Building is built of cross-laminated timber and glue-laminated columns. It is currently the largest timber frame structure in the Northeast. The project had major backing from the MA Legislature, which asked that the building become a demonstration project for the use of mass timber. \n\nFayetteville, AK \u2013 The University of Arkansas is constructing the first large-scale residence hall in the United States using cross-laminated timber (CLT). The Stadium Drive Residence Halls will consist of 2 5-story buildings, with more than 202,000 square feet of space and 368 dorm rooms. The project is a collaborative effort of the University of Arkansas Housing Facilities Management, the College of Arts and Sciences, and the School of Architecture and Design. It brings together design teams from across the country, including Boston-based Leers Weinzapfel Associates, Arkansas-based Modus Studio, St. Louis-based Mackey Mitchell Architects, and Philadelphia-based OLIN.",
        "resources": {
          "titles": "Architect Chats Timber on the Rise Series\n\n\nConstruction Specifier: Heavy Timber Construction is Becoming Popular\n\nArchitects Newspaper: Mass Timber California Housing Crisis \n\nUniversity of Arkansas Stadium Drive Residence Halls",
          "links": "\n\nhttps://soundcloud.com/architectchats/ar-chats-ep-15-rethink-wood-3/sets\n\nhttps://www.constructionspecifier.com/heavy-timber-construction-becoming-popular/4/\n\nhttps://archpaper.com/2018/03/can-mass-timber-help-california-build-way-housing-crisis/\n\nhttps://archpaper.com/2017/11/design-collaboration-mass-timber-residence-hall-university-arkansas/#gallery-0-slide-0"
        }
      },
      {
        "considerations": "Generally speaking, opposition to modular construction has focused on a lack of oversight and conflicts with unionized labor. In some municipalities, unions have existing contracts that forbid their members from working with components that were not manufactured by union workers. Some unions see this technique as a mechanism by which construction (of modules) is exported elsewhere. Most inspections of modular homes are done in the factory by third-party inspectors hired by the manufacturer. The reduced role of public sector inspectors has raised questions about the quality and safety of modular components. Communities pursuing modular construction should be ready to address some of these concerns.\n\nThe Massachusetts Board of Building Regulations and Standards and individual municipalities can update building codes to support the use of modular construction. The Board of Building Regulations and Standards recently created a new subcommittee to look further into modular homes in Massachusetts. ",
        "what": "Modular construction has been around since the early home kits sold by Sears and Roebuck and Company, but technology and efficiency gains have generated renewed enthusiasm for this technique and its potential to decrease the cost of housing production. Modular housing is manufactured within a factory, using the same materials and designed to the same standards and codes as conventionally built homes. Construction of modular components happens simultaneously with the foundation work; building modules are then transported and assembled onsite. Because much of the work takes place within the controlled conditions of a factory floor, it is less susceptible to weather-induced delays. Modular construction typically takes 2/3rds the time of a regular construction project. The faster construction process is the primary factor in cost saving. Including the value of land, the median price for a new modular unit in the United States was $217,200 in 2016, nearly $90,000 less than for a new site-built home. \n\nHomebuilders have been slow to adopt modular construction. According to the Census Bureau, developers across the country added 15,000 new modular homes in 2016. A major challenge for the spread of modular construction is the lack of manufacturing capacity. The United States has some factories, but most are found in Scandinavian countries where this technology is widely popular. For example, 20% of new housing in the Netherlands was the result of modular construction in 2016. Another limiting factor is storage of modules during on-site assembly. Ideal sites for development will have adjacent sites that can be used as staging areas. ",
        "title": "Modular Construction",
        "overview": "Building components are manufactured indoors and off-site for lower-cost and quicker construction.",
        "who": "Local government\n\nThe Massachusetts Board of Building Regulations",
        "principles": [
          production,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Nationwide",
        "where": "New York, New York \u2013 The De Blasio administration has delved into modular construction through a variety of programs. The City\u2019s Build it Back program is rebuilding housing damaged by Hurricane Sandy through the use of modular construction. The City started using modular construction through this program after falling behind schedule on replacing lost housing; the technology facilitated a quick turnaround. Currently, 100 homes are being rebuilt in Staten Island and Queens. The City\u2019s Public Design Commission also plans to include modular development in the next round of example projects for its affordable housing design guide. In May of 2018, the NYC Department of Housing Preservation and Development issued an request for proposal for the design, construction, and management of a mixed-income and mixed-use affordable housing development in the East New York neighborhood of Brooklyn requiring modular construction - a first for the City.  ",
        "resources": {
          "titles": "Modular Building Construction\n\nThe Boston Globe: Boston Housing Should Be More Like Legos\n\n",
          "links": "http://www.modular.org/HtmlPage.aspx?name=why_modular\n\nhttps://www.bostonglobe.com/opinion/2015/04/05/boston-housing-should-more-like-legos/VhlYKBOFEFsoKVBlywX8dL/story.html"
        }
      },
      {
        "considerations": "New construction techniques are almost certain to open up a can of worms (re: labor laws, building codes, zoning provisions, etc.). A good best practice may be supporting a pilot to assess the need for legislation or local regulatory revision.\n\nThe Massachusetts Board of Building Regulations and Standards and individual municipalities can update building codes to support 3D printed homes.",
        "what": "3D printed homes can be built for a fraction of traditional construction costs and are being piloted around the world (though rarely in the United States). Labor costs are lower because only minimal human labor is required to create floors, walls, and insulation. Mobile 3D printers allow housing to be built on-site so transportation costs are also lower. Additionally, housing plans are downloadable, reducing design costs.",
        "title": "3D Printed Homes",
        "overview": "3D printing creates a physical object from a digital design using different technologies and materials. Interest in 3D printing for housing construction has increased as technology has become more accessible and printing materials have evolved. If brought to scale, 3D printed homes have the capacity to significantly lower labor, design, and material costs that currently act as barriers to housing development.",
        "who": "Local government\n\nBuilding Code Departments at the local, state, and federal  levels",
        "principles": [
          production,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Austin, TX",
        "where": "Austin, TX - The first 3D printed house in the United States was created for the South by Southwest (SXSW) festival and permitted in Austin, TX, in 2018. The 350-square-foot, one-floor, single-family house took 48 hours and cost $10,000 to print. The model included a living room, bedroom, bathroom, and a curved porch. ICON, the Austin-based startup behind the house, states that its printer can print a home that is up to 800 square feet. The startup\u2019s goal is to build 100 homes in El Salvador by 2019. \n\nEindhoven, Netherlands - Project Milestone, in Eindhoven, is set to be the world's first commercial housing project that is 3D printed concrete. The development consists of 5 detached 3D printed houses. The ground floors of the units will be printed off site, and the second levels will be manufactured on site.\n\nChina - In China, HuaShang Tengda Company built a 4,305-square-foot 2-story 3D printed house on site in 45 days. The team first erected the frame of the house, complete with rebar support and plumbing pipes, and then printed the floors and walls. Seismic tests showed that the structure should withstand an earthquake as strong as 8 on the Richter scale.",
        "resources": {
          "titles": "3D Printed House\n\nICON 3D Homes\n\nPrefabrication & Modular Construction: A Growing Trend with Evolving Legal Implications",
          "links": "https://www.3dprintedhouse.nl/en/\n\nhttps://www.iconbuild.com/\n\nhttp://www.hinckleyallen.com/publications/prefabricated-modular-construction-a-growing-trend-with-evolving-legal-implications/"
        }
      },
      {
        "considerations": "Use of prefabrication for housing was first used after World War II to create mobile homes, then manufactured homes following factory-built HUD standards established in 1976. Awareness of what present-day prefabricated homes look like may be useful to lower stigma due to historical connotations with lower-quality housing. Today, prefab ADUs and tiny houses can be purchased online everywhere from independent specialty firms to large corporations like Amazon.\n\nIn some communities, zoning regulations can restrict where prefabricated homes can be placed. Municipalities that what to support this kind of housing should assess their zoning and ensure the necessary flexibility.\n\nThe Massachusetts Board of Building Regulations and Standards and individual municipalities can update building codes to support pre-fab housing.",
        "what": "Present-day prefab homes have lower labor and construction costs significantly, while complying with health and building codes. They can be identical in appearance to site-built homes.  In recent years, companies have expanded manufactured housing to offer smaller housing alternatives such as accessory dwelling units and tiny houses. Prefab housing tends to be more affordable than traditional builds. The construction timeline tends to be short, and immune to weather delays since prefab homes are built indoors. And this type of production creates less material waste because these needs can more easily be estimated thanks to the standardized nature of this technique. \n\nIn recent years, pre-fab accessory dwelling units (ADUs) in particular have started to take off in areas with progressive ADU bylaws such as Oregon and California. The smaller size of ADUs allows for easy shipping from a pre-fab factory to the site. Pre-fab companies design and build the units, so homeowners are relieved from design decisions beyond finishes and other final choices.",
        "title": "Pre-Fabricated Housing",
        "overview": "A prefabricated, or manufactured home, is built in a factory in standard sections, then shipped to its destination in pieces and assembled on site.",
        "who": "Local government\n\nBuilding Code Departments at the local and state levels ",
        "principles": [
          production,
          affordability
        ],
        "adoption": "Local Action",
        "location": "Nationwide",
        "where": "California and Oregon - In states with progressive ADU zoning, a number of small pre-fab companies have been established. Pre-fab ADUs tend to be produced at price points similar to or lower than traditionally-built units. Some pre-fab ADU companies even handle the permitting process for homeowners for an extra fee. ",
        "resources": {
          "titles": "Manufactured Housing Institute (MHI)\n\nIdea Box\n\nLiving Homes\n\nkitHAUS",
          "links": "https://www.manufacturedhousing.org/ \n\nhttps://www.ideabox.us/\n\nhttps://www.livinghomes.net/\n\nhttp://kithaus.com/"
        }
      },
    ],
  },
  {
    title: 'Education + Outreach',
    practices: [
      {
        "additional": true,
        "principles": [
          engagement
        ],
        "overview": "Efforts to build broad coalitions between stakeholders, including local housing and community development organizations; financial, cultural, and educational institutions; local government; and local businesses.",
        "location": "Nationwide",
        "resources": {
          "titles": "Gentrification Learning Group Report",
          "links": "http://www.lisc.org/media/filer_public/00/46/004653e9-b77d-4ad7-88a5-b789e4178266/glc_report.pdf"
        },
        "title": "Coalition Building"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          fair
        ],
        "overview": "Increases empathy for those enduring housing instability by sharing the experiences of those struggling to find safe, affordable, and stable housing.",
        "location": "Detroit, MI\nPortland, OR\nSeattle, WA",
        "resources": {
          "titles": "Housing Stories Seattle",
          "links": "https://www.youtube.com/playlist?list=PLT1Bbf4NZkCVfHsq2-Ggr8DoRKezxLnf_"
        },
        "title": "Storytelling"
      },
      {
        "additional": true,
        "principles": [
          engagement,
          stability
        ],
        "overview": "Municipalities, banks, and non-profit organizations help potential homeowners understand the financial options and obligations that come with homeownership.",
        "location": "Nationwide",
        "resources": {
          "titles": "HUD Evidence Matters: Homeownership Education and Counseling",
          "links": "https://www.huduser.gov/portal/periodicals/em/spring16/highlight2.html"
        },
        "title": "Homeownership Education and Counseling"
      },
      {
        "additional": true,
        "principles": [
          engagement
        ],
        "overview": "Ensures that local governments are actively and effectively identifying, communicating with, and receiving input from their stakeholders.",
        "location": "Nationwide",
        "resources": {
          "titles": "MAPC Community Engagement Guide",
          "links": "https://www.mapc.org/resource-library/community-engagement-guide/"
        },
        "title": "Community Engagement Best Practices"
      },
      {
        "additional": true,
        "principles": [
          engagement
        ],
        "overview": "Equips stakeholders to effectively participate in planning processes.",
        "location": "Massachusetts",
        "resources": {
          "titles": "Citizen Planner Training Collaborative",
          "links": "http://masscptc.org/"
        },
        "title": "Citizen Planner Training"
      },
    ],
  },
];


const serialized = strategies.map(strategy => {
  strategy.practices = strategy.practices.map(practice => {
    const titles = practice.resources.titles.split('\n').filter(title => title && title.length > 0);
    const links = practice.resources.links.split('\n').filter(link => link && link.length > 0);

    practice.resources = titles.map((title,i) => ({ title, link: links[i] || ''}));
    practice.location = practice.location.split('\n').map(loc => loc.split(/\s{2,}/).join(''));
    practice.image = `${strategy.title.toLowerCase().split(' ').join('-')}.svg`;

    return practice;
  });

  return strategy;
});


module.exports = serialized;
