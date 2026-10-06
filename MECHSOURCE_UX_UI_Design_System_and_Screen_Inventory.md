# MECHSOURCE Master UX/UI Design System & Screen Inventory Specification

**Document Version:** 1.0.0
**Status:** Approved Master Design Specification (Pre-Development Design Baseline)
**Core Purpose:** Complete UX/UI specification, design tokens, interaction states, local terminology mappings, and 93-screen inventory across Customer, Supplier, Service Provider, and Admin portals.
**UX Core Philosophy:**
`IDENTIFY → VERIFY → COMPARE → TRUST → BUY → DELIVER → FIT → MAINTAIN`
*Do not make the user understand MECHSOURCE. Make MECHSOURCE understand what the user is trying to accomplish.*

---

## 1. Design Status Principles & Tokens

The MECHSOURCE interface adheres to 5 strict status principles:
1. **LOCKED:** Confirmed product requirement that the UI must strictly support.
2. **DESIGN DIRECTION:** Approved UX direction refined for maximum usability in high-stress, outdoor, or low-bandwidth environments.
3. **VALIDATION REQUIRED:** Features designed with clear indicators that field confirmation or manual verification is required.
4. **POLICY DECISION REQUIRED:** Interfaces designed with adaptable states to accommodate future business policy lock-ins (e.g. escrow duration, return window).
5. **TECHNICAL DEPENDENCY:** Visual states designed to handle API latency, partial VIN decodes, or low network conditions gracefully.

### 1.1 Color Tokens & Brand Palette

- **Primary Industrial Dark:** `#0F172A` (Slate 900) - Headers, primary navigation, industrial typography.
- **Mechanical Safety Orange (Accent):** `#EA580C` (Orange 600) - Primary call-to-action buttons, active states, emergency breakdown alerts.
- **Trust & Logistics Blue:** `#2563EB` (Blue 600) - Verification badges, map markers, shipment tracking, technician profiles.
- **Surface Gray:** `#F8FAFC` (Slate 50) - Clean, high-contrast background optimized for outdoor readability under harsh sunlight.

### 1.2 Five Part Quality Tier System
Every spare part listed on MECHSOURCE must prominently feature one of 5 visual quality badges:
1. **Genuine OEM (`#15803D` Green):** Factory original manufactured by/for vehicle maker (e.g., Toyota Genuine Parts in original box).
2. **OES - Original Equipment Supplier (`#0284C7` Sky Blue):** Made by the official tier-1 supplier without car brand logo (e.g., Denso, Bosch, NGK).
3. **Premium Aftermarket (`#7C3AED` Purple):** High-grade certified replacement built to OEM specifications (e.g., Bilstein, KYB, Febi Bilstein).
4. **Standard Aftermarket (`#475569` Slate Gray):** Budget-friendly replacement meeting standard fitment.
5. **Tokunbo / Reconditioned (`#D97706` Amber):** Tested, foreign-used original part imported from abroad (e.g., tested Japanese Tokunbo engine).

### 1.3 Trust & Verification Indicators
- **Verified Business Badge (`#059669` Emerald):** CAC registered and physically audited shop location.
- **Stock Confirmed (`#16A34A` Green):** Real-time inventory lock confirmed by merchant within 15 minutes.
- **AI Match Confidence Score (`#6D28D9` Purple):** Visual percentage indicator (e.g., "92% AI Match").
- **Human Technician Verified (`#2563EB` Blue):** Confirmed by a qualified specialist technician.
- **Escrow Funds Held (`#D97706` Amber):** Buyer payment safely locked in escrow pending physical fitment check.

---

## 2. Local Terminology Mapping Dictionary (Pidgin to OEM)

The MECHSOURCE search engine and UI automatically map local Nigerian automotive slang to technical OEM nomenclature:

| Local Informal Pidgin Term | Standard English Equivalent | Technical OEM Nomenclature |
| :--- | :--- | :--- |
| **"Brainbox"** | Engine Control Computer | Engine Control Module (ECM / ECU) |
| **"Follow-Come"** | Factory Original Part | Genuine OEM (Used/Tokunbo) |
| **"Top Gasket"** | Cylinder Head Gasket | Cylinder Head Gasket Assembly |
| **"Shocker"** | Shock Absorber | Strut & Damper Assembly |
| **"Leg"** | Suspension Control Arm | Lower / Upper Wishbone Control Arm |
| **"Tie-Rod"** | Steering Joint | Outer / Inner Track Rod End |
| **"Kick Starter"** | Engine Starter | Starter Motor Assembly |
| **"Cambering"** | Wheel Alignment Angle | Wheel Camber Alignment Adjustment |
| **"Fuel Pump / Feed Pump"** | Fuel Delivery Unit | High-Pressure Fuel Pump (HPFP) |
| **"Nozzle"** | Fuel Injector | Direct Fuel Injector Nozzle |

---

## 3. Complete Screen Inventory (Screens 1 to 93)

### 3.1 Customer Environment (Screens 1 – 38)
1. **Splash / Brand Entry:** Brand logo, tagline, fast entry buttons.
2. **Onboarding:** Progressive introduction to Find My Part, Escrow Safety, and Delivery.
3. **Sign In:** Phone number / email OTP sign-in.
4. **Create Account:** Role selection (Individual, Mechanic, Fleet, Procurement).
5. **Verification:** Phone OTP and email verification.
6. **Home Experience:** Multi-modal search bar, vehicle selector garage, emergency breakdown button, feature modules.
7. **Global Search:** Instant predictive search bar with local slang translation tags.
8. **Find My Part Entry:** Guided 5-way discovery launcher (Vehicle, VIN, Part #, Local Slang, Visual AI).
9. **Vehicle Selection:** Year -> Make -> Model -> Engine -> Trim dropdown filter.
10. **Vehicle Profile / Virtual Garage:** Saved vehicles, VIN log, maintenance history.
11. **VIN Entry:** 17-character VIN camera scanner and text field.
12. **VIN Result / Partial Match:** Factory spec display with ambiguous engine/trim filter prompts.
13. **Part-Number Search:** OEM cross-reference lookup with brand switch toggles.
14. **Describe-a-Part Search:** Natural language search handling local terms (e.g. "Toyota Corolla 2010 brainbox").
15. **Photo Upload:** AI Camera scanner interface with framing box guides.
16. **AI Identification Result:** Visual match screen with AI Confidence Score (% bar) and fitment warnings.
17. **Human Verification Request:** Form to dispatch part verification request to a technician/expert.
18. **Search Results:** Filterable grid/list displaying part quality badges, supplier trust scores, and delivery times.
19. **Filter and Sort:** Quality tier filter, location filter (Lagos, Ogun, Abuja), price range, stock status.
20. **Product Detail:** High-res photos, OEM cross-references, compatibility checklist, supplier location map, escrow badge, Add to Cart.
21. **Supplier Profile:** Shop store front, CAC verification status, physical market location (e.g. Ladipo Line 4), user reviews.
22. **Cart:** Item summary, compatibility re-verification banner, quantity controls.
23. **Checkout:** Delivery option picker (Express Courier vs Market Pickup), delivery address.
24. **Payment & Escrow:** Escrow payment explanation, Paystack/Monnify card/transfer/USSD options.
25. **Order Confirmation:** Escrow transaction receipt, order ID, delivery estimate.
26. **Order Tracking:** Live map tracking courier dispatch, step-by-step milestone timeline.
27. **Return / Dispute:** Fitment failure reporting tool, photo evidence uploader, escrow hold alert.
28. **Technician Search:** Filterable list of certified mechanics by specialty (Diesel, Electrical, Hydraulics).
29. **Technician Profile:** Trade certifications, rating, completed jobs, hourly/job rate, booking button.
30. **Workshop Search:** Map view of structured repair workshops in Lagos/Ogun/Abuja.
31. **Workshop Profile:** Workshop amenities, bay capacity, certified technicians, service list.
32. **Emergency Breakdown:** One-touch SOS dispatch for roadside assistance and heavy equipment repair.
33. **Maintenance Dashboard:** Vehicle service schedule, mileage tracker, upcoming filter/oil changes.
34. **Maintenance Record:** Digital service history logbook for vehicle resale value.
35. **Fleet Dashboard:** Multi-vehicle fleet overview, total maintenance spend, bulk servicing schedules.
36. **Equipment Detail:** Machinery sales/lease page (Caterpillar, Komatsu excavators, loaders, generators).
37. **Rental Search / Detail:** Short-term / long-term machinery rental options with/without operator.
38. **B2B Procurement Request:** Corporate Request for Quote (RFQ) builder with LPO submission.

### 3.2 Supplier Environment (Screens 39 – 56)
39. **Supplier Onboarding:** Merchant business type selection (Importer, Wholesaler, Tokunbo Trader).
40. **Business Verification:** CAC document upload, shop photo, utility bill submission.
41. **Supplier Dashboard:** Daily sales, pending orders, escrow balance, inventory alerts.
42. **Catalogue:** Store inventory grid with OEM numbers and quality tier flags.
43. **Add Product:** Fast product listing form with barcode scanner and photo uploader.
44. **Edit Product:** Update description, OEM cross-references, compatibility models.
45. **Inventory:** Real-time stock level tracker with "Stock Confirmed" toggle.
46. **Inventory Update:** Single-click stock status toggle (In Stock / Out of Stock).
47. **Bulk Inventory Update:** Excel / CSV inventory batch uploader.
48. **Pricing:** Dynamic price update engine for FX fluctuations.
49. **Orders:** Incoming buyer orders queue with 15-minute price acceptance timer.
50. **Order Detail:** Buyer location, delivery method, requested OEM part details.
51. **Fulfilment:** Dispatch confirmation, courier handoff code generation.
52. **Returns / Disputes:** Buyer return requests, fitment claim inspection status.
53. **Messages:** Direct in-app buyer communication channel with phone masking.
54. **Reviews:** Merchant ratings, customer feedback moderation.
55. **Supplier Analytics:** Best-selling parts, revenue analytics, search impression metrics.
56. **Supplier Settings:** Bank payout account settings, shop location details, notification preferences.

### 3.3 Service Provider Environment (Screens 57 – 70)
57. **Service-Provider Onboarding:** Specialty selection (Auto-Electrician, Hydraulic Specialist, Diesel Mechanic).
58. **Verification:** Trade test certificate upload, garage inspection request.
59. **Dashboard:** Daily job requests, active repair bookings, total earnings.
60. **Service Profile:** Skills list, certification badges, work portfolio photos.
61. **Services:** Custom service rate card editor (e.g. ECU Diagnostics, Brake Replacement).
62. **Availability:** Working hours toggle and service area radius map.
63. **Requests:** Incoming customer service job alerts with distance map.
64. **Booking Detail:** Vehicle info, customer reported issue, location address.
65. **Active Job:** Job execution timer, part fitment verification confirmation button.
66. **Completed Job:** Customer sign-off, digital job card entry, invoice generation.
67. **Customer Communication:** In-app chat and call portal.
68. **Reviews:** Customer feedback, star rating breakdown.
69. **Earnings / Records:** Completed job payouts, weekly earnings breakdown.
70. **Settings:** Profile edit, payout bank account, emergency response toggle.

### 3.4 Admin Console Environment (Screens 71 – 93)
71. **Admin Login / Security:** Multi-factor authentication admin gateway.
72. **Overview Dashboard:** Total Gross Merchandise Value (GMV), active escrow volume, active orders, system health.
73. **User Management:** Customer, Fleet Operator, and Procurement account audit.
74. **Supplier Management:** Merchant store directory, performance scoring, compliance status.
75. **Service-Provider Management:** Mechanic & workshop directory, certification status.
76. **Verification Queue:** Pending CAC documents, shop audit photos, identity verification reviews.
77. **Product / Catalogue Management:** Master OEM catalogue manager, cross-reference database editor.
78. **Compatibility Management:** Vehicle fitment matrix editor (Make/Model/Year mapping).
79. **AI Identification Queue:** Low-confidence AI visual match review queue.
80. **Human Verification Queue:** Pending customer verification requests assigned to internal technical team.
81. **Inventory Monitoring:** Platform-wide stock accuracy monitoring and stale stock flagging.
82. **Orders:** Master order audit log across all 4 environments.
83. **Order Detail:** Transaction trail, escrow status, courier tracking ID.
84. **Payments:** Escrow release control panel, manual payout override, fee ledger.
85. **Returns / Disputes:** Arbitration dashboard for buyer vs supplier fitment disputes.
86. **Logistics:** Courier integration status (GIGL, Kwik), delivery SLA monitor.
87. **Reviews / Moderation:** Customer review flag queue and content moderation.
88. **Notifications:** System-wide broadcast message and push notification manager.
89. **Reports / Analytics:** Revenue reports, market demand analytics, top searched parts.
90. **Audit Logs:** Immutable admin activity log for compliance.
91. **Content / Settings:** Terms of service, policy rules, escrow fee percentage settings.
92. **Integration / Status Monitoring:** API health monitor for Paystack, TecAlliance, YouVerify, Termii.
93. **Admin Account / Settings:** Admin RBAC permissions, security settings.

---

## 4. Primary Interactive User Journeys

The 14 core interactive user journeys defined across the platform:
1. **Journey 1: Find My Part & Compare Offers** (Vehicle Selection -> OEM Lookup -> Compatibility Check -> Quality Tier Filter -> Supplier Compare).
2. **Journey 2: Visual AI Identification & Verification** (Photo Upload -> AI Confidence Score -> Low Match Fallback -> Human Verification Request).
3. **Journey 3: Local Slang Search** ("Brainbox" query -> Slang Mapper -> Standardized ECU Search -> Results).
4. **Journey 4: Purchase & Escrow Checkout** (Cart -> Compatibility Re-Check -> Delivery Address -> Escrow Payment -> Order Placed).
5. **Journey 5: Live Order & Delivery Tracking** (Order Status -> Dispatch -> Courier Map Tracking -> Proof of Delivery).
6. **Journey 6: Fitment Dispute & Escrow Refund** (Fitment Failure Flag -> Photo Upload -> Escrow Frozen -> QC Hub Inspection -> Refund Released).
7. **Journey 7: Technician Discovery & Booking** (Filter Mechanics -> View Certifications -> Request Job -> Service Executed).
8. **Journey 8: Emergency Breakdown Request** (One-Touch SOS -> GPS Location -> Dispatch Nearby Tow/Mechanic -> Live Arrival Tracker).
9. **Journey 9: Fleet Maintenance & Procurement** (Fleet Dashboard -> Bulk Part RFQ -> LPO Upload -> Corporate Credit Approval).
10. **Journey 10: Supplier Onboarding & Shop Verification** (Merchant Form -> CAC Upload -> Shop Photo -> Physical Audit Approval).
11. **Journey 11: Supplier Inventory & Dynamic FX Update** (Stock Grid -> One-Click Confirm -> Price Expiry Edit -> Order Confirmation).
12. **Journey 12: Supplier Order Fulfillment** (Order Alert -> 15-Min Accept -> Dispatch Code -> Courier Handoff).
13. **Journey 13: Service Provider Job Execution** (Job Alert -> Accept -> Arrive at Workshop -> Fit Part -> Customer Sign-Off -> Payout).
14. **Journey 14: Admin Verification & Dispute Arbitration** (Review CAC Queue -> Inspect Dispute Evidence -> Authorize Escrow Release/Refund).

---
