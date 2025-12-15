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
  ZapOff,
  Target,
  Award,
  AlertTriangle,
  Code,
  Server,
  Boxes,
  Package,
  Calendar
} from 'lucide-react';

/**
 * TRIGENT V3: LEGACY-MODERN CONVERGENCE PROTOTYPE
 * AS/400 IBM 5250 TERMINAL AESTHETICS
 * * Design System (AUTHENTIC IBM GREEN SCREEN):
 * - Primary (Legacy): #00FF41 (IBM 5250 Phosphor Green)
 * - Background: #000000 (Pure Black CRT)
 * - Secondary (Warning): #FFD600 (System Alert Amber)
 * - Accent (Modern): #00F0FF (Electric Cyan)
 * - Text: Bright terminal green with authentic scanlines
 */

// --- STYLES COMPONENT (Loads first to ensure visibility) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;600;700&display=swap');
    
    .font-mono { font-family: 'IBM Plex Mono', monospace; }
    .font-sans { font-family: 'Inter', sans-serif; }
    
    /* IBM-Style Scrollbar */
    .custom-scrollbar::-webkit-scrollbar { width: 10px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: #000; border-left: 2px solid #00FF41; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #00FF41; border-radius: 0; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #00CC33; box-shadow: 0 0 10px #00FF41; }
    
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

    .text-shadow-neon { text-shadow: 0 0 20px rgba(0, 255, 65, 0.8), 0 0 40px rgba(0, 255, 65, 0.4); }
    .text-shadow-cyan { text-shadow: 0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4); }
    
    .glow-box { box-shadow: 0 0 30px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.05); }
    .glow-box-cyan { box-shadow: 0 0 30px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.05); }
    
    /* Authentic CRT Scanlines */
    .crt-lines {
      background: 
        repeating-linear-gradient(0deg, rgba(0,255,65,0.03) 0px, transparent 1px, transparent 2px, rgba(0,255,65,0.03) 3px),
        linear-gradient(90deg, rgba(0,255,65,0.02), transparent 50%, rgba(0,255,65,0.02));
      background-size: 100% 3px, 3px 100%;
    }
    
    /* IBM Function Key Border */
    .ibm-border {
      border: 2px solid #00FF41;
      box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.1), 0 0 20px rgba(0, 255, 65, 0.2);
    }
    
    /* Blinking Cursor */
    @keyframes blink-cursor {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .blink-cursor { animation: blink-cursor 1s infinite; }
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
            <div className="text-[10px] font-mono text-gray-400 tracking-widest uppercase font-bold">Channel</div>
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
              <span className="text-[10px] font-mono text-[#00FF41] font-bold opacity-90">FREQ: 98.4 MHZ // TRIGENT DISPATCH</span>
              <div className="text-white font-mono font-bold tracking-wider truncate text-sm md:text-base flex items-center gap-2">
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-[#00FF41] bg-black h-[550px] overflow-hidden ibm-border">
      <div className="p-6 bg-black border-r-2 border-[#00FF41] relative overflow-y-auto custom-scrollbar">
        <div className="absolute top-4 right-4 text-[#00FF41] text-[10px] font-bold border-2 border-[#00FF41] px-2 py-1 bg-black font-mono">SYSTEM OF RECORD (EDI 204)</div>
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
              className="w-full bg-[#00FF41] text-black font-bold font-mono py-4 border-2 border-[#00FF41] hover:bg-[#00CC33] hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] transition-all flex items-center justify-center gap-2 group text-base"
            >
              <Cpu className="w-5 h-5" />
              [F6] INITIATE AXLR8 TRANSLATION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
      <div className="p-6 bg-black relative overflow-y-auto custom-scrollbar">
        <div className="absolute top-4 right-4 text-[#00F0FF] text-[10px] font-bold border-2 border-[#00F0FF] px-2 py-1 bg-black font-mono">SYSTEM OF ENGAGEMENT (REST API)</div>
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
            <div className="mt-8 p-4 bg-[#00F0FF]/10 border-2 border-[#00F0FF] text-[#00F0FF] text-xs flex items-center gap-3 shadow-[0_0_25px_rgba(0,240,255,0.3)] font-mono">
              <Activity className="w-5 h-5 animate-pulse" />
              <span className="font-bold tracking-wide">&gt; LIVE API CONNECTION ESTABLISHED</span>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <Lock className="w-16 h-16 text-[#00FF41] mb-6 opacity-30" />
            <div className="font-mono text-[#00FF41] tracking-wider opacity-40">&gt; WAITING FOR DATA STREAM...</div>
            <div className="font-mono text-[#00FF41] text-xs mt-2 opacity-20 blink-cursor">█</div>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. LOGO SELECTOR
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
           <div className="text-xs font-mono text-gray-400">Includes all one-time fees + 12 months retainer</div>
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

// 6. CASE STUDIES MODULE
const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  
  const cases = [
    {
      id: 0,
      title: "Private Fleet Net Zero (PFNZ)",
      subtitle: "Monetizing 'Ghost Capacity'",
      problem: "80% of private fleet trucks run empty on return trips, burning diesel without revenue",
      solution: "AI matching algorithm connecting shippers with empty backhaul capacity",
      metrics: [
        { label: "Margin Increase", value: "1-4% → 6-24%", color: "#00FF41" },
        { label: "Cost Savings", value: "5-30%", color: "#00F0FF" },
        { label: "Empty Miles Reduced", value: "80%", color: "#FFD600" }
      ],
      tech: ".NET Core, React, AI Matching Engine, Carbon Tracking",
      icon: Truck,
      narrative: "We turned their cost center (empty miles) into a profit center while enabling Scope 3 compliance."
    },
    {
      id: 1,
      title: "Independent Broker Platform",
      subtitle: "The 'Franchise-in-a-Box' Model",
      problem: "Independent agents lacked enterprise-grade tools, limiting growth and efficiency",
      solution: "Multi-tenant platform offering load boards, finance, CRM to independent agent networks",
      metrics: [
        { label: "Agent Productivity", value: "+40%", color: "#00FF41" },
        { label: "Dev Cost Reduction", value: "35%", color: "#00F0FF" },
        { label: "Time to Market", value: "90 days", color: "#FFD600" }
      ],
      tech: ".NET Core, React, Flutter (iOS/Android), AWS Multi-Tenant Architecture",
      icon: Users,
      narrative: "Democratizing enterprise tech for the decentralized brokerage market."
    },
    {
      id: 2,
      title: "Vehicle Telemetry & InsurTech",
      subtitle: "Big Data at the Edge",
      problem: "'Nuclear Verdicts' driving insurance premiums to historic highs",
      solution: "Real-time sensor data processing to detect harsh braking, speeding, mechanical stress",
      metrics: [
        { label: "Insurance Premium Reduction", value: "15-25%", color: "#00FF41" },
        { label: "Data Points/Second", value: "10,000+", color: "#00F0FF" },
        { label: "Safety Score Improvement", value: "32%", color: "#FFD600" }
      ],
      tech: "Data Lake Architecture, Real-time ML Models, IoT Edge Computing",
      icon: Activity,
      narrative: "The software pays for itself through insurance savings—InsurTech meets IoT."
    }
  ];

  const activeData = cases[activeCase];
  const Icon = activeData.icon;

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="border-l-4 border-[#00F0FF] pl-6 bg-gradient-to-r from-[#00F0FF]/10 to-transparent py-2">
        <h2 className="text-3xl font-bold text-white mb-2">OPERATIONAL EVIDENCE</h2>
        <p className="text-[#00FF41] max-w-2xl font-mono opacity-80">
          &gt; Moving beyond theory: Three case studies proving Trigent delivers measurable ROI in the messy reality of US logistics.
        </p>
      </div>

      {/* Case Selector */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {cases.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCase(idx)}
            className={`flex-shrink-0 px-6 py-4 border-2 transition-all ${
              activeCase === idx
                ? 'bg-[#00FF41] text-black border-[#00FF41] font-bold shadow-[0_0_20px_rgba(0,255,65,0.4)]'
                : 'bg-black text-[#00FF41] border-[#00FF41]/30 hover:border-[#00FF41] hover:bg-[#00FF41]/5'
            }`}
          >
            <div className="text-xs font-mono mb-1">CASE_0{idx + 1}</div>
            <div className="text-sm font-mono font-bold">{c.title}</div>
          </button>
        ))}
      </div>

      {/* Active Case Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Details */}
        <div className="bg-[#0a0a0a] border-2 border-[#00FF41] p-8 space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#00FF41] flex items-center justify-center">
              <Icon size={32} className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{activeData.title}</h3>
              <p className="text-sm font-mono text-[#00F0FF]">{activeData.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs text-[#FFD600] font-bold mb-2 flex items-center gap-2">
                <AlertTriangle size={14} /> THE PROBLEM
              </div>
              <p className="text-[#00FF41] text-sm font-mono opacity-80">{activeData.problem}</p>
            </div>

            <div>
              <div className="text-xs text-[#00FF41] font-bold mb-2 flex items-center gap-2">
                <Zap size={14} /> THE TRIGENT SOLUTION
              </div>
              <p className="text-[#00FF41] text-sm font-mono opacity-80">{activeData.solution}</p>
            </div>

            <div>
              <div className="text-xs text-[#00F0FF] font-bold mb-2 flex items-center gap-2">
                <Code size={14} /> TECH STACK
              </div>
              <p className="text-gray-400 text-xs font-mono">{activeData.tech}</p>
            </div>
          </div>

          <div className="border-t-2 border-[#00FF41]/30 pt-4 mt-4">
            <p className="text-white italic text-sm">"{activeData.narrative}"</p>
          </div>
        </div>

        {/* Right: Metrics */}
        <div className="space-y-4">
          <div className="bg-black border-2 border-[#00F0FF] p-6">
            <div className="text-xs text-[#00F0FF] font-bold mb-4 tracking-widest">IMPACT METRICS</div>
            <div className="space-y-6">
              {activeData.metrics.map((metric, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#00FF41] font-mono opacity-80">{metric.label}</span>
                    <span className="text-2xl font-bold font-mono" style={{ color: metric.color }}>
                      {metric.value}
                    </span>
                  </div>
                  <div className="h-2 bg-[#111] border border-[#333]">
                    <div 
                      className="h-full transition-all duration-1000" 
                      style={{ 
                        width: '85%', 
                        backgroundColor: metric.color,
                        boxShadow: `0 0 10px ${metric.color}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#00FF41]/10 border-2 border-[#00FF41] p-6">
            <div className="text-xs text-[#00FF41] font-bold mb-3 tracking-widest">STRATEGIC RELEVANCE</div>
            <p className="text-[#00FF41] text-sm leading-relaxed font-mono opacity-80">
              &gt; This case study proves Trigent understands the {activeCase === 0 ? 'Yield Management' : activeCase === 1 ? 'Decentralized Brokerage' : 'InsurTech/IoT'} opportunity. 
              It demonstrates our ability to deliver enterprise-grade solutions at mid-market velocity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. MANIFEST 2026 CTA
const ManifestCTA = () => {
  return (
    <div className="relative bg-black border-4 border-[#FFD600] p-12 overflow-hidden animate-fadeIn">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD600] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FF41] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Calendar className="w-12 h-12 text-[#FFD600]" />
          <div>
            <div className="text-xs text-[#FFD600] font-bold tracking-widest">UPCOMING EVENT</div>
            <h2 className="text-4xl font-bold text-white">MANIFEST 2026</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/50 border-2 border-[#FFD600] p-6">
            <Calendar className="w-8 h-8 text-[#FFD600] mb-3" />
            <div className="text-xs text-gray-400 mb-1">DATES</div>
            <div className="text-xl font-bold text-white">Feb 9-11, 2026</div>
          </div>
          <div className="bg-black/50 border-2 border-[#FFD600] p-6">
            <Map className="w-8 h-8 text-[#FFD600] mb-3" />
            <div className="text-xs text-gray-400 mb-1">VENUE</div>
            <div className="text-xl font-bold text-white">The Venetian, Las Vegas</div>
          </div>
          <div className="bg-black/50 border-2 border-[#FFD600] p-6">
            <Users className="w-8 h-8 text-[#FFD600] mb-3" />
            <div className="text-xs text-gray-400 mb-1">ATTENDEES</div>
            <div className="text-xl font-bold text-white">7,200+ Decision Makers</div>
          </div>
        </div>

        <div className="bg-[#FFD600]/10 border-2 border-[#FFD600] p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#FFD600] mb-4">
            EXCLUSIVE ROUNDTABLE: "The 61% Reality"
          </h3>
          <p className="text-[#00FF41] mb-6 leading-relaxed font-mono opacity-80">
            &gt; Join Trigent for an intimate discussion on bridging the gap between Legacy Debt and Agentic AI. 
            No pitch decks. No vendor hype. Just honest dialogue about the technical debt crisis paralyzing 
            American logistics—and pragmatic pathways forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#00FF41] flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-white text-sm">For CTOs & VPs of Technology</div>
                <div className="text-xs text-gray-400">Mid-to-large 3PLs, Regional Carriers, Retailers</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#00FF41] flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-white text-sm">Limited to 20 Participants</div>
                <div className="text-xs text-gray-400">Chatham House Rule - Off the record discussion</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <button className="bg-[#FFD600] text-black font-bold px-8 py-4 flex items-center gap-3 hover:bg-[#00FF41] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all text-lg">
            <Target size={24} />
            RSVP FOR ROUNDTABLE
            <ArrowRight size={24} />
          </button>
          <button className="border-2 border-[#FFD600] text-[#FFD600] font-bold px-8 py-4 hover:bg-[#FFD600] hover:text-black transition-all">
            SCHEDULE BOOTH MEETING
          </button>
        </div>
      </div>
    </div>
  );
};

// 8. TARGET MATRIX
const TargetMatrix = () => {
  const targets = [
    {
      company: "Ulta Beauty",
      category: "Shipper (Retail)",
      opportunity: "Middle East Expansion Support",
      angle: "We build the tech bridge for your Alshaya partnership",
      priority: "HIGH",
      icon: Package
    },
    {
      company: "Dollar General",
      category: "Shipper (Retail)",
      opportunity: "Private Fleet Optimization",
      angle: "We monetize your empty backhauls like PFNZ",
      priority: "HIGH",
      icon: Truck
    },
    {
      company: "Exotec",
      category: "Tech (Robotics)",
      opportunity: "WMS Integration Partner",
      angle: "We connect your robots to clients' legacy systems",
      priority: "MEDIUM",
      icon: Boxes
    },
    {
      company: "Project44",
      category: "Tech (Visibility)",
      opportunity: "Implementation Partner",
      angle: "We ensure your data flows into client ERPs",
      priority: "HIGH",
      icon: Activity
    },
    {
      company: "Estes Express",
      category: "Carrier (LSP)",
      opportunity: "Legacy Modernization",
      angle: "We API-enable your rating engine without downtime",
      priority: "MEDIUM",
      icon: Server
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="border-l-4 border-[#FFD600] pl-6 bg-gradient-to-r from-[#FFD600]/10 to-transparent py-2">
        <h2 className="text-3xl font-bold text-white mb-2">MANIFEST 2026: TARGET ACQUISITION</h2>
        <p className="text-[#00FF41] max-w-2xl font-mono opacity-80">
          &gt; Strategic "Must-Win" targets based on market analysis and partnership potential.
        </p>
      </div>

      <div className="space-y-4">
        {targets.map((target, idx) => {
          const Icon = target.icon;
          return (
            <div 
              key={idx}
              className="bg-black border-2 border-[#00FF41]/30 hover:border-[#00FF41] p-6 transition-all group cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-12 h-12 bg-[#00FF41]/10 border-2 border-[#00FF41] flex items-center justify-center group-hover:bg-[#00FF41] group-hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all">
                    <Icon className="text-[#00FF41] group-hover:text-black" size={24} />
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <div className="text-white font-bold text-lg mb-1">{target.company}</div>
                  <div className="text-xs text-[#00F0FF] font-mono">{target.category}</div>
                </div>

                <div className="md:col-span-3">
                  <div className="text-xs text-gray-400 mb-1">OPPORTUNITY</div>
                  <div className="text-sm text-[#00FF41] font-mono opacity-80">{target.opportunity}</div>
                </div>

                <div className="md:col-span-4">
                  <div className="text-xs text-gray-400 mb-1">STRATEGIC ANGLE</div>
                  <div className="text-sm text-[#00FF41] italic">"{target.angle}"</div>
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <span className={`text-xs font-bold px-3 py-1 border-2 ${
                    target.priority === 'HIGH' 
                      ? 'border-[#FFD600] text-[#FFD600] bg-[#FFD600]/10' 
                      : 'border-[#00F0FF] text-[#00F0FF] bg-[#00F0FF]/10'
                  }`}>
                    {target.priority}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
        <div className="min-h-screen bg-black text-[#00FF41] font-mono p-8 flex flex-col justify-center relative">
          <CrtOverlay />
          <div className="max-w-4xl relative z-10 ibm-border p-8 bg-black mx-auto">
            {/* IBM System Header */}
            <div className="border-b-2 border-[#00FF41] pb-4 mb-6">
              <div className="text-xs mb-2">═══════════════════════════════════════════════════════════════════</div>
              <div className="flex justify-between text-sm">
                <span>IBM AS/400 SYSTEM</span>
                <span>SUBSYSTEM: TRIGENT_V3</span>
                <span>USER: SYSADMIN</span>
              </div>
              <div className="text-xs mt-2">═══════════════════════════════════════════════════════════════════</div>
            </div>
            
            {/* IPL Boot Messages */}
            <div className="space-y-2 text-sm mb-6">
              <p className="text-[#00FF41] font-bold">SYSTEM IPL IN PROGRESS...</p>
              <p className="opacity-90">  LOADING QSYS.LIB/TRIGENT.SRVPGM ................ OK</p>
              <p className="opacity-90">  LOADING ASSET MODULES ........................... OK</p>
              <p className="opacity-90">  CALCULATING VELOCITY BUNDLE .................... OK</p>
              <p className="opacity-90">  INITIALIZING VISUAL PROTOCOLS .................. OK</p>
              <p className="opacity-90">  STARTING SUBSYSTEM QINTER ...................... OK</p>
              <p className="opacity-90">  MOUNTING /QSYS.LIB/TRIGENT.LIB ................. OK</p>
              <p className="text-[#00F0FF] mt-4 font-bold">  ALL SUBSYSTEMS ACTIVE</p>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full border-2 border-[#00FF41] h-6 overflow-hidden bg-black">
                <div className="h-full bg-[#00FF41] animate-[width_2s_ease-out_forwards] w-full origin-left flex items-center justify-center text-black font-bold text-xs">
                  LOADING...
                </div>
              </div>
            </div>
            
            {/* Command Prompt */}
            <div className="space-y-1 text-sm">
              <p className="text-[#FFD600]">COMMAND ===> <span className="blink-cursor">█</span></p>
              <p className="text-xs opacity-70 mt-4">Press F3 to skip initialization sequence</p>
            </div>
            
            <button 
              onClick={() => setBootSequence(false)}
              className="mt-6 text-xs text-[#00FF41] border-2 border-[#00FF41] px-4 py-2 hover:bg-[#00FF41] hover:text-black transition-colors"
            >
              [F3] SKIP SEQUENCE
            </button>
          </div>
        </div>
      </>
    );
  }

  const NavItem = ({ id, label, icon: Icon, number }) => (
    <button 
      onClick={() => {
        setActiveTab(id);
        setMobileMenuOpen(false);
      }}
      className={`w-full text-left px-4 py-3 font-mono text-sm flex items-center gap-3 transition-all border-l-4 mb-2 ${activeTab === id ? 'bg-[#00FF41] text-black border-[#00FF41] font-bold shadow-[0_0_15px_rgba(0,255,65,0.4)]' : 'border-[#00FF41]/20 text-[#00FF41]/80 hover:text-[#00FF41] hover:bg-[#00FF41]/10 hover:border-[#00FF41]/40'}`}
    >
      <span className="text-xs opacity-70">{number}.</span>
      <Icon size={16} />
      <span className="uppercase tracking-wide text-xs">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono selection:bg-[#00FF41] selection:text-black overflow-x-hidden pb-32">
      <GlobalStyles />
      <CrtOverlay />

      <header className="border-b-2 border-[#00FF41] bg-black sticky top-0 z-40 shadow-[0_4px_20px_rgba(0,255,65,0.3)]">
        {/* IBM System Header Bar */}
        <div className="bg-[#00FF41] text-black px-6 py-1 font-bold text-xs flex items-center justify-between">
          <span>═══ IBM i OPERATING SYSTEM ═══</span>
          <span>TRIGENT LOGISTICS CORP.</span>
          <span>SESSION: {new Date().toLocaleTimeString()}</span>
        </div>
        
        <div className="flex items-center justify-between p-4 px-6 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-[#00FF41] animate-pulse shadow-[0_0_15px_#00FF41]" />
            <h1 className="font-bold text-xl tracking-wider text-white font-mono">
              Trigent<span className="text-[#00F0FF] animate-pulse text-shadow-cyan">.</span>Logistics
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-[#00FF41]">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00FF41] blink-cursor"></div> 
              STATUS: ACTIVE
            </span>
            <span className="border-2 border-[#00FF41] px-3 py-1 bg-[#00FF41]/10">SECURE CHANNEL</span>
          </div>
          <button className="md:hidden text-[#00FF41]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row h-full max-w-[1600px] mx-auto">
        <aside className={`fixed md:sticky top-16 left-0 w-full md:w-72 bg-black border-r-2 border-[#00FF41] h-[calc(100vh-4rem)] z-30 transition-transform duration-300 shadow-[4px_0_20px_rgba(0,255,65,0.2)] ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="p-6">
            {/* AS/400 Menu Header */}
            <div className="border-2 border-[#00FF41] p-3 mb-6 bg-[#00FF41]/5">
              <div className="text-xs text-[#00FF41] mb-1 font-bold">MAIN MENU SELECTION</div>
              <div className="text-[10px] text-[#00FF41]/60">\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550</div>
            </div>
            <div className="text-xs font-mono text-[#00FF41]/70 mb-4 uppercase tracking-wider font-bold">Select Option (1-5):</div>
            <nav className="space-y-2">
              <NavItem id="vision" label="Executive Vision" icon={Globe} number="1" />
              <NavItem id="gap" label="The 61% Reality" icon={TrendingUp} number="2" />
              <NavItem id="tech" label="EDI-to-API Bridge" icon={Cpu} number="3" />
              <NavItem id="identity" label="Identity Protocols" icon={PenTool} number="4" />
              <NavItem id="cases" label="Case Studies" icon={Award} number="5" />
              <NavItem id="manifest" label="Manifest 2026" icon={Calendar} number="6" />
              <NavItem id="targets" label="Target Matrix" icon={Target} number="7" />
              <NavItem id="proposal" label="Velocity Blueprint" icon={Briefcase} number="8" />
            </nav>
            
            {/* IBM Style Info Box */}
            <div className="mt-12 p-4 border-2 border-[#00FF41] bg-black relative">
              <div className="text-[9px] text-[#00FF41] mb-2 font-bold tracking-widest">\u250C\u2500 SYSTEM NOTICE \u2500\u2510</div>
              <div className="text-[#00FF41] font-mono font-bold text-sm mb-1">MANIFEST 2026</div>
              <div className="text-xs text-[#00FF41]/80 flex items-center gap-1 mb-2">
                <Map size={10} /> FEB 9-11 \u2022 LAS VEGAS
              </div>
              <div className="text-[9px] text-[#00FF41]/60 border-t border-[#00FF41]/30 pt-2 mt-2">
                TARGET ACQUISITION EVENT
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto pb-40">
          
          {activeTab === 'vision' && (
            <div className="space-y-16 animate-fadeIn">
              
              {/* INTRO HERO - AS/400 STYLE */}
              <div className="border-2 border-[#00FF41] p-8 bg-black ibm-border relative">
                <div className="text-[10px] text-[#00FF41] font-mono mb-4 opacity-70">SYSTEM MESSAGE // PRIORITY: HIGH</div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#00FF41] mb-6 tracking-tight leading-tight font-mono text-shadow-neon">
                  THE CONVERGENCE OF <br/>
                  <span className="text-[#00FF41]">LEGACY</span> AND <span className="text-[#00F0FF] text-shadow-cyan">VELOCITY</span>
                </h2>
                <p className="text-xl md:text-2xl text-[#00FF41] font-mono leading-relaxed max-w-3xl opacity-90">
                  &gt; The path to the future does not require the destruction of the past. It requires a sophisticated bridging of "Legacy Debt" and "Agentic AI".
                </p>
                <div className="mt-4 text-xs text-[#00FF41] font-mono opacity-60">_</div>
              </div>

              {/* TWO SPEED SYSTEM - IBM TERMINAL STYLE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="bg-black p-8 border-2 border-[#00FF41] hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all group">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="text-[#00FF41]" size={24} />
                    <div className="text-[10px] text-[#00FF41] font-mono opacity-70">SYSTEM_TYPE_01</div>
                  </div>
                  <h3 className="font-mono text-[#00FF41] text-xl mb-4 font-bold tracking-widest">SPEED 1: THE CORE</h3>
                  <p className="text-[#00FF41] text-base mb-6 font-mono opacity-90">&gt; Optimized for stability. The "System of Record".</p>
                  <div className="font-mono text-sm bg-black p-4 border border-[#00FF41] text-[#00FF41]">
                    ┌─ TECH STACK ─┐<br/>
                    │ AS/400       │<br/>
                    │ ORACLE       │<br/>
                    │ EDI          │<br/>
                    │ MAINFRAME    │<br/>
                    └──────────────┘
                  </div>
                </div>
                <div className="bg-black p-8 border-2 border-[#00F0FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all group">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="text-[#00F0FF]" size={24} />
                    <div className="text-[10px] text-[#00F0FF] font-mono opacity-70">SYSTEM_TYPE_02</div>
                  </div>
                  <h3 className="font-mono text-[#00F0FF] text-xl mb-4 font-bold tracking-widest">SPEED 2: THE EDGE</h3>
                  <p className="text-[#00F0FF] text-base mb-6 font-mono opacity-90">&gt; Optimized for adaptability. The "System of Engagement".</p>
                  <div className="font-mono text-sm bg-black p-4 border border-[#00F0FF] text-[#00F0FF]">
                    ┌─ TECH STACK ─┐<br/>
                    │ REACT        │<br/>
                    │ AI AGENTS    │<br/>
                    │ API          │<br/>
                    │ CLOUD        │<br/>
                    └──────────────┘
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#00FF41] overflow-hidden">
                    {/* LEFT: US MARKET */}
                    <div className="bg-black p-10 border-b md:border-b-0 md:border-r-2 border-[#00FF41] relative">
                        <div className="absolute top-4 left-4 text-[#FFD600] font-mono text-xs font-bold border border-[#FFD600] px-2 py-1 bg-black">BROWNFIELD REALITY</div>
                        <h4 className="text-3xl font-bold text-[#FFD600] mb-2 mt-6 font-mono">US DOMESTIC MARKET</h4>
                        <div className="text-[#FFD600] font-mono text-sm mb-6 opacity-70">"THE VELOCITY OPPORTUNITY"</div>
                        
                        <p className="text-[#00FF41] mb-6 leading-relaxed text-sm font-mono">
                            Characterized by 20-30 year old infrastructure and immediate, acute pain points. Companies here don't need a futuristic city; they need to fix their rating engine in 90 days.
                        </p>
                        
                        <ul className="space-y-3 font-mono">
                            <li className="flex items-center gap-3 text-sm text-[#00FF41]">
                                <ShieldAlert size={16} className="text-[#FFD600]" /> High Technical Debt
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#00FF41]">
                                <DollarSign size={16} className="text-[#FFD600]" /> Fast Sales Cycles (3-6 mo)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#00FF41]">
                                <Zap size={16} className="text-[#FFD600]" /> Needs: Accelerators & Fixes
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT: GCC MARKET */}
                    <div className="bg-black p-10 relative">
                        <div className="absolute top-4 left-4 text-[#00F0FF] font-mono text-xs font-bold border border-[#00F0FF] px-2 py-1 bg-black">GREENFIELD AMBITION</div>
                        <h4 className="text-3xl font-bold text-[#00F0FF] mb-2 mt-6 font-mono">GCC REGION</h4>
                        <div className="text-[#00F0FF] font-mono text-sm mb-6 opacity-70">"THE VISION OPPORTUNITY"</div>
                        
                        <p className="text-[#00FF41] mb-6 leading-relaxed text-sm font-mono">
                            Defined by "Logistics 4.0" mega-projects built from the sand up. High value, sovereign wealth backed, but slow moving government cycles.
                        </p>

                        <ul className="space-y-3 font-mono">
                            <li className="flex items-center gap-3 text-sm text-[#00FF41]">
                                <Anchor size={16} className="text-[#00F0FF]" /> Sovereign AI Mandates
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#00FF41]">
                                <Users size={16} className="text-[#00F0FF]" /> Long Sales Cycles (12-24 mo)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#00FF41]">
                                <Globe size={16} className="text-[#00F0FF]" /> Needs: Relationship & Presence
                            </li>
                        </ul>
                    </div>
                </div>
              </div>

              {/* FINAL RECOMMENDATION - TERMINAL STYLE */}
              <div className="border-2 border-[#00FF41] p-8 bg-black ibm-border">
                  <div className="text-[10px] text-[#00FF41] font-mono mb-4 opacity-70">COMMAND RECOMMENDATION // EXEC_LEVEL</div>
                  <h3 className="text-[#00FF41] font-mono font-bold text-2xl mb-4 flex items-center gap-2 text-shadow-neon">
                    &gt; THE STRATEGIC RECOMMENDATION: "US-FIRST PIVOT"
                  </h3>
                  <p className="text-[#00FF41] leading-relaxed max-w-4xl font-mono opacity-90">
                    Trigent's "Accelerator" model is designed for speed, making it a perfect fit for the US mid-market's need for quick wins. We propose a "Technical Debt Amortization" strategy: selling immediate relief to domestic challengers while using those wins to build the credentials for long-term GCC relationships.
                  </p>
                  <div className="mt-4 text-xs text-[#00FF41] font-mono opacity-60 blink-cursor">█</div>
              </div>

            </div>
          )}

          {activeTab === 'gap' && (
            <div className="space-y-12 animate-fadeIn">
              <div className="border-2 border-[#FFD600] p-8 bg-black ibm-border">
                <div className="text-[10px] text-[#FFD600] font-mono mb-4 opacity-70">ALERT // MARKET ANALYSIS</div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#FFD600] mb-6 font-mono text-shadow-neon">THE MODERNIZATION GAP</h2>
                <p className="text-xl text-[#00FF41] max-w-3xl font-mono">&gt; While 88% of carriers cite AI as a top priority, 61% are trapped in legacy systems. This is not just a statistic; it's a <span className="text-[#EF4444] font-bold">MARKET FAILURE</span>.</p>
              </div>
              
              <div className="bg-black p-10 border-2 border-[#00FF41] relative overflow-hidden">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="bg-black p-6 border-2 border-[#EF4444]">
                      <h4 className="text-[#EF4444] font-bold mb-2 flex items-center gap-2 font-mono text-sm">
                          <ZapOff size={16} /> THE CONSEQUENCE
                      </h4>
                      <p className="text-sm text-[#00FF41] font-mono">
                          &gt; "Swivel Chair Integration" — hiring staff to manually type data from one screen to another. This destroys margins and data integrity.
                      </p>
                  </div>
                  <div className="bg-black p-6 border-2 border-[#00FF41]">
                      <h4 className="text-[#00FF41] font-bold mb-2 flex items-center gap-2 font-mono text-sm">
                          <ArrowRight size={16} /> THE TRIGENT SOLUTION
                      </h4>
                      <p className="text-sm text-[#00FF41] font-mono">
                          &gt; We don't ask you to replace the mainframe. We build the <strong className="text-shadow-neon">API BRIDGE</strong> that allows it to talk to the future.
                      </p>
                  </div>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="animate-fadeIn space-y-8">
              <div className="border-2 border-[#00F0FF] p-8 bg-black ibm-border">
                <div className="text-[10px] text-[#00F0FF] font-mono mb-4 opacity-70">TECHNICAL DEMO // AXLR8_BRIDGE</div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#00F0FF] mb-4 font-mono text-shadow-cyan">THE TRANSLATION LAYER</h2>
                <p className="text-xl text-[#00FF41] font-mono">&gt; Bridging the gap between EDI 204 and modern REST JSON in real-time.</p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#00FF41] font-mono">~100ms</div>
                    <div className="text-xs text-gray-400 font-mono">Translation Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#00FF41] font-mono">99.9%</div>
                    <div className="text-xs text-gray-400 font-mono">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#00FF41] font-mono">24/7</div>
                    <div className="text-xs text-gray-400 font-mono">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#00FF41] font-mono">$0</div>
                    <div className="text-xs text-gray-400 font-mono">ERP Changes</div>
                  </div>
                </div>
              </div>
              <EdiTranslator />
              <div className="bg-black border-2 border-[#00FF41] p-8 ibm-border">
                <div className="text-xs text-[#00FF41] font-mono mb-4 font-bold tracking-widest">VALUE PROPOSITION</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[#00FF41] font-mono font-bold mb-2">WITHOUT AXLR8 BRIDGE:</h4>
                    <ul className="text-sm text-[#00FF41] space-y-2 font-mono opacity-80">
                      <li className="flex items-start gap-2"><span className="text-[#EF4444]">✗</span> Months-long ERP replacement projects</li>
                      <li className="flex items-start gap-2"><span className="text-[#EF4444]">✗</span> $500K+ implementation costs</li>
                      <li className="flex items-start gap-2"><span className="text-[#EF4444]">✗</span> High operational risk during migration</li>
                      <li className="flex items-start gap-2"><span className="text-[#EF4444]">✗</span> Lost revenue from downtime</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#00FF41] font-mono font-bold mb-2">WITH AXLR8 BRIDGE:</h4>
                    <ul className="text-sm text-[#00FF41] space-y-2 font-mono">
                      <li className="flex items-start gap-2"><span className="text-[#00FF41]">✓</span> 90-day implementation timeline</li>
                      <li className="flex items-start gap-2"><span className="text-[#00FF41]">✓</span> Fixed-price accelerator model</li>
                      <li className="flex items-start gap-2"><span className="text-[#00FF41]">✓</span> Zero downtime, zero ERP changes</li>
                      <li className="flex items-start gap-2"><span className="text-[#00FF41]">✓</span> Immediate API connectivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'identity' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="border-l-4 border-[#00F0FF] pl-6 bg-gradient-to-r from-[#00F0FF]/10 to-transparent py-2">
                <h2 className="text-3xl font-bold text-white mb-2 font-mono">VISUAL IDENTITY PROTOCOL</h2>
                <p className="text-[#00FF41] max-w-2xl font-mono opacity-80">
                  &gt; The chosen identity represents the bridge between legacy and future—a simple dot notation connecting two worlds.
                </p>
              </div>

              <div className="bg-black border-4 border-[#00FF41] p-16 text-center ibm-border">
                <div className="text-[10px] text-[#00FF41] font-mono mb-8 opacity-70">CORPORATE IDENTIFIER // ACTIVE</div>
                <div className="text-5xl md:text-7xl font-bold tracking-wider text-white font-mono mb-8">
                  Trigent<span className="text-[#00F0FF] animate-pulse text-shadow-cyan">.</span>Logistics
                </div>
                <div className="text-sm text-[#00FF41] font-mono mb-8 opacity-80">
                  &gt; THE CONNECTOR: Code-inspired dot notation. Minimal, modern, bridging entities.
                </div>
                <div className="inline-block border-2 border-[#00FF41] px-6 py-3 bg-[#00FF41]/10">
                  <div className="text-xs text-[#00FF41] font-mono">STATUS: APPROVED // DEPLOYED</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black border-2 border-[#00FF41]/30 p-6">
                  <div className="text-xs text-[#00FF41] font-mono mb-3 font-bold">RATIONALE</div>
                  <p className="text-sm text-[#00FF41] font-mono opacity-80">&gt; Represents the technical bridge between legacy systems and modern APIs—the dot as the connection point.</p>
                </div>
                <div className="bg-black border-2 border-[#00FF41]/30 p-6">
                  <div className="text-xs text-[#00FF41] font-mono mb-3 font-bold">APPLICATIONS</div>
                  <p className="text-sm text-[#00FF41] font-mono opacity-80">&gt; Website headers, business cards, terminal displays, technical documentation, API endpoints.</p>
                </div>
                <div className="bg-black border-2 border-[#00FF41]/30 p-6">
                  <div className="text-xs text-[#00FF41] font-mono mb-3 font-bold">MESSAGING</div>
                  <p className="text-sm text-[#00FF41] font-mono opacity-80">&gt; Clean, professional, developer-friendly. Appeals to technical decision-makers.</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'cases' && <CaseStudies />}
          
          {activeTab === 'manifest' && <ManifestCTA />}
          
          {activeTab === 'targets' && <TargetMatrix />}
          
          {activeTab === 'proposal' && <PricingModule />}

        </main>
      </div>

      <DispatchRadio />
    </div>
  );
};

export default App;
