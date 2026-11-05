const DATA = {
  tracks: [
    {
      id: "personal-risk",
      name: "HOA, Home, Auto, Construction & Property",
      exam: "HOA, condo, home, auto, personal property, builders risk, contractors, construction equipment, bonds, and Washington producer law",
      missions: [
        {
          id: "wa-license",
          title: "Washington producer basics",
          summary: "Federal rules plus the 45-question Washington law section that drives the P&C exam.",
          lessons: [
            "Washington's Property and Casualty Producer Combo exam has 150 questions in 195 minutes (3 hr 15 min) and a 70% passing score. PSI's current Washington outlines took effect April 1, 2026.",
            "The official outline puts 45 questions on Washington laws, rules, and regulations, making state law the largest section.",
            "Federal topics include the Fair Credit Reporting Act, 18 USC 1033 and 1034, and flood insurance education through the National Flood Insurance Program.",
            "Washington law topics include commissioner authority, licensing, appointments, penalties, continuing education, producer records, and address changes.",
            "Marketing-practice questions focus on unfair practices, rebating, twisting, misrepresentation, advertising, compensation disclosure, receipts, and premium accountability.",
            "Washington-specific P&C topics include cancellation, nonrenewal, binders, guaranty association, homeowners cancellation, auto total loss, UM or UIM, PIP, and financial responsibility.",
            "Pre-licensing education is not required: HB 1061 removed it, and since July 23, 2023 you can sit for the exam without a course.",
            "After passing, submit your license application, $55 license fee, and (for Washington residents) fingerprints within 180 days or you must retest. Apply first, then book the fingerprint appointment; the fingerprint fee is $52 since October 1, 2026.",
            "Licenses renew every 2 years and expire the last day of your birth month. CE is 24 hours per 2-year period, including 3 hours of ethics; selling NFIP flood policies also requires a one-time 3-hour flood course.",
            "Patty Kuderer has been Washington's Insurance Commissioner since January 15, 2025, succeeding Mike Kreidler.",
            "Since July 1, 2025 (SSB 5798), homeowners, dwelling, and commercial policies need 60 days' notice of cancellation or nonrenewal, up from 45; nonpayment cancellation still needs 10 days.",
            "Gifts and promotional items are capped at $100 per person in any 12-month period; anything beyond that is illegal rebating.",
            "Washington's updated claims-handling rules (effective October 18, 2026) require insurers to update claimants in writing every 30 days while a claim is unresolved, let first-party claimants request their claim file, and let auto claimants demand an in-person inspection instead of a photo-only estimate."
          ]
        },
        {
          id: "general-concepts",
          title: "General insurance concepts",
          summary: "The 17-question section on risk, insurers, contracts, agency, authority, and legal contract rules.",
          lessons: [
            "Risk can be handled through avoidance, retention, sharing, reduction, or transfer, and insurance is mainly a risk-transfer tool.",
            "A peril causes loss, a hazard increases the chance or severity of loss, and a loss is the reduction in value or financial harm.",
            "Insurers can be stock or mutual, admitted or non-admitted, domestic, foreign, or alien.",
            "Insurance contracts require offer, acceptance, consideration, competent parties, and legal purpose.",
            "Producer authority can be express, implied, or apparent, and agency law can make the insurer responsible for producer acts within authority.",
            "Contract interpretation concepts include reasonable expectations, indemnity, good faith, fraud, warranties, representations, misrepresentations, and concealment."
          ]
        },
        {
          id: "pc-basics",
          title: "Property and casualty basics",
          summary: "The 21-question core: insurable interest, negligence, valuation, limits, coinsurance, policy parts, and claims duties.",
          lessons: [
            "Property insurance requires insurable interest, and casualty insurance centers on legal liability for bodily injury or property damage.",
            "Liability may be absolute, strict, or vicarious, and negligence requires duty, breach, causation, and damages.",
            "Loss valuation methods include actual cash value, replacement cost, market value, agreed value, valued policy, and functional replacement cost.",
            "Policy structure includes declarations, definitions, insuring agreement, conditions, exclusions, endorsements, and supplemental coverages.",
            "Limits can be per person, per accident, per occurrence, aggregate, split limits, or combined single limit.",
            "Coinsurance compares insurance carried to insurance required, and penalties can apply when property is underinsured."
          ]
        },
        {
          id: "dwelling",
          title: "Dwelling policy concepts",
          summary: "The smaller dwelling section: DP forms, property coverages, perils, conditions, endorsements, and liability supplement.",
          lessons: [
            "Dwelling policies are often used for rental homes, non-owner-occupied homes, and residential property that does not fit homeowners eligibility.",
            "Dwelling property coverages include Coverage A dwelling, B other structures, C personal property, D fair rental value, and E additional living expense.",
            "Basic, broad, and special dwelling forms differ by the perils insured against.",
            "Dwelling policies contain conditions, exclusions, and endorsements that can change valuation, perils, or covered property.",
            "The personal liability supplement can add Coverage L personal liability and Coverage M medical payments to others."
          ]
        },
        {
          id: "hoa-condo",
          title: "Condo HOA and association insurance",
          summary: "Master policies, association property, common elements, fidelity, liability, D&O, and unit-owner gaps.",
          lessons: [
            "A condo association master policy usually insures common elements and may insure parts of individual units depending on the declarations and bylaws.",
            "Bare walls, single entity, and all-in coverage describe how far the association policy reaches into unit interiors and improvements.",
            "HOAs commonly need property, commercial general liability, directors and officers liability, crime or fidelity, equipment breakdown, and umbrella coverage.",
            "Unit owners still need their own HO-6 policy for personal property, loss assessment, personal liability, and gaps in interior building coverage.",
            "Loss assessment coverage can help a unit owner pay a covered special assessment from the association after a shared loss."
          ]
        },
        {
          id: "homeowners",
          title: "Home insurance",
          summary: "HO policy parts, dwelling valuation, exclusions, endorsements, liability, and loss settlement.",
          lessons: [
            "Coverage A is dwelling, B is other structures, C is personal property, D is loss of use, E is personal liability, and F is medical payments to others.",
            "HO-3 commonly provides open peril dwelling coverage and named peril personal property coverage.",
            "Replacement cost pays new-for-old subject to policy terms, while actual cash value is replacement cost minus depreciation.",
            "Flood and earthquake are usually excluded or limited and often require separate coverage or endorsements.",
            "Personal liability coverage responds when an insured is legally responsible for covered bodily injury or property damage."
          ]
        },
        {
          id: "personal-property",
          title: "Personal property and valuables",
          summary: "Coverage C, special limits, renters, condo contents, scheduled property, and claim valuation.",
          lessons: [
            "Personal property coverage protects belongings such as furniture, clothing, electronics, and household items.",
            "Policies often have special limits for money, jewelry, firearms, silverware, business property, and watercraft.",
            "Scheduled personal property endorsements can provide broader coverage or higher limits for valuable items.",
            "Renters policies insure the tenant's personal property and liability, not the building.",
            "Proof of ownership, receipts, photos, appraisals, and inventories make personal property claims easier to settle."
          ]
        },
        {
          id: "auto",
          title: "Personal auto insurance",
          summary: "Liability, PIP or medical payments, uninsured motorist, collision, other-than-collision, and Washington rules.",
          lessons: [
            "Auto liability pays damages an insured is legally responsible for because of covered bodily injury or property damage.",
            "Collision covers upset or impact with another object; other-than-collision covers losses such as theft, hail, vandalism, and fire.",
            "Uninsured and underinsured motorist coverage protects insureds when an at-fault driver has no insurance or not enough insurance.",
            "Washington's minimum auto liability limits are 25/50/10: $25,000 bodily injury per person, $50,000 per accident, and $10,000 property damage.",
            "Policy definitions decide who is an insured, what autos are covered, and where coverage applies.",
            "Insurers must offer PIP (at least $10,000 medical, $2,000 funeral, and $10,000 income continuation at up to $200 a week) and UIM; the named insured can reject either only in writing.",
            "Personal auto cancellation needs 20 days' notice (10 days for nonpayment or in the first 30 days). After a policy has been in force 60 days, it can be cancelled only for nonpayment or a suspended or revoked driver's license."
          ]
        },
        {
          id: "commercial-auto",
          title: "Commercial auto",
          summary: "The 5-question commercial auto section: covered autos, hired and non-owned autos, liability, physical damage, and endorsements.",
          lessons: [
            "Commercial auto forms use covered auto symbols to show which autos are covered for liability or physical damage.",
            "Hired autos are vehicles the business leases, hires, rents, or borrows, while non-owned autos are used in the business but not owned by it.",
            "Commercial auto liability protects the business against covered bodily injury or property damage from covered auto use.",
            "Physical damage coverage can apply to covered autos for collision and other-than-collision causes subject to policy terms.",
            "Construction clients may need endorsements for employees as insureds, mobile equipment, leased autos, and additional insured or loss payee interests."
          ]
        },
        {
          id: "commercial-property",
          title: "Commercial property",
          summary: "The 10-question commercial property section: CPP, building and business personal property, causes of loss, business income, crime, inland marine, and farm.",
          lessons: [
            "A commercial package policy can combine commercial property, general liability, auto, crime, inland marine, and other eligible coverages.",
            "Building and business personal property coverage protects commercial buildings, business contents, and property of others at described premises.",
            "Cause of loss forms determine whether coverage is basic, broad, or special, and exclusions still control what is not covered.",
            "Business income and extra expense coverage respond when covered property damage interrupts operations.",
            "Commercial crime, equipment breakdown, ordinance or law, spoilage, value reporting, earthquake, and peak-season endorsements address important gaps.",
            "Commercial inland marine covers movable property, property in transit, installation property, equipment, and other specialized property exposures."
          ]
        },
        {
          id: "builders-risk",
          title: "Builders risk",
          summary: "Property coverage for buildings under construction, renovation, materials, soft costs, and project delays.",
          lessons: [
            "Builders risk is property coverage for a building or structure while it is being built, renovated, or repaired.",
            "Covered property can include the structure, temporary works, fixtures, materials, supplies, and property in transit or at temporary storage locations if the policy includes them.",
            "Common parties with an insurable interest include the owner, general contractor, subcontractors, lender, and sometimes architects or developers.",
            "Builders risk is usually written for the project period and often ends at occupancy, acceptance, sale, abandonment, or policy expiration.",
            "Important gaps include flood, earthquake, ordinance or law, testing, faulty workmanship, theft, soft costs, debris removal, and delay in completion."
          ]
        },
        {
          id: "contractor-liability",
          title: "Contractor liability",
          summary: "General liability, completed operations, subcontractor risk, additional insureds, certificates, and exclusions.",
          lessons: [
            "Commercial general liability protects contractors against covered bodily injury, property damage, personal injury, advertising injury, and related defense costs.",
            "Products-completed operations coverage matters after construction work is finished and a defect or condition causes covered injury or damage.",
            "Construction contracts often require additional insured status, primary and noncontributory wording, waiver of subrogation, and specific limits.",
            "Damage to your work, faulty workmanship, professional services, pollution, earth movement, and residential construction exclusions can create major gaps.",
            "Certificates of insurance show evidence of coverage but do not change the policy unless the required endorsements are actually issued."
          ]
        },
        {
          id: "construction-equipment",
          title: "Tools, equipment, and jobsite property",
          summary: "Contractors equipment, installation floaters, inland marine, leased equipment, theft, transit, and storage.",
          lessons: [
            "Contractors equipment coverage protects mobile equipment such as excavators, lifts, compressors, generators, and other jobsite machinery.",
            "An installation floater covers materials or equipment being installed, often while in transit, at temporary storage, and at the jobsite.",
            "Small tools may need scheduled limits, blanket limits, or special theft controls because they are easy to move and easy to steal.",
            "Leased or rented equipment contracts often make the contractor responsible for physical damage, loss of use, and continuing rental charges.",
            "Coverage should match where property moves: in transit, at temporary storage, at jobsites, in vehicles, and at the contractor's yard."
          ]
        },
        {
          id: "construction-business",
          title: "Construction business risks",
          summary: "Commercial auto, workers compensation, surety bonds, umbrella, professional, pollution, cyber, and business income.",
          lessons: [
            "Commercial auto is usually needed for contractor-owned trucks, trailers, vans, and vehicles used in the business.",
            "Workers compensation covers employee work injuries. Washington is a monopolistic state: employers buy coverage from the L&I State Fund or qualify to self-insure, and private insurers cannot sell it.",
            "Surety bonds involve a principal, obligee, and surety; bid bonds, performance bonds, and payment bonds are common in construction.",
            "Contractors may need umbrella or excess liability because jobsite accidents and construction defect claims can exceed primary limits.",
            "Professional liability, pollution liability, cyber, employment practices, and business income coverage may be relevant depending on design work, environmental exposure, payroll, systems, and revenue dependence."
          ]
        },
        {
          id: "bop-surety-specialty",
          title: "BOP, surety, umbrella, and specialty",
          summary: "The BOP and other P&C section: businessowners property and liability, D&O, E&O, EPLI, cyber, surety, umbrella, flood, watercraft, and earthquake.",
          lessons: [
            "A businessowners policy packages property and liability for eligible small and midsize businesses, with property, liability, exclusions, limits, deductibles, and optional coverages.",
            "Specialty liability can include directors and officers, professional or errors and omissions, employment practices, employee benefits, cyber liability, and network protection.",
            "Surety is different from insurance because the surety expects reimbursement from the principal after paying the obligee.",
            "Surety bonds have three parties: principal, obligee, and surety; construction commonly uses bid, performance, and payment bonds.",
            "Umbrella and excess policies add limits above underlying insurance and may involve underlying limits and self-insured retention.",
            "Other exam topics include mobile home, earthquake, flood, and watercraft insurance. NFIP residential flood limits are $250,000 building and $100,000 contents, with a usual 30-day waiting period."
          ]
        },
        {
          id: "coverage-fitting",
          title: "Matching coverage to real clients",
          summary: "How to spot gaps for condo owners, homeowners, renters, drivers, HOA boards, contractors, and builders.",
          lessons: [
            "Start with the exposure: what property can be damaged, who can be sued, what income or assessment risk exists, and what contracts require.",
            "For condo owners, compare the association master policy to the HO-6 so interior building items, personal property, and loss assessment gaps are visible.",
            "For homeowners, check dwelling limit, roof or water exclusions, liability limit, valuables, flood, earthquake, and umbrella needs.",
            "For auto and contractor vehicle clients, match limits to assets and income risk, then review physical damage, rental reimbursement, roadside, UM or UIM, hired auto, and non-owned auto.",
            "For construction clients, check builders risk, CGL, completed operations, contractor equipment, installation floaters, bonds, workers compensation, commercial auto, umbrella, and contract insurance requirements.",
            "Good recommendations explain tradeoffs clearly without promising coverage that the policy does not actually provide."
          ]
        }
      ]
    },
    {
      id: "pc",
      name: "Property & Casualty Producer",
      exam: "150 questions, 3 hr 15 min, 70% passing score",
      missions: [
        {
          id: "wa-law",
          title: "Washington law core",
          summary: "Commissioner authority, licensing, unfair practices, agency duties, fingerprints, and score rules.",
          lessons: [
            "Washington producer exams are administered by PSI for the Office of the Insurance Commissioner.",
            "The passing score is 70%. You have 180 days after passing to submit your license application, fees, and fingerprints, or you must retest.",
            "Pre-licensing education has not been required since July 23, 2023 (HB 1061), but the PSI outline (updated April 1, 2026) still controls what to study.",
            "A producer represents the insurer in the transaction and must be licensed for the line being sold.",
            "Unfair methods include misrepresentation, false advertising, coercion, unfair discrimination, and improper rebating.",
            "Producers must keep accurate records and promptly forward premiums and applications.",
            "Since July 1, 2025, homeowners, dwelling, and commercial cancellation or nonrenewal requires 60 days' notice (10 days for nonpayment).",
            "The Washington Insurance Guaranty Association pays covered claims from insolvent P&C insurers above $100 and up to $300,000, never more than the policy limit.",
            "CE is 24 hours every 2 years, including 3 hours of ethics; licenses expire on the last day of the producer's birth month.",
            "Since October 18, 2026, insurers must give written status updates every 30 days on unresolved claims and cannot rely solely on estimating software to settle a claim."
          ]
        },
        {
          id: "property",
          title: "Property fundamentals",
          summary: "Perils, hazards, valuation, deductibles, declarations, insuring agreements, exclusions, and conditions.",
          lessons: [
            "A peril is the cause of loss. A hazard increases the chance or severity of loss.",
            "Actual cash value is replacement cost minus depreciation. Replacement cost pays new-for-old subject to policy terms.",
            "Named peril policies cover only listed causes. Open peril policies cover direct physical loss unless excluded.",
            "Coinsurance encourages insurance to value. The penalty formula is carried divided by required, times loss.",
            "Subrogation lets an insurer recover from a responsible third party after paying the insured."
          ]
        },
        {
          id: "homeowners",
          title: "Homeowners and dwelling",
          summary: "HO forms, dwelling forms, coverage parts, limits, loss settlement, and endorsements.",
          lessons: [
            "Coverage A is dwelling, B is other structures, C is personal property, D is loss of use.",
            "HO-3 commonly provides open peril dwelling coverage and named peril personal property coverage.",
            "Dwelling policies focus on property. Homeowners policies combine property and personal liability.",
            "Personal property is often covered worldwide but subject to special limits for classes like jewelry or money.",
            "Liability coverage responds to bodily injury or property damage claims where the insured is legally liable."
          ]
        },
        {
          id: "commercial",
          title: "Commercial property and BOP",
          summary: "Building and personal property, business income, inland marine, crime, and businessowners coverage.",
          lessons: [
            "Commercial property coverage can insure buildings, business personal property, and property of others.",
            "Business income coverage replaces income lost because covered property damage suspends operations.",
            "Inland marine is used for mobile property, property in transit, and specialized floaters.",
            "A BOP packages property and liability for eligible small and midsize businesses.",
            "Crime coverage addresses theft, employee dishonesty, forgery, and related money or securities losses."
          ]
        },
        {
          id: "casualty",
          title: "Casualty fundamentals",
          summary: "Negligence, liability limits, defenses, damages, occurrence versus claims-made, and umbrella coverage.",
          lessons: [
            "Negligence requires duty, breach, causation, and damages.",
            "Occurrence forms respond when injury or damage happens during the policy period.",
            "Claims-made forms respond when the claim is made during the policy period, subject to retroactive dates.",
            "Split limits state separate bodily injury per person, bodily injury per accident, and property damage limits.",
            "Umbrella liability can add excess limits and sometimes broader coverage over underlying policies."
          ]
        },
        {
          id: "auto-workers",
          title: "Auto and Washington risks",
          summary: "Personal auto, commercial auto, uninsured motorist, PIP, state workers compensation, and bonds.",
          lessons: [
            "Personal auto liability protects against covered bodily injury and property damage caused by an insured.",
            "Washington's minimum auto liability limits are 25/50/10, and drivers must carry proof of insurance. Insurers must offer PIP and UIM, which can be rejected only in writing.",
            "Uninsured and underinsured motorist coverage protects insureds when an at-fault driver lacks enough insurance.",
            "Washington is a monopolistic workers compensation state: coverage comes from the L&I State Fund or approved self-insurance, never private insurers.",
            "Surety bonds involve a principal, obligee, and surety. The surety expects reimbursement from the principal after a paid bond loss."
          ]
        }
      ]
    },
    {
      id: "ld",
      name: "Life & Disability Producer",
      exam: "150 questions, 3 hr 15 min, 70% passing score",
      missions: [
        {
          id: "life-basics",
          title: "Life insurance core",
          summary: "Term, whole life, universal life, policy provisions, underwriting, and beneficiary rules.",
          lessons: [
            "Term life provides protection for a stated period and normally has no cash value.",
            "Whole life provides lifetime protection, fixed premiums, and cash value.",
            "Universal life separates mortality charges, expenses, and interest crediting with flexible premiums.",
            "Insurable interest must exist at application for life insurance.",
            "The incontestability clause limits how long an insurer can challenge most policy statements."
          ]
        },
        {
          id: "annuities",
          title: "Annuities and retirement",
          summary: "Fixed, variable, indexed, immediate, deferred, settlement options, and tax treatment.",
          lessons: [
            "An annuity is designed to liquidate principal and interest over time.",
            "Immediate annuities begin payout shortly after purchase. Deferred annuities accumulate before payout.",
            "Fixed annuities place investment risk mainly on the insurer. Variable annuities place investment risk on the owner.",
            "Life-only payout usually pays the highest monthly amount but stops at death.",
            "Surrender charges and tax penalties are common exam traps for early withdrawals.",
            "Washington adopted annuity best-interest rules effective January 1, 2024: producers must complete a one-time 4-hour annuity training before selling annuities."
          ]
        },
        {
          id: "health",
          title: "Disability and health",
          summary: "Medical plans, disability income, long-term care, exclusions, renewability, and policy provisions.",
          lessons: [
            "Disability income insurance replaces part of earned income after a covered disability.",
            "Elimination periods work like time deductibles before benefits begin.",
            "Long-term care coverage helps pay for custodial or skilled care when benefit triggers are met.",
            "Guaranteed renewable policies let the insurer change premiums by class, but not cancel an individual policy.",
            "Noncancelable policies protect both renewability and premium schedule, subject to policy terms.",
            "WA Cares Fund is Washington's public long-term care benefit: workers pay 0.58% of wages, and benefits of up to $36,500 (2026, inflation-adjusted) became available July 1, 2026.",
            "Producers selling long-term care insurance need an 8-hour initial LTC course plus a 4-hour refresher every 2 years."
          ]
        },
        {
          id: "federal",
          title: "Federal health rules",
          summary: "HIPAA, ACA, COBRA, Medicare, Medicaid, ERISA, and tax-qualified plan basics.",
          lessons: [
            "HIPAA affects portability, privacy, and limits on certain preexisting-condition practices.",
            "COBRA lets qualifying beneficiaries continue group coverage after specific qualifying events.",
            "Medicare Part A is hospital insurance; Part B is medical insurance; Part C is Medicare Advantage; Part D is prescription drugs. For 2026, Part B is $202.90/month with a $283 deductible, and Part D out-of-pocket costs are capped at $2,100 (rising to $2,400 in 2027).",
            "ERISA governs many employer benefit plans and can preempt state law in some areas.",
            "ACA concepts include essential health benefits, guaranteed issue, rating limits, and preventive-care rules."
          ]
        },
        {
          id: "wa-ld-law",
          title: "Washington L&D law",
          summary: "Washington producer law plus life, disability, HMO, health care service contractor, and replacement rules.",
          lessons: [
            "Washington-specific questions can cover the Commissioner, licensing, marketing practices, and policy requirements.",
            "Life replacement rules are designed to protect consumers when existing coverage may be replaced.",
            "Health care service contractors and HMOs are Washington-specific regulated entities worth drilling.",
            "Advertising and sales presentations must not mislead consumers about benefits, terms, or insurer identity.",
            "Study free-look, grace period, reinstatement, claim form, and proof of loss timing concepts.",
            "The Washington Life and Disability Insurance Guaranty Association protects policyholders of insolvent insurers up to $500,000 or the policy limit, whichever is less.",
            "WA Cares eligibility: 10 years of contributions for lifetime access, or 3 of the last 6 years; you must need help with at least 3 activities of daily living. Since 2024 workers who move away can elect to keep coverage."
          ]
        }
      ]
    },
    {
      id: "pl",
      name: "Personal Lines Producer",
      exam: "100 questions, 2 hr 15 min, 70% passing score",
      missions: [
        {
          id: "pl-law",
          title: "Washington personal lines law",
          summary: "Producer licensing, marketing practices, consumer protections, and state-specific auto/home rules.",
          lessons: [
            "Personal lines producers focus on products for individuals and families rather than commercial accounts.",
            "The same Washington producer licensing and unfair-practice concepts apply.",
            "Know how auto, homeowners, dwelling, flood, umbrella, and personal watercraft coverage fit together.",
            "Washington-specific questions can test state mandatory auto insurance and consumer disclosures.",
            "Washington's minimum auto liability is 25/50/10, and insurers must offer PIP and UIM, which may be rejected only in writing.",
            "Homeowners and dwelling cancellation or nonrenewal requires 60 days' notice since July 1, 2025; personal auto cancellation or nonrenewal requires 20 days."
          ]
        },
        {
          id: "pl-home",
          title: "Home and property",
          summary: "Homeowners, dwelling, renters, condo, flood, earthquake, endorsements, and loss settlement.",
          lessons: [
            "Renters policies insure personal property and liability, not the building.",
            "Condo unit-owner policies coordinate with the association master policy.",
            "Flood is usually excluded from homeowners policies and commonly handled through separate flood coverage.",
            "Earth movement is generally excluded unless added or written separately.",
            "Loss settlement can vary between ACV, replacement cost, and special limits."
          ]
        },
        {
          id: "pl-auto",
          title: "Personal auto",
          summary: "Liability, medical payments, PIP, uninsured motorist, physical damage, and endorsements.",
          lessons: [
            "Liability coverage pays damages an insured is legally responsible for because of covered auto accidents.",
            "Collision covers upset or impact with another object. Other-than-collision covers many non-collision causes.",
            "UM/UIM coverage matters when the at-fault driver lacks sufficient coverage.",
            "Policy definitions decide who is an insured, what auto is covered, and where coverage applies."
          ]
        }
      ]
    }
  ],
  questions: [
    q("personal-risk", "wa-license", "What score do you need to pass a Washington insurance producer exam?", ["70%", "65%", "75%", "80%"], 0, "Washington OIC states the passing score is at least 70%."),
    q("personal-risk", "wa-license", "Which conduct is a producer law problem?", ["Misrepresenting policy benefits", "Explaining exclusions clearly", "Submitting a complete application", "Reviewing deductibles"], 0, "Misrepresentation is an unfair or deceptive insurance practice."),
    q("personal-risk", "wa-license", "Who administers Washington insurance license exams?", ["PSI Services", "Pearson VUE", "Prometric", "The NAIC"], 0, "PSI administers insurance exams for Washington."),
    q("personal-risk", "wa-license", "Washington no longer requires what before taking a producer exam?", ["Pre-licensing education", "A passing exam score", "A producer license application", "Proof of identity at testing"], 0, "HB 1061 removed the pre-licensing education requirement effective July 23, 2023, but the exam still must be passed."),
    q("personal-risk", "wa-license", "A producer selling homeowners, condo, and auto policies must:", ["Be licensed for the line being sold", "Hold a surplus lines broker license", "Complete pre-licensing education first", "Be appointed by the condo association's insurer"], 0, "A producer needs the proper insurance license and cannot promise coverage beyond the policy."),
    q("personal-risk", "wa-license", "The largest section of the Washington P&C combo exam is:", ["Washington laws, rules, and regulations", "Homeowners and dwelling policies", "Commercial general liability and BOP", "Personal and commercial auto"], 0, "The official outline assigns 45 of 150 scored questions to Washington law."),
    q("personal-risk", "wa-license", "Which federal topic is listed on the P&C outline?", ["Fair Credit Reporting Act", "COBRA continuation", "Medicare Part D", "ERISA pensions only"], 0, "The P&C outline includes the Fair Credit Reporting Act."),
    q("personal-risk", "wa-license", "NFIP appears on the outline because producers need:", ["Flood insurance education", "Life insurance tax training", "Health exchange training", "Retirement-plan licensing"], 0, "The federal section includes flood insurance education through NFIP."),
    q("personal-risk", "general-concepts", "Insurance primarily handles risk through:", ["Transfer", "Avoidance", "Retention", "Reduction"], 0, "Insurance transfers financial risk from the insured to the insurer."),
    q("personal-risk", "general-concepts", "A peril is:", ["A cause of loss", "A condition increasing chance of loss", "A deductible", "A policy period"], 0, "Fire, wind, theft, and collision are examples of perils."),
    q("personal-risk", "general-concepts", "A physical hazard is:", ["A tangible condition increasing chance of loss", "A dishonest tendency of the insured", "Indifference to loss because of insurance", "A cause of loss"], 0, "A cracked sidewalk or faulty wiring is a physical hazard."),
    q("personal-risk", "general-concepts", "Which is required for a valid insurance contract?", ["Offer and acceptance", "A warranty from the insured", "A signed producer agreement", "A notarized application"], 0, "Valid contracts require offer, acceptance, consideration, competent parties, and legal purpose."),
    q("personal-risk", "general-concepts", "Apparent authority is created when:", ["The insurer's actions lead a reasonable person to believe authority exists", "The agency contract expressly grants authority", "Authority is needed to carry out express duties", "The insurer later approves the agent's act"], 0, "Apparent authority is based on how the insurer's conduct appears to others."),
    q("personal-risk", "pc-basics", "Negligence requires duty, breach, causation, and:", ["Damages", "Intent", "Strict liability", "Assumption of risk"], 0, "Damages are required for a negligence claim."),
    q("personal-risk", "pc-basics", "Actual cash value is usually:", ["Replacement cost minus depreciation", "The full replacement cost", "The mortgage payoff", "The stated amount in the declarations"], 0, "ACV accounts for depreciation."),
    q("personal-risk", "pc-basics", "The declarations page usually shows:", ["Named insured, limits, policy period, and covered property", "Definitions of key policy terms", "Exclusions and limitations", "Duties after a loss"], 0, "Declarations summarize key policy-specific information."),
    q("personal-risk", "pc-basics", "Coinsurance penalties apply when:", ["The insured carries less insurance than required", "The loss exceeds the policy limit", "The insured fails to pay the deductible", "Property is insured on an agreed value basis"], 0, "Coinsurance requires carrying a stated percentage of value."),
    q("personal-risk", "pc-basics", "Split limits are usually stated as:", ["Separate per-person, per-accident, and property-damage limits", "A single combined limit per accident", "Per-occurrence and annual aggregate limits", "A deductible plus a coinsurance percentage"], 0, "Auto liability split limits separate different limit buckets."),
    q("personal-risk", "dwelling", "Dwelling policies are commonly used for:", ["Rental or non-owner-occupied residential property", "Owner-occupied condominium units", "Tenants' personal property only", "Commercial office buildings"], 0, "Dwelling policies often fit residential property that is not eligible for homeowners coverage."),
    q("personal-risk", "dwelling", "Dwelling Coverage A is:", ["Dwelling", "Other structures", "Personal property", "Fair rental value"], 0, "Coverage A is the dwelling."),
    q("personal-risk", "dwelling", "Dwelling Coverage D is:", ["Fair rental value", "Dwelling", "Other structures", "Medical payments"], 0, "Coverage D in dwelling forms is fair rental value."),
    q("personal-risk", "dwelling", "The broad dwelling form adds:", ["More named perils than basic form", "Open peril coverage on the dwelling", "Personal liability coverage", "Coverage for flood and earth movement"], 0, "Broad form expands named perils beyond basic coverage."),
    q("personal-risk", "dwelling", "Coverage L in a dwelling liability supplement is:", ["Personal liability", "Medical payments", "Dwelling", "Fair rental value"], 0, "Coverage L is personal liability."),
    q("personal-risk", "hoa-condo", "What does a condo association master policy usually insure?", ["Common elements and association property", "Each unit owner's personal property", "Each owner's personal liability", "Owners' additional living expenses"], 0, "The master policy focuses on association property and shared elements, with details controlled by the declarations and bylaws."),
    q("personal-risk", "hoa-condo", "Why should a condo owner review the HOA master policy before buying HO-6 coverage?", ["To find building, assessment, and deductible gaps", "To confirm the master policy covers owners' contents", "To qualify the unit for an HO-3 policy", "To waive the HO-6 loss assessment coverage"], 0, "The HO-6 should coordinate with the master policy so gaps are visible."),
    q("personal-risk", "hoa-condo", "Which coverage helps a unit owner with a covered special assessment after a shared loss?", ["Loss assessment", "Loss of use", "Other structures", "Personal liability"], 0, "Loss assessment coverage can respond to covered assessments from the association."),
    q("personal-risk", "hoa-condo", "Which HOA coverage protects against board decision lawsuits?", ["Directors and officers liability", "Fidelity or crime coverage", "Commercial general liability", "Loss assessment"], 0, "D&O liability is designed for claims against board members and association decisions."),
    q("personal-risk", "hoa-condo", "Crime or fidelity coverage for an HOA is mainly about:", ["Theft or dishonesty involving association funds", "Bodily injury in common areas", "Wind damage to common-area roofs", "Lawsuits over board decisions"], 0, "Associations often handle dues and reserves, so fidelity or crime coverage matters."),
    q("personal-risk", "homeowners", "In homeowners insurance, Coverage A is:", ["Dwelling", "Personal property", "Medical payments", "Loss assessment"], 0, "Coverage A is the dwelling."),
    q("personal-risk", "homeowners", "HO-3 commonly covers the dwelling on what basis?", ["Open peril, subject to exclusions", "Basic named perils only", "Broad named perils", "Agreed value with no exclusions"], 0, "HO-3 commonly provides open peril coverage for the dwelling."),
    q("personal-risk", "homeowners", "Actual cash value means:", ["Replacement cost minus depreciation", "Full replacement cost only", "The mortgage balance", "The annual premium"], 0, "ACV generally accounts for depreciation."),
    q("personal-risk", "homeowners", "Which loss is usually excluded or limited in standard homeowners coverage?", ["Flood", "Fire", "Wind", "Theft"], 0, "Flood usually needs separate flood coverage or endorsement."),
    q("personal-risk", "homeowners", "Personal liability in a homeowners policy responds when:", ["The insured is legally responsible for covered injury or damage", "The insured's own property is damaged", "A guest is injured, regardless of fault", "A resident family member is injured"], 0, "Liability coverage is about legal responsibility to others."),
    q("personal-risk", "personal-property", "Coverage C in a homeowners or renters policy usually means:", ["Personal property", "Dwelling", "Other structures", "Medical payments"], 0, "Coverage C is personal property."),
    q("personal-risk", "personal-property", "Why schedule valuable jewelry or art?", ["To get broader or higher-limit coverage", "To lower the Coverage C limit", "To move the items to Coverage B", "To convert the policy to ACV"], 0, "Scheduled property can address special limits and coverage gaps for valuables."),
    q("personal-risk", "personal-property", "A renters policy primarily covers:", ["The tenant's belongings and liability", "The landlord's building", "The landlord's loss of rents", "The tenant's car collision damage"], 0, "Renters insure personal property and liability, not the building."),
    q("personal-risk", "personal-property", "Which item commonly has a special limit?", ["Jewelry", "Clothing", "Furniture", "Kitchen appliances"], 0, "Jewelry is a common special-limit category."),
    q("personal-risk", "personal-property", "What helps settle personal property claims?", ["Receipts, photos, appraisals, and inventories", "A producer's verbal estimate", "The original policy application", "The mortgage lender's appraisal"], 0, "Documentation supports ownership and value."),
    q("personal-risk", "auto", "Auto liability pays for:", ["Covered injury or damage the insured is legally responsible for", "Damage to the insured's own vehicle", "The insured's own medical bills only", "Mechanical breakdown of the insured auto"], 0, "Liability coverage protects against covered legal responsibility to others."),
    q("personal-risk", "auto", "Collision coverage applies to:", ["Upset or impact with another object", "Theft or vandalism", "Hail or falling objects", "Hitting a deer or other animal"], 0, "Collision is vehicle physical damage from upset or collision."),
    q("personal-risk", "auto", "Other-than-collision can include:", ["Theft, hail, vandalism, or fire", "Rollover or upset of the vehicle", "Impact with another vehicle", "Bodily injury to other drivers"], 0, "Other-than-collision is physical damage from many non-collision causes."),
    q("personal-risk", "auto", "UM or UIM coverage protects against:", ["At-fault drivers with no or insufficient insurance", "Damage the insured causes to others", "Collision with a stationary object", "Injury the insured causes to passengers"], 0, "Uninsured and underinsured motorist coverage protects the insured."),
    q("personal-risk", "auto", "Policy definitions decide:", ["Who is insured and what autos are covered", "The premium the insurer charges", "The producer's commission rate", "The state's minimum limits"], 0, "Definitions control who and what the policy covers."),
    q("personal-risk", "commercial-auto", "Commercial auto symbols are used to show:", ["Which autos are covered", "Which drivers are excluded", "Which deductible applies", "Which state's laws govern"], 0, "Covered auto symbols define the autos covered for each coverage."),
    q("personal-risk", "commercial-auto", "A hired auto is generally one the business:", ["Leases, hires, rents, or borrows", "Owns permanently", "Is furnished by an employee", "Acquires during the policy period"], 0, "Hired autos are not owned but are leased, hired, rented, or borrowed."),
    q("personal-risk", "commercial-auto", "A non-owned auto is often:", ["An employee-owned vehicle used for business", "A vehicle leased by the business", "A vehicle titled to the business", "A rental car hired for a project"], 0, "Non-owned auto coverage addresses autos used in the business but not owned by it."),
    q("personal-risk", "commercial-auto", "Commercial auto physical damage can include:", ["Collision and other-than-collision", "Bodily injury to other drivers", "Cargo owned by customers", "Employee injuries while driving"], 0, "Commercial auto can cover vehicle physical damage subject to form terms."),
    q("personal-risk", "commercial-auto", "Contractors may need hired and non-owned auto because:", ["Employees or rented vehicles may be used for work", "It covers damage to the rented vehicle itself", "It is required by Washington L&I", "It replaces commercial auto for owned trucks"], 0, "Construction operations often involve rented or employee vehicles."),
    q("personal-risk", "commercial-property", "Building and business personal property coverage protects:", ["Commercial buildings and business contents", "Liability for customer injuries on premises", "Lost income after a covered loss", "Employee theft of money and securities"], 0, "BPP covers commercial buildings and business personal property at described premises."),
    q("personal-risk", "commercial-property", "Business income coverage responds when:", ["Covered property damage interrupts operations", "Sales fall for any reason", "A key employee quits", "A supplier raises prices"], 0, "Business income coverage requires covered property damage causing suspension or loss."),
    q("personal-risk", "commercial-property", "Extra expense coverage helps pay:", ["Costs to keep operating after covered property damage", "Lost net income during the shutdown", "Repair of the damaged building", "Normal operating costs with no loss"], 0, "Extra expense can pay necessary expenses to reduce downtime."),
    q("personal-risk", "commercial-property", "Commercial inland marine is important for:", ["Movable property and property in transit", "Buildings at a fixed location", "Ocean cargo on ships", "Liability for premises injuries"], 0, "Inland marine handles mobile and specialized property exposures."),
    q("personal-risk", "commercial-property", "Equipment breakdown coverage addresses:", ["Mechanical or electrical breakdown losses", "Wear and tear on machinery", "Theft of business equipment", "Damage from flood or earthquake"], 0, "Equipment breakdown covers specified pressure, mechanical, or electrical breakdown events."),
    q("personal-risk", "builders-risk", "Builders risk primarily covers:", ["Property during construction or renovation", "Completed buildings after occupancy", "Contractor liability for jobsite injuries", "Contractors' mobile equipment"], 0, "Builders risk is property coverage for a project while it is being built, renovated, or repaired."),
    q("personal-risk", "builders-risk", "Which party often has an insurable interest in a builders risk policy?", ["Owner or general contractor", "Only the project architect", "Only the future tenants", "Only the building inspector"], 0, "Owners, contractors, lenders, and other project parties may have insurable interests."),
    q("personal-risk", "builders-risk", "A builders risk policy often ends when:", ["The project is occupied, accepted, sold, abandoned, or expires", "The foundation is poured", "The first progress payment is made", "The building permit is issued"], 0, "Builders risk is tied to the project period and can end at specified completion or occupancy events."),
    q("personal-risk", "builders-risk", "Which builders risk gap should be reviewed separately?", ["Flood or earthquake", "Fire or lightning", "Windstorm or hail", "Explosion"], 0, "Flood and earthquake are common gaps that may need separate terms or endorsements."),
    q("personal-risk", "builders-risk", "Soft costs and delay in completion coverage are important because they can cover:", ["Extra project expenses or income loss after covered delay", "Direct damage to building materials", "Contractor liability for jobsite injuries", "Faulty workmanship repairs"], 0, "Soft costs and delay coverage address financial consequences of covered project delays."),
    q("personal-risk", "contractor-liability", "Commercial general liability for contractors covers:", ["Covered bodily injury, property damage, and defense costs", "The contractor's own employee injuries only", "Damage to the contractor's own tools", "Auto accidents in company trucks"], 0, "CGL protects against covered third-party liability and defense costs."),
    q("personal-risk", "contractor-liability", "Completed operations matters because:", ["Claims can arise after work is finished", "It covers the cost to redo faulty work", "It covers injuries to the contractor's employees", "It covers damage to equipment in transit"], 0, "Construction defects or conditions can cause injury or damage after completion."),
    q("personal-risk", "contractor-liability", "A certificate of insurance:", ["Shows evidence of coverage but does not change the policy", "Automatically adds every endorsement", "Guarantees every claim will be paid", "Replaces the insurance policy"], 0, "Certificates are evidence; policy endorsements control actual coverage."),
    q("personal-risk", "contractor-liability", "Contracts often require which endorsement?", ["Additional insured status", "Loss payee", "Mortgagee clause", "Ordinance or law"], 0, "Additional insured requirements are common in construction contracts."),
    q("personal-risk", "contractor-liability", "Which issue can create a contractor liability gap?", ["Damage to your work or faulty workmanship exclusion", "Additional insured endorsement", "Products-completed operations coverage", "Supplementary payments for defense"], 0, "Construction exclusions can remove coverage for important defect-related losses."),
    q("personal-risk", "construction-equipment", "Contractors equipment coverage protects:", ["Mobile jobsite machinery and equipment", "Buildings under construction", "Licensed trucks and vans", "Materials being installed"], 0, "It covers equipment such as lifts, excavators, compressors, generators, and similar machinery."),
    q("personal-risk", "construction-equipment", "An installation floater covers:", ["Materials or equipment being installed", "Contractors' mobile equipment", "Liability for faulty installation", "The finished building after acceptance"], 0, "Installation floaters cover property in the installation process, often including transit and storage."),
    q("personal-risk", "construction-equipment", "Small tools need special attention because they are:", ["Easy to move and steal", "Covered under the CGL policy", "Covered as business auto property", "Excluded from all inland marine"], 0, "Small tools are high-theft property and may have special limits or conditions."),
    q("personal-risk", "construction-equipment", "Rented equipment contracts may make the contractor responsible for:", ["Damage, loss of use, and rental charges", "Only the rental company's own negligence", "Only bodily injury to the operator", "Nothing, since the owner insures it"], 0, "Rental contracts often shift physical damage and continuing cost responsibility to the contractor."),
    q("personal-risk", "construction-equipment", "Coverage should match jobsite property because it may move:", ["In transit, storage, jobsites, vehicles, and yards", "Only at the contractor's main yard", "Only at the scheduled job address", "Only while in a locked building"], 0, "Construction property moves across locations, so territory and transit terms matter."),
    q("personal-risk", "construction-business", "Commercial auto is usually needed for:", ["Contractor-owned trucks, trailers, vans, and business vehicles", "Mobile equipment like excavators", "Materials in an installation floater", "Tools stored in a job trailer"], 0, "Business vehicle exposures are usually handled with commercial auto."),
    q("personal-risk", "construction-business", "Washington workers compensation is important because:", ["Most employers use the state-run system for employee work injuries", "Private carriers compete to write it", "It is optional for most employers", "It is bought as a CGL endorsement"], 0, "Washington is a state-run workers compensation jurisdiction for most employers."),
    q("personal-risk", "construction-business", "A surety bond includes:", ["Principal, obligee, and surety", "Insured, insurer, and claimant", "Obligor, beneficiary, and insurer", "Principal, agent, and insured"], 0, "Surety bonds are three-party agreements."),
    q("personal-risk", "construction-business", "Which bonds are common in construction?", ["Bid, performance, and payment bonds", "Fiduciary, probate, and bail bonds", "Customs, immigration, and bail bonds", "Public official, notary, and probate bonds"], 0, "Construction projects commonly require bid, performance, and payment bonds."),
    q("personal-risk", "construction-business", "Contractors may need umbrella or excess liability because:", ["Jobsite accidents and defect claims can exceed primary limits", "It replaces the primary CGL policy", "It is required by Washington L&I", "It covers damage to the contractor's own work"], 0, "Umbrella or excess coverage can add limits above primary policies."),
    q("personal-risk", "bop-surety-specialty", "A BOP is designed to package:", ["Property and liability for eligible small or midsize businesses", "Commercial auto and workers compensation", "Professional liability for large firms", "Property only for large manufacturers"], 0, "A businessowners policy combines common property and liability coverages."),
    q("personal-risk", "bop-surety-specialty", "D&O liability protects against:", ["Claims involving directors and officers decisions", "Bodily injury on the premises", "Employee theft of company funds", "Professional errors in client services"], 0, "Directors and officers coverage is a specialty liability line."),
    q("personal-risk", "bop-surety-specialty", "Surety differs from insurance because:", ["The surety expects reimbursement from the principal", "It is a two-party contract", "The principal is protected against loss", "The surety expects no losses to be repaid"], 0, "Surety is a three-party guarantee with expected reimbursement."),
    q("personal-risk", "bop-surety-specialty", "An umbrella policy mainly provides:", ["Additional limits above underlying insurance", "First-dollar coverage with no retention", "Coverage for the insured's own property", "Lower primary auto deductibles"], 0, "Umbrella or excess policies add limits above underlying coverage."),
    q("personal-risk", "bop-surety-specialty", "Cyber liability is an example of:", ["Specialty liability insurance", "Dwelling Coverage B", "Personal auto PIP", "A basic peril"], 0, "Cyber liability appears under specialty liability concepts."),
    q("personal-risk", "coverage-fitting", "What is the first step in matching coverage to a client?", ["Identify property, liability, income, contract, and assessment exposures", "Quote the lowest available premium", "Pick the carrier with the highest commission", "Select a policy form first"], 0, "Coverage should start with the client's actual exposures."),
    q("personal-risk", "coverage-fitting", "For a condo owner, compare the HO-6 with:", ["The association master policy", "The landlord's dwelling policy", "The association's D&O policy", "The developer's builders risk policy"], 0, "The HO-6 and master policy must fit together."),
    q("personal-risk", "coverage-fitting", "For homeowners, which gap should be checked separately?", ["Flood or earthquake need", "Fire or lightning", "Theft of personal property", "Windstorm or hail"], 0, "Flood and earthquake are commonly excluded or limited."),
    q("personal-risk", "coverage-fitting", "For auto or contractor vehicle clients, higher liability limits may matter because of:", ["Assets, income, and business risk", "The age of the vehicle", "The collision deductible chosen", "Washington's 25/50/10 minimums"], 0, "Liability limits should fit the client's financial exposure."),
    q("personal-risk", "coverage-fitting", "For construction clients, what should be checked against contract requirements?", ["Builders risk, liability, auto, workers comp, bonds, and umbrella", "Only the CGL each occurrence limit", "Only the builders risk deductible", "Only the commercial auto symbols"], 0, "Construction contracts often impose detailed insurance and bond requirements."),
    q("personal-risk", "coverage-fitting", "A good coverage recommendation should:", ["Explain tradeoffs without promising uncovered claims", "Promise coverage for any loss the client describes", "Focus only on the lowest premium", "Leave exclusions for the adjuster to explain"], 0, "Producers should explain coverage accurately and avoid misrepresentation."),
    q("pc", "wa-law", "What score do you need to pass a Washington insurance producer exam?", ["70%", "65%", "75%", "80%"], 0, "Washington OIC states the passing score is at least 70%."),
    q("pc", "wa-law", "Washington no longer requires what before taking a producer exam?", ["Pre-licensing education", "Fingerprinting after application", "A PSI appointment", "A license application"], 0, "Pre-licensing education ended as a requirement effective July 23, 2023."),
    q("pc", "wa-law", "Who administers Washington insurance license exams?", ["PSI Services", "NIPR", "NAIC", "IDEMIA"], 0, "PSI administers exams for Washington."),
    q("pc", "wa-law", "Which act is an unfair marketing practice?", ["Misrepresenting policy benefits", "Explaining exclusions", "Collecting an approved premium", "Delivering a policy"], 0, "Misrepresentation is an unfair method or deceptive practice."),
    q("pc", "property", "What is a peril?", ["A cause of loss", "A condition increasing chance of loss", "The amount retained by insured", "A policy limit"], 0, "Fire, wind, theft, and collision are examples of perils."),
    q("pc", "property", "Actual cash value is best described as:", ["Replacement cost minus depreciation", "Market value plus deductible", "Stated amount only", "Full replacement cost"], 0, "ACV generally accounts for depreciation."),
    q("pc", "property", "A hazard is:", ["A condition that increases loss chance or severity", "A covered cause of loss", "A claim payment", "An insurance contract"], 0, "Hazards can be physical, moral, or morale."),
    q("pc", "property", "What does subrogation allow an insurer to do?", ["Recover from a responsible third party", "Cancel after any claim", "Avoid all policy defenses", "Increase limits after loss"], 0, "After paying, an insurer may pursue the party that caused the loss."),
    q("pc", "property", "Open peril coverage protects against:", ["Direct physical loss unless excluded", "Only listed losses", "Liability claims only", "Wear and tear"], 0, "Open peril is broader than named peril but still has exclusions."),
    q("pc", "property", "The coinsurance penalty compares insurance carried to:", ["Insurance required", "The deductible", "The mortgage balance", "The premium paid"], 0, "The usual formula is carried divided by required, times loss."),
    q("pc", "homeowners", "In a homeowners policy, Coverage C usually means:", ["Personal property", "Dwelling", "Other structures", "Loss of use"], 0, "Coverage C is personal property."),
    q("pc", "homeowners", "Which policy commonly covers dwelling on open peril and personal property on named peril?", ["HO-3", "DP-1", "HO-4", "CGL"], 0, "HO-3 is a common special form homeowners policy."),
    q("pc", "homeowners", "A renters policy primarily insures:", ["Personal property and liability", "The apartment building", "The landlord's loss of rent", "The association master policy"], 0, "Renters do not insure the building itself."),
    q("pc", "homeowners", "Coverage D in homeowners is commonly:", ["Loss of use", "Dwelling", "Personal liability", "Medical payments"], 0, "Coverage D pays additional living expenses or fair rental value after covered loss."),
    q("pc", "commercial", "Business income coverage is triggered by:", ["Covered property damage that suspends operations", "Any drop in sales", "Employee resignation", "Bad debt"], 0, "It replaces covered income loss tied to covered property damage."),
    q("pc", "commercial", "A BOP is best for:", ["Eligible small and midsize businesses", "Large multinational corporations", "Individuals and families", "Heavy manufacturing risks"], 0, "A businessowners policy packages common property and liability coverage."),
    q("pc", "commercial", "Inland marine often covers:", ["Mobile property or property in transit", "Ocean cargo only", "Buildings at a fixed location", "Liability for premises injuries"], 0, "Inland marine covers many floating or mobile property exposures."),
    q("pc", "commercial", "Employee dishonesty is usually handled under:", ["Crime coverage", "Commercial auto", "Workers compensation", "Flood insurance"], 0, "Crime forms address dishonest acts and theft of money or securities."),
    q("pc", "casualty", "The elements of negligence are duty, breach, causation, and:", ["Damages", "Premium", "Deductible", "Fraud"], 0, "Without damages, negligence normally does not create a payable claim."),
    q("pc", "casualty", "An occurrence liability form responds based on:", ["When injury or damage happens", "When the premium is billed", "When the policy is quoted", "When the adjuster closes the claim"], 0, "Occurrence timing is tied to the event causing injury or damage."),
    q("pc", "casualty", "A claims-made policy responds based primarily on:", ["When the claim is made", "When the injury or damage happens", "When the premium is paid", "When the producer is appointed"], 0, "Claims-made coverage is tied to claim reporting and retroactive-date rules."),
    q("pc", "casualty", "A split limit of 25/50/10 means:", ["BI per person, BI per accident, property damage", "Deductible, premium, commission", "Property, casualty, life", "Collision, comprehensive, towing"], 0, "Auto split limits are commonly written in that order."),
    q("pc", "auto-workers", "Washington workers compensation is notable because it is:", ["State-run", "Sold by competing private insurers", "Optional for employers with few workers", "Written through the CGL policy"], 0, "Washington is a monopolistic state fund jurisdiction for most workers compensation."),
    q("pc", "auto-workers", "A surety bond includes a principal, obligee, and:", ["Surety", "Beneficiary", "Mortgagor", "Annuitant"], 0, "The surety guarantees the principal's obligation to the obligee."),
    q("pc", "auto-workers", "Collision coverage pays for:", ["Upset or impact with another object", "Bodily injury to others", "Wear and tear", "Intentional damage by insured"], 0, "Collision is physical damage from upset or collision."),
    q("ld", "life-basics", "Term life insurance usually provides:", ["Protection for a stated period with no cash value", "Permanent cash value only", "Medical expense reimbursement", "Long-term care benefits"], 0, "Term is temporary protection."),
    q("ld", "life-basics", "Whole life is known for:", ["Lifetime protection and cash value", "No guaranteed death benefit", "Premiums that rise each year", "No fixed premium option"], 0, "Traditional whole life has fixed premiums and cash value."),
    q("ld", "life-basics", "Insurable interest for life insurance must exist at:", ["Application", "Death only", "Every policy anniversary", "Claim settlement only"], 0, "Insurable interest is required when the policy is purchased."),
    q("ld", "life-basics", "The incontestability clause limits:", ["How long most statements can be contested", "The beneficiary's rights forever", "The grace period to one day", "The owner's right to assign"], 0, "After the contestable period, most misstatements cannot void coverage except specified issues."),
    q("ld", "annuities", "An annuity is mainly designed to:", ["Liquidate funds over time", "Create an estate at death", "Cover medical expenses", "Provide disability income"], 0, "Annuities turn accumulation into income."),
    q("ld", "annuities", "Who bears investment risk in a variable annuity?", ["Owner", "Only the insurer", "State guaranty fund", "Beneficiary before death"], 0, "Variable values depend on separate-account performance."),
    q("ld", "annuities", "An immediate annuity generally begins payout:", ["Soon after purchase", "Only after age 100", "Only after surrender", "Only after disability"], 0, "Immediate annuities are income-first products."),
    q("ld", "health", "An elimination period is:", ["A waiting period before benefits begin", "The premium due date", "A beneficiary change", "A policy loan"], 0, "Disability policies often use time deductibles."),
    q("ld", "health", "Guaranteed renewable means the insurer:", ["Cannot cancel individually but can change rates by class", "Can cancel any time", "Can never raise premiums", "Must pay all claims without proof"], 0, "The renewal right is guaranteed, but class rates can change."),
    q("ld", "health", "Long-term care insurance helps with:", ["Custodial or skilled care when triggers are met", "Acute hospital stays only", "Routine doctor visits", "Prescription drug costs"], 0, "LTC covers extended care needs, not ordinary property losses."),
    q("ld", "federal", "Medicare Part D covers:", ["Prescription drugs", "Hospital insurance", "Medical insurance", "Medicare Advantage networks"], 0, "Part D is prescription drug coverage."),
    q("ld", "federal", "COBRA primarily gives certain people the right to:", ["Continue group health coverage after qualifying events", "Convert group life to individual coverage", "Enroll in Medicare early", "Receive free employer coverage"], 0, "COBRA continuation applies after events like termination or divorce."),
    q("ld", "federal", "ERISA is most associated with:", ["Employer benefit plans", "Medicare supplement policies", "Individual life policies", "State insurance licensing"], 0, "ERISA governs many employee benefit plans."),
    q("ld", "wa-ld-law", "Life replacement rules are meant to protect:", ["Consumers replacing existing coverage", "Producers' commission income", "Insurers' market share", "Existing insurers from losing business"], 0, "Replacement can harm consumers if costs, surrender charges, or benefits are misrepresented."),
    q("ld", "wa-ld-law", "A Washington-specific health entity to study is:", ["Health care service contractor", "Surplus lines broker", "Risk retention group", "Captive insurer"], 0, "HCSCs and HMOs are distinct Washington health concepts."),
    q("pl", "pl-law", "Personal lines producers primarily handle:", ["Insurance for individuals and families", "Commercial property and liability", "Workers compensation for employers", "Surety bonds for contractors"], 0, "Personal lines centers on auto, home, renters, and similar personal risks."),
    q("pl", "pl-home", "Flood is usually:", ["Excluded from homeowners and written separately", "Covered by HO-3 on an open-peril basis", "Covered under Coverage D only", "Included in the HO-6 by default"], 0, "Flood commonly needs separate flood coverage."),
    q("pl", "pl-home", "Condo unit-owner coverage must coordinate with:", ["The association master policy", "The landlord's dwelling policy", "The association's D&O policy", "The owner's personal auto policy"], 0, "Condo ownership divides building and unit responsibilities."),
    q("pl", "pl-auto", "Other-than-collision coverage may cover:", ["Theft or hail", "Rollover of the vehicle", "Bodily injury to another driver", "Medical bills of passengers"], 0, "Comprehensive/OTC covers many non-collision physical damage losses."),
    q("pl", "pl-auto", "UM/UIM coverage protects against:", ["Drivers with no or insufficient insurance", "Intentional losses by insured", "Wear and tear", "Damage the insured causes to others"], 0, "Uninsured and underinsured motorist coverage protects the insured."),
    q("personal-risk", "wa-license", "How long do you have after passing the exam to submit your Washington license application?", ["180 days", "30 days", "1 year", "There is no deadline"], 0, "Apply, pay fees, and complete fingerprints within 180 days of passing, or you must retest."),
    q("personal-risk", "wa-license", "Since July 1, 2025, how much notice must an insurer give to cancel or nonrenew a Washington homeowners policy (other than for nonpayment)?", ["60 days", "45 days", "20 days", "10 days"], 0, "SSB 5798 raised the notice from 45 to 60 days for homeowners, dwelling, and commercial policies. Nonpayment still needs 10 days."),
    q("personal-risk", "wa-license", "How many continuing education hours does a Washington producer need each 2-year license period?", ["24 hours, including 3 hours of ethics", "12 hours, no ethics", "40 hours, including 10 of ethics", "None after the exam"], 0, "Washington requires 24 CE hours per period, 3 of them ethics."),
    q("personal-risk", "wa-license", "What is the maximum value of gifts a Washington producer may give one person in a 12-month period?", ["$100", "$25", "$500", "Unlimited if disclosed"], 0, "Promotional and referral gifts are capped at $100 per person per 12 months; more is illegal rebating."),
    q("personal-risk", "wa-license", "Who has been Washington's Insurance Commissioner since January 2025?", ["Patty Kuderer", "Mike Kreidler", "Bob Ferguson", "Jay Inslee"], 0, "Patty Kuderer was sworn in January 15, 2025, succeeding Mike Kreidler."),
    q("personal-risk", "auto", "What are Washington's minimum auto liability limits?", ["25/50/10", "15/30/5", "50/100/25", "10/20/10"], 0, "$25,000 bodily injury per person, $50,000 per accident, and $10,000 property damage."),
    q("personal-risk", "auto", "How can a Washington named insured decline PIP or UIM coverage?", ["Only by rejecting it in writing", "By saying no on the phone", "Automatically at renewal", "They cannot decline it"], 0, "Insurers must offer PIP and UIM; a rejection must be in writing."),
    q("personal-risk", "auto", "A Washington personal auto policy has been in force 90 days. Which is a permitted reason to cancel mid-term?", ["Nonpayment of premium", "The insured filed one claim", "The insurer changed its rates", "The insured moved within the state"], 0, "After 60 days, auto cancellation is limited to nonpayment or suspension or revocation of a driver's license."),
    q("personal-risk", "construction-business", "Where does a Washington employer buy workers compensation coverage?", ["From the L&I State Fund, unless approved to self-insure", "From any private insurer", "Through a homeowners endorsement", "It is optional for all employers"], 0, "Washington is monopolistic: private insurers cannot sell workers comp there."),
    q("personal-risk", "bop-surety-specialty", "What are the maximum NFIP residential flood limits?", ["$250,000 building and $100,000 contents", "$100,000 building and $50,000 contents", "$500,000 building and $250,000 contents", "Unlimited replacement cost"], 0, "Higher amounts require excess or private flood coverage."),
    q("personal-risk", "bop-surety-specialty", "How long is the usual waiting period before a new NFIP flood policy takes effect?", ["30 days", "No waiting period", "7 days", "90 days"], 0, "Exceptions include policies bought at a loan closing or after a flood map change."),
    q("pc", "wa-law", "Since July 1, 2025, Washington homeowners, dwelling, and commercial cancellation or nonrenewal requires how much notice (not for nonpayment)?", ["60 days", "45 days", "30 days", "20 days"], 0, "SSB 5798 raised the requirement from 45 to 60 days."),
    q("pc", "wa-law", "The Washington Insurance Guaranty Association pays covered claims of an insolvent P&C insurer up to:", ["$300,000 (claims over $100)", "$50,000", "$1,000,000", "The full claim with no limit"], 0, "WIGA covers the part of a claim over $100 and up to $300,000, never more than the policy limit."),
    q("pc", "wa-law", "Washington producer licenses expire:", ["The last day of the producer's birth month, every 2 years", "Every January 1", "Every 5 years on the exam date", "Never once issued"], 0, "Licenses run on a 2-year cycle tied to the birth month."),
    q("pc", "auto-workers", "Washington's minimum auto liability limits are:", ["25/50/10", "15/30/5", "30/60/15", "100/300/50"], 0, "$25,000 per person, $50,000 per accident bodily injury, and $10,000 property damage."),
    q("pc", "auto-workers", "A Washington named insured may reject PIP:", ["Only in writing", "Verbally to the producer", "Never", "Only after a claim"], 0, "Written rejection is required, and it applies to all insureds on the policy."),
    q("ld", "federal", "What is the 2026 Medicare Part D annual out-of-pocket cap?", ["$2,100", "$2,000", "$8,000", "There is no cap"], 0, "The cap rose from $2,000 in 2025 to $2,100 in 2026."),
    q("ld", "federal", "What is the standard Medicare Part B monthly premium in 2026?", ["$202.90", "$185.00", "$174.70", "$0 for everyone"], 0, "CMS set the 2026 standard Part B premium at $202.90, with a $283 deductible."),
    q("ld", "health", "When did WA Cares Fund long-term care benefits become available?", ["July 1, 2026", "January 1, 2022", "July 1, 2023", "They are not available yet"], 0, "Premiums began July 2023; benefits of up to $36,500 started July 1, 2026."),
    q("ld", "health", "What premium do Washington workers pay into WA Cares Fund?", ["0.58% of wages", "1.5% of wages", "A flat $50 per month", "Nothing; employers pay it all"], 0, "The WA Cares premium is 0.58% of wages with no cap."),
    q("ld", "annuities", "Before selling annuities in Washington, a producer must complete:", ["A one-time 4-hour annuity best-interest training", "A 40-hour securities course", "Nothing beyond the license", "An annual 20-hour annuity exam"], 0, "Washington's best-interest rules took effect January 1, 2024."),
    q("ld", "wa-ld-law", "The Washington Life and Disability Insurance Guaranty Association protects policyholders up to:", ["$500,000 or the policy limit, whichever is less", "$100,000", "$5,000,000", "No limit"], 0, "It steps in when a life, disability, or annuity insurer becomes insolvent."),
    q("pl", "pl-law", "Washington personal auto nonrenewal requires how much written notice?", ["20 days", "60 days", "5 days", "No notice"], 0, "Auto cancellation and nonrenewal need 20 days (10 for nonpayment); homeowners now need 60 days."),
    q("pl", "pl-law", "Washington's minimum auto liability limits are:", ["25/50/10", "15/30/5", "20/40/10", "50/100/50"], 0, "$25,000/$50,000 bodily injury and $10,000 property damage."),
    q("personal-risk", "wa-license", "Under Washington's claims-handling rules effective October 18, 2026, how often must an insurer update a claimant in writing while a claim stays unresolved?", ["Every 30 days", "Every 90 days", "Only when the claim closes", "Every 7 days"], 0, "Insurers must explain in writing if a claim isn't resolved in 30 days, and again every 30 days after."),
    q("pc", "wa-law", "A Washington auto claimant disputes an insurer's photo-only damage estimate. Under the October 2026 claims rules they may:", ["Demand an in-person inspection", "Only accept the photo estimate", "Sue the producer for the difference", "Cancel the policy for a full refund"], 0, "The updated rules let claimants request an in-person inspection when they dispute a virtual estimate."),
    q("ld", "federal", "What is the Medicare Part D out-of-pocket cap for 2027?", ["$2,400", "$2,100", "$2,000", "$8,000"], 0, "The cap is $2,100 in 2026 and rises to $2,400 in 2027."),
    q("pl", "pl-auto", "Policy definitions are important because they decide:", ["Who and what is covered", "The premium charged", "The producer's commission", "The insurer's claim reserves"], 0, "Definitions control insureds, covered autos, and coverage territory."),
    q("personal-risk", "general-concepts", "An insurer formed in Oregon that sells policies in Washington is, in Washington, a:", ["Foreign insurer", "Domestic insurer", "Alien insurer", "Non-admitted insurer"], 0, "Domestic = formed in this state; foreign = formed in another US state; alien = formed outside the US."),
    q("personal-risk", "general-concepts", "An applicant fails to mention a prior fire loss they know is important. This is:", ["Concealment", "A warranty", "Consideration", "An aleatory feature"], 0, "Concealment is intentionally withholding a material fact; it can let the insurer void the contract."),
    q("personal-risk", "pc-basics", "A homeowner's $300,000 home must be insured to 80% under the coinsurance clause, but is insured for $180,000. For a $50,000 loss (ignoring the deductible) the insurer pays:", ["$37,500", "$50,000", "$30,000", "$45,000"], 0, "Required = $240,000. Carried ÷ required = 180,000 ÷ 240,000 = 0.75. 0.75 × $50,000 = $37,500."),
    q("personal-risk", "pc-basics", "Holding someone responsible for another person's negligence, like an employer for an employee, is called:", ["Vicarious liability", "Absolute liability", "Contributory negligence", "Assumption of risk"], 0, "Vicarious liability imposes responsibility because of a relationship, such as employer and employee."),
    q("personal-risk", "dwelling", "Which dwelling form is written on an open-peril (special) basis for the dwelling?", ["DP-3", "DP-1", "DP-2", "HO-4"], 0, "DP-1 is basic named perils, DP-2 broad named perils, DP-3 special (open peril) for the dwelling."),
    q("personal-risk", "hoa-condo", "Which homeowners form is designed for a condominium unit owner?", ["HO-6", "HO-3", "HO-4", "HO-8"], 0, "HO-6 covers the unit owner's personal property, building items they own, loss assessment, and liability."),
    q("personal-risk", "homeowners", "Coverage B in a homeowners policy (other structures) is usually set at what percentage of Coverage A?", ["10%", "50%", "20%", "100%"], 0, "Other structures such as a detached garage or fence default to 10% of the dwelling limit."),
    q("personal-risk", "personal-property", "Which homeowners form covers personal property on an open-peril basis without an endorsement?", ["HO-5", "HO-3", "HO-2", "HO-4"], 0, "HO-5 (comprehensive) covers both dwelling and personal property on an open-peril basis."),
    q("personal-risk", "commercial-auto", "Covered auto symbol 1 on a business auto policy means:", ["Any auto", "Owned autos only", "Hired autos only", "Non-owned autos only"], 0, "Symbol 1 (any auto) is the broadest and is generally available only for liability coverage."),
    q("personal-risk", "commercial-property", "Which causes-of-loss form is open peril (covers direct physical loss unless excluded)?", ["Special form", "Basic form", "Broad form", "Earthquake form"], 0, "The special form covers risks of direct physical loss unless excluded or limited."),
    q("personal-risk", "builders-risk", "A builders risk policy written on a 'completed value' basis is usually:", ["Written for the full value the project will have when finished", "Increased monthly by reports", "Written only for materials on site", "Limited to the land value"], 0, "Completed value forms set the limit at the project's finished value from the start, avoiding monthly reporting."),
    q("personal-risk", "contractor-liability", "On a CGL policy, which limit caps all products-completed operations claims during the policy period?", ["Products-completed operations aggregate", "Each occurrence limit", "Medical expense limit", "Damage to premises rented limit"], 0, "Products-completed operations claims have their own aggregate, separate from the general aggregate."),
    q("personal-risk", "construction-equipment", "Mobile jobsite equipment such as an excavator is typically insured under:", ["A contractors equipment floater (inland marine)", "The homeowners policy", "Commercial auto physical damage only", "Workers compensation"], 0, "Contractors equipment is an inland marine floater that follows the equipment from site to site."),
    q("pc", "wa-law", "Since July 23, 2023, what does Washington require before you may sit for a producer exam?", ["Nothing beyond scheduling with PSI — pre-licensing education is not required", "20 hours of pre-licensing education per line", "A sponsoring insurer's appointment", "A completed fingerprint background check"], 0, "HB 1061 removed pre-licensing education. Fingerprints and the application come after you pass."),
    q("pc", "wa-law", "How many hours of ethics must be included in a Washington producer's 24 CE hours each period?", ["3", "1", "6", "12"], 0, "Washington requires 24 CE hours every two years, including 3 hours of ethics."),
    q("pc", "homeowners", "Which homeowners form is designed for tenants?", ["HO-4", "HO-6", "HO-3", "HO-8"], 0, "HO-4 (contents broad form) covers a renter's personal property and liability."),
    q("pc", "homeowners", "Homeowners Section II includes which two coverages?", ["Personal liability (E) and medical payments to others (F)", "Dwelling (A) and other structures (B)", "Personal property (C) and loss of use (D)", "Collision and other-than-collision"], 0, "Section I is property (A–D); Section II is liability (E) and medical payments (F)."),
    q("pc", "commercial", "Extra expense coverage pays for:", ["Costs to avoid or minimize suspension of operations after a covered loss", "Lost profits from any slow season", "Employee injuries", "Normal operating expenses with no loss"], 0, "Extra expense covers additional costs to keep operating, such as renting temporary space."),
    q("pc", "commercial", "A commercial property 'agreed value' optional coverage:", ["Suspends the coinsurance clause for the agreed period", "Pays the market value at time of loss", "Removes all deductibles", "Covers only stock"], 0, "Agreed value suspends coinsurance when the insured submits a statement of values the insurer accepts."),
    q("pc", "casualty", "A claims-made policy's 'extended reporting period' (tail) allows:", ["Claims reported after the policy ends for events before it ended", "Coverage for events that happen after cancellation", "Higher limits at renewal", "A lower deductible"], 0, "The tail extends the time to report claims; it doesn't cover new events."),
    q("pc", "casualty", "In a negligence suit, the insured argues the injured person knowingly accepted the danger. This defense is:", ["Assumption of risk", "Vicarious liability", "Strict liability", "Subrogation"], 0, "Assumption of risk applies when the claimant knowingly accepted a known hazard."),
    q("pc", "auto-workers", "Washington PIP must offer at least how much in medical and hospital benefits?", ["$10,000", "$2,000", "$25,000", "$100,000"], 0, "Minimum PIP: $10,000 medical, $2,000 funeral, $10,000 income continuation up to $200 a week."),
    q("ld", "life-basics", "Universal life insurance is known for:", ["Flexible premiums and an adjustable death benefit", "A fixed premium and no cash value", "Coverage for a fixed term only", "Investment choices in separate accounts only"], 0, "UL separates mortality charges, expenses, and interest, letting the owner adjust premiums and face amount."),
    q("ld", "life-basics", "The grace period on an individual life policy is generally:", ["30 or 31 days, during which coverage stays in force", "7 days with no coverage", "90 days for all policies", "Not required by law"], 0, "If the insured dies during the grace period, the death benefit is paid minus the overdue premium."),
    q("ld", "annuities", "During the accumulation phase of a deferred annuity, earnings are:", ["Tax-deferred until withdrawn", "Taxed every year", "Always tax-free", "Taxed at capital gains rates annually"], 0, "Annuity earnings grow tax-deferred; gains are taxed as ordinary income when withdrawn."),
    q("ld", "annuities", "A withdrawal of annuity earnings before age 59½ generally triggers:", ["A 10% IRS penalty plus ordinary income tax", "No tax at all", "Only a capital gains tax", "Automatic policy cancellation"], 0, "Early withdrawals of gains face ordinary income tax and usually a 10% federal penalty."),
    q("ld", "health", "Long-term care benefits are commonly triggered when the insured:", ["Cannot perform 2 or more activities of daily living or has cognitive impairment", "Visits a doctor once", "Turns 65", "Is hospitalized for one night"], 0, "Tax-qualified LTC policies use inability to perform 2 of 6 ADLs or severe cognitive impairment."),
    q("ld", "health", "WA Cares Fund benefits require needing help with at least how many activities of daily living?", ["3", "1", "2", "6"], 0, "WA Cares eligibility requires help with 3 or more ADLs expected to last at least 90 days."),
    q("ld", "federal", "Medicare Part A primarily covers:", ["Inpatient hospital care", "Doctor visits only", "Prescription drugs", "Long-term custodial care"], 0, "Part A is hospital insurance; it does not cover long-term custodial care."),
    q("ld", "wa-ld-law", "Washington life replacement rules require the producer to:", ["Give the applicant a replacement notice and tell the insurer about the replacement", "Cancel the old policy for the client", "Avoid all replacements", "Wait 1 year before replacing"], 0, "Replacement rules protect consumers by requiring disclosure so they can compare policies."),
    q("ld", "wa-ld-law", "A free-look period lets a new policyowner:", ["Return the policy for a full premium refund within the stated period", "Skip the first premium", "Change the insured", "Borrow cash value immediately"], 0, "Washington life policies include a free-look period, typically at least 10 days (longer for replacements and some products)."),
    q("ld", "wa-ld-law", "How many years of WA Cares contributions give a worker lifetime access to benefits?", ["10 years", "3 years", "5 years", "20 years"], 0, "Ten qualifying years give lifetime access; 3 of the last 6 years gives temporary access."),
    q("ld", "wa-ld-law", "In Washington, a health care service contractor is:", ["A regulated entity that provides health services through participating providers", "A licensed P&C agent", "A federal Medicare office", "An unlicensed broker"], 0, "Health care service contractors (like some Blue plans) are regulated by the OIC under their own chapter."),
    q("pl", "pl-law", "How many CE hours per 2-year period must a Washington producer complete?", ["24, including 3 ethics", "12, no ethics", "40, including 5 ethics", "None"], 0, "Same CE rule applies to personal lines producers."),
    q("pl", "pl-law", "Since July 1, 2025, Washington homeowners nonrenewal (not for nonpayment) requires:", ["60 days' notice", "45 days' notice", "20 days' notice", "10 days' notice"], 0, "SSB 5798 raised the notice from 45 to 60 days."),
    q("pl", "pl-law", "Washington's limit on gifts a producer may give a person in 12 months is:", ["$100", "$50", "$250", "No limit"], 0, "Gifts over $100 per person per 12 months are illegal rebating."),
    q("pl", "pl-home", "A renters policy is the:", ["HO-4", "HO-3", "HO-6", "DP-3"], 0, "HO-4 covers a tenant's personal property and liability."),
    q("pl", "pl-home", "Coverage D in a homeowners policy pays:", ["Additional living expenses after a covered loss makes the home unlivable", "The dwelling repair cost", "Medical bills of guests", "Lawsuits against the insured"], 0, "Loss of use covers extra costs like a hotel while the home is repaired."),
    q("pl", "pl-home", "Earthquake damage under a standard homeowners policy is:", ["Excluded unless added by endorsement or a separate policy", "Always covered", "Covered only under Coverage E", "Covered only for renters"], 0, "Earth movement is a standard exclusion; Washington buyers often add earthquake coverage separately."),
    q("pl", "pl-home", "NFIP flood coverage for a home is limited to:", ["$250,000 building and $100,000 contents", "$100,000 building and $50,000 contents", "$500,000 combined", "Unlimited"], 0, "Higher limits require excess or private flood insurance; there's usually a 30-day waiting period."),
    q("pl", "pl-auto", "Underinsured motorist (UIM) coverage in Washington must be:", ["Offered by the insurer, and rejected only in writing", "Bought by every driver", "Excluded from personal auto policies", "Sold only by the state"], 0, "Insurers must offer UIM; the named insured may reject it in writing."),
    q("pl", "pl-auto", "Washington PIP coverage can be declined by the named insured:", ["Only in writing", "Over the phone", "It cannot be declined", "Automatically at policy renewal"], 0, "Insurers must offer PIP; rejection must be in writing."),
    q("pl", "pl-auto", "A personal auto policy in force for 90 days may be cancelled mid-term in Washington for:", ["Nonpayment of premium", "One at-fault accident", "A rate increase", "The insured's age"], 0, "After 60 days, auto cancellation is limited to nonpayment or a suspended or revoked license.")
  ]
};

const STORAGE_KEY = "wa-insurance-quest-progress-v1";
const state = loadState();
let activeQuestion = null;
let activeChoices = [];
let moduleQuiz = null;
let mockSet = [];
let mockAnswers = [];

const $ = (id) => document.getElementById(id);

function q(track, mission, prompt, answers, correct, explanation) {
  return { id: `${track}-${mission}-${prompt.slice(0, 24).replace(/\W+/g, "-")}`, track, mission, prompt, answers, correct, explanation };
}

function loadState() {
  const defaults = {
    track: "personal-risk",
    courseVersion: 5,
    xp: 0,
    streak: 0,
    lastStudyDate: "",
    mastered: {},
    answered: {},
    mistakes: {},
    missionReads: {},
    moduleComplete: {},
    moduleQuizScores: {},
    activeModuleByTrack: {},
    mockHistory: [],
    bestMock: null
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const merged = { ...defaults, ...saved };
    if (saved.courseVersion !== 5) {
      merged.track = "personal-risk";
      merged.courseVersion = 5;
      merged.activeModuleByTrack = { ...(saved.activeModuleByTrack || {}) };
      if (!merged.activeModuleByTrack["personal-risk"]) merged.activeModuleByTrack["personal-risk"] = "wa-license";
    }
    return merged;
  } catch {
    return defaults;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderStats();
}

function touchStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastStudyDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

function currentTrack() {
  return DATA.tracks.find((track) => track.id === state.track) || DATA.tracks[0];
}

function generatedLessonQuestions(track = currentTrack()) {
  return track.missions.flatMap((mission) => mission.lessons.map((lesson, index) => q(
    track.id,
    mission.id,
    `Which statement is correct for ${mission.title} concept ${index + 1}?`,
    [
      lesson,
      "This topic is not on the Washington exam outline.",
      "The producer can ignore this when the customer signs an application.",
      "This only matters after a claim has already been denied."
    ],
    0,
    lesson
  )));
}

function moduleKey(missionId) {
  return `${state.track}:${missionId}`;
}

function activeModuleId() {
  const track = currentTrack();
  const saved = state.activeModuleByTrack[state.track];
  if (saved && track.missions.some((mission) => mission.id === saved)) return saved;
  const next = track.missions.find((mission) => !state.moduleComplete[moduleKey(mission.id)]) || track.missions[0];
  state.activeModuleByTrack[state.track] = next.id;
  return next.id;
}

function activeModuleIndex() {
  return currentTrack().missions.findIndex((mission) => mission.id === activeModuleId());
}

function canOpenModule(index) {
  return index <= activeModuleIndex() || state.moduleComplete[moduleKey(currentTrack().missions[index].id)];
}

function trackQuestions() {
  const validMissions = new Set(currentTrack().missions.map((mission) => mission.id));
  const direct = DATA.questions.filter((question) => question.track === state.track && validMissions.has(question.mission));
  const byId = new Map(direct.map((question) => [question.id, question]));
  return [...byId.values()];
}

function missionQuestions(missionId) {
  return trackQuestions().filter((question) => question.mission === missionId);
}

function masteryForMission(missionId) {
  if (state.moduleComplete[moduleKey(missionId)]) return 100;
  const questions = missionQuestions(missionId);
  const read = state.missionReads[moduleKey(missionId)] || state.missionReads[missionId];
  if (!questions.length) return read ? 100 : 0;
  const mastered = questions.filter((question) => state.mastered[question.id]).length;
  const readBoost = read ? 20 : 0;
  return Math.min(100, Math.round((mastered / questions.length) * 80 + readBoost));
}

function setFocusMode(enabled) {
  document.body.classList.toggle("focus-mode", enabled);
}

function jumpToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderStats() {
  const track = currentTrack();
  const scores = track.missions.map((mission) => masteryForMission(mission.id));
  const overall = Math.round(scores.reduce((sum, score) => sum + score, 0) / Math.max(scores.length, 1));
  $("overallPct").textContent = `${overall}%`;
  $("xpValue").textContent = state.xp;
  $("streakValue").textContent = state.streak;
  $("masteredValue").textContent = Object.keys(state.mastered).filter((id) => trackQuestions().some((question) => question.id === id)).length;
  $("mockValue").textContent = state.bestMock === null ? "--" : `${state.bestMock}%`;
  const active = track.missions[activeModuleIndex()] || track.missions[0];
  $("dailyTitle").textContent = active ? `Next: ${active.title}` : "Exam-ready pace.";
  $("dailyText").textContent = active
    ? `${track.name}. Read the module, pass the 5-question check, then the next module unlocks.`
    : "Keep drilling misses and run full mocks until 70% feels boring.";
}

function renderTrackSelect() {
  $("trackSelect").innerHTML = DATA.tracks.map((track) => `<option value="${track.id}">${track.name}</option>`).join("");
  $("trackSelect").value = state.track;
}

function renderMissions() {
  setFocusMode(false);
  const track = currentTrack();
  $("missionsView").innerHTML = `
    <article class="course-resume">
      <div>
        <p class="kicker">Ordered course</p>
        <h3>${missionName(activeModuleId())}</h3>
        <p>Start here when you come back. Progress saves automatically on this device.</p>
      </div>
      <button class="primary" type="button" data-open-module="${activeModuleId()}">Continue module</button>
    </article>
    <div class="mission-grid">
      ${track.missions.map((mission, index) => {
        const pct = masteryForMission(mission.id);
        const complete = state.moduleComplete[moduleKey(mission.id)];
        const read = state.missionReads[moduleKey(mission.id)] || state.missionReads[mission.id];
        const locked = !canOpenModule(index);
        const status = complete ? "Complete" : locked ? "Locked" : read ? "Read" : index === activeModuleIndex() ? "Next" : "Open";
        return `
          <article class="mission ${locked ? "locked" : ""}">
            <div class="mission-head">
              <div>
                <p class="step-label">Module ${index + 1} of ${track.missions.length}</p>
                <h3>${mission.title}</h3>
                <p>${mission.summary}</p>
              </div>
              <span class="badge ${complete ? "green" : read ? "read" : ""}">${status}</span>
            </div>
            <div class="meter" aria-label="${mission.title} progress"><span style="width:${pct}%"></span></div>
            <div class="pill-row">
              ${mission.lessons.slice(0, 3).map((lesson) => `<span class="pill">${lesson.split(".")[0]}</span>`).join("")}
            </div>
            <button class="${complete ? "secondary" : "primary"}" type="button" data-open-module="${mission.id}" ${locked ? "disabled" : ""}>${complete ? "Review module" : "Start module"}</button>
          </article>`;
      }).join("")}
    </div>
    <article class="review-card">
      <h3>Free official sources</h3>
      <p>Built from public Washington OIC and PSI exam-outline topics. Facts last checked November 2026 — recheck the official pages before scheduling because rules and fees change.</p>
      <ul class="source-list">
        <li><a href="https://www.insurance.wa.gov/producers-adjusters/education/first-time-license/how-schedule-insurance-license-exam" target="_blank" rel="noreferrer">Washington OIC exam scheduling and passing score</a></li>
        <li><a href="https://www.insurance.wa.gov/producers-adjusters/education/first-time-license/producers-pre-licensing-education-ple" target="_blank" rel="noreferrer">Washington OIC pre-licensing education page</a></li>
        <li><a href="https://test-takers.psiexams.com/api/content/bulletin/7174" target="_blank" rel="noreferrer">PSI Washington candidate bulletin and content outlines (2026)</a></li>
        <li><a href="https://www.insurance.wa.gov/producers-adjusters/education/continuing-education-ce/continuing-education-requirements" target="_blank" rel="noreferrer">Washington OIC continuing education requirements</a></li>
        <li><a href="https://app.leg.wa.gov/rcw/default.aspx?cite=48.18.290" target="_blank" rel="noreferrer">RCW 48.18.290 cancellation and nonrenewal notice</a></li>
        <li><a href="https://wacaresfund.wa.gov/benefits" target="_blank" rel="noreferrer">WA Cares Fund benefits</a></li>
        <li><a href="https://www.cms.gov/newsroom/fact-sheets/2026-medicare-parts-b-premiums-deductibles" target="_blank" rel="noreferrer">CMS 2026 Medicare premiums and deductibles</a></li>
      </ul>
    </article>
  `;
}

function renderStudyModule(missionId = activeModuleId()) {
  setFocusMode(true);
  const track = currentTrack();
  const mission = track.missions.find((item) => item.id === missionId) || track.missions[0];
  const index = track.missions.findIndex((item) => item.id === mission.id);
  if (!canOpenModule(index)) return renderStudyModule(activeModuleId());
  state.activeModuleByTrack[state.track] = mission.id;
  saveState();
  const read = state.missionReads[moduleKey(mission.id)] || state.missionReads[mission.id];
  const complete = state.moduleComplete[moduleKey(mission.id)];
  const score = state.moduleQuizScores[moduleKey(mission.id)];
  $("missionsView").innerHTML = `
    <article class="study-module">
      <div class="module-head">
        <div>
          <p class="step-label">Module ${index + 1} of ${track.missions.length}</p>
          <h2>${mission.title}</h2>
          <p>${mission.summary}</p>
        </div>
        <span class="badge ${complete ? "green" : read ? "read" : ""}">${complete ? "Complete" : read ? "Read" : "Unread"}</span>
      </div>
      <div class="lesson-list">
        ${mission.lessons.map((lesson, lessonIndex) => `
          <div class="lesson-row">
            <span>${lessonIndex + 1}</span>
            <p>${lesson}</p>
          </div>
        `).join("")}
      </div>
      <div class="module-actions">
        <button class="secondary" type="button" data-back-course="true">Course map</button>
        <button class="primary" type="button" data-start-module-quiz="${mission.id}">${read ? "Take 5-question quiz" : "Mark read and quiz"}</button>
      </div>
      ${score ? `<p class="module-note">Last score: ${score.correct} of ${score.total}. ${complete ? "Green means passed and unlocked." : "Retake until every answer is green."}</p>` : ""}
    </article>
  `;
  jumpToTop();
}

function buildModuleQuiz(missionId) {
  return shuffle(missionQuestions(missionId)).slice(0, 5).map(prepareQuestion);
}

function prepareQuestion(question) {
  const choices = shuffle(question.answers.map((answer, index) => ({ answer, originalIndex: index })));
  return {
    ...question,
    choices,
    correctChoice: choices.findIndex((choice) => choice.originalIndex === question.correct)
  };
}

function startModuleQuiz(missionId) {
  const key = moduleKey(missionId);
  state.missionReads[key] = true;
  state.activeModuleByTrack[state.track] = missionId;
  touchStreak();
  moduleQuiz = {
    missionId,
    index: 0,
    questions: buildModuleQuiz(missionId),
    correct: 0,
    answered: false,
    passed: false
  };
  state.xp += 8;
  saveState();
  renderModuleQuizQuestion();
}

function renderModuleQuizQuestion() {
  setFocusMode(true);
  const mission = currentTrack().missions.find((item) => item.id === moduleQuiz.missionId);
  const question = moduleQuiz.questions[moduleQuiz.index];
  $("missionsView").innerHTML = `
    <article class="quiz-card module-quiz">
      <div class="pill-row">
        <span class="pill">${mission.title}</span>
        <span class="pill">Question ${moduleQuiz.index + 1} of ${moduleQuiz.questions.length}</span>
      </div>
      <p class="prompt">${question.prompt}</p>
      <div class="answers">
        ${question.choices.map((choice, index) => `<button class="answer-btn" type="button" data-module-answer="${index}">${choice.answer}</button>`).join("")}
      </div>
      <p id="moduleExplainBox" class="explain"></p>
      <button id="moduleNextBtn" class="secondary hidden" type="button" data-module-next="true">Next question</button>
    </article>
  `;
}

function answerModuleQuestion(index) {
  if (!moduleQuiz || moduleQuiz.answered) return;
  const question = moduleQuiz.questions[moduleQuiz.index];
  const buttons = [...document.querySelectorAll("[data-module-answer]")];
  const correct = index === question.correctChoice;
  moduleQuiz.answered = true;
  buttons.forEach((button) => button.disabled = true);
  buttons[index].classList.add(correct ? "correct" : "wrong");
  buttons[question.correctChoice].classList.add("correct");
  $("moduleExplainBox").textContent = correct ? "Correct. This answer is green, so you can keep moving." : question.explanation;
  $("moduleExplainBox").classList.add("show");
  $("moduleNextBtn").classList.remove("hidden");
  state.answered[question.id] = (state.answered[question.id] || 0) + 1;
  if (correct) {
    moduleQuiz.correct += 1;
    state.xp += 12;
    state.mastered[question.id] = true;
    delete state.mistakes[question.id];
  } else {
    state.xp += 3;
    state.mistakes[question.id] = true;
  }
  saveState();
}

function advanceModuleQuiz() {
  moduleQuiz.index += 1;
  moduleQuiz.answered = false;
  if (moduleQuiz.index < moduleQuiz.questions.length) {
    renderModuleQuizQuestion();
    return;
  }
  finishModuleQuiz();
}

function finishModuleQuiz() {
  setFocusMode(true);
  const key = moduleKey(moduleQuiz.missionId);
  const track = currentTrack();
  const missionIndex = track.missions.findIndex((mission) => mission.id === moduleQuiz.missionId);
  const passed = moduleQuiz.correct === moduleQuiz.questions.length;
  state.moduleQuizScores[key] = { correct: moduleQuiz.correct, total: moduleQuiz.questions.length };
  if (passed) {
    state.moduleComplete[key] = true;
    const next = track.missions[missionIndex + 1];
    state.activeModuleByTrack[state.track] = next ? next.id : moduleQuiz.missionId;
    state.xp += 40;
  } else {
    state.activeModuleByTrack[state.track] = moduleQuiz.missionId;
  }
  saveState();
  $("missionsView").innerHTML = `
    <article class="study-module">
      <span class="badge ${passed ? "green" : ""}">${passed ? "Complete" : "Retake needed"}</span>
      <h2>${passed ? "Module passed" : "Review and retry"}</h2>
      <p>${moduleQuiz.correct} of ${moduleQuiz.questions.length} correct. ${passed ? "Everything is green. The next module is unlocked." : "Wrong answers are red. You need all 5 green before moving on."}</p>
      <div class="module-actions">
        <button class="secondary" type="button" data-open-module="${moduleQuiz.missionId}">Review module</button>
        ${passed && track.missions[missionIndex + 1] ? `<button class="primary" type="button" data-open-module="${track.missions[missionIndex + 1].id}">Next module</button>` : `<button class="primary" type="button" data-start-module-quiz="${moduleQuiz.missionId}">Retake quiz</button>`}
      </div>
    </article>
  `;
  moduleQuiz = null;
  jumpToTop();
}

function renderQuiz(missionId = null) {
  const pool = missionId ? missionQuestions(missionId) : prioritizeQuestions();
  activeQuestion = pool[Math.floor(Math.random() * pool.length)] || trackQuestions()[0];
  if (!activeQuestion) {
    $("quizView").innerHTML = `<article class="quiz-card"><p>No questions for this track yet.</p></article>`;
    return;
  }
  const prepared = prepareQuestion(activeQuestion);
  activeChoices = prepared.choices;
  $("quizView").innerHTML = `
    <article class="quiz-card">
      <div class="pill-row">
        <span class="pill">${currentTrack().name}</span>
        <span class="pill">${missionName(activeQuestion.mission)}</span>
      </div>
      <p class="prompt">${activeQuestion.prompt}</p>
      <div class="answers">
        ${activeChoices.map((choice, index) => `<button class="answer-btn" type="button" data-answer="${index}">${choice.answer}</button>`).join("")}
      </div>
      <p id="explainBox" class="explain"></p>
      <button class="secondary" type="button" id="nextQuestion">Next question</button>
    </article>
  `;
}

function prioritizeQuestions() {
  const questions = trackQuestions();
  const missed = questions.filter((question) => state.mistakes[question.id]);
  const fresh = questions.filter((question) => !state.answered[question.id]);
  return [...missed, ...fresh, ...questions];
}

function missionName(missionId) {
  return currentTrack().missions.find((mission) => mission.id === missionId)?.title || "Core";
}

function renderReview() {
  const track = currentTrack();
  $("reviewView").innerHTML = `
    <div class="review-list">
      ${track.missions.map((mission) => `
        <article class="review-card">
          <h3>${mission.title}</h3>
          ${mission.lessons.map((lesson) => `<p>${lesson}</p>`).join("")}
          <button class="primary" type="button" data-drill="${mission.id}">Practice this</button>
        </article>
      `).join("")}
      <article class="review-card">
        <h3>Missed questions</h3>
        ${renderMistakes()}
      </article>
    </div>
  `;
}

function renderMistakes() {
  const mistakes = trackQuestions().filter((question) => state.mistakes[question.id]);
  if (!mistakes.length) return "<p>No misses saved. Keep drilling.</p>";
  return mistakes.map((question) => `<p><strong>${question.prompt}</strong><br>${question.explanation}</p>`).join("");
}

function mockSizeForTrack() {
  if (state.track === "personal-risk") return Math.min(trackQuestions().length, 100);
  return Math.min(trackQuestions().length, state.track === "pl" ? 50 : 75);
}

function renderExam() {
  const track = currentTrack();
  const mockSize = mockSizeForTrack();
  const completed = track.missions.filter((mission) => state.moduleComplete[moduleKey(mission.id)]).length;
  const recentMocks = (state.mockHistory || []).slice(-5);
  const strongMocks = recentMocks.filter((mock) => mock.score >= 85).length;
  const ready = completed === track.missions.length && strongMocks >= 2 && Object.keys(state.mistakes).length === 0;
  $("examView").innerHTML = `
    <article class="exam-card">
      <h3>Exam readiness gate</h3>
      <p>${track.exam}. The real Washington exam requires 70% to pass. This app holds you to an 85% practice target before calling you ready.</p>
      <div class="readiness-grid">
        <div><strong>${completed}/${track.missions.length}</strong><span>modules complete</span></div>
        <div><strong>${strongMocks}/2</strong><span>recent mocks at 85%+</span></div>
        <div><strong>${Object.keys(state.mistakes).length}</strong><span>saved misses</span></div>
      </div>
      <p class="module-note">${ready ? "Ready signal: schedule when you can keep scoring 85%+ without guessing." : "Keep going until every module is green, saved misses are cleared, and two recent mocks are at least 85%."}</p>
      <div class="exam-actions">
        <button class="primary" type="button" id="startMock">Start ${mockSize}-question mock</button>
        <button class="secondary" type="button" id="resetProgress">Reset progress</button>
      </div>
      <div id="mockArea"></div>
    </article>
  `;
}

function startMock() {
  mockSet = shuffle(trackQuestions()).slice(0, mockSizeForTrack()).map(prepareQuestion);
  mockAnswers = [];
  renderMockQuestion();
}

function renderMockQuestion() {
  const index = mockAnswers.length;
  const area = $("mockArea");
  if (index >= mockSet.length) {
    const correct = mockAnswers.filter(Boolean).length;
    const score = Math.round((correct / mockSet.length) * 100);
    state.bestMock = Math.max(state.bestMock || 0, score);
    state.mockHistory = [...(state.mockHistory || []), { score, correct, total: mockSet.length, date: new Date().toISOString() }].slice(-10);
    state.xp += score >= 70 ? 80 : 35;
    saveState();
    area.innerHTML = `<div class="review-card"><h3>${score}%</h3><p>${correct} of ${mockSet.length}. ${score >= 85 ? "Readiness score. Repeat it once more and clear misses." : score >= 70 ? "Passing score, but keep pushing to 85% for safety." : "Below passing target. Drill missed questions and run it again."}</p></div>`;
    return;
  }
  const question = mockSet[index];
  area.innerHTML = `
    <div class="quiz-card">
      <div class="pill-row"><span class="pill">Question ${index + 1} of ${mockSet.length}</span><span class="pill">${missionName(question.mission)}</span></div>
      <p class="prompt">${question.prompt}</p>
      <div class="answers">
        ${question.choices.map((choice, answerIndex) => `<button class="answer-btn" type="button" data-mock-answer="${answerIndex}">${choice.answer}</button>`).join("")}
      </div>
    </div>
  `;
}

function answerQuestion(index) {
  const buttons = [...document.querySelectorAll("[data-answer]")];
  buttons.forEach((button) => button.disabled = true);
  const correctChoice = activeChoices.findIndex((choice) => choice.originalIndex === activeQuestion.correct);
  const correct = index === correctChoice;
  buttons[index].classList.add(correct ? "correct" : "wrong");
  buttons[correctChoice].classList.add("correct");
  $("explainBox").textContent = activeQuestion.explanation;
  $("explainBox").classList.add("show");
  touchStreak();
  state.answered[activeQuestion.id] = (state.answered[activeQuestion.id] || 0) + 1;
  if (correct) {
    state.xp += 12;
    state.mastered[activeQuestion.id] = true;
    delete state.mistakes[activeQuestion.id];
  } else {
    state.xp += 3;
    state.mistakes[activeQuestion.id] = true;
  }
  saveState();
}

function markRead(missionId) {
  touchStreak();
  state.missionReads[moduleKey(missionId)] = true;
  state.xp += 8;
  saveState();
  const mission = currentTrack().missions.find((item) => item.id === missionId);
  $("reviewView").innerHTML = `
    <article class="review-card">
      <h3>${mission.title}</h3>
      ${mission.lessons.map((lesson) => `<p>${lesson}</p>`).join("")}
      <button class="primary" type="button" data-drill="${mission.id}">Drill mission</button>
    </article>
  `;
  switchView("review");
}

function switchView(view) {
  if (view !== "missions") setFocusMode(false);
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  document.querySelectorAll(".view").forEach((panel) => panel.classList.toggle("active", panel.id === `${view}View`));
  if (view === "missions") renderMissions();
  if (view === "quiz") renderQuiz();
  if (view === "review") renderReview();
  if (view === "exam") renderExam();
  renderStats();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function resetProgress() {
  if (!confirm("Reset all saved progress on this device?")) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  init();
}

function init() {
  setFocusMode(false);
  renderTrackSelect();
  renderMissions();
  renderQuiz();
  renderReview();
  renderExam();
  renderStats();
}

function resumeLearning() {
  switchView("missions");
  renderStudyModule(activeModuleId());
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.matches(".tab")) switchView(target.dataset.view);
  if (target.id === "resumeBtn") {
    resumeLearning();
  }
  if (target.dataset.openModule) {
    switchView("missions");
    renderStudyModule(target.dataset.openModule);
  }
  if (target.dataset.backCourse) {
    switchView("missions");
  }
  if (target.dataset.startModuleQuiz) {
    switchView("missions");
    startModuleQuiz(target.dataset.startModuleQuiz);
  }
  if (target.dataset.moduleAnswer) answerModuleQuestion(Number(target.dataset.moduleAnswer));
  if (target.dataset.moduleNext) advanceModuleQuiz();
  if (target.dataset.read) markRead(target.dataset.read);
  if (target.dataset.drill) {
    switchView("quiz");
    renderQuiz(target.dataset.drill);
  }
  if (target.dataset.answer) answerQuestion(Number(target.dataset.answer));
  if (target.id === "nextQuestion") renderQuiz();
  if (target.id === "startMock") startMock();
  if (target.id === "resetProgress") resetProgress();
  if (target.dataset.mockAnswer) {
    const question = mockSet[mockAnswers.length];
    const correct = Number(target.dataset.mockAnswer) === question.correctChoice;
    mockAnswers.push(correct);
    if (correct) state.mastered[question.id] = true;
    else state.mistakes[question.id] = true;
    state.answered[question.id] = (state.answered[question.id] || 0) + 1;
    touchStreak();
    saveState();
    renderMockQuestion();
  }
});

$("resumeBtn").addEventListener("click", (event) => {
  event.stopPropagation();
  resumeLearning();
});

$("trackSelect").addEventListener("change", (event) => {
  state.track = event.target.value;
  saveState();
  init();
});

let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  $("installBtn").classList.remove("hidden");
});

$("installBtn").addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $("installBtn").classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

init();
