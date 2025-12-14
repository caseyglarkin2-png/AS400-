import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Cpu, 
  Database, 
  ArrowRight, 
  ShieldAlert, 
  TrendingUp, 
  Globe, 
  Lock,
  Menu,
  X,
  Zap,
  CheckCircle,
  Briefcase,
  PenTool,
  DollarSign,
  Truck,
  Wifi,
  Users,
  Map,
  Anchor,
  ZapOff
} from 'lucide-react';

/**
 * TRIGENT V3: LEGACY-MODERN CONVERGENCE PROTOTYPE
 * * Design System (BRIGHTER MODE):
 * - Primary (Legacy): #00FF41 (High-Vis Phosphor Green)
 * - Background: #121212 (Lighter Dark) with Radial Gradients
 * - Secondary (Warning): #FFD600 (Bright Amber)
 * - Accent (Modern): #00F0FF (Electric Cyan)
 * - Text: Higher contrast whites and light grays
 */

// --- STYLES COMPONENT (Loads first to ensure visibility) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;600;700&display=swap');
    
    .font-mono { font-family: 'IBM Plex Mono', monospace; }
    .font-sans { font-family: 'Inter', sans-serif; }
    
    /* Scrollbar */
    .custom-scrollbar::-webkit-scrollbar { width: 8px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #222; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #00FF41; }
    
    /* Animations */
    @keyframes flicker {
      0% { opacity: 0.05; }
      5% { opacity: 0.1; }
      10% { opacity: 0.05; }
      100% { opacity: 0.05; }
    }
    .animate-flicker { animation: flicker 4s infinite; }
    
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-slideUp { animation: slideUp 0.3s ease-out forwards; }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }

    .text-shadow-neon { text-shadow: 0 0 15px rgba(0, 255, 65, 0.6); }
    .text-shadow-cyan { text-shadow: 0 0 15px rgba(0, 240, 255, 0.6); }
    
    .glow-box { box-shadow: 0 0 20px rgba(0, 255, 65, 0.1); }
    .glow-box-cyan { box-shadow: 0 0 20px rgba(0, 240, 255, 0.1); }
    
    /* CRT Lines Background - Slightly brighter/sharper */
    .crt-lines {
      background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.1) 50%), linear-gradient(90deg, rgba(255,0,0,0.03), rgba(0,255,0,0.01), rgba(0,0,255,0.03));
      background-size: 100% 4px, 3px 100%;
    }
  `}</style>
);

// --- COMPONENTS ---

// 1. GLOBAL CRT OVERLAY
const CrtOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden h-full w-full">
    <div className="absolute inset-0 crt-lines pointer-events-none opacity-40" />
    {/* Slightly brighter vignette for better readability */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(20,20,20,0)_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
  </div>
);

// 2. DISPATCH RADIO PLAYER (AUDIO FIX)
const DispatchRadio = () => {
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(false);
  const [bars, setBars] = useState(Array(12).fill(10));
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 60 + 20)); // Higher energy bars
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const toggleTransmission = () => {
    const newState = !isTransmissionOpen;
    setIsTransmissionOpen(newState);
    if (newState) {
      setStreamActive(true);
    } else {
      setTimeout(() => setStreamActive(false), 300); // Delay unmount for animation
    }
  };

  return (
    <>
      {/* HOLOGRAPHIC TRANSMISSION WINDOW */}
      {isTransmissionOpen && (
        <div className="fixed bottom-28 right-4 md:right-8 z-[60] animate-slideUp">
          <div className="bg-[#111] border-2 border-[#00FF41] rounded-lg shadow-[0_0_40px_rgba(0,255,65,0.3)] overflow-hidden w-[320px] md:w-[480px]">
            <div className="bg-[#00FF41] text-black px-3 py-2 font-mono text-xs font-bold flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Wifi size={14} className="animate-pulse" />
                INCOMING SECURE STREAM
              </span>
              <button onClick={toggleTransmission} className="hover:bg-black/20 p-1 rounded transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="relative pt-[56.25%] bg-black group">
               {streamActive && (
                <iframe 
                  src="https://drive.google.com/file/d/1ix7eQgVjZ7vAS7ZMbk2C6VyIbb48DeW9/preview?autoplay=1" 
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  title="Trigent Synopsis"
                ></iframe>
               )}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-2 border-t border-[#333] flex justify-between items-center text-[10px] font-mono text-[#00FF41] bg-[#0a0a0a]">
              <span>ENCRYPTION: AES-256</span>
              <span className="animate-pulse font-bold">RECEIVING DATA...</span>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER CONTROLLER */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-[#111] border-t-2 border-[#333] flex items-center px-4 md:px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-[50] font-mono backdrop-blur-sm bg-opacity-95">
        <div className="flex items-center gap-6 w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="text-[10px] text-gray-400 tracking-widest uppercase font-bold">Channel</div>
            <button 
              onClick={toggleTransmission}
              className={`w-12 h-16 bg-[#222] rounded border-2 relative shadow-lg transition-all hover:scale-105 active:scale-95 ${isTransmissionOpen ? 'border-[#00FF41] shadow-[0_0_15px_rgba(0,255,65,0.4)]' : 'border-[#555]'}`}
            >
              <div className={`absolute left-1 right-1 h-6 rounded-sm transition-all duration-200 border-t border-white/20 ${isTransmissionOpen ? 'top-1 bg-[#00FF41] shadow-[0_0_10px_#00FF41]' : 'bottom-1 bg-[#444]'}`}></div>
            </button>
          </div>

          <div className="flex-1 bg-black border border-[#444] rounded p-3 h-16 flex items-center justify-between relative overflow-hidden group hover:border-[#666] transition-colors">
            <div className="absolute inset-0 bg-[#00FF41] opacity-[0.03] pointer-events-none" />
            <div className="flex flex-col z-10 overflow-hidden pl-2">
              <span className="text-[10px] text-[#00FF41] font-bold opacity-90">FREQ: 98.4 MHZ // TRIGENT DISPATCH</span>
              <div className="text-white font-bold tracking-wider truncate text-sm md:text-base flex items-center gap-2">
                {isTransmissionOpen ? <><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/> LIVE SIGNAL ESTABLISHED</> : "TOGGLE CHANNEL TO LISTEN"}
              </div>
            </div>
            <div className="flex gap-1 items-end h-full ml-4 pr-2">
              {bars.map((height, i) => (
                <div 
                  key={i} 
                  className={`w-1 md:w-2 rounded-t-sm transition-all duration-75 ${isTransmissionOpen ? 'bg-[#00FF41] shadow-[0_0_5px_#00FF41]' : 'bg-[#333]'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 3. EDI TRANSLATOR
const EdiTranslator = () => {
  const [transformed, setTransformed] = useState(false);
  const [highlightedSegment, setHighlightedSegment] = useState(null);

  const EdiLine = ({ text, highlightKey }) => (
    <div className={`font-mono text-xs md:text-sm leading-relaxed transition-all duration-300 ${highlightedSegment === highlightKey ? 'bg-[#00FF41] text-black font-bold px-1 rounded shadow-[0_0_10px_#00FF41]' : 'text-[#00FF41] opacity-90 hover:opacity-100'}`}>
      {text}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-[#333] bg-[#0a0a0a] h-[550px] overflow-hidden rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      <div className="p-6 bg-[#111] border-r border-[#333] relative overflow-y-auto custom-scrollbar">
        <div className="absolute top-4 right-4 text-[#00FF41] text-[10px] font-bold border border-[#00FF41] px-2 py-1 rounded bg-[#00FF41]/10 backdrop-blur-sm">SYSTEM OF RECORD (EDI 204)</div>
        <div className="space-y-1 mt-8">
          <EdiLine text="ISA*00* *00* *ZZ*SENDERID..." highlightKey="header" />
          <EdiLine text="GS*SM*SENDERID*RECEIVERID..." highlightKey="header" />
          <EdiLine text="ST*204*0001~" highlightKey="header" />
          <EdiLine text="B2**SCAC**123456**PP~" highlightKey="id" />
          <EdiLine text="N1*SH*SHIPPER NAME*93*12345~" highlightKey="shipper" />
          <EdiLine text="N1*CN*CONSIGNEE NAME*93*67890~" highlightKey="consignee" />
          <EdiLine text="L11*ORDER123*SI~" highlightKey="ref" />
          <div className="animate-pulse text-[#00FF41] font-bold">_</div>
        </div>
        {!transformed && (
          <div className="absolute bottom-8 left-8 right-8">
            <button 
              onClick={() => setTransformed(true)}
              className="w-full bg-[#00FF41] text-black font-bold font-mono py-4 rounded hover:bg-[#00CC33] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all flex items-center justify-center gap-2 group text-base"
            >
              <Cpu className="w-5 h-5" />
              INITIATE AXLR8 TRANSLATION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
      <div className="p-6 bg-[#161616] relative overflow-y-auto custom-scrollbar">
        <div className="absolute top-4 right-4 text-[#00F0FF] text-[10px] font-bold border border-[#00F0FF] px-2 py-1 rounded bg-[#00F0FF]/10 backdrop-blur-sm">SYSTEM OF ENGAGEMENT (REST API)</div>
        {transformed ? (
          <div className="mt-8 font-mono text-xs md:text-sm text-gray-200">
            <span className="text-gray-500">{`{`}</span>
            <div className="pl-4 group cursor-pointer hover:bg-white/5 p-0.5 rounded transition-colors" onMouseEnter={() => setHighlightedSegment('id')} onMouseLeave={() => setHighlightedSegment(null)}>
              <span className="text-[#00F0FF]">"shipmentId"</span>: <span className="text-[#FFD600] font-bold">"123456"</span>,
            </div>
            <div className="pl-4">
              <span className="text-[#00F0FF]">"parties"</span>: [
            </div>
            <div className="pl-8 group cursor-pointer hover:bg-white/5 p-0.5 rounded transition-colors" onMouseEnter={() => setHighlightedSegment('shipper')} onMouseLeave={() => setHighlightedSegment(null)}>
              {`{ "type": "Shipper", "name": "SHIPPER NAME" },`}
            </div>
            <div className="pl-8 group cursor-pointer hover:bg-white/5 p-0.5 rounded transition-colors" onMouseEnter={() => setHighlightedSegment('consignee')} onMouseLeave={() => setHighlightedSegment(null)}>
              {`{ "type": "Consignee", "name": "CONSIGNEE NAME" }`}
            </div>
            <div className="pl-4">],</div>
            <div className="pl-4 group cursor-pointer hover:bg-white/5 p-0.5 rounded transition-colors" onMouseEnter={() => setHighlightedSegment('ref')} onMouseLeave={() => setHighlightedSegment(null)}>
              <span className="text-[#00F0FF]">"referenceNumbers"</span>: {`{ "orderId": "ORDER123" }`}
            </div>
            <span className="text-gray-500">{`}`}</span>
            <div className="mt-8 p-4 bg-[#00F0FF]/10 border border-[#00F0FF] rounded text-[#00F0FF] text-xs flex items-center gap-3 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <Activity className="w-5 h-5 animate-pulse" />
              <span className="font-bold tracking-wide">LIVE API CONNECTION ESTABLISHED</span>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
            <Lock className="w-16 h-16 text-gray-400 mb-6" />
            <div className="font-mono text-gray-400 tracking-wider">WAITING FOR DATA STREAM...</div>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. LOGO SELECTOR
const LogoSelector = () => {
  const [selected, setSelected] = useState(0);

  const options = [
    {
      id: 0,
      name: "The Connector",
      description: "Code-inspired dot notation. Minimal, modern, bridging entities.",
      render: () => (
        <div className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
          Trigent<span className="text-[#00F0FF] animate-pulse">.</span>Logistics
        </div>
      )
    },
    {
      id: 1,
      name: "The Terminal",
      description: "Bracketed structure referencing legacy arrays and stability.",
      render: () => (
        <div className="text-3xl md:text-5xl font-mono tracking-widest text-[#00FF41]">
          [TRIGENT]
        </div>
      )
    },
    {
      id: 2,
      name: "The Accelerator",
      description: "Forward velocity slashes indicating speed and transformation.",
      render: () => (
        <div className="text-3xl md:text-5xl font-bold italic tracking-tighter text-white flex items-center gap-2">
          TRIGENT <span className="text-[#FFD600] not-italic text-4xl">{'///'}</span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-6 border-l-4 border-[#00F0FF] pl-6 bg-gradient-to-r from-[#00F0FF]/10 to-transparent py-2">
        <h2 className="text-3xl font-bold text-white mb-2">VISUAL IDENTITY PROTOCOLS</h2>
        <p className="text-gray-300 max-w-2xl font-light">
          Agency requires optionality. Select a visual directive below to preview the future of the brand.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {options.map((opt, idx) => (
          <div 
            key={idx}
            onClick={() => setSelected(idx)}
            className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 relative group overflow-hidden ${selected === idx ? 'bg-[#1a1a1a] border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)] scale-[1.02]' : 'bg-[#151515] border-[#333] hover:border-gray-500 hover:bg-[#1a1a1a]'}`}
          >
            <div className="absolute top-3 right-3">
              {selected === idx ? <CheckCircle className="text-[#00F0FF] w-6 h-6 drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" /> : <div className="w-6 h-6 rounded-full border-2 border-[#444]" />}
            </div>
            
            <div className="h-40 flex items-center justify-center border-b border-[#333] mb-5 bg-black/40 rounded-t-lg">
              {opt.render()}
            </div>
            
            <h3 className={`font-mono font-bold mb-2 text-lg ${selected === idx ? 'text-[#00F0FF]' : 'text-gray-200'}`}>
              OPT_0{idx + 1}: {opt.name.toUpperCase()}
            </h3>
            <p className="text-sm text-gray-400 font-mono leading-relaxed">
              {opt.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 border border-dashed border-[#555] rounded-lg bg-[#111] flex items-center justify-between shadow-lg">
        <div className="font-mono text-sm text-gray-400">SELECTION STATUS:</div>
        <div className="font-mono text-[#00F0FF] font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
          {options[selected].name.toUpperCase()} ACTIVE
        </div>
      </div>
    </div>
  );
};

// 5. PRICING MODULE (UPDATED WITH V3 SYNTHESIS)
const PricingModule = () => {
  const [isBundled, setIsBundled] = useState(true);

  // Prices
  const prices = {
    p1: { stand: 111500, bundle: 75000 },
    p2: { stand: 58000, bundle: 15000 },
    p3: { stand: 294000, bundle: 144000 } // Monthly x 12
  };

  const totalStand = prices.p1.stand + prices.p2.stand + prices.p3.stand;
  const totalBundle = prices.p1.bundle + prices.p2.bundle + prices.p3.bundle;
  const savings = totalStand - totalBundle;

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* HEADER WITH SLOGAN */}
      <div className="relative bg-[#151515] border border-[#333] p-10 rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Truck size={240} className="text-[#00FF41]" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
             <span className="bg-[#FFD600] text-black text-xs font-bold px-2 py-1 rounded font-mono shadow-[0_0_10px_#FFD600]">CONFIDENTIAL</span>
             <span className="text-[#FFD600] text-xs font-mono tracking-widest font-bold">MISSION DIRECTIVE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 italic uppercase tracking-tight">
            Let The Truckers <span className="text-[#00FF41] text-shadow-neon">Truck</span>
          </h2>
          <p className="text-gray-300 max-w-2xl font-mono text-sm md:text-base border-l-4 border-[#00FF41] pl-6 leading-relaxed">
            Legacy systems shouldn't stop wheels from turning. Our proposal is designed to clear the technical debris so you can get straight to running.
          </p>
        </div>
      </div>

      {/* TOGGLE */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#222] p-1.5 rounded-xl border border-[#444] flex relative shadow-lg">
          <button 
            onClick={() => setIsBundled(false)}
            className={`px-8 py-3 rounded-lg text-sm font-mono transition-all duration-300 ${!isBundled ? 'bg-[#333] text-white shadow-md border border-gray-600' : 'text-gray-500 hover:text-gray-300'}`}
          >
            FRAGMENTED (A LA CARTE)
          </button>
          <button 
            onClick={() => setIsBundled(true)}
            className={`px-8 py-3 rounded-lg text-sm font-mono transition-all duration-300 flex items-center gap-2 ${isBundled ? 'bg-[#00FF41] text-black font-bold shadow-[0_0_20px_rgba(0,255,65,0.4)] transform scale-105' : 'text-gray-500 hover:text-gray-300'}`}
          >
            VELOCITY PROTOCOL (BUNDLED)
          </button>
        </div>
      </div>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* PHASE 1: THE FOUNDATION */}
        <div className={`p-8 rounded-xl border-2 transition-all duration-500 flex flex-col relative overflow-hidden ${isBundled ? 'bg-[#1a1a1a]/50 border-[#333] opacity-60 scale-95' : 'bg-[#1a1a1a] border-[#FFD600] shadow-[0_0_25px_rgba(255,214,0,0.15)] scale-100'}`}>
          <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
            <PenTool size={24} />
            <h3 className="font-mono font-bold uppercase text-lg">Phase 1: The Foundation</h3>
          </div>
          <div className="text-[10px] font-mono text-gray-400 mb-6 bg-black/40 p-2 rounded border border-white/5 text-center tracking-widest">
            NARRATIVE PIVOT & REBRAND
          </div>
          <ul className="text-xs text-gray-400 font-mono space-y-4 flex-grow mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span> 
              <span><strong className="text-white">The 61% Reality:</strong> Shift messaging from "Global Capabilities" to "Technical Debt Amortization".</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">Visual Identity:</strong> Rebrand for "Domestic Competitiveness" vs. Global Elite.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">Sales Enablement:</strong> "Adaptive Logistics" White Paper & Challenger Pitch Deck.</span>
            </li>
          </ul>
          <div className="border-t border-[#444] pt-6 mt-auto">
            <div className="text-[10px] text-gray-500 uppercase mb-1 font-bold tracking-wider">Weeks 1-8</div>
            <div className={`text-3xl font-mono font-bold transition-all duration-500 ${isBundled ? 'text-gray-600 line-through decoration-[#EF4444] decoration-2' : 'text-white'}`}>
              {formatCurrency(111500)}
            </div>
            {isBundled && <div className="text-[#00FF41] font-mono font-bold text-2xl mt-1 text-shadow-neon">{formatCurrency(75000)}</div>}
          </div>
        </div>

        {/* PHASE 2: THE MOMENT */}
        <div className={`p-8 rounded-xl border-2 transition-all duration-500 flex flex-col relative overflow-hidden ${isBundled ? 'bg-[#1a1a1a]/50 border-[#333] opacity-60 scale-95' : 'bg-[#1a1a1a] border-[#FFD600] shadow-[0_0_25px_rgba(255,214,0,0.15)] scale-100'}`}>
          <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
            <Users size={24} />
            <h3 className="font-mono font-bold uppercase text-lg">Phase 2: The Moment</h3>
          </div>
          <div className="text-[10px] font-mono text-gray-400 mb-6 bg-black/40 p-2 rounded border border-white/5 text-center tracking-widest">
            MANIFEST 2026 DOMINATION
          </div>
          <ul className="text-xs text-gray-400 font-mono space-y-4 flex-grow mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">Challenger Roundtable:</strong> "Bridging the Gap" session for 15-20 target CTOs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">Legacy Dinner:</strong> Private "Chatham House Rule" event at Smith & Wollensky.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">Partner Ecosystem:</strong> Co-positioning with Project44 & Exotec as "Integration Paramedics".</span>
            </li>
          </ul>
          <div className="border-t border-[#444] pt-6 mt-auto">
            <div className="text-[10px] text-gray-500 uppercase mb-1 font-bold tracking-wider">Weeks 6-12</div>
            <div className={`text-3xl font-mono font-bold transition-all duration-500 ${isBundled ? 'text-gray-600 line-through decoration-[#EF4444] decoration-2' : 'text-white'}`}>
              {formatCurrency(58000)}
            </div>
            {isBundled && <div className="text-[#00FF41] font-mono font-bold text-2xl mt-1 text-shadow-neon">{formatCurrency(15000)}</div>}
          </div>
        </div>

        {/* PHASE 3: THE MOMENTUM */}
        <div className={`p-8 rounded-xl border-2 transition-all duration-500 flex flex-col relative overflow-hidden ${isBundled ? 'bg-[#1a1a1a]/50 border-[#333] opacity-60 scale-95' : 'bg-[#1a1a1a] border-[#FFD600] shadow-[0_0_25px_rgba(255,214,0,0.15)] scale-100'}`}>
          <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
            <TrendingUp size={24} />
            <h3 className="font-mono font-bold uppercase text-lg">Phase 3: The Momentum</h3>
          </div>
          <div className="text-[10px] font-mono text-gray-400 mb-6 bg-black/40 p-2 rounded border border-white/5 text-center tracking-widest">
            ONGOING STRATEGIC PARTNERSHIP
          </div>
          <ul className="text-xs text-gray-400 font-mono space-y-4 flex-grow mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">"Connector" Strategy:</strong> Selling 90-day fixed-price API accelerators.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">Technical Audit:</strong> Deep dive from "Fixing Pipes" (API) to "Building Brains" (Agentic AI).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD600] font-bold text-lg leading-none">›</span>
              <span><strong className="text-white">Dual-GCC Expansion:</strong> Leveraging US wins to capture International/Middle East revenue.</span>
            </li>
          </ul>
          <div className="border-t border-[#444] pt-6 mt-auto">
            <div className="text-[10px] text-gray-500 uppercase mb-1 font-bold tracking-wider">Monthly Cost</div>
            <div className={`text-3xl font-mono font-bold transition-all duration-500 ${isBundled ? 'text-gray-600 line-through decoration-[#EF4444] decoration-2' : 'text-white'}`}>
              {formatCurrency(24500)}<span className="text-sm text-gray-600">/mo</span>
            </div>
            {isBundled && <div className="text-[#00FF41] font-mono font-bold text-2xl mt-1 text-shadow-neon">{formatCurrency(12000)}<span className="text-sm text-[#00FF41]/70">/mo</span></div>}
          </div>
        </div>
      </div>

      {/* TOTALS BAR */}
      <div className={`mt-10 border-2 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between transition-all duration-500 shadow-2xl relative overflow-hidden ${isBundled ? 'border-[#00FF41] bg-[#00FF41]/10' : 'border-[#333] bg-[#1a1a1a]'}`}>
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
        
        <div className="mb-6 md:mb-0 relative z-10">
           <h4 className="font-mono text-sm text-gray-300 uppercase tracking-widest mb-2 font-bold">Estimated Annual Investment</h4>
           <div className="text-xs text-gray-400">Includes all one-time fees + 12 months retainer</div>
        </div>

        <div className="flex items-center gap-12 relative z-10">
          {!isBundled && (
             <div className="text-right">
                <div className="text-xs text-[#EF4444] font-bold uppercase mb-1 tracking-wider">Inefficient Route</div>
                <div className="text-4xl font-mono font-bold text-white">{formatCurrency(totalStand)}</div>
             </div>
          )}

          {isBundled && (
            <>
               <div className="text-right hidden md:block opacity-60">
                  <div className="text-xs text-gray-400 uppercase mb-1 font-bold">Standard Cost</div>
                  <div className="text-2xl font-mono font-bold text-gray-500 line-through decoration-[#EF4444] decoration-2">{formatCurrency(totalStand)}</div>
               </div>
               
               <div className="h-12 w-px bg-[#444] hidden md:block"></div>

               <div className="text-right">
                  <div className="text-xs text-[#00FF41] font-bold uppercase mb-1 tracking-wider">Optimized Bundle</div>
                  <div className="text-5xl font-mono font-bold text-white text-shadow-neon">{formatCurrency(totalBundle)}</div>
               </div>
            </>
          )}
        </div>
      </div>

      {isBundled && (
        <div className="flex justify-center animate-pulse mt-6">
          <div className="bg-[#00FF41] text-black font-bold font-mono px-6 py-2 rounded-full text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.6)]">
            <TrendingUp size={18} />
            TOTAL EFFICIENCY GAIN: {formatCurrency(savings)}
          </div>
        </div>
      )}

    </div>
  );
};


// MAIN APP COMPONENT
const App = () => {
  const [bootSequence, setBootSequence] = useState(true);
  const [activeTab, setActiveTab] = useState('vision');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 2500); // Speed up boot slightly for UX
    return () => clearTimeout(timer);
  }, []);

  if (bootSequence) {
    return (
      <>
        <GlobalStyles />
        <div className="min-h-screen bg-[#111] text-[#00FF41] font-mono p-8 flex flex-col justify-end pb-32 relative">
          <CrtOverlay />
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 bg-[#00FF41] rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-[#00FF41] rounded-full animate-bounce delay-75"></div>
                <div className="w-4 h-4 bg-[#00FF41] rounded-full animate-bounce delay-150"></div>
            </div>
            <p className="text-lg">TRIGENT_OS_V3.0 LOAD SEQUENCE...</p>
            <div className="w-full bg-[#333] h-1 mt-4 mb-4 rounded-full overflow-hidden">
                <div className="h-full bg-[#00FF41] animate-[width_2s_ease-out_forwards] w-full origin-left"></div>
            </div>
            <p className="opacity-80 text-sm">LOADING ASSETS... OK</p>
            <p className="opacity-80 text-sm">CALCULATING VELOCITY BUNDLE... OK</p>
            <p className="opacity-80 text-sm text-[#00F0FF]">INITIALIZING VISUAL PROTOCOLS... OK</p>
            <br/>
            <p className="animate-pulse">_</p>
            
            <button 
              onClick={() => setBootSequence(false)}
              className="mt-8 text-xs text-gray-500 hover:text-white underline cursor-pointer"
            >
              [SKIP SEQUENCE]
            </button>
          </div>
        </div>
      </>
    );
  }

  const NavItem = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => {
        setActiveTab(id);
        setMobileMenuOpen(false);
      }}
      className={`w-full text-left px-4 py-3 font-mono text-sm flex items-center gap-3 transition-all border-l-2 rounded-r-lg mb-1 ${activeTab === id ? 'bg-gradient-to-r from-[#00FF41]/20 to-transparent border-[#00FF41] text-[#00FF41] font-bold' : 'border-transparent text-gray-400 hover:text-gray-100 hover:bg-white/5'}`}
    >
      <Icon size={18} className={activeTab === id ? "text-[#00FF41]" : "text-gray-500"} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 font-sans selection:bg-[#00FF41] selection:text-black overflow-x-hidden pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#121212] to-black">
      <GlobalStyles />
      <CrtOverlay />

      <header className="border-b border-[#333] bg-[#111]/90 backdrop-blur-md sticky top-0 z-40 shadow-lg">
        <div className="flex items-center justify-between p-4 px-6 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#00FF41] animate-pulse rounded-full shadow-[0_0_15px_#00FF41]" />
            <h1 className="font-mono font-bold text-2xl tracking-tighter text-white">TRIGENT <span className="text-[#00FF41] text-shadow-neon">V3</span></h1>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-gray-400">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#00FF41] rounded-full"></div> SYS: ONLINE</span>
            <span className="text-[#00FF41] font-bold border border-[#00FF41]/30 px-2 py-0.5 rounded bg-[#00FF41]/5">SECURE CONNECTION</span>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row h-full max-w-[1600px] mx-auto">
        <aside className={`fixed md:sticky top-16 left-0 w-full md:w-72 bg-[#111] border-r border-[#333] h-[calc(100vh-4rem)] z-30 transition-transform duration-300 shadow-xl ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="p-6">
            <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider font-bold">Strategic Modules</div>
            <nav className="space-y-1">
              <NavItem id="vision" label="Executive Vision" icon={Globe} />
              <NavItem id="gap" label="The 61% Reality" icon={TrendingUp} />
              <NavItem id="tech" label="EDI-to-API Bridge" icon={Cpu} />
              <NavItem id="identity" label="Identity Protocols" icon={PenTool} />
              <NavItem id="proposal" label="Velocity Blueprint" icon={Briefcase} />
            </nav>
            <div className="mt-12 p-5 border border-[#333] rounded-xl bg-[#0a0a0a] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00FF41] opacity-5 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <div className="text-[10px] text-gray-500 mb-2 font-bold tracking-widest uppercase">Upcoming Event</div>
              <div className="text-[#00FF41] font-mono font-bold text-lg mb-1">MANIFEST 2026</div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <Map size={12} /> Feb 9-11 • Las Vegas
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto pb-40">
          
          {activeTab === 'vision' && (
            <div className="space-y-16 animate-fadeIn">
              
              {/* INTRO HERO */}
              <div className="border-l-4 border-[#00FF41] pl-8 py-2 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00FF41]/5 to-transparent pointer-events-none -z-10"></div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  THE CONVERGENCE OF <br/>
                  <span className="text-[#00FF41] font-mono text-shadow-neon">NOSTALGIA</span> AND <span className="text-[#00F0FF] font-mono text-shadow-cyan">VELOCITY</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
                  The path to the future does not require the destruction of the past. It requires a sophisticated bridging of "Legacy Debt" and "Agentic AI".
                </p>
              </div>

              {/* TWO SPEED SYSTEM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#333] hover:border-[#00FF41] transition-colors group shadow-lg">
                  <div className="w-12 h-12 bg-[#00FF41]/10 rounded-lg flex items-center justify-center mb-6 text-[#00FF41] group-hover:bg-[#00FF41] group-hover:text-black transition-colors">
                    <Database size={24} />
                  </div>
                  <h3 className="font-mono text-[#00FF41] text-sm mb-4 font-bold tracking-widest">SPEED 1: THE CORE</h3>
                  <p className="text-gray-300 text-lg mb-6 font-light">Optimized for stability. The "System of Record".</p>
                  <div className="font-mono text-xs bg-black p-4 rounded border border-[#333] text-[#00FF41] opacity-80 group-hover:opacity-100 transition-opacity">
                    AS/400 • ORACLE • EDI • MAINFRAME
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#333] hover:border-[#00F0FF] transition-colors group shadow-lg">
                  <div className="w-12 h-12 bg-[#00F0FF]/10 rounded-lg flex items-center justify-center mb-6 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-mono text-[#00F0FF] text-sm mb-4 font-bold tracking-widest">SPEED 2: THE EDGE</h3>
                  <p className="text-gray-300 text-lg mb-6 font-light">Optimized for adaptability. The "System of Engagement".</p>
                  <div className="font-mono text-xs bg-black p-4 rounded border border-[#333] text-[#00F0FF] opacity-80 group-hover:opacity-100 transition-opacity">
                    REACT • AI AGENTS • API • CLOUD
                  </div>
                </div>
              </div>

              {/* NEW SECTION: THE GREAT BIFURCATION */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                   <div className="h-px bg-gray-600 flex-1"></div>
                   <h3 className="text-gray-400 font-mono text-sm tracking-widest uppercase font-bold">Strategic Analysis: The Great Bifurcation</h3>
                   <div className="h-px bg-gray-600 flex-1"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#333] rounded-2xl overflow-hidden shadow-2xl">
                    {/* LEFT: US MARKET */}
                    <div className="bg-[#151515] p-10 border-b md:border-b-0 md:border-r border-[#333] relative">
                        <div className="absolute top-4 left-4 text-[#FFD600] font-mono text-xs font-bold bg-[#FFD600]/10 px-2 py-1 rounded">BROWNFIELD REALITY</div>
                        <h4 className="text-3xl font-bold text-white mb-2 mt-6">US Domestic Market</h4>
                        <div className="text-gray-400 font-mono text-sm mb-6">"THE VELOCITY OPPORTUNITY"</div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                            Characterized by 20-30 year old infrastructure and immediate, acute pain points. Companies here don't need a futuristic city; they need to fix their rating engine in 90 days.
                        </p>
                        
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <ShieldAlert size={16} className="text-[#FFD600]" /> High Technical Debt
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <DollarSign size={16} className="text-[#FFD600]" /> Fast Sales Cycles (3-6 mo)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Zap size={16} className="text-[#FFD600]" /> Needs: Accelerators & Fixes
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT: GCC MARKET */}
                    <div className="bg-[#0f0f0f] p-10 relative">
                        <div className="absolute top-4 left-4 text-[#00F0FF] font-mono text-xs font-bold bg-[#00F0FF]/10 px-2 py-1 rounded">GREENFIELD AMBITION</div>
                        <h4 className="text-3xl font-bold text-white mb-2 mt-6">GCC Region</h4>
                        <div className="text-gray-400 font-mono text-sm mb-6">"THE VISION OPPORTUNITY"</div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                            Defined by "Logistics 4.0" mega-projects built from the sand up. High value, sovereign wealth backed, but slow moving government cycles.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Anchor size={16} className="text-[#00F0FF]" /> Sovereign AI Mandates
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Users size={16} className="text-[#00F0FF]" /> Long Sales Cycles (12-24 mo)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Globe size={16} className="text-[#00F0FF]" /> Needs: Relationship & Presence
                            </li>
                        </ul>
                    </div>
                </div>
              </div>

              {/* FINAL RECOMMENDATION */}
              <div className="bg-gradient-to-r from-[#00FF41]/10 to-transparent p-1 rounded-2xl">
                  <div className="bg-[#121212] rounded-xl p-8 border border-[#00FF41]/30">
                      <h3 className="text-[#00FF41] font-mono font-bold text-lg mb-4 flex items-center gap-2">
                        <ArrowRight size={20} /> THE STRATEGIC RECOMMENDATION: "US-FIRST PIVOT"
                      </h3>
                      <p className="text-gray-300 leading-relaxed max-w-4xl">
                        Trigent's "Accelerator" model is designed for speed, making it a perfect fit for the US mid-market's need for quick wins. We propose a "Technical Debt Amortization" strategy: selling immediate relief to domestic challengers while using those wins to build the credentials for long-term GCC relationships.
                      </p>
                  </div>
              </div>

            </div>
          )}

          {activeTab === 'gap' && (
            <div className="space-y-12 animate-fadeIn">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">THE MODERNIZATION GAP</h2>
                <p className="text-xl text-gray-300 max-w-3xl font-light">While 88% of carriers cite AI as a top priority, 61% are trapped in legacy systems. This is not just a statistic; it's a <span className="text-[#EF4444]">market failure</span>.</p>
              </div>
              
              <div className="bg-[#151515] p-10 rounded-2xl border border-[#333] relative overflow-hidden shadow-2xl">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
                  <div className="group">
                    <div className="text-7xl font-mono font-bold text-[#FFD600] mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,214,0,0.5)]">61%</div>
                    <div className="text-sm text-gray-400 font-mono uppercase tracking-widest font-bold">Trapped in Legacy</div>
                    <div className="text-xs text-gray-500 mt-2">Cannot adopt AI due to infrastructure</div>
                  </div>
                  <div className="group">
                    <div className="text-7xl font-mono font-bold text-[#00FF41] mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">88%</div>
                    <div className="text-sm text-gray-400 font-mono uppercase tracking-widest font-bold">Prioritize AI</div>
                    <div className="text-xs text-gray-500 mt-2">Universal demand for automation</div>
                  </div>
                  <div className="group">
                    <div className="text-7xl font-mono font-bold text-[#00F0FF] mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">27<span className="text-4xl align-top pt-2">%</span></div>
                    <div className="text-sm text-gray-400 font-mono uppercase tracking-widest font-bold">The Opportunity Gap</div>
                    <div className="text-xs text-gray-500 mt-2">Immediate addressable market</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333]">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                          <ZapOff className="text-gray-500" /> The Consequence
                      </h4>
                      <p className="text-sm text-gray-400">
                          "Swivel Chair Integration" — hiring staff to manually type data from one screen to another. This destroys margins and data integrity.
                      </p>
                  </div>
                  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333]">
                      <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                          <ArrowRight className="text-[#00FF41]" /> The Trigent Solution
                      </h4>
                      <p className="text-sm text-gray-400">
                          We don't ask you to replace the mainframe. We build the <strong>API Bridge</strong> that allows it to talk to the future.
                      </p>
                  </div>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">THE TRANSLATION LAYER</h2>
                <p className="text-xl text-gray-300 font-light">Bridging the gap between EDI 204 and modern REST JSON.</p>
              </div>
              <EdiTranslator />
            </div>
          )}

          {activeTab === 'identity' && <LogoSelector />}
          
          {activeTab === 'proposal' && <PricingModule />}

        </main>
      </div>

      <DispatchRadio />
    </div>
  );
};

export default App;
