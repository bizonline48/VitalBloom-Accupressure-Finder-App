import { useState } from "react";

const LOGO_B64 = "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";

const P = {
  bg:"#F8F5F0",card:"#FFFFFF",border:"#EAE0D6",
  accent:"#B07868",accentSoft:"#F5E8E2",
  sage:"#5A7A54",sageSoft:"#E6F0E4",
  purple:"#7A6898",purpleSoft:"#EEE8F5",
  text:"#2A1E1A",textMid:"#6A4E44",textLight:"#A08878",
  urgent:"#B03020",urgentBg:"#FEF0EE",
  caution:"#9A6010",cautionBg:"#FEF6E8",
};

const SRC = "小儿推拿常用穴位, Singapore College of Traditional Chinese Medicine";

const VP = {
  fever:[
    {pointName:"天門 Tiān Mén",tagline:"Opens exterior, disperses wind-heat, reduces fever",
     hanziTerms:[{hanzi:"天門",pinyin:"Tiān Mén",meaning:"Heavenly Gate — special paediatric forehead point"},{hanzi:"肺",pinyin:"Fèi",meaning:"Lung — governs the body's exterior surface"}],
     location:"Midline of forehead — straight line from between the eyebrows up to the hairline.",
     howToApply:"Both thumbs alternate pushing upward from between eyebrows to hairline. One thumb pushes as the other resets. Upward strokes only.",
     duration:"30–50 alternating pushes",frequency:"2–3 times daily during fever",
     whyItWorks:"Opens the exterior to release wind-heat and disperse Lung Qi. Primary paediatric fever point — used with 推坎宫 and 揉太阳.",
     bodyZone:"face",px:50,py:34,arrow:"up"},
    {pointName:"天河水 Tiān Hé Shuǐ",tagline:"Clears heat gently without damaging Yin",
     hanziTerms:[{hanzi:"天河水",pinyin:"Tiān Hé Shuǐ",meaning:"Heavenly River Water — forearm midline point"},{hanzi:"心",pinyin:"Xīn",meaning:"Heart — clears Heart fire and general internal heat"}],
     location:"Midline of inner forearm from wrist crease to elbow crease.",
     howToApply:"Index and middle fingers together, push wrist → elbow only in smooth straight strokes.",
     duration:"100–300 pushes",frequency:"2–3 times daily",
     whyItWorks:"Mild in nature — clears heat from Wei and Qi levels without damaging Yin. Suitable for all degrees of infant fever.",
     bodyZone:"arm_inner",px:50,py:50,arrow:"down"},
    {pointName:"六腑 Liù Fǔ",tagline:"Powerfully clears intense excess heat and high fever",
     hanziTerms:[{hanzi:"六腑",pinyin:"Liù Fǔ",meaning:"Six Fu Organs — ulnar forearm edge"},{hanzi:"血",pinyin:"Xuè",meaning:"Blood — cools blood-level heat and detoxifies"}],
     location:"Ulnar (little-finger) edge of inner forearm, elbow crease to wrist crease.",
     howToApply:"Push elbow → wrist only. Always this direction for clearing. Often combined with 推三关 to balance.",
     duration:"100–300 pushes",frequency:"2–3 times daily for high fever",
     whyItWorks:"Cold in nature — powerfully clears excess heat and cools blood. For high fever. Combined with 推三关 to balance Yin and Yang.",
     bodyZone:"arm_ulnar",px:20,py:50,arrow:"up"},
  ],
  cough:[
    {pointName:"肺經 Fèi Jīng (Clear)",tagline:"Clears Lung heat, relieves cough and congestion",
     hanziTerms:[{hanzi:"肺經",pinyin:"Fèi Jīng",meaning:"Lung Meridian — on the ring (4th) finger"},{hanzi:"肺",pinyin:"Fèi",meaning:"Lung — governs respiration and the body's exterior"}],
     location:"Palmar surface of ring finger (4th finger), from fingertip to finger root.",
     howToApply:"Push from fingertip to finger root (tip → root = clearing). Light smooth strokes.",
     duration:"100–300 pushes",frequency:"2–3 times daily",
     whyItWorks:"清肺经 (tip → root) disperses Lung Qi, clears heat from the Lung, stops cough. For heat-type cough with fever.",
     bodyZone:"hand_palm",px:63,py:20,arrow:"down"},
    {pointName:"肺俞 Fèi Yú",tagline:"Tonifies Lung Qi, stops cough and resolves phlegm",
     hanziTerms:[{hanzi:"肺俞",pinyin:"Fèi Yú",meaning:"Lung Back-Shu — transport point of the Lung"},{hanzi:"气",pinyin:"Qì",meaning:"Qi — Lung Qi directly tonified by this back point"}],
     location:"Upper back at T3 level, 1.5 finger-widths either side of spine. Two symmetrical points.",
     howToApply:"Baby face down. Both thumbs on either side of spine at upper-back level. Small gentle circles simultaneously.",
     duration:"50–100 circular rubs",frequency:"1–2 times daily",
     whyItWorks:"肺俞 is the Back-Shu point of the Lung. Directly tonifies Lung Qi, relieves respiratory symptoms, disperses phlegm.",
     bodyZone:"back",px:50,py:28,arrow:null,bilateral:true},
    {pointName:"迎香 Yíng Xiāng",tagline:"Opens nasal passages and clears congestion",
     hanziTerms:[{hanzi:"迎香",pinyin:"Yíng Xiāng",meaning:"Welcome Fragrance — beside each nostril"},{hanzi:"肺",pinyin:"Fèi",meaning:"Lung — opens to the nose; Lung Qi reaches the nose"}],
     location:"Nasolabial groove beside each nostril, 0.5 finger-widths from the nostril edge.",
     howToApply:"Index or middle fingers beside each nostril simultaneously. Small gentle circular rubs on both sides.",
     duration:"20–30 circular rubs",frequency:"2–3 times daily",
     whyItWorks:"Opens and unblocks the nasal orifice, disperses Lung Qi to the nose. For nasal congestion, blocked nose, rhinitis.",
     bodyZone:"face",px:37,py:66,arrow:null,bilateral:true},
  ],
  feeding:[
    {pointName:"脾經 Pí Jīng (Supplement)",tagline:"Strengthens Spleen-Stomach Qi, improves appetite",
     hanziTerms:[{hanzi:"脾經",pinyin:"Pí Jīng",meaning:"Spleen Meridian — on the thumb"},{hanzi:"脾",pinyin:"Pí",meaning:"Spleen — governs transformation of food into Qi"}],
     location:"Thumb tip — circular motions on the thumb tip only.",
     howToApply:"Small circular (旋推) motions on baby's thumb tip with your thumb pad. Circular = supplementing. Do not push in a straight line.",
     duration:"100–300 circular pushes",frequency:"2–3 times daily",
     whyItWorks:"补脾经 strengthens Spleen-Stomach function, raises digestive Qi, and improves appetite. Primary point for all digestive deficiency.",
     bodyZone:"hand_palm",px:17,py:42,arrow:null},
    {pointName:"板門 Bǎn Mén",tagline:"Dissolves food stagnation, relieves bloating and poor appetite",
     hanziTerms:[{hanzi:"板门",pinyin:"Bǎn Mén",meaning:"Spleen Gate — fleshy mound at thumb base"},{hanzi:"脾",pinyin:"Pí",meaning:"Spleen — stagnation here causes bloating and poor appetite"}],
     location:"Thenar eminence — the raised fleshy mound at the base of the thumb on the palm.",
     howToApply:"Baby's hand palm-up. Thumb tip rubs the full thenar eminence in gentle circular motions.",
     duration:"50–100 circular rubs",frequency:"2–3 times daily",
     whyItWorks:"揉板門 strengthens Spleen, dissolves food stagnation, harmonises the Stomach. For food accumulation, poor appetite, bloating.",
     bodyZone:"hand_palm",px:43,py:80,arrow:null},
    {pointName:"中脘 Zhōng Wǎn",tagline:"Harmonises the Stomach and reduces bloating",
     hanziTerms:[{hanzi:"中脘",pinyin:"Zhōng Wǎn",meaning:"Middle Stomach Cavity — Front-Mu of Stomach, 4 cun above navel"},{hanzi:"胃",pinyin:"Wèi",meaning:"Stomach — receives and ripens food; Qi must descend"}],
     location:"Midline of abdomen, 4 finger-widths directly above the navel.",
     howToApply:"Baby on back. 2–3 fingertips in gentle small circles at the point. Very light pressure only.",
     duration:"100–300 circular rubs",frequency:"1–2 times daily",
     whyItWorks:"中脘 is the Front-Mu of the Stomach. Rubbing harmonises Stomach Qi and aids food descension. For vomiting, bloating, poor appetite.",
     bodyZone:"abdomen",px:50,py:35,arrow:null},
  ],
  vomiting:[
    {pointName:"板門 (Reverse Push) 横纹→板门",tagline:"Descends Stomach Qi and stops vomiting",
     hanziTerms:[{hanzi:"板门",pinyin:"Bǎn Mén",meaning:"Push wrist crease → thenar mound: this direction descends Stomach Qi"},{hanzi:"胃",pinyin:"Wèi",meaning:"Stomach — rebellious upward Qi causes vomiting"}],
     location:"Palm side. Push from wrist crease (thumb side) towards thenar mound.",
     howToApply:"Push from wrist crease towards thenar mound. Direction: wrist → thenar. This exact direction (横纹推向板门) ONLY descends Stomach Qi.",
     duration:"100–300 pushes",frequency:"2–3 times daily",
     whyItWorks:"横纹推向板门 specifically descends Stomach Qi and stops vomiting. Direction is clinically critical.",
     bodyZone:"hand_palm",px:43,py:80,arrow:"up"},
    {pointName:"中脘 Zhōng Wǎn",tagline:"Harmonises the Stomach and reduces nausea",
     hanziTerms:[{hanzi:"中脘",pinyin:"Zhōng Wǎn",meaning:"Middle Stomach Cavity — 4 cun above navel"},{hanzi:"胃",pinyin:"Wèi",meaning:"Stomach — Front-Mu directly affects Stomach function"}],
     location:"Midline of abdomen, 4 finger-widths above the navel.",
     howToApply:"Gentle circles at point. For vomiting: also push slightly downward towards navel — descending direction suppresses upward rebellion.",
     duration:"100–300 rubs",frequency:"2–3 times daily",
     whyItWorks:"中脘 harmonises the Stomach. Pushing downward descends Stomach Qi and stops upward rebellion.",
     bodyZone:"abdomen",px:50,py:35,arrow:"down"},
    {pointName:"天柱骨 Tiān Zhù Gǔ",tagline:"Descends rebellious Qi and stops vomiting",
     hanziTerms:[{hanzi:"天柱骨",pinyin:"Tiān Zhù Gǔ",meaning:"Heavenly Pillar Bone — back of neck midline"},{hanzi:"胃",pinyin:"Wèi",meaning:"Stomach — rebellious Qi rises through neck; pushing down reverses it"}],
     location:"Midline of back of neck from hairline at nape downward to C7 (the large bump at neck-shoulder junction).",
     howToApply:"Baby seated or face down. Push downward from hairline to C7 vertebra. Always downward for vomiting.",
     duration:"100–300 downward pushes",frequency:"2–3 times daily",
     whyItWorks:"天柱骨 descends rebellious Qi and stops vomiting. Combined with 横纹推向板门 and 揉中脘 for best effect.",
     bodyZone:"back_neck",px:50,py:57,arrow:"down"},
  ],
  rashes:[
    {pointName:"肺經 Fèi Jīng (Clear)",tagline:"Clears Lung heat and wind from the skin surface",
     hanziTerms:[{hanzi:"肺經",pinyin:"Fèi Jīng",meaning:"Lung Meridian — ring finger"},{hanzi:"肺",pinyin:"Fèi",meaning:"Lung — governs skin (肺主皮毛); skin conditions start here"}],
     location:"Palmar surface of ring finger from fingertip to root.",
     howToApply:"Push from fingertip to root. Always tip → root for clearing. Light smooth strokes.",
     duration:"100–300 pushes",frequency:"2–3 times daily",
     whyItWorks:"The Lung governs the skin (肺主皮毛). Clearing disperses wind-heat from the skin, reduces inflammation.",
     bodyZone:"hand_palm",px:63,py:20,arrow:"down"},
    {pointName:"天河水 Tiān Hé Shuǐ",tagline:"Clears blood-heat driving rashes without damaging Yin",
     hanziTerms:[{hanzi:"天河水",pinyin:"Tiān Hé Shuǐ",meaning:"Heavenly River Water — forearm midline"},{hanzi:"血",pinyin:"Xuè",meaning:"Blood — skin rashes often driven by blood-heat"}],
     location:"Midline of inner forearm from wrist crease to elbow crease.",
     howToApply:"Two fingers pushing wrist → elbow only. Smooth gentle strokes.",
     duration:"100–300 pushes",frequency:"2–3 times daily",
     whyItWorks:"天河水 clears Qi and Wei level heat gently without damaging Yin — suitable for heat that drives infantile rashes and eczema flares.",
     bodyZone:"arm_inner",px:50,py:50,arrow:"down"},
    {pointName:"脾經 Pí Jīng (Supplement)",tagline:"Resolves dampness underlying eczema and chronic rashes",
     hanziTerms:[{hanzi:"脾經",pinyin:"Pí Jīng",meaning:"Spleen Meridian — thumb tip"},{hanzi:"脾",pinyin:"Pí",meaning:"Spleen — deficiency leads to damp accumulation in skin"}],
     location:"Thumb tip — circular motions on thumb tip only.",
     howToApply:"Circular (旋推) motions on baby's thumb tip. Always circular for supplementing.",
     duration:"100–300 circular pushes",frequency:"2–3 times daily",
     whyItWorks:"Spleen deficiency leads to dampness underlying infantile eczema. Supplementing the Spleen drains dampness and supports skin clearing.",
     bodyZone:"hand_palm",px:17,py:42,arrow:null},
  ],
  teething:[
    {pointName:"胃經 Wèi Jīng (Clear)",tagline:"Clears Stomach heat rising to gums — reduces gum swelling",
     hanziTerms:[{hanzi:"胃經",pinyin:"Wèi Jīng",meaning:"Stomach Meridian — thumb base area"},{hanzi:"胃",pinyin:"Wèi",meaning:"Stomach — excess heat rises to gums along the Stomach channel"}],
     location:"Outer (radial) border of thenar eminence from thumb base towards wrist.",
     howToApply:"Push from thumb base towards wrist along outer palm ridge. This clearing direction reduces Stomach heat.",
     duration:"100–300 pushes",frequency:"2–3 times daily",
     whyItWorks:"清胃经 reduces Stomach heat which rises along the channel to the gums and teeth. Addresses heat-driven teething discomfort.",
     bodyZone:"hand_palm",px:17,py:65,arrow:"down"},
    {pointName:"天河水 Tiān Hé Shuǐ",tagline:"Clears the low-grade heat accompanying teething",
     hanziTerms:[{hanzi:"天河水",pinyin:"Tiān Hé Shuǐ",meaning:"Heavenly River Water — forearm midline"},{hanzi:"心",pinyin:"Xīn",meaning:"Heart — Heart heat contributes to restlessness during teething"}],
     location:"Midline of inner forearm from wrist crease to elbow crease.",
     howToApply:"Two fingers pushing wrist → elbow in smooth straight strokes.",
     duration:"100–200 pushes",frequency:"Once daily as needed",
     whyItWorks:"Mild heat-clearing for the low-grade rise accompanying teething. If fever above 38°C, add 退六腑.",
     bodyZone:"arm_inner",px:50,py:50,arrow:"down"},
    {pointName:"涌泉 Yǒng Quán",tagline:"Draws excess heat downward and calms fussiness",
     hanziTerms:[{hanzi:"涌泉",pinyin:"Yǒng Quán",meaning:"Gushing Spring — sole of foot, lowest Kidney point"},{hanzi:"肾",pinyin:"Shèn",meaning:"Kidney — anchors floating heat through Kidney Yin"}],
     location:"Sole of foot — depression at the junction of the front 1/3 and back 2/3 of the foot sole.",
     howToApply:"Hold baby's foot. Thumb pad rubs point in small circles. Left foot — stops vomiting. Right — stops diarrhoea. Both for heat.",
     duration:"30–50 circular rubs per foot",frequency:"1–2 times daily",
     whyItWorks:"涌泉 draws excess Yang heat downward (引火归元), calms Shen, reduces restless fussiness.",
     bodyZone:"foot",px:50,py:45,arrow:null},
  ],
  colic:[
    {pointName:"摩腹 Mó Fù",tagline:"Moves Qi, disperses trapped wind and abdominal pain",
     hanziTerms:[{hanzi:"摩腹",pinyin:"Mó Fù",meaning:"Abdominal Massage — circular palm massage of whole abdomen"},{hanzi:"气",pinyin:"Qì",meaning:"Qi — stagnant Qi in abdomen is root cause of colic"}],
     location:"Entire abdomen, centred around the navel.",
     howToApply:"Baby on back. Full palm or four fingers in gentle clockwise circles. Start right side, circle upward, across, down. Very light pressure only.",
     duration:"3–5 minutes",frequency:"2–3 times daily, especially after feeds",
     whyItWorks:"摩腹 moves Qi, disperses trapped wind and stagnant food Qi causing colic. Combined with 捏脊 and 按揉足三里 as standard infant digestive care.",
     bodyZone:"abdomen",px:50,py:52,arrow:"circle"},
    {pointName:"脐 Qí (Navel)",tagline:"Warms the Middle Burner and relieves abdominal pain",
     hanziTerms:[{hanzi:"脐",pinyin:"Qí",meaning:"Navel — also called Shenque (Spirit Gateway)"},{hanzi:"阳",pinyin:"Yáng",meaning:"Yang — warms digestive Yang Qi from the centre"}],
     location:"The navel itself.",
     howToApply:"Baby on back. One fingertip or warm palm centre. Rub navel in small gentle circles.",
     duration:"100–300 circular rubs",frequency:"2–3 times daily",
     whyItWorks:"Rubbing the navel warms Yang Qi in the Middle Burner, disperses cold and stagnation. For diarrhoea, constipation, abdominal pain, colic.",
     bodyZone:"abdomen",px:50,py:62,arrow:null},
    {pointName:"捏脊 Jǐ Zhù",tagline:"Regulates all organ systems — calms an unsettled baby",
     hanziTerms:[{hanzi:"捏脊",pinyin:"Jǐ Zhù",meaning:"Spine Pinch — most important paediatric health-building technique"},{hanzi:"阳",pinyin:"Yáng",meaning:"Yang — the spine is the Governing Vessel of all Yang Qi"}],
     location:"Along the entire spine — coccyx upward to base of neck.",
     howToApply:"Baby face down. Pinch skin along spine between thumbs and index fingers. Start at coccyx, roll upward, re-pinch, continue to neck. 3–7 passes. Always upward.",
     duration:"3–7 passes up the spine",frequency:"Once daily",
     whyItWorks:"捏脊 regulates the Du Mai, activates all back transport points. Premier paediatric health-building technique. For colic, diarrhoea, vomiting, fever, night crying.",
     bodyZone:"back",px:50,py:55,arrow:"up"},
  ],
  constipation:[
    {pointName:"大腸 Dà Cháng (Clear)",tagline:"Clears the Large Intestine and promotes bowel movement",
     hanziTerms:[{hanzi:"大肠",pinyin:"Dà Cháng",meaning:"Large Intestine — index finger radial border"},{hanzi:"气",pinyin:"Qì",meaning:"Qi — clearing moves stagnant intestinal Qi"}],
     location:"Radial (thumb-side) edge of index finger from webbing to fingertip.",
     howToApply:"Push from webbing towards fingertip (webbing → tip = clearing). For constipation only — direction is clinically critical.",
     duration:"100–300 pushes",frequency:"2–3 times daily",
     whyItWorks:"清大肠 (webbing → tip) moves stagnant Qi and heat in the intestines. For constipation, dry stools, intestinal heat.",
     bodyZone:"hand_palm",px:38,py:25,arrow:"down"},
    {pointName:"七節骨 Qī Jié Gǔ (Push Down)",tagline:"Clears intestinal heat — downward direction for constipation",
     hanziTerms:[{hanzi:"七节骨",pinyin:"Qī Jié Gǔ",meaning:"Seven-Node Bone — lower spine L4 to coccyx"},{hanzi:"阴",pinyin:"Yīn",meaning:"Yin — downward direction clears heat and promotes descent"}],
     location:"Lower back midline — from L4 vertebra (prominent bone above sacrum) downward to coccyx.",
     howToApply:"Baby face down. Push downward from L4 to coccyx. Always downward for constipation. Direction is clinically critical.",
     duration:"100–300 downward pushes",frequency:"2–3 times daily",
     whyItWorks:"推下七节骨 clears excess heat and promotes bowel movement. Downward = clearing. Upward = warming/holding (for diarrhoea).",
     bodyZone:"back",px:50,py:78,arrow:"down"},
    {pointName:"龜尾 Guī Wěi",tagline:"Neutral point that regulates the Large Intestine both ways",
     hanziTerms:[{hanzi:"龟尾",pinyin:"Guī Wěi",meaning:"Tortoise Tail — very tip of the coccyx"},{hanzi:"阴",pinyin:"Yīn",meaning:"Yin — neutral nature; balances rather than extremes"}],
     location:"Very tip of the coccyx — small bony prominence at the very end of the spine.",
     howToApply:"Baby face down. One fingertip rubs the coccyx tip in small gentle circles.",
     duration:"100–300 circular rubs",frequency:"2–3 times daily",
     whyItWorks:"龟尾 regulates the Large Intestine — promotes bowel movement for constipation, stops diarrhoea when needed. Always used with 七节骨.",
     bodyZone:"back",px:50,py:90,arrow:null},
  ],
  sleep:[
    {pointName:"百會 Bǎi Huì",tagline:"Calms the Shen (spirit) and settles a restless baby",
     hanziTerms:[{hanzi:"百会",pinyin:"Bǎi Huì",meaning:"Hundred Meetings — crown of head, all Yang meridians converge"},{hanzi:"安神",pinyin:"Ān Shén",meaning:"Calm the Shen — settles spirit and mind for sleep"}],
     location:"Very top (crown) of head on the midline — at the intersection of a line joining both ear tips with the midline.",
     howToApply:"Baby calm. One fingertip in small gentle circles at crown. Very light pressure only.",
     duration:"100–200 circular rubs",frequency:"Once daily, before sleep",
     whyItWorks:"百会 is where all Yang meridians converge. Rubbing calms Shen, settles restlessness. For fright, night crying, and restlessness.",
     bodyZone:"head_top",px:50,py:50,arrow:null},
    {pointName:"天河水 Tiān Hé Shuǐ",tagline:"Clears Heart heat and calms restlessness disrupting sleep",
     hanziTerms:[{hanzi:"天河水",pinyin:"Tiān Hé Shuǐ",meaning:"Heavenly River Water — forearm midline"},{hanzi:"心",pinyin:"Xīn",meaning:"Heart — Heart fire causes sleep disruption and night waking"}],
     location:"Midline of inner forearm from wrist crease to elbow crease.",
     howToApply:"Two fingers push wrist → elbow in smooth straight strokes. Once daily before bedtime.",
     duration:"100–200 pushes",frequency:"Once daily, before sleep",
     whyItWorks:"Sleep disruption and night waking are often driven by Heart heat. 天河水 clears Heart fire gently, calms restlessness.",
     bodyZone:"arm_inner",px:50,py:50,arrow:"down"},
    {pointName:"捏脊 Jǐ Zhù",tagline:"Builds constitution and promotes deep settled sleep",
     hanziTerms:[{hanzi:"捏脊",pinyin:"Jǐ Zhù",meaning:"Spine Pinch — entire spine coccyx to neck"},{hanzi:"阳",pinyin:"Yáng",meaning:"Yang — regulates the Governing Vessel and harmonises all organs"}],
     location:"Along entire spine from coccyx upward to base of neck.",
     howToApply:"Baby face down. Pinch skin, roll upward from coccyx to neck. 3–7 passes. Use as calming bedtime routine.",
     duration:"3–7 passes",frequency:"Once daily, before sleep",
     whyItWorks:"捏脊 harmonises all organ systems through the Du Mai. A well-regulated system sleeps deeply. Documented for night crying and paediatric wellness.",
     bodyZone:"back",px:50,py:55,arrow:"up"},
  ],
};

const SYMPTOMS=[
  {id:"fever",icon:"🌡️",label:"Baby Fever",sub:"What temperature is dangerous?"},
  {id:"cough",icon:"🤧",label:"Cough / Flu / Congestion",sub:"Blocked nose, sneezing, mucus"},
  {id:"feeding",icon:"🍼",label:"Not Feeding / Refusing Milk",sub:"Appetite loss, latch issues"},
  {id:"vomiting",icon:"🤢",label:"Vomiting / Diarrhoea",sub:"Tummy upset, loose stools"},
  {id:"rashes",icon:"🌸",label:"Rashes / Eczema / Allergies",sub:"Skin irritation, redness"},
  {id:"teething",icon:"🦷",label:"Teething Discomfort",sub:"Drooling, gum pain, fussiness"},
  {id:"colic",icon:"😭",label:"Colic / Excessive Crying",sub:"Inconsolable, tummy pain"},
  {id:"constipation",icon:"💨",label:"Constipation / Gas Pain",sub:"Straining, bloating, trapped wind"},
  {id:"sleep",icon:"🌙",label:"Sleep Regression",sub:"Suddenly waking, won't settle"},
];

const ALERTS={
  fever:{level:"urgent",msg:"⚠️ FEVER: Under 3 months — fever above 38°C requires IMMEDIATE medical attention. 3–12 months — above 39°C, seek medical care promptly. Acupressure is supportive only."},
  vomiting:{level:"caution",msg:"⚠️ If vomiting or diarrhoea lasts more than 24 hours, or baby shows dehydration signs (no wet nappies, sunken fontanelle, dry mouth), seek medical attention."},
  cough:{level:"caution",msg:"⚠️ If baby has difficulty breathing or high fever alongside cough, consult your doctor immediately."},
};

const AGE_OPTIONS=["0–3 months","4–6 months","7–9 months","10–12 months","13–18 months"];

function Spinner(){
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:14,padding:"40px 0"}}>
    <div style={{width:40,height:40,borderRadius:"50%",border:`3px solid ${P.accentSoft}`,borderTop:`3px solid ${P.accent}`,animation:"spin 0.9s linear infinite"}}/>
    <p style={{color:P.textLight,fontSize:13,fontStyle:"italic"}}>Loading points…</p>
    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
  </div>;
}

function HanziTag({hanzi,pinyin,meaning,tagId,openId,onToggle}){
  const show = openId === tagId;
  return <span style={{position:"relative",display:"inline-block",margin:"0 5px 5px 0"}}>
    <span onClick={e=>{e.stopPropagation();onToggle(show ? null : tagId);}}
      style={{display:"inline-flex",alignItems:"center",gap:4,background:P.sageSoft,
        border:`1.5px solid ${P.sage}`,borderRadius:20,padding:"3px 11px",cursor:"pointer",
        fontSize:15,color:P.sage,fontWeight:700,userSelect:"none"}}>
      {hanzi}<span style={{fontSize:11,fontWeight:500,color:P.sage,opacity:0.75}}>{pinyin}</span>
    </span>
    {show&&<div style={{position:"absolute",bottom:"calc(100% + 8px)",left:"50%",
      transform:"translateX(-50%)",background:P.text,color:"#fff",borderRadius:10,
      padding:"8px 14px",fontSize:12,zIndex:30,boxShadow:"0 6px 20px rgba(42,30,26,0.2)",
      lineHeight:1.5,maxWidth:220,textAlign:"center",whiteSpace:"normal"}}>
      <strong style={{fontSize:13,color:P.accentSoft}}>{hanzi}</strong><br/>{meaning}
      <div style={{position:"absolute",bottom:-5,left:"50%",transform:"translateX(-50%)",
        width:0,height:0,borderLeft:"5px solid transparent",
        borderRight:"5px solid transparent",borderTop:`5px solid ${P.text}`}}/>
    </div>}
  </span>;
}

function BodyDiagram({zone,px,py,arrow,ac,bilateral}){
  const c=ac||P.accent;
  const f="#FDF6F2",s="#C4A090",sw="1.2";
  const pulse=`@keyframes pr{0%{r:5;opacity:.9}100%{r:12;opacity:0}}@keyframes pd{0%,100%{opacity:1}50%{opacity:.6}}`;
  const dot=(x,y)=><g><style>{pulse}</style>
    <circle cx={x} cy={y} r="12" fill={c} fillOpacity="0" stroke={c} strokeWidth="1.5" style={{animation:"pr 1.4s ease-out infinite"}}/>
    <circle cx={x} cy={y} r="5" fill={c} style={{animation:"pd 1.4s ease-in-out infinite"}}/>
  </g>;
  const aUp=(x,y)=><g><defs><marker id={`u${zone}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill={c} stroke="none"/></marker></defs><line x1={x} y1={y+14} x2={x} y2={y-14} stroke={c} strokeWidth="1.5" markerEnd={`url(#u${zone})`}/></g>;
  const aDn=(x,y)=><g><defs><marker id={`d${zone}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill={c} stroke="none"/></marker></defs><line x1={x} y1={y-14} x2={x} y2={y+14} stroke={c} strokeWidth="1.5" markerEnd={`url(#d${zone})`}/></g>;
  const aCi=(x,y)=><g><defs><marker id={`c${zone}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill={c}/></marker></defs><path d={`M${x+16},${y} A16,16 0 1,1 ${x+11.3},${y-11.3}`} fill="none" stroke={c} strokeWidth="1.5" markerEnd={`url(#c${zone})`}/></g>;
  const w=120,h=140;

  if(zone==="face")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <ellipse cx="60" cy="62" rx="42" ry="50" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="46" cy="50" rx="6" ry="4" fill="#E8D0C4" stroke={s} strokeWidth="0.8"/>
    <ellipse cx="74" cy="50" rx="6" ry="4" fill="#E8D0C4" stroke={s} strokeWidth="0.8"/>
    <ellipse cx="60" cy="64" rx="5" ry="6" fill="#EDD8CC" stroke={s} strokeWidth="0.8"/>
    <circle cx="56" cy="68" r="2.5" fill="#DEC0B0" stroke={s} strokeWidth="0.6"/>
    <circle cx="64" cy="68" r="2.5" fill="#DEC0B0" stroke={s} strokeWidth="0.6"/>
    <path d="M 50 80 Q 60 86 70 80" fill="none" stroke={s} strokeWidth="0.8"/>
    {zone==="face"&&px===50&&py===22&&<line x1="60" y1="12" x2="60" y2="34" stroke={c} strokeWidth="2" strokeDasharray="3,2"/>}
    {bilateral?<g>{dot(47,70)}{dot(73,70)}</g>:<g>{dot(px*1.2,py*1.35)}{arrow==="up"&&aUp(px*1.2,py*1.35)}</g>}
  </svg>;

  if(zone==="hand_palm")return <svg viewBox="0 0 120 150" width={w} height={h}>
    <ellipse cx="58" cy="110" rx="36" ry="28" fill={f} stroke={s} strokeWidth={sw}/>
    <path d="M24,98 Q14,78 18,58 Q22,44 30,48 Q38,52 34,72 Z" fill={f} stroke={s} strokeWidth={sw}/>
    <rect x="36" y="30" width="13" height="58" rx="6" fill={f} stroke={s} strokeWidth={sw}/>
    <rect x="51" y="22" width="13" height="66" rx="6" fill={f} stroke={s} strokeWidth={sw}/>
    <rect x="66" y="26" width="13" height="62" rx="6" fill={f} stroke={s} strokeWidth={sw}/>
    <rect x="80" y="38" width="11" height="52" rx="5" fill={f} stroke={s} strokeWidth={sw}/>
    <rect x="30" y="132" width="56" height="12" rx="4" fill="#EDD8CC" stroke={s} strokeWidth={sw}/>
    {dot(px*1.15,py*1.38)}{arrow==="down"&&aDn(px*1.15,py*1.38)}{arrow==="up"&&aUp(px*1.15,py*1.38)}
  </svg>;

  if(zone==="arm_inner")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <path d="M38,20 Q32,20 28,70 Q26,110 35,128 L85,128 Q94,110 92,70 Q88,20 82,20 Z" fill={f} stroke={s} strokeWidth={sw}/>
    <line x1="35" y1="120" x2="85" y2="120" stroke={s} strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="60" y1="25" x2="60" y2="118" stroke="#DDD" strokeWidth="1" strokeDasharray="2,3"/>
    <text x="62" y="38" fontSize="8" fill={P.textLight}>wrist→</text>
    <text x="62" y="115" fontSize="8" fill={P.textLight}>elbow</text>
    {dot(px*1.18,py*1.3)}{arrow==="up"&&aUp(60,70)}{arrow==="down"&&aDn(60,70)}
  </svg>;

  if(zone==="arm_ulnar")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <path d="M38,20 Q32,20 28,70 Q26,110 35,128 L85,128 Q94,110 92,70 Q88,20 82,20 Z" fill={f} stroke={s} strokeWidth={sw}/>
    <path d="M28,70 Q26,110 35,128" stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <text x="8" y="80" fontSize="7" fill={c}>ulnar</text>
    {dot(30,py*1.3)}{arrow==="down"&&aDn(30,70)}{arrow==="up"&&aUp(30,70)}
  </svg>;

  if(zone==="abdomen")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <path d="M25,10 Q20,10 18,35 L18,120 Q18,130 30,132 L90,132 Q102,130 102,120 L102,35 Q100,10 95,10 Z" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="60" cy="80" rx="5" ry="4" fill="#EDD8CC" stroke={s} strokeWidth="1"/>
    <path d="M30,32 Q60,22 90,32" fill="none" stroke={s} strokeWidth="0.8" strokeDasharray="3,2"/>
    <line x1="42" y1="52" x2="78" y2="52" stroke="#DDD" strokeWidth="0.8" strokeDasharray="2,2"/>
    <text x="82" y="55" fontSize="7" fill={P.textLight}>中脘</text>
    {dot(px*1.18,py*1.3)}{arrow==="down"&&aDn(60,50)}{arrow==="circle"&&aCi(60,80)}
  </svg>;

  if(zone==="back")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <path d="M25,10 Q20,10 18,35 L18,120 Q18,130 30,132 L90,132 Q102,130 102,120 L102,35 Q100,10 95,10 Z" fill={f} stroke={s} strokeWidth={sw}/>
    <line x1="60" y1="15" x2="60" y2="128" stroke={s} strokeWidth="1.5"/>
    {[22,30,38,46,54,62,70,78,86,94,102,110,118].map((y,i)=><rect key={i} x="56" y={y} width="8" height="5" rx="1" fill="#EDD0C0" stroke={s} strokeWidth="0.5"/>)}
    <ellipse cx="40" cy="40" rx="14" ry="18" fill="#EDD8CC" stroke={s} strokeWidth="0.8" opacity="0.6"/>
    <ellipse cx="80" cy="40" rx="14" ry="18" fill="#EDD8CC" stroke={s} strokeWidth="0.8" opacity="0.6"/>
    {bilateral?<g>{dot(42,38)}{dot(78,38)}</g>:<g>{dot(px*1.18,py*1.35)}{arrow==="up"&&aUp(60,py*1.35)}{arrow==="down"&&aDn(60,py*1.35)}</g>}
  </svg>;

  if(zone==="back_neck")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <ellipse cx="60" cy="40" rx="35" ry="30" fill={f} stroke={s} strokeWidth={sw}/>
    <rect x="42" y="65" width="36" height="55" rx="8" fill={f} stroke={s} strokeWidth={sw}/>
    <path d="M30,55 Q60,65 90,55" fill="none" stroke={s} strokeWidth="1" strokeDasharray="2,2"/>
    <line x1="60" y1="58" x2="60" y2="118" stroke={s} strokeWidth="1.2"/>
    <rect x="56" y="112" width="8" height="5" rx="1" fill="#EDD0C0" stroke={s} strokeWidth="0.8"/>
    <text x="70" y="117" fontSize="7" fill={P.textLight}>大椎</text>
    {dot(px*1.18,py*1.35)}{arrow==="down"&&aDn(60,py*1.35)}
  </svg>;

  if(zone==="head_top")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <ellipse cx="60" cy="70" rx="45" ry="55" fill={f} stroke={s} strokeWidth={sw}/>
    <line x1="60" y1="18" x2="60" y2="122" stroke={s} strokeWidth="0.8" strokeDasharray="3,2"/>
    <line x1="16" y1="65" x2="104" y2="65" stroke={s} strokeWidth="0.8" strokeDasharray="3,2"/>
    <ellipse cx="16" cy="65" rx="5" ry="9" fill="#EDD8CC" stroke={s} strokeWidth="0.8"/>
    <ellipse cx="104" cy="65" rx="5" ry="9" fill="#EDD8CC" stroke={s} strokeWidth="0.8"/>
    {dot(60,66)}
  </svg>;

  if(zone==="foot")return <svg viewBox="0 0 120 140" width={w} height={h}>
    <path d="M35,130 Q20,120 18,90 Q16,60 22,40 Q28,20 42,18 Q56,16 62,20 Q80,18 88,32 Q98,48 96,70 Q94,95 88,118 Q80,134 65,136 Q50,138 35,130 Z" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="32" cy="16" rx="7" ry="8" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="45" cy="12" rx="7" ry="8" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="58" cy="11" rx="7" ry="8" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="70" cy="13" rx="7" ry="8" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="80" cy="18" rx="6" ry="7" fill={f} stroke={s} strokeWidth={sw}/>
    <ellipse cx="60" cy="65" rx="12" ry="8" fill="#EDD8CC" stroke={s} strokeWidth="0.8" opacity="0.7"/>
    {dot(px*1.15,py*1.38)}{arrow==="up"&&aUp(px*1.15,py*1.38)}{arrow==="down"&&aDn(px*1.15,py*1.38)}
  </svg>;

  return <div style={{width:w,height:h,background:P.accentSoft,borderRadius:8}}/>;
}

function PointCard({point,index}){
  const[open,setOpen]=useState(false);
  const[openTip,setOpenTip]=useState(null);
  const accents=[P.accent,P.sage,P.purple];
  const bgs=[P.accentSoft,P.sageSoft,P.purpleSoft];
  const ac=accents[index%3];
  return <div style={{background:P.card,borderRadius:18,padding:"18px 20px",marginBottom:13,
    borderLeft:`4px solid ${ac}`,border:`1.5px solid ${ac}44`,
    borderLeftWidth:4,borderLeftColor:ac,cursor:"pointer",
    boxShadow:"0 2px 14px rgba(42,30,26,0.06)"}} onClick={()=>{setOpen(!open);setOpenTip(null);}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
      <div style={{flex:1}}>
        <div style={{fontSize:10,fontWeight:800,letterSpacing:2,color:ac,textTransform:"uppercase",marginBottom:4}}>Point {index+1}</div>
        <h3 style={{margin:"0 0 4px",fontSize:16,fontWeight:800,color:P.text,lineHeight:1.3}}>{point.pointName}</h3>
        <p style={{margin:"0 0 8px",fontSize:13,color:P.textMid,lineHeight:1.5}}>{point.tagline}</p>
        {point.hanziTerms?.length>0&&<div style={{display:"flex",flexWrap:"wrap"}}>
          {point.hanziTerms.map((t,i)=><HanziTag key={i} hanzi={t.hanzi} pinyin={t.pinyin} meaning={t.meaning} tagId={index+"-"+i} openId={openTip} onToggle={setOpenTip}/>)}
        </div>}
        {!open&&<p style={{margin:"5px 0 0",fontSize:11,color:P.textLight,fontStyle:"italic"}}>Tap for technique and body diagram</p>}
      </div>
      <span style={{fontSize:13,marginLeft:12,marginTop:2,transform:open?"rotate(180deg)":"rotate(0)",transition:"transform 0.3s",color:ac,flexShrink:0}}>▼</span>
    </div>
    {open&&<div style={{marginTop:16,paddingTop:16,borderTop:`1px solid ${P.border}`}}>
      <div style={{display:"flex",gap:12,marginBottom:12,alignItems:"flex-start"}}>
        <div style={{flexShrink:0,background:bgs[index%3],borderRadius:12,padding:8,border:`1px solid ${ac}33`}}>
          <BodyDiagram zone={point.bodyZone} px={point.px} py={point.py} arrow={point.arrow} ac={ac} bilateral={point.bilateral}/>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:10,fontWeight:800,letterSpacing:1.5,color:ac,textTransform:"uppercase",marginBottom:5}}>📍 Location</div>
          <p style={{margin:0,fontSize:13,color:P.text,lineHeight:1.7}}>{point.location}</p>
        </div>
      </div>
      <div style={{background:bgs[index%3],borderRadius:12,padding:"11px 14px",marginBottom:10}}>
        <div style={{fontSize:10,fontWeight:800,letterSpacing:1.5,color:ac,textTransform:"uppercase",marginBottom:5}}>👆 How to Apply</div>
        <p style={{margin:"0 0 10px",fontSize:13,color:P.text,lineHeight:1.7}}>{point.howToApply}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          <span style={{background:P.sageSoft,border:`1px solid ${P.sage}`,borderRadius:20,padding:"3px 12px",fontSize:12,color:P.sage,fontWeight:600}}>⏱ {point.duration}</span>
          <span style={{background:P.accentSoft,border:`1px solid ${P.accent}`,borderRadius:20,padding:"3px 12px",fontSize:12,color:P.accent,fontWeight:600}}>🔁 {point.frequency}</span>
        </div>
      </div>
      <div style={{background:bgs[index%3],borderRadius:12,padding:"11px 14px"}}>
        <div style={{fontSize:10,fontWeight:800,letterSpacing:1.5,color:ac,textTransform:"uppercase",marginBottom:5}}>🌿 Why It Works</div>
        <p style={{margin:0,fontSize:13,color:P.textMid,lineHeight:1.7,fontStyle:"italic"}}>{point.whyItWorks}</p>
      </div>
    </div>}
  </div>;
}

function EmailGate({onUnlock}){
  const CSV_URL="https://docs.google.com/spreadsheets/d/e/2PACX-1vTMAcaeEhpDVc9WNEaRcDwR_iiqyMnb5hgM66fQGzoYwl-cARaRbGLdw5GnDtNyFFGg7YQk0NCQIP2K/pub?gid=89244732&single=true&output=csv";
  const[email,setEmail]=useState("");
  const[consent,setConsent]=useState(false);
  const[submitted,setSubmitted]=useState(false);
  const[err,setErr]=useState("");
  const[checking,setChecking]=useState(false);
  const[showPdpa,setShowPdpa]=useState(false);
  async function handleSubmit(){
    if(!email.trim()||!email.includes("@")||!email.includes(".")){setErr("Please enter a valid email address.");return;}
    if(!consent){setErr("Please tick the consent box to continue.");return;}
    setErr("");
    setChecking(true);
    try{
      const r=await fetch(CSV_URL);
      const text=await r.text();
      const rows=text.split("\n");
      const emailLower=email.trim().toLowerCase();
      let found=false;
      for(let i=1;i<rows.length;i++){
        const cols=rows[i].split(",");
        for(let j=0;j<cols.length;j++){
          const cell=cols[j].replace(/"/g,"").trim().toLowerCase();
          if(cell===emailLower){found=true;break;}
        }
        if(found)break;
      }
      setChecking(false);
      if(found){
        setSubmitted(true);
        setTimeout(()=>onUnlock(),1200);
      } else {
        setErr("Your email is not on our list. Please DM @infantcarespecialist or email infantplayconnections@gmail.com");
      }
    }catch(e){
      setChecking(false);
      setErr("Connection error. Please check your internet and try again.");
    }
  }
  return(
    <div style={{background:P.card,border:"1px solid "+P.border,borderRadius:20,padding:"28px 22px",boxShadow:"0 4px 20px rgba(42,30,26,0.08)"}}>
      <div style={{display:"flex",justifyContent:"center",marginBottom:14}}>
        <span style={{background:P.accentSoft,color:P.accent,fontSize:11,fontWeight:800,letterSpacing:1.5,textTransform:"uppercase",padding:"5px 14px",borderRadius:20,border:"1px solid "+P.accent}}>Free Access</span>
      </div>
      <h2 style={{margin:"0 0 6px",fontSize:19,fontWeight:800,color:P.text,textAlign:"center",lineHeight:1.3}}>Baby Acupressure Finder</h2>
      <p style={{margin:"0 0 20px",fontSize:13,color:P.textMid,textAlign:"center",lineHeight:1.6}}>Enter your email for free access to TCM paediatric acupressure points with body diagrams.</p>
      <div style={{background:P.sageSoft,borderRadius:12,padding:"12px 16px",marginBottom:22}}>
        {["3 acupressure points for each of 9 common baby symptoms","Exact location, technique and body diagram for every point","Bilingual TCM terms with tap-to-learn tooltips","Weekly baby wellness tips from VitalBloom"].map((item,i)=>(
          <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:i<3?7:0}}>
            <span style={{color:P.sage,fontWeight:700,flexShrink:0,marginTop:1}}>{"✓"}</span>
            <span style={{fontSize:13,color:P.sage,lineHeight:1.5}}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",fontSize:12,fontWeight:700,color:P.textMid,marginBottom:5}}>Email address</label>
        <input type="email" placeholder="e.g. sarah@email.com" value={email}
          onChange={e=>setEmail(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter")handleSubmit();}}
          style={{width:"100%",padding:"12px 14px",borderRadius:12,border:"1.5px solid "+P.border,
            background:P.bg,fontSize:14,color:P.text,fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/>
      </div>
      <div onClick={()=>setConsent(!consent)} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:14,cursor:"pointer"}}>
        <div style={{width:20,height:20,borderRadius:6,flexShrink:0,marginTop:1,
          border:"2px solid "+(consent?P.sage:P.border),background:consent?P.sage:"transparent",
          display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}>
          {consent&&<span style={{color:"#fff",fontSize:12,lineHeight:1}}>{"✓"}</span>}
        </div>
        <p style={{margin:0,fontSize:12,color:P.textMid,lineHeight:1.6}}>I consent to VitalBloom Wellness collecting my email for baby wellness tips and updates, and to my data being stored as described in the <span onClick={e=>{e.stopPropagation();setShowPdpa(!showPdpa);}} style={{color:P.accent,textDecoration:"underline",cursor:"pointer"}}>Privacy Notice (PDPA)</span>. I can unsubscribe at any time.</p>
      </div>
      {showPdpa&&<div style={{background:P.bg,borderRadius:10,padding:"12px 14px",marginBottom:14,border:"1px solid "+P.border}}>
        <div style={{fontSize:10,fontWeight:800,letterSpacing:1,color:P.accent,textTransform:"uppercase",marginBottom:6}}>PDPA Privacy Notice</div>
        <p style={{margin:"0 0 5px",fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>Data Controller:</strong> VitalBloom Wellness, Singapore. DPO: Suzannah Khoo.</p>
        <p style={{margin:"0 0 5px",fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>Purpose:</strong> Weekly baby wellness tips and product updates from VitalBloom Wellness.</p>
        <p style={{margin:0,fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>Your Rights:</strong> Access, correct or delete your data. Contact @infantcarespecialist on Instagram.</p>
      </div>}
      {err&&<div style={{background:P.urgentBg,border:"1px solid "+P.urgent,borderRadius:10,padding:"10px 14px",marginBottom:14}}>
        <p style={{margin:0,fontSize:12,color:P.urgent,fontWeight:600}}>{err}</p>
      </div>}
      <button onClick={handleSubmit} disabled={submitted||checking}
        style={{width:"100%",padding:16,borderRadius:14,border:"none",
          background:submitted?P.sage:checking?"#CCCCCC":"linear-gradient(135deg,"+P.accent+","+P.sage+")",
          color:"#fff",fontSize:15,fontWeight:800,cursor:(submitted||checking)?"default":"pointer",
          boxShadow:"0 6px 20px rgba(176,120,104,0.25)",fontFamily:"inherit",letterSpacing:0.3,transition:"all 0.3s"}}>
        {submitted?"✓ Opening your tool…":checking?"Checking…":"🌸 Get Free Access"}
      </button>
      <p style={{margin:"12px 0 0",fontSize:11,color:P.textLight,textAlign:"center"}}>No spam. Unsubscribe any time. Protected under Singapore PDPA.</p>
    </div>
  );
}


export default function VitalBloomApp(){
  const[hasAccess,setHasAccess]=useState(false);
  const[symptom,setSymptom]=useState("");
  const[babyAge,setBabyAge]=useState("");
  const[points,setPoints]=useState(null);
  const[loading,setLoading]=useState(false);
  const[disclaimer,setDisclaimer]=useState(false);
  const[step,setStep]=useState(1);
  const[showPrivacy,setShowPrivacy]=useState(false);

  function showPoints(){
    if(!babyAge||!symptom)return;
    setLoading(true);
    setTimeout(()=>{setPoints(VP[symptom]||[]);setLoading(false);setStep(3);},600);
  }
  function reset(){setSymptom("");setBabyAge("");setPoints(null);setStep(1);}
  function goBack(){setPoints(null);setStep(2);}

  const alert=symptom?ALERTS[symptom]:null;
  const sym=SYMPTOMS.find(s=>s.id===symptom);

  return <div style={{minHeight:"100vh",background:P.bg,paddingBottom:60,fontFamily:"system-ui,sans-serif"}}>
    <div style={{background:"linear-gradient(160deg,#FFFFFF 0%,#F8F2EC 100%)",padding:"28px 24px 20px",textAlign:"center",borderBottom:`1px solid ${P.border}`,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-40,right:-40,width:130,height:130,borderRadius:"50%",background:"rgba(176,120,104,0.07)"}}/>
      <div style={{display:"flex",justifyContent:"center",marginBottom:6}}>
        <img src={`data:image/png;base64,${LOGO_B64}`} alt="VitalBloom Wellness" style={{height:80,width:"auto",objectFit:"contain"}}/>
      </div>
      <p style={{margin:"6px 0 2px",color:P.accent,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>Baby Acupressure Finder · 0–18 Months</p>
      <p style={{margin:"6px auto 0",color:P.textLight,fontSize:11,maxWidth:300,lineHeight:1.5}}>TCM paediatric tuina points with body diagrams</p>
    </div>

    <div style={{maxWidth:540,margin:"0 auto",padding:"0 18px"}}>
      {!hasAccess&&<div style={{marginTop:24}}><EmailGate onUnlock={()=>setHasAccess(true)}/></div>}

      {hasAccess&&<>
        <div style={{background:`linear-gradient(135deg,${P.accentSoft},${P.sageSoft})`,borderRadius:14,padding:"12px 18px",margin:"18px 0 14px",border:`1px solid ${P.border}`}}>
          <p style={{margin:0,fontSize:13,color:P.textMid,lineHeight:1.5}}>🌸 <strong style={{color:P.accent}}>Access granted.</strong> Select your baby's age and symptom to find the right acupressure points.</p>
        </div>

        <div style={{display:"flex",justifyContent:"center",gap:8,padding:"4px 0 16px"}}>
          {[1,2,3].map(s=><div key={s} style={{width:s<=step?26:10,height:8,borderRadius:6,background:s<=step?P.accent:P.border,transition:"all 0.4s"}}/>)}
        </div>

        {!disclaimer&&<div style={{background:P.card,border:`1px solid ${P.border}`,borderRadius:18,padding:"20px",marginBottom:14,boxShadow:"0 2px 12px rgba(42,30,26,0.05)"}}>
          <div style={{fontSize:20,marginBottom:8}}>🌸</div>
          <p style={{margin:"0 0 4px",fontSize:15,fontWeight:800,color:P.text}}>One quick note</p>
          <p style={{margin:"0 0 16px",fontSize:13,color:P.textMid,lineHeight:1.7}}>These TCM paediatric tuina techniques are for general supportive care only. They are <strong>not a substitute for medical advice.</strong> Always consult your doctor — especially for babies under 3 months or if symptoms are severe.</p>
          <button onClick={()=>setDisclaimer(true)} style={{background:`linear-gradient(135deg,${P.accent},#9A6858)`,color:"#fff",border:"none",borderRadius:12,padding:"12px 24px",cursor:"pointer",fontSize:13,fontWeight:800,fontFamily:"inherit",boxShadow:`0 4px 14px rgba(176,120,104,0.3)`}}>I Understand — Let's Begin</button>
        </div>}

        {disclaimer&&<>
          <div style={{background:P.card,borderRadius:18,padding:"20px",marginBottom:14,border:`1px solid ${P.border}`,boxShadow:"0 2px 10px rgba(42,30,26,0.05)"}}>
            <h2 style={{margin:"0 0 4px",fontSize:16,color:P.text,fontWeight:800}}>How old is your baby?</h2>
            <p style={{margin:"0 0 14px",fontSize:12,color:P.textLight}}>Age determines appropriate pressure level</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {AGE_OPTIONS.map(a=><button key={a} onClick={()=>{setBabyAge(a);if(step<2)setStep(2);}}
                style={{padding:"11px 8px",borderRadius:12,border:`1.5px solid ${babyAge===a?P.accent:P.border}`,
                  background:babyAge===a?P.accentSoft:P.bg,color:babyAge===a?P.accent:P.textMid,
                  fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>{a}</button>)}
            </div>
          </div>

          {step>=2&&<div style={{background:P.card,borderRadius:18,padding:"20px",marginBottom:14,border:`1px solid ${P.border}`,boxShadow:"0 2px 10px rgba(42,30,26,0.05)"}}>
            <h2 style={{margin:"0 0 4px",fontSize:16,color:P.text,fontWeight:800}}>What is your baby experiencing?</h2>
            <p style={{margin:"0 0 14px",fontSize:12,color:P.textLight}}>Select the closest symptom</p>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {SYMPTOMS.map(s=><button key={s.id} onClick={()=>{setSymptom(s.id);if(step<3)setStep(3);}}
                style={{padding:"12px 14px",borderRadius:12,border:`1.5px solid ${symptom===s.id?P.accent:P.border}`,
                  background:symptom===s.id?P.accentSoft:P.bg,fontWeight:600,fontSize:13,cursor:"pointer",
                  textAlign:"left",display:"flex",alignItems:"center",gap:12,fontFamily:"inherit"}}>
                <span style={{fontSize:20,flexShrink:0}}>{s.icon}</span>
                <span style={{flex:1}}>
                  <span style={{display:"block",fontWeight:700,color:symptom===s.id?P.text:P.textMid}}>{s.label}</span>
                  <span style={{fontSize:11,fontWeight:400,color:P.textLight}}>{s.sub}</span>
                </span>
              </button>)}
            </div>
          </div>}

          {alert&&<div style={{background:alert.level==="urgent"?P.urgentBg:P.cautionBg,border:`1px solid ${alert.level==="urgent"?P.urgent:P.caution}`,borderRadius:12,padding:"12px 16px",marginBottom:14}}>
            <p style={{margin:0,fontSize:12,color:alert.level==="urgent"?P.urgent:P.caution,lineHeight:1.7,fontWeight:600}}>{alert.msg}</p>
          </div>}

          {babyAge&&symptom&&!points&&!loading&&<button onClick={showPoints} style={{width:"100%",padding:18,borderRadius:16,border:"none",background:`linear-gradient(135deg,${P.accent},${P.sage})`,color:"#fff",fontSize:16,fontWeight:800,cursor:"pointer",boxShadow:`0 6px 20px rgba(176,120,104,0.25)`,marginBottom:14,fontFamily:"inherit",letterSpacing:0.3}}>
            🌸 Show Acupressure Points
          </button>}

          {loading&&<Spinner/>}

          {points&&<div>
            <div style={{background:`linear-gradient(135deg,${P.accentSoft},${P.sageSoft})`,borderRadius:14,padding:"14px 18px",marginBottom:16,border:`1px solid ${P.border}`}}>
              <p style={{margin:0,fontSize:13,color:P.textMid,lineHeight:1.6}}>
                🌸 3 TCM points for <strong style={{color:P.accent}}>{sym?.label}</strong> — <strong style={{color:P.accent}}>{babyAge}</strong> old. Tap each card for technique and body diagram.
              </p>
            </div>
            {points.map((p,i)=><PointCard key={i} point={p} index={i}/>)}
            <div style={{background:P.sageSoft,border:`1px solid ${P.sage}`,borderRadius:12,padding:"12px 16px",marginTop:4,marginBottom:10}}>
              <p style={{margin:0,fontSize:12,color:P.sage,lineHeight:1.7,fontWeight:600}}>🌿 <strong>Safe practice:</strong> Use the pad of your finger only — never a fingernail. Stop if baby shows any discomfort. Always consult your doctor for serious or persistent symptoms.</p>
            </div>
            <div style={{padding:"8px 16px",marginBottom:16,borderTop:`1px solid ${P.border}`}}>
              <p style={{margin:0,fontSize:10,color:P.textLight,lineHeight:1.5,textAlign:"center"}}>Source: {SRC}</p>
            </div>
            <div style={{display:"flex",gap:8}}><button onClick={goBack} style={{flex:1,padding:14,borderRadius:14,border:"none",background:P.accent,color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Different Symptom</button><button onClick={reset} style={{flex:1,padding:14,borderRadius:14,border:`1.5px solid ${P.border}`,background:"transparent",color:P.textMid,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Change Age</button></div>
            <div style={{textAlign:"center",marginTop:20,padding:20,background:P.card,borderRadius:16,border:`1px solid ${P.border}`,boxShadow:"0 2px 10px rgba(42,30,26,0.05)"}}>
              <img src={`data:image/png;base64,${LOGO_B64}`} alt="VitalBloom" style={{height:44,marginBottom:8,display:"block",margin:"0 auto 8px"}}/>
              <p style={{margin:"0 0 3px",fontSize:12,color:P.textLight}}>Want personalised wellness guidance?</p>
              <p style={{margin:0,fontSize:15,fontWeight:800,color:P.accent}}>Explore VitalBloom Wellness 🌸</p>
              <p style={{margin:"4px 0 0",fontSize:11,color:P.sage,fontWeight:700,letterSpacing:1,textTransform:"uppercase"}}>Holistic Wellness · TCM · Infant Care</p>
            </div>
          </div>}
        </>}
      </>}
    </div>
    <div style={{maxWidth:500,margin:"0 auto",textAlign:"center",padding:"20px 16px 8px",borderTop:`1px solid ${P.border}`,marginTop:20}}>
      <p style={{margin:"0 0 4px",fontSize:10,color:P.textLight,lineHeight:1.5}}>🔒 Protected under Singapore Personal Data Protection Act 2012 (PDPA)</p>
      <p style={{margin:"0 0 4px",fontSize:10,color:P.textLight,lineHeight:1.5}}>Email collected with your consent for wellness tips only.</p>
      <button onClick={()=>setShowPrivacy(!showPrivacy)} style={{background:"none",border:"none",color:P.accent,fontSize:10,fontWeight:700,cursor:"pointer",fontFamily:"inherit",textDecoration:"underline",padding:0}}>
        {showPrivacy?"Hide":"View"} Privacy Notice
      </button>
      {showPrivacy&&<div style={{textAlign:"left",background:P.bg,borderRadius:10,padding:"12px 14px",marginTop:8,border:`1px solid ${P.border}`}}>
        <p style={{margin:"0 0 5px",fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>Data Controller:</strong> VitalBloom Wellness, Singapore.</p>
        <p style={{margin:"0 0 5px",fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>Purpose:</strong> Email collected to deliver weekly baby wellness tips. Acupressure point data served locally — no health data transmitted.</p>
        <p style={{margin:"0 0 5px",fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>Third Parties:</strong> Email stored in our email service provider. No health data shared with third parties.</p>
        <p style={{margin:"0 0 5px",fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>Your Rights:</strong> Access, correct, or withdraw consent at any time. Contact our DPO via Instagram @vitalbloomwellness.</p>
        <p style={{margin:0,fontSize:10,color:P.textMid,lineHeight:1.6}}><strong>DPO:</strong> Suzannah Khoo, VitalBloom Wellness.</p>
      </div>}
      <p style={{margin:"8px 0 0",fontSize:9,color:P.textLight}}>© {new Date().getFullYear()} VitalBloom Wellness. All rights reserved.</p>
    </div>
  </div>;
}
