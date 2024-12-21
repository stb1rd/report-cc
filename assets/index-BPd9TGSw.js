(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wr="171",ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Do=0,Yr=1,Lo=2,Xa=1,Uo=2,je=3,mn=0,Me=1,$e=2,fn=0,ni=1,qr=2,Zr=3,Kr=4,Io=5,An=100,No=101,Fo=102,Oo=103,Bo=104,zo=200,ko=201,Ho=202,Vo=203,Vs=204,Gs=205,Go=206,Wo=207,Xo=208,Yo=209,qo=210,Zo=211,Ko=212,jo=213,$o=214,Ws=0,Xs=1,Ys=2,ri=3,qs=4,Zs=5,Ks=6,js=7,Ya=0,Jo=1,Qo=2,pn=0,tl=1,el=2,nl=3,il=4,sl=5,rl=6,al=7,qa=300,ai=301,oi=302,$s=303,Js=304,os=306,Qs=1e3,wn=1001,tr=1002,ke=1003,ol=1004,Ci=1005,Ve=1006,fs=1007,Cn=1008,nn=1009,Za=1010,Ka=1011,Si=1012,Cr=1013,Dn=1014,Je=1015,Ti=1016,Pr=1017,Dr=1018,li=1020,ja=35902,$a=1021,Ja=1022,ze=1023,Qa=1024,to=1025,ii=1026,ci=1027,eo=1028,Lr=1029,no=1030,Ur=1031,Ir=1033,Ji=33776,Qi=33777,ts=33778,es=33779,er=35840,nr=35841,ir=35842,sr=35843,rr=36196,ar=37492,or=37496,lr=37808,cr=37809,ur=37810,hr=37811,dr=37812,fr=37813,pr=37814,mr=37815,_r=37816,gr=37817,vr=37818,xr=37819,yr=37820,Mr=37821,ns=36492,Sr=36494,Er=36495,io=36283,Tr=36284,br=36285,Ar=36286,ll=3200,cl=3201,ul=0,hl=1,dn="",De="srgb",ui="srgb-linear",ss="linear",Zt="srgb",On=7680,jr=519,dl=512,fl=513,pl=514,so=515,ml=516,_l=517,gl=518,vl=519,$r=35044,Jr="300 es",Qe=2e3,rs=2001;class In{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qr=1234567;const yi=Math.PI/180,Ei=180/Math.PI;function di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function Ut(i,t,e){return Math.max(t,Math.min(e,i))}function Nr(i,t){return(i%t+t)%t}function xl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yl(i,t,e){return i!==t?(e-i)/(t-i):0}function Mi(i,t,e){return(1-e)*i+e*t}function Ml(i,t,e,n){return Mi(i,t,1-Math.exp(-e*n))}function Sl(i,t=1){return t-Math.abs(Nr(i,t*2)-t)}function El(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Al(i,t){return i+Math.random()*(t-i)}function Rl(i){return i*(.5-Math.random())}function wl(i){i!==void 0&&(Qr=i);let t=Qr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cl(i){return i*yi}function Pl(i){return i*Ei}function Dl(i){return(i&i-1)===0&&i!==0}function Ll(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Il(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nl={DEG2RAD:yi,RAD2DEG:Ei,generateUUID:di,clamp:Ut,euclideanModulo:Nr,mapLinear:xl,inverseLerp:yl,lerp:Mi,damp:Ml,pingpong:Sl,smoothstep:El,smootherstep:Tl,randInt:bl,randFloat:Al,randFloatSpread:Rl,seededRandom:wl,degToRad:Cl,radToDeg:Pl,isPowerOfTwo:Dl,ceilPowerOfTwo:Ll,floorPowerOfTwo:Ul,setQuaternionFromProperEuler:Il,normalize:ge,denormalize:$n};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(t,e,n,s,r,a,o,l,c){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],v=n[8],y=s[0],p=s[3],u=s[6],A=s[1],T=s[4],E=s[7],U=s[2],D=s[5],R=s[8];return r[0]=a*y+o*A+l*U,r[3]=a*p+o*T+l*D,r[6]=a*u+o*E+l*R,r[1]=c*y+h*A+f*U,r[4]=c*p+h*T+f*D,r[7]=c*u+h*E+f*R,r[2]=d*y+m*A+v*U,r[5]=d*p+m*T+v*D,r[8]=d*u+m*E+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,m=c*r-a*l,v=e*f+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ps.makeScale(t,e)),this}rotate(t){return this.premultiply(ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ps=new Ct;function ro(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fl(){const i=as("canvas");return i.style.display="block",i}const ta={};function Jn(i){i in ta||(ta[i]=!0,console.warn(i))}function Ol(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ea=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),na=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kl(){const i={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(s.r=en(s.r),s.g=en(s.g),s.b=en(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===dn?ss:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ui]:{primaries:t,whitePoint:n,transfer:ss,toXYZ:ea,fromXYZ:na,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:ea,fromXYZ:na,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const Gt=kl();function en(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class Hl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=as("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=as("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=en(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(en(e[n]/255)*255):e[n]=en(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vl=0;class ao{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ms(s[a].image)):r.push(ms(s[a]))}else r=ms(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gl=0;class Se extends In{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=wn,s=wn,r=Ve,a=Cn,o=ze,l=nn,c=Se.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=di(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qs:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qs:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=qa;Se.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],v=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,E=(m+1)/2,U=(u+1)/2,D=(h+d)/4,R=(f+y)/4,I=(v+p)/4;return T>E&&T>U?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=D/n,r=R/n):E>U?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=I/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=I/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-v)*(p-v)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(p-v)/A,this.y=(f-y)/A,this.z=(d-h)/A,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wl extends In{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Se(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class oo extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xl extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=y;return}if(f!==y||l!==d||c!==m||h!==v){let p=1-o;const u=l*d+c*m+h*v+f*y,A=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const U=Math.sqrt(T),D=Math.atan2(U,u*A);p=Math.sin(p*D)/U,o=Math.sin(o*D)/U}const E=o*A;if(l=l*p+d*E,c=c*p+m*E,h=h*p+v*E,f=f*p+y*E,p===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+h*f+l*m-c*d,t[e+1]=l*v+h*d+c*f-o*m,t[e+2]=c*v+h*m+o*d-l*f,t[e+3]=h*v-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"YZX":this._x=d*h*f+c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f-d*m*v;break;case"XZY":this._x=d*h*f-c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _s.copy(this).projectOnVector(t),this.sub(_s)}reflect(t){return this.sub(_s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _s=new F,ia=new Un;class bi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ne.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ne.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ne.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ne):Ne.fromBufferAttribute(r,a),Ne.applyMatrix4(t.matrixWorld),this.expandByPoint(Ne);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pi.copy(n.boundingBox)),Pi.applyMatrix4(t.matrixWorld),this.union(Pi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ne),Ne.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mi),Di.subVectors(this.max,mi),zn.subVectors(t.a,mi),kn.subVectors(t.b,mi),Hn.subVectors(t.c,mi),rn.subVectors(kn,zn),an.subVectors(Hn,kn),xn.subVectors(zn,Hn);let e=[0,-rn.z,rn.y,0,-an.z,an.y,0,-xn.z,xn.y,rn.z,0,-rn.x,an.z,0,-an.x,xn.z,0,-xn.x,-rn.y,rn.x,0,-an.y,an.x,0,-xn.y,xn.x,0];return!gs(e,zn,kn,Hn,Di)||(e=[1,0,0,0,1,0,0,0,1],!gs(e,zn,kn,Hn,Di))?!1:(Li.crossVectors(rn,an),e=[Li.x,Li.y,Li.z],gs(e,zn,kn,Hn,Di))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ne).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ne).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xe=[new F,new F,new F,new F,new F,new F,new F,new F],Ne=new F,Pi=new bi,zn=new F,kn=new F,Hn=new F,rn=new F,an=new F,xn=new F,mi=new F,Di=new F,Li=new F,yn=new F;function gs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yn.fromArray(i,r);const o=s.x*Math.abs(yn.x)+s.y*Math.abs(yn.y)+s.z*Math.abs(yn.z),l=t.dot(yn),c=e.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yl=new bi,_i=new F,vs=new F;class Fr{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_i.subVectors(t,this.center);const e=_i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_i.copy(t.center).add(vs)),this.expandByPoint(_i.copy(t.center).sub(vs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new F,xs=new F,Ui=new F,on=new F,ys=new F,Ii=new F,Ms=new F;class lo{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.origin).addScaledVector(this.direction,e),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xs.copy(t).add(e).multiplyScalar(.5),Ui.copy(e).sub(t).normalize(),on.copy(this.origin).sub(xs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ui),o=on.dot(this.direction),l=-on.dot(Ui),c=on.lengthSq(),h=Math.abs(1-a*a);let f,d,m,v;if(h>0)if(f=a*l-o,d=a*o-l,v=r*h,f>=0)if(d>=-v)if(d<=v){const y=1/h;f*=y,d*=y,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xs).addScaledVector(Ui,d),m}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const n=Ye.dot(this.direction),s=Ye.dot(Ye)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,n,s,r){ys.subVectors(e,t),Ii.subVectors(n,t),Ms.crossVectors(ys,Ii);let a=this.direction.dot(Ms),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,t);const l=o*this.direction.dot(Ii.crossVectors(on,Ii));if(l<0)return null;const c=o*this.direction.dot(ys.cross(on));if(c<0||l+c>a)return null;const h=-o*on.dot(Ms);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,f,d,m,v,y,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,m,v,y,p)}set(t,e,n,s,r,a,o,l,c,h,f,d,m,v,y,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=v,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),a=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*f,v=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+v*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*f,v=c*h,y=c*f;e[0]=d+y*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-v,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*f,v=c*h,y=c*f;e[0]=d-y*o,e[4]=-a*f,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*f,v=o*h,y=o*f;e[0]=l*h,e[4]=v*c-m,e[8]=d*c+y,e[1]=l*f,e[5]=y*c+d,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=o*l,y=o*c;e[0]=l*h,e[4]=y-d*f,e[8]=v*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+v,e[10]=d-y*f}else if(t.order==="XZY"){const d=a*l,m=a*c,v=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+y,e[5]=a*h,e[9]=m*f-v,e[2]=v*f-m,e[6]=o*h,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ql,t,Zl)}lookAt(t,e,n){const s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),ln.crossVectors(n,Te),ln.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),ln.crossVectors(n,Te)),ln.normalize(),Ni.crossVectors(Te,ln),s[0]=ln.x,s[4]=Ni.x,s[8]=Te.x,s[1]=ln.y,s[5]=Ni.y,s[9]=Te.y,s[2]=ln.z,s[6]=Ni.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],v=n[2],y=n[6],p=n[10],u=n[14],A=n[3],T=n[7],E=n[11],U=n[15],D=s[0],R=s[4],I=s[8],M=s[12],x=s[1],w=s[5],G=s[9],z=s[13],Z=s[2],K=s[6],X=s[10],$=s[14],H=s[3],st=s[7],ut=s[11],gt=s[15];return r[0]=a*D+o*x+l*Z+c*H,r[4]=a*R+o*w+l*K+c*st,r[8]=a*I+o*G+l*X+c*ut,r[12]=a*M+o*z+l*$+c*gt,r[1]=h*D+f*x+d*Z+m*H,r[5]=h*R+f*w+d*K+m*st,r[9]=h*I+f*G+d*X+m*ut,r[13]=h*M+f*z+d*$+m*gt,r[2]=v*D+y*x+p*Z+u*H,r[6]=v*R+y*w+p*K+u*st,r[10]=v*I+y*G+p*X+u*ut,r[14]=v*M+y*z+p*$+u*gt,r[3]=A*D+T*x+E*Z+U*H,r[7]=A*R+T*w+E*K+U*st,r[11]=A*I+T*G+E*X+U*ut,r[15]=A*M+T*z+E*$+U*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],v=t[3],y=t[7],p=t[11],u=t[15];return v*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*m-n*l*m)+y*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*f-e*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],v=t[12],y=t[13],p=t[14],u=t[15],A=f*p*c-y*d*c+y*l*m-o*p*m-f*l*u+o*d*u,T=v*d*c-h*p*c-v*l*m+a*p*m+h*l*u-a*d*u,E=h*y*c-v*f*c+v*o*m-a*y*m-h*o*u+a*f*u,U=v*f*l-h*y*l-v*o*d+a*y*d+h*o*p-a*f*p,D=e*A+n*T+s*E+r*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return t[0]=A*R,t[1]=(y*d*r-f*p*r-y*s*m+n*p*m+f*s*u-n*d*u)*R,t[2]=(o*p*r-y*l*r+y*s*c-n*p*c-o*s*u+n*l*u)*R,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*m-n*l*m)*R,t[4]=T*R,t[5]=(h*p*r-v*d*r+v*s*m-e*p*m-h*s*u+e*d*u)*R,t[6]=(v*l*r-a*p*r-v*s*c+e*p*c+a*s*u-e*l*u)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*R,t[8]=E*R,t[9]=(v*f*r-h*y*r-v*n*m+e*y*m+h*n*u-e*f*u)*R,t[10]=(a*y*r-v*o*r+v*n*c-e*y*c-a*n*u+e*o*u)*R,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*m-e*o*m)*R,t[12]=U*R,t[13]=(h*y*s-v*f*s+v*n*d-e*y*d-h*n*p+e*f*p)*R,t[14]=(v*o*s-a*y*s-v*n*l+e*y*l+a*n*p-e*o*p)*R,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,m=r*h,v=r*f,y=a*h,p=a*f,u=o*f,A=l*c,T=l*h,E=l*f,U=n.x,D=n.y,R=n.z;return s[0]=(1-(y+u))*U,s[1]=(m+E)*U,s[2]=(v-T)*U,s[3]=0,s[4]=(m-E)*D,s[5]=(1-(d+u))*D,s[6]=(p+A)*D,s[7]=0,s[8]=(v+T)*R,s[9]=(p-A)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vn.set(s[0],s[1],s[2]).length();const a=Vn.set(s[4],s[5],s[6]).length(),o=Vn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fe.copy(this);const c=1/r,h=1/a,f=1/o;return Fe.elements[0]*=c,Fe.elements[1]*=c,Fe.elements[2]*=c,Fe.elements[4]*=h,Fe.elements[5]*=h,Fe.elements[6]*=h,Fe.elements[8]*=f,Fe.elements[9]*=f,Fe.elements[10]*=f,e.setFromRotationMatrix(Fe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Qe){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,v;if(o===Qe)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===rs)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Qe){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,m=(n+s)*h;let v,y;if(o===Qe)v=(a+r)*f,y=-2*f;else if(o===rs)v=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new F,Fe=new oe,ql=new F(0,0,0),Zl=new F(1,1,1),ln=new F,Ni=new F,Te=new F,sa=new oe,ra=new Un;class sn{constructor(t=0,e=0,n=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ra.setFromEuler(this),this.setFromQuaternion(ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kl=0;const aa=new F,Gn=new Un,qe=new oe,Fi=new F,gi=new F,jl=new F,$l=new Un,oa=new F(1,0,0),la=new F(0,1,0),ca=new F(0,0,1),ua={type:"added"},Jl={type:"removed"},Wn={type:"childadded",child:null},Ss={type:"childremoved",child:null};class Ae extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new F,e=new sn,n=new Un,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ct}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(oa,t)}rotateY(t){return this.rotateOnAxis(la,t)}rotateZ(t){return this.rotateOnAxis(ca,t)}translateOnAxis(t,e){return aa.copy(t).applyQuaternion(this.quaternion),this.position.add(aa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oa,t)}translateY(t){return this.translateOnAxis(la,t)}translateZ(t){return this.translateOnAxis(ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fi.copy(t):Fi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(gi,Fi,this.up):qe.lookAt(Fi,gi,this.up),this.quaternion.setFromRotationMatrix(qe),s&&(qe.extractRotation(s.matrixWorld),Gn.setFromRotationMatrix(qe),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ua),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jl),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ua),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,t,jl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,$l,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new F(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new F,Ze=new F,Es=new F,Ke=new F,Xn=new F,Yn=new F,ha=new F,Ts=new F,bs=new F,As=new F,Rs=new se,ws=new se,Cs=new se;class Be{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Oe.subVectors(t,e),s.cross(Oe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Oe.subVectors(s,e),Ze.subVectors(n,e),Es.subVectors(t,e);const a=Oe.dot(Oe),o=Oe.dot(Ze),l=Oe.dot(Es),c=Ze.dot(Ze),h=Ze.dot(Es),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ke)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ke.x),l.addScaledVector(a,Ke.y),l.addScaledVector(o,Ke.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Rs.setScalar(0),ws.setScalar(0),Cs.setScalar(0),Rs.fromBufferAttribute(t,e),ws.fromBufferAttribute(t,n),Cs.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rs,r.x),a.addScaledVector(ws,r.y),a.addScaledVector(Cs,r.z),a}static isFrontFacing(t,e,n,s){return Oe.subVectors(n,e),Ze.subVectors(t,e),Oe.cross(Ze).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),Ze.subVectors(this.a,this.b),Oe.cross(Ze).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Xn.subVectors(s,n),Yn.subVectors(r,n),Ts.subVectors(t,n);const l=Xn.dot(Ts),c=Yn.dot(Ts);if(l<=0&&c<=0)return e.copy(n);bs.subVectors(t,s);const h=Xn.dot(bs),f=Yn.dot(bs);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xn,a);As.subVectors(t,r);const m=Xn.dot(As),v=Yn.dot(As);if(v>=0&&m<=v)return e.copy(r);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Yn,o);const p=h*v-m*f;if(p<=0&&f-h>=0&&m-v>=0)return ha.subVectors(r,s),o=(f-h)/(f-h+(m-v)),e.copy(s).addScaledVector(ha,o);const u=1/(p+y+d);return a=y*u,o=d*u,e.copy(n).addScaledVector(Xn,a).addScaledVector(Yn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Oi={h:0,s:0,l:0};function Ps(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Nr(t,1),e=Ut(e,0,1),n=Ut(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ps(a,r,t+1/3),this.g=Ps(a,r,t),this.b=Ps(a,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=uo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=en(t.r),this.g=en(t.g),this.b=en(t.b),this}copyLinearToSRGB(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Gt.fromWorkingColorSpace(me.copy(this),t),Math.round(Ut(me.r*255,0,255))*65536+Math.round(Ut(me.g*255,0,255))*256+Math.round(Ut(me.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,s=me.g,r=me.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=De){Gt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,s=me.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(Oi);const n=Mi(cn.h,Oi.h,e),s=Mi(cn.s,Oi.s,e),r=Mi(cn.l,Oi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new qt;qt.NAMES=uo;let Ql=0;class ls extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ni,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vs,this.blendDst=Gs,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vs&&(n.blendSrc=this.blendSrc),this.blendDst!==Gs&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ho extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new F,Bi=new Lt;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$r,this.updateRanges=[],this.gpuType=Je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bi.fromBufferAttribute(this,e),Bi.applyMatrix3(t),this.setXY(e,Bi.x,Bi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$r&&(t.usage=this.usage),t}}class fo extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class po extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pn extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tc=0;const Pe=new oe,Ds=new Ae,qn=new F,be=new bi,vi=new bi,he=new F;class Nn extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ro(t)?po:fo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ct().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Ds.lookAt(t),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];be.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];vi.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(be.min,vi.min),be.expandByPoint(he),he.addVectors(be.max,vi.max),be.expandByPoint(he)):(be.expandByPoint(vi.min),be.expandByPoint(vi.max))}be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)he.fromBufferAttribute(o,c),l&&(qn.fromBufferAttribute(t,c),he.add(qn)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new F,l[I]=new F;const c=new F,h=new F,f=new F,d=new Lt,m=new Lt,v=new Lt,y=new F,p=new F;function u(I,M,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,M),v.fromBufferAttribute(r,x),h.sub(c),f.sub(c),m.sub(d),v.sub(d);const w=1/(m.x*v.y-v.x*m.y);isFinite(w)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(w),o[I].add(y),o[M].add(y),o[x].add(y),l[I].add(p),l[M].add(p),l[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let I=0,M=A.length;I<M;++I){const x=A[I],w=x.start,G=x.count;for(let z=w,Z=w+G;z<Z;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new F,E=new F,U=new F,D=new F;function R(I){U.fromBufferAttribute(s,I),D.copy(U);const M=o[I];T.copy(M),T.sub(U.multiplyScalar(U.dot(M))).normalize(),E.crossVectors(D,M);const w=E.dot(l[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,w)}for(let I=0,M=A.length;I<M;++I){const x=A[I],w=x.start,G=x.count;for(let z=w,Z=w+G;z<Z;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let u=0;u<h;u++)d[v++]=c[m++]}return new Ge(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Nn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new oe,Mn=new lo,zi=new Fr,fa=new F,ki=new F,Hi=new F,Vi=new F,Ls=new F,Gi=new F,pa=new F,Wi=new F;class tn extends Ae{constructor(t=new Nn,e=new ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Gi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Ls.fromBufferAttribute(f,t),a?Gi.addScaledVector(Ls,h):Gi.addScaledVector(Ls.sub(e),h))}e.add(Gi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(r),Mn.copy(t.ray).recast(t.near),!(zi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(zi,fa)===null||Mn.origin.distanceToSquared(fa)>(t.far-t.near)**2))&&(da.copy(r).invert(),Mn.copy(t.ray).applyMatrix4(da),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,U=T;E<U;E+=3){const D=o.getX(E),R=o.getX(E+1),I=o.getX(E+2);s=Xi(this,u,t,n,c,h,f,D,R,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const A=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);s=Xi(this,a,t,n,c,h,f,A,T,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,U=T;E<U;E+=3){const D=E,R=E+1,I=E+2;s=Xi(this,u,t,n,c,h,f,D,R,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const A=p,T=p+1,E=p+2;s=Xi(this,a,t,n,c,h,f,A,T,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ec(i,t,e,n,s,r,a,o){let l;if(t.side===Me?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===mn,o),l===null)return null;Wi.copy(o),Wi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wi);return c<e.near||c>e.far?null:{distance:c,point:Wi.clone(),object:i}}function Xi(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ki),i.getVertexPosition(l,Hi),i.getVertexPosition(c,Vi);const h=ec(i,t,e,n,ki,Hi,Vi,pa);if(h){const f=new F;Be.getBarycoord(pa,ki,Hi,Vi,f),s&&(h.uv=Be.getInterpolatedAttribute(s,o,l,c,f,new Lt)),r&&(h.uv1=Be.getInterpolatedAttribute(r,o,l,c,f,new Lt)),a&&(h.normal=Be.getInterpolatedAttribute(a,o,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};Be.getNormal(ki,Hi,Vi,d.normal),h.face=d,h.barycoord=f}return h}class Ai extends Nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(h,3)),this.setAttribute("uv",new Pn(f,2));function v(y,p,u,A,T,E,U,D,R,I,M){const x=E/R,w=U/I,G=E/2,z=U/2,Z=D/2,K=R+1,X=I+1;let $=0,H=0;const st=new F;for(let ut=0;ut<X;ut++){const gt=ut*w-z;for(let It=0;It<K;It++){const jt=It*x-G;st[y]=jt*A,st[p]=gt*T,st[u]=Z,c.push(st.x,st.y,st.z),st[y]=0,st[p]=0,st[u]=D>0?1:-1,h.push(st.x,st.y,st.z),f.push(It/R),f.push(1-ut/I),$+=1}}for(let ut=0;ut<I;ut++)for(let gt=0;gt<R;gt++){const It=d+gt+K*ut,jt=d+gt+K*(ut+1),W=d+(gt+1)+K*(ut+1),tt=d+(gt+1)+K*ut;l.push(It,jt,tt),l.push(jt,W,tt),H+=6}o.addGroup(m,H,M),m+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=hi(i[e]);for(const s in n)t[s]=n[s]}return t}function nc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const ic={clone:hi,merge:ve};var sc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sc,this.fragmentShader=rc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hi(t.uniforms),this.uniformsGroups=nc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _o extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Qe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new F,ma=new Lt,_a=new Lt;class Le extends _o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ei*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(un.x,un.y).multiplyScalar(-t/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-t/un.z)}getViewSize(t,e){return this.getViewBounds(t,ma,_a),e.subVectors(_a,ma)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zn=-90,Kn=1;class ac extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(Zn,Kn,t,e);s.layers=this.layers,this.add(s);const r=new Le(Zn,Kn,t,e);r.layers=this.layers,this.add(r);const a=new Le(Zn,Kn,t,e);a.layers=this.layers,this.add(a);const o=new Le(Zn,Kn,t,e);o.layers=this.layers,this.add(o);const l=new Le(Zn,Kn,t,e);l.layers=this.layers,this.add(l);const c=new Le(Zn,Kn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Qe)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class go extends Se{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ai,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oc extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:fn});r.uniforms.tEquirect.value=e;const a=new tn(s,r),o=e.minFilter;return e.minFilter===Cn&&(e.minFilter=Ve),new ac(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class lc extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Us=new F,cc=new F,uc=new Ct;class hn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Us.subVectors(n,e).cross(cc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Us),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uc.getNormalMatrix(t),s=this.coplanarPoint(Us).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new Fr,Yi=new F;class vo{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qe){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],m=s[8],v=s[9],y=s[10],p=s[11],u=s[12],A=s[13],T=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,p-m,E-u).normalize(),n[1].setComponents(l+r,d+c,p+m,E+u).normalize(),n[2].setComponents(l+a,d+h,p+v,E+A).normalize(),n[3].setComponents(l-a,d-h,p-v,E-A).normalize(),n[4].setComponents(l-o,d-f,p-y,E-T).normalize(),e===Qe)n[5].setComponents(l+o,d+f,p+y,E+T).normalize();else if(e===rs)n[5].setComponents(o,f,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(t){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Yi.x=s.normal.x>0?t.max.x:t.min.x,Yi.y=s.normal.y>0?t.max.y:t.min.y,Yi.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qi extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}class xo extends Se{constructor(t,e,n,s,r,a,o,l,c,h=ii){if(h!==ii&&h!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=Dn),n===void 0&&h===ci&&(n=li),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cs extends Nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,m=[],v=[],y=[],p=[];for(let u=0;u<h;u++){const A=u*d-a;for(let T=0;T<c;T++){const E=T*f-r;v.push(E,-A,0),y.push(0,0,1),p.push(T/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<o;A++){const T=A+c*u,E=A+c*(u+1),U=A+1+c*(u+1),D=A+1+c*u;m.push(T,E,D),m.push(E,U,D)}this.setIndex(m),this.setAttribute("position",new Pn(v,3)),this.setAttribute("normal",new Pn(y,3)),this.setAttribute("uv",new Pn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class hc extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dc extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fc extends _o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class pc extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ga{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ut(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mc extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function va(i,t,e,n){const s=_c(n);switch(e){case $a:return i*t;case Qa:return i*t;case to:return i*t*2;case eo:return i*t/s.components*s.byteLength;case Lr:return i*t/s.components*s.byteLength;case no:return i*t*2/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case Ja:return i*t*3/s.components*s.byteLength;case ze:return i*t*4/s.components*s.byteLength;case Ir:return i*t*4/s.components*s.byteLength;case Ji:case Qi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ts:case es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nr:case sr:return Math.max(i,16)*Math.max(t,8)/4;case er:case ir:return Math.max(i,8)*Math.max(t,8)/2;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ur:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _r:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ns:case Sr:case Er:return Math.ceil(i/4)*Math.ceil(t/4)*16;case io:case Tr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case br:case Ar:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _c(i){switch(i){case nn:case Za:return{byteLength:1,components:1};case Si:case Ka:case Ti:return{byteLength:2,components:1};case Pr:case Dr:return{byteLength:2,components:4};case Dn:case Cr:case Je:return{byteLength:4,components:1};case ja:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yo(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gc(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],y=f[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,f[d]=y)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const y=f[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ec=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ac=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$c=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,su=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,au=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,du=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Au=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Du=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ou=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ku=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ju=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:vc,alphahash_pars_fragment:xc,alphamap_fragment:yc,alphamap_pars_fragment:Mc,alphatest_fragment:Sc,alphatest_pars_fragment:Ec,aomap_fragment:Tc,aomap_pars_fragment:bc,batching_pars_vertex:Ac,batching_vertex:Rc,begin_vertex:wc,beginnormal_vertex:Cc,bsdfs:Pc,iridescence_fragment:Dc,bumpmap_pars_fragment:Lc,clipping_planes_fragment:Uc,clipping_planes_pars_fragment:Ic,clipping_planes_pars_vertex:Nc,clipping_planes_vertex:Fc,color_fragment:Oc,color_pars_fragment:Bc,color_pars_vertex:zc,color_vertex:kc,common:Hc,cube_uv_reflection_fragment:Vc,defaultnormal_vertex:Gc,displacementmap_pars_vertex:Wc,displacementmap_vertex:Xc,emissivemap_fragment:Yc,emissivemap_pars_fragment:qc,colorspace_fragment:Zc,colorspace_pars_fragment:Kc,envmap_fragment:jc,envmap_common_pars_fragment:$c,envmap_pars_fragment:Jc,envmap_pars_vertex:Qc,envmap_physical_pars_fragment:u1,envmap_vertex:t1,fog_vertex:e1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:s1,gradientmap_pars_fragment:r1,lightmap_pars_fragment:a1,lights_lambert_fragment:o1,lights_lambert_pars_fragment:l1,lights_pars_begin:c1,lights_toon_fragment:h1,lights_toon_pars_fragment:d1,lights_phong_fragment:f1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:_1,lights_fragment_begin:g1,lights_fragment_maps:v1,lights_fragment_end:x1,logdepthbuf_fragment:y1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:E1,map_fragment:T1,map_pars_fragment:b1,map_particle_fragment:A1,map_particle_pars_fragment:R1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:C1,morphinstance_vertex:P1,morphcolor_vertex:D1,morphnormal_vertex:L1,morphtarget_pars_vertex:U1,morphtarget_vertex:I1,normal_fragment_begin:N1,normal_fragment_maps:F1,normal_pars_fragment:O1,normal_pars_vertex:B1,normal_vertex:z1,normalmap_pars_fragment:k1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:W1,opaque_fragment:X1,packing:Y1,premultiplied_alpha_fragment:q1,project_vertex:Z1,dithering_fragment:K1,dithering_pars_fragment:j1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:tu,shadowmap_vertex:eu,shadowmask_pars_fragment:nu,skinbase_vertex:iu,skinning_pars_vertex:su,skinning_vertex:ru,skinnormal_vertex:au,specularmap_fragment:ou,specularmap_pars_fragment:lu,tonemapping_fragment:cu,tonemapping_pars_fragment:uu,transmission_fragment:hu,transmission_pars_fragment:du,uv_pars_fragment:fu,uv_pars_vertex:pu,uv_vertex:mu,worldpos_vertex:_u,background_vert:gu,background_frag:vu,backgroundCube_vert:xu,backgroundCube_frag:yu,cube_vert:Mu,cube_frag:Su,depth_vert:Eu,depth_frag:Tu,distanceRGBA_vert:bu,distanceRGBA_frag:Au,equirect_vert:Ru,equirect_frag:wu,linedashed_vert:Cu,linedashed_frag:Pu,meshbasic_vert:Du,meshbasic_frag:Lu,meshlambert_vert:Uu,meshlambert_frag:Iu,meshmatcap_vert:Nu,meshmatcap_frag:Fu,meshnormal_vert:Ou,meshnormal_frag:Bu,meshphong_vert:zu,meshphong_frag:ku,meshphysical_vert:Hu,meshphysical_frag:Vu,meshtoon_vert:Gu,meshtoon_frag:Wu,points_vert:Xu,points_frag:Yu,shadow_vert:qu,shadow_frag:Zu,sprite_vert:Ku,sprite_frag:ju},et={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},He={basic:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new qt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ve([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ve([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new qt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ve([et.points,et.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ve([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ve([et.common,et.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ve([et.sprite,et.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:ve([et.common,et.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:ve([et.lights,et.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};He.physical={uniforms:ve([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Zi={r:0,b:0,g:0},En=new sn,$u=new oe;function Ju(i,t,e,n,s,r,a){const o=new qt(0);let l=r===!0?0:1,c,h,f=null,d=0,m=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function y(T){let E=!1;const U=v(T);U===null?u(o,l):U&&U.isColor&&(u(U,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,E){const U=v(E);U&&(U.isCubeTexture||U.mapping===os)?(h===void 0&&(h=new tn(new Ai(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:hi(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),En.copy(E.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($u.makeRotationFromEuler(En)),h.material.toneMapped=Gt.getTransfer(U.colorSpace)!==Zt,(f!==U||d!==U.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=U,d=U.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new tn(new cs(2,2),new _n({name:"BackgroundMaterial",uniforms:hi(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(U.colorSpace)!==Zt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||d!==U.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=U,d=U.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,E){T.getRGB(Zi,mo(i)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,E,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:y,addToRenderList:p,dispose:A}}function Qu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,w,G,z,Z){let K=!1;const X=f(z,G,w);r!==X&&(r=X,c(r.object)),K=m(x,z,G,Z),K&&v(x,z,G,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(x,w,G,z),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,w,G){const z=G.wireframe===!0;let Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let K=Z[w.id];K===void 0&&(K={},Z[w.id]=K);let X=K[z];return X===void 0&&(X=d(l()),K[z]=X),X}function d(x){const w=[],G=[],z=[];for(let Z=0;Z<e;Z++)w[Z]=0,G[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:G,attributeDivisors:z,object:x,attributes:{},index:null}}function m(x,w,G,z){const Z=r.attributes,K=w.attributes;let X=0;const $=G.getAttributes();for(const H in $)if($[H].location>=0){const ut=Z[H];let gt=K[H];if(gt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function v(x,w,G,z){const Z={},K=w.attributes;let X=0;const $=G.getAttributes();for(const H in $)if($[H].location>=0){let ut=K[H];ut===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor));const gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),Z[H]=gt,X++}r.attributes=Z,r.attributesNum=X,r.index=z}function y(){const x=r.newAttributes;for(let w=0,G=x.length;w<G;w++)x[w]=0}function p(x){u(x,0)}function u(x,w){const G=r.newAttributes,z=r.enabledAttributes,Z=r.attributeDivisors;G[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),Z[x]!==w&&(i.vertexAttribDivisor(x,w),Z[x]=w)}function A(){const x=r.newAttributes,w=r.enabledAttributes;for(let G=0,z=w.length;G<z;G++)w[G]!==x[G]&&(i.disableVertexAttribArray(G),w[G]=0)}function T(x,w,G,z,Z,K,X){X===!0?i.vertexAttribIPointer(x,w,G,Z,K):i.vertexAttribPointer(x,w,G,z,Z,K)}function E(x,w,G,z){y();const Z=z.attributes,K=G.getAttributes(),X=w.defaultAttributeValues;for(const $ in K){const H=K[$];if(H.location>=0){let st=Z[$];if(st===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const ut=st.normalized,gt=st.itemSize,It=t.get(st);if(It===void 0)continue;const jt=It.buffer,W=It.type,tt=It.bytesPerElement,mt=W===i.INT||W===i.UNSIGNED_INT||st.gpuType===Cr;if(st.isInterleavedBufferAttribute){const rt=st.data,Et=rt.stride,Rt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)u(H.location+Nt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)p(H.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Nt=0;Nt<H.locationSize;Nt++)T(H.location+Nt,gt/H.locationSize,W,ut,Et*tt,(Rt+gt/H.locationSize*Nt)*tt,mt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)u(H.location+rt,st.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let rt=0;rt<H.locationSize;rt++)T(H.location+rt,gt/H.locationSize,W,ut,gt*tt,gt/H.locationSize*rt*tt,mt)}}else if(X!==void 0){const ut=X[$];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}A()}function U(){I();for(const x in n){const w=n[x];for(const G in w){const z=w[G];for(const Z in z)h(z[Z].object),delete z[Z];delete w[G]}delete n[x]}}function D(x){if(n[x.id]===void 0)return;const w=n[x.id];for(const G in w){const z=w[G];for(const Z in z)h(z[Z].object),delete z[Z];delete w[G]}delete n[x.id]}function R(x){for(const w in n){const G=n[w];if(G[x.id]===void 0)continue;const z=G[x.id];for(const Z in z)h(z[Z].object),delete z[Z];delete G[x.id]}}function I(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function th(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];e.update(m,n,1)}function l(c,h,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let v=0;for(let y=0;y<f;y++)v+=h[y]*d[y];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function eh(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ze&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Je&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:U,maxSamples:D}}function nh(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hn,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||v===null||v.length===0||r&&!p)r?h(null):c();else{const A=r?0:n,T=A*4;let E=u.clippingState||null;l.value=E,E=h(v,d,T,m);for(let U=0;U!==T;++U)E[U]=e[U];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,v){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const u=m+y*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,E=m;T!==y;++T,E+=4)a.copy(f[T]).applyMatrix4(A,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function ih(i){let t=new WeakMap;function e(a,o){return o===$s?a.mapping=ai:o===Js&&(a.mapping=oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$s||o===Js)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new oc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ti=4,xa=[.125,.215,.35,.446,.526,.582],Rn=20,Is=new fc,ya=new qt;let Ns=null,Fs=0,Os=0,Bs=!1;const bn=(1+Math.sqrt(5))/2,jn=1/bn,Ma=[new F(-bn,jn,0),new F(bn,jn,0),new F(-jn,0,bn),new F(jn,0,bn),new F(0,bn,-jn),new F(0,bn,jn),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Sa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ns,Fs,Os),this._renderer.xr.enabled=Bs,t.scissorTest=!1,Ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ai||t.mapping===oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Ti,format:ze,colorSpace:ui,depthBuffer:!1},s=Ea(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sh(r)),this._blurMaterial=rh(r,t,e)}return s}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,Is)}_sceneToCubeUV(t,e,n,s){const o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ya),h.toneMapping=pn,h.autoClear=!1;const m=new ho({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),v=new tn(new Ai,m);let y=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,y=!0):(m.color.copy(ya),y=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):A===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const T=this._cubeSize;Ki(s,A*T,u>2?T:0,T,T),h.setRenderTarget(s),y&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ai||t.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ta());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new tn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ki(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Is)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ma[(s-r-1)%Ma.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new tn(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),y=r/v,p=isFinite(r)?1+Math.floor(h*y):Rn;p>Rn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rn}`);const u=[];let A=0;for(let R=0;R<Rn;++R){const I=R/y,M=Math.exp(-I*I/2);u.push(M),R===0?A+=M:R<p&&(A+=2*M)}for(let R=0;R<u.length;R++)u[R]=u[R]/A;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=v,d.mipInt.value=T-n;const E=this._sizeLods[s],U=3*E*(s>T-ti?s-T+ti:0),D=4*(this._cubeSize-E);Ki(e,U,D,3*E,2*E),l.setRenderTarget(e),l.render(f,Is)}}function sh(i){const t=[],e=[],n=[];let s=i;const r=i-ti+1+xa.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ti?l=xa[a-i+ti-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,y=3,p=2,u=1,A=new Float32Array(y*v*m),T=new Float32Array(p*v*m),E=new Float32Array(u*v*m);for(let D=0;D<m;D++){const R=D%3*2/3-1,I=D>2?0:-1,M=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];A.set(M,y*v*D),T.set(d,p*v*D);const x=[D,D,D,D,D,D];E.set(x,u*v*D)}const U=new Nn;U.setAttribute("position",new Ge(A,y)),U.setAttribute("uv",new Ge(T,p)),U.setAttribute("faceIndex",new Ge(E,u)),t.push(U),s>ti&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ea(i,t,e){const n=new Ln(i,t,e);return n.texture.mapping=os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rh(i,t,e){const n=new Float32Array(Rn),s=new F(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ta(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ba(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Or(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ah(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$s||l===Js,h=l===ai||l===oi;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Sa(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Sa(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function oh(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Jn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lh(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,v=f.attributes.position;let y=0;if(m!==null){const A=m.array;y=m.version;for(let T=0,E=A.length;T<E;T+=3){const U=A[T+0],D=A[T+1],R=A[T+2];d.push(U,D,D,R,R,U)}}else if(v!==void 0){const A=v.array;y=v.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const U=T+0,D=T+1,R=T+2;d.push(U,D,D,R,R,U)}}else return;const p=new(ro(d)?po:fo)(d,1);p.version=y;const u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ch(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,d*a,v),e.update(m,n,v))}function h(d,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];e.update(p,n,1)}function f(d,m,v,y){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],y[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,y,0,v);let u=0;for(let A=0;A<v;A++)u+=m[A]*y[A];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function uh(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hh(i,t,e){const n=new WeakMap,s=new se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),p===!0&&(E=3);let U=o.attributes.position.count*E,D=1;U>t.maxTextureSize&&(D=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*D*4*f),I=new oo(R,U,D,f);I.type=Je,I.needsUpdate=!0;const M=E*4;for(let w=0;w<f;w++){const G=u[w],z=A[w],Z=T[w],K=U*D*4*w;for(let X=0;X<G.count;X++){const $=X*M;v===!0&&(s.fromBufferAttribute(G,X),R[K+$+0]=s.x,R[K+$+1]=s.y,R[K+$+2]=s.z,R[K+$+3]=0),y===!0&&(s.fromBufferAttribute(z,X),R[K+$+4]=s.x,R[K+$+5]=s.y,R[K+$+6]=s.z,R[K+$+7]=0),p===!0&&(s.fromBufferAttribute(Z,X),R[K+$+8]=s.x,R[K+$+9]=s.y,R[K+$+10]=s.z,R[K+$+11]=Z.itemSize===4?s.w:1)}}d={count:f,texture:I,size:new Lt(U,D)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dh(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Mo=new Se,Aa=new xo(1,1),So=new oo,Eo=new Xl,To=new go,Ra=[],wa=[],Ca=new Float32Array(16),Pa=new Float32Array(9),Da=new Float32Array(4);function fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ra[s];if(r===void 0&&(r=new Float32Array(s),Ra[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function us(i,t){let e=wa[t];e===void 0&&(e=new Int32Array(t),wa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ph(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function mh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function _h(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function gh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;Da.set(n),i.uniformMatrix2fv(this.addr,!1,Da),ue(e,n)}}function vh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;Pa.set(n),i.uniformMatrix3fv(this.addr,!1,Pa),ue(e,n)}}function xh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;Ca.set(n),i.uniformMatrix4fv(this.addr,!1,Ca),ue(e,n)}}function yh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function Sh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function Eh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function Th(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function Ah(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function Rh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function wh(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Aa.compareFunction=so,r=Aa):r=Mo,e.setTexture2D(t||r,s)}function Ch(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eo,s)}function Ph(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||To,s)}function Dh(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||So,s)}function Lh(i){switch(i){case 5126:return fh;case 35664:return ph;case 35665:return mh;case 35666:return _h;case 35674:return gh;case 35675:return vh;case 35676:return xh;case 5124:case 35670:return yh;case 35667:case 35671:return Mh;case 35668:case 35672:return Sh;case 35669:case 35673:return Eh;case 5125:return Th;case 36294:return bh;case 36295:return Ah;case 36296:return Rh;case 35678:case 36198:case 36298:case 36306:case 35682:return wh;case 35679:case 36299:case 36307:return Ch;case 35680:case 36300:case 36308:case 36293:return Ph;case 36289:case 36303:case 36311:case 36292:return Dh}}function Uh(i,t){i.uniform1fv(this.addr,t)}function Ih(i,t){const e=fi(t,this.size,2);i.uniform2fv(this.addr,e)}function Nh(i,t){const e=fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Fh(i,t){const e=fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Oh(i,t){const e=fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bh(i,t){const e=fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zh(i,t){const e=fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kh(i,t){i.uniform1iv(this.addr,t)}function Hh(i,t){i.uniform2iv(this.addr,t)}function Vh(i,t){i.uniform3iv(this.addr,t)}function Gh(i,t){i.uniform4iv(this.addr,t)}function Wh(i,t){i.uniform1uiv(this.addr,t)}function Xh(i,t){i.uniform2uiv(this.addr,t)}function Yh(i,t){i.uniform3uiv(this.addr,t)}function qh(i,t){i.uniform4uiv(this.addr,t)}function Zh(i,t,e){const n=this.cache,s=t.length,r=us(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Mo,r[a])}function Kh(i,t,e){const n=this.cache,s=t.length,r=us(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eo,r[a])}function jh(i,t,e){const n=this.cache,s=t.length,r=us(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||To,r[a])}function $h(i,t,e){const n=this.cache,s=t.length,r=us(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||So,r[a])}function Jh(i){switch(i){case 5126:return Uh;case 35664:return Ih;case 35665:return Nh;case 35666:return Fh;case 35674:return Oh;case 35675:return Bh;case 35676:return zh;case 5124:case 35670:return kh;case 35667:case 35671:return Hh;case 35668:case 35672:return Vh;case 35669:case 35673:return Gh;case 5125:return Wh;case 36294:return Xh;case 36295:return Yh;case 36296:return qh;case 35678:case 36198:case 36298:case 36306:case 35682:return Zh;case 35679:case 36299:case 36307:return Kh;case 35680:case 36300:case 36308:case 36293:return jh;case 36289:case 36303:case 36311:case 36292:return $h}}class Qh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lh(e.type)}}class td{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jh(e.type)}}class ed{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function La(i,t){i.seq.push(t),i.map[t.id]=t}function nd(i,t,e){const n=i.name,s=n.length;for(zs.lastIndex=0;;){const r=zs.exec(n),a=zs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){La(e,c===void 0?new Qh(o,i,t):new td(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ed(o),La(e,f)),e=f}}}class is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);nd(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ua(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const id=37297;let sd=0;function rd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ia=new Ct;function ad(i){Gt._getMatrix(Ia,Gt.workingColorSpace,i);const t=`mat3( ${Ia.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case ss:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Na(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rd(i.getShaderSource(t),a)}else return s}function od(i,t){const e=ad(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ld(i,t){let e;switch(t){case tl:e="Linear";break;case el:e="Reinhard";break;case nl:e="Cineon";break;case il:e="ACESFilmic";break;case rl:e="AgX";break;case al:e="Neutral";break;case sl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ji=new F;function cd(){Gt.getLuminanceCoefficients(ji);const i=ji.x.toFixed(4),t=ji.y.toFixed(4),e=ji.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ud(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xi).join(`
`)}function hd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xi(i){return i!==""}function Fa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rr(i){return i.replace(fd,md)}const pd=new Map;function md(i,t){let e=Dt[t];if(e===void 0){const n=pd.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rr(e)}const _d=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(i){return i.replace(_d,gd)}function gd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function za(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function xd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ai:case oi:t="ENVMAP_TYPE_CUBE";break;case os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Md(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case Jo:t="ENVMAP_BLENDING_MIX";break;case Qo:t="ENVMAP_BLENDING_ADD";break}return t}function Sd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ed(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vd(e),c=xd(e),h=yd(e),f=Md(e),d=Sd(e),m=ud(e),v=hd(r),y=s.createProgram();let p,u,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xi).join(`
`),u.length>0&&(u+=`
`)):(p=[za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),u=[za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==pn?ld("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,od("linearToOutputTexel",e.outputColorSpace),cd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xi).join(`
`)),a=Rr(a),a=Fa(a,e),a=Oa(a,e),o=Rr(o),o=Fa(o,e),o=Oa(o,e),a=Ba(a),o=Ba(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=A+p+a,E=A+u+o,U=Ua(s,s.VERTEX_SHADER,T),D=Ua(s,s.FRAGMENT_SHADER,E);s.attachShader(y,U),s.attachShader(y,D),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(w){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(U).trim(),Z=s.getShaderInfoLog(D).trim();let K=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,U,D);else{const $=Na(s,U,"vertex"),H=Na(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+$+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Z==="")&&(X=!1);X&&(w.diagnostics={runnable:K,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:Z,prefix:u}})}s.deleteShader(U),s.deleteShader(D),I=new is(s,y),M=dd(s,y)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,id)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sd++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=D,this}let Td=0;class bd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ad(t),e.set(t,n)),n}}class Ad{constructor(t){this.id=Td++,this.code=t,this.usedTimes=0}}function Rd(i,t,e,n,s,r,a){const o=new co,l=new bd,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,w,G,z){const Z=G.fog,K=z.geometry,X=M.isMeshStandardMaterial?G.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),H=$&&$.mapping===os?$.image.height:null,st=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=ut!==void 0?ut.length:0;let It=0;K.morphAttributes.position!==void 0&&(It=1),K.morphAttributes.normal!==void 0&&(It=2),K.morphAttributes.color!==void 0&&(It=3);let jt,W,tt,mt;if(st){const Yt=He[st];jt=Yt.vertexShader,W=Yt.fragmentShader}else jt=M.vertexShader,W=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),mt=l.getFragmentShaderID(M);const rt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Rt=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,te=!!M.map,zt=!!M.matcap,ie=!!$,b=!!M.aoMap,Re=!!M.lightMap,Ft=!!M.bumpMap,Ot=!!M.normalMap,vt=!!M.displacementMap,Jt=!!M.emissiveMap,xt=!!M.metalnessMap,S=!!M.roughnessMap,_=M.anisotropy>0,N=M.clearcoat>0,Y=M.dispersion>0,j=M.iridescence>0,V=M.sheen>0,_t=M.transmission>0,at=_&&!!M.anisotropyMap,ht=N&&!!M.clearcoatMap,kt=N&&!!M.clearcoatNormalMap,Q=N&&!!M.clearcoatRoughnessMap,dt=j&&!!M.iridescenceMap,St=j&&!!M.iridescenceThicknessMap,Tt=V&&!!M.sheenColorMap,ft=V&&!!M.sheenRoughnessMap,Bt=!!M.specularMap,Pt=!!M.specularColorMap,$t=!!M.specularIntensityMap,C=_t&&!!M.transmissionMap,nt=_t&&!!M.thicknessMap,k=!!M.gradientMap,q=!!M.alphaMap,lt=M.alphaTest>0,ot=!!M.alphaHash,wt=!!M.extensions;let ee=pn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ee=i.toneMapping);const fe={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:W,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ui,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:zt,envMap:ie,envMapMode:ie&&$.mapping,envMapCubeUVHeight:H,aoMap:b,lightMap:Re,bumpMap:Ft,normalMap:Ot,displacementMap:d&&vt,emissiveMap:Jt,normalMapObjectSpace:Ot&&M.normalMapType===hl,normalMapTangentSpace:Ot&&M.normalMapType===ul,metalnessMap:xt,roughnessMap:S,anisotropy:_,anisotropyMap:at,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:kt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:St,sheen:V,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:Bt,specularColorMap:Pt,specularIntensityMap:$t,transmission:_t,transmissionMap:C,thicknessMap:nt,gradientMap:k,opaque:M.transparent===!1&&M.blending===ni&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:lt,alphaHash:ot,combine:M.combine,mapUv:te&&y(M.map.channel),aoMapUv:b&&y(M.aoMap.channel),lightMapUv:Re&&y(M.lightMap.channel),bumpMapUv:Ft&&y(M.bumpMap.channel),normalMapUv:Ot&&y(M.normalMap.channel),displacementMapUv:vt&&y(M.displacementMap.channel),emissiveMapUv:Jt&&y(M.emissiveMap.channel),metalnessMapUv:xt&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:at&&y(M.anisotropyMap.channel),clearcoatMapUv:ht&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:kt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:St&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ft&&y(M.sheenRoughnessMap.channel),specularMapUv:Bt&&y(M.specularMap.channel),specularColorMapUv:Pt&&y(M.specularColorMap.channel),specularIntensityMapUv:$t&&y(M.specularIntensityMap.channel),transmissionMapUv:C&&y(M.transmissionMap.channel),thicknessMapUv:nt&&y(M.thicknessMap.channel),alphaMapUv:q&&y(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ot||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(te||q),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Et,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:It,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&Gt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:Jt&&M.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$e,flipSided:M.side===Me,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:wt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&M.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function u(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)x.push(w),x.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(A(x,M),T(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function A(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function T(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const x=v[M.type];let w;if(x){const G=He[x];w=ic.clone(G.uniforms)}else w=M.uniforms;return w}function U(M,x){let w;for(let G=0,z=h.length;G<z;G++){const Z=h[G];if(Z.cacheKey===x){w=Z,++w.usedTimes;break}}return w===void 0&&(w=new Ed(i,x,M,r),h.push(w)),w}function D(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:U,releaseProgram:D,releaseShaderCache:R,programs:h,dispose:I}}function wd(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ka(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ha(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,m,v,y,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:y,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=y,u.group=p),t++,u}function o(f,d,m,v,y,p){const u=a(f,d,m,v,y,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,d,m,v,y,p){const u=a(f,d,m,v,y,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||Cd),n.length>1&&n.sort(d||ka),s.length>1&&s.sort(d||ka)}function h(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Pd(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ha,i.set(n,[a])):s>=r.length?(a=new Ha,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Ld(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ud=0;function Id(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nd(i){const t=new Dd,e=Ld(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new oe,a=new oe;function o(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,y=0,p=0,u=0,A=0,T=0,E=0,U=0,D=0,R=0;c.sort(Id);for(let M=0,x=c.length;M<x;M++){const w=c[M],G=w.color,z=w.intensity,Z=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=G.r*z,f+=G.g*z,d+=G.b*z;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],z);R++}else if(w.isDirectionalLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=w.shadow.matrix,A++}n.directional[m]=X,m++}else if(w.isSpotLight){const X=t.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=Z,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[y]=X;const $=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,$.updateMatrices(w),w.castShadow&&D++),n.spotLightMatrix[y]=$.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=K,E++}y++}else if(w.isRectAreaLight){const X=t.get(w);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=X,p++}else if(w.isPointLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const $=w.shadow,H=e.get(w);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=w.shadow.matrix,T++}n.point[v]=X,v++}else if(w.isHemisphereLight){const X=t.get(w);X.skyColor.copy(w.color).multiplyScalar(z),X.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[u]=X,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==m||I.pointLength!==v||I.spotLength!==y||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==E||I.numSpotMaps!==U||I.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+U-D,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,I.directionalLength=m,I.pointLength=v,I.spotLength=y,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=E,I.numSpotMaps=U,I.numLightProbes=R,n.version=Ud++)}function l(c,h){let f=0,d=0,m=0,v=0,y=0;const p=h.matrixWorldInverse;for(let u=0,A=c.length;u<A;u++){const T=c[u];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function Va(i){const t=new Nd(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Fd(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Va(i),t.set(s,[o])):r>=a.length?(o=new Va(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Od=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zd(i,t,e){let n=new vo;const s=new Lt,r=new Lt,a=new se,o=new hc({depthPacking:cl}),l=new dc,c={},h=e.maxTextureSize,f={[mn]:Me,[Me]:mn,[$e]:$e},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Od,fragmentShader:Bd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Nn;v.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let u=this.type;this.render=function(D,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),G=i.state;G.setBlending(fn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==je&&this.type===je,Z=u===je&&this.type!==je;for(let K=0,X=D.length;K<X;K++){const $=D[K],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||z===!0||Z===!0){const gt=this.type!==je?{minFilter:ke,magFilter:ke}:{};H.map!==null&&H.map.dispose(),H.map=new Ln(s.x,s.y,gt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ut=H.getViewportCount();for(let gt=0;gt<ut;gt++){const It=H.getViewport(gt);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),G.viewport(a),H.updateMatrices($,gt),n=H.getFrustum(),E(R,I,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===je&&A(H,I),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,w)};function A(D,R){const I=t.update(y);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ln(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,y,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(R,null,I,m,y,null)}function T(D,R,I,M){let x=null;const w=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(w!==void 0)x=w;else if(x=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=x.uuid,z=R.uuid;let Z=c[G];Z===void 0&&(Z={},c[G]=Z);let K=Z[z];K===void 0&&(K=x.clone(),Z[z]=K,R.addEventListener("dispose",U)),x=K}if(x.visible=R.visible,x.wireframe=R.wireframe,M===je?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=I}return x}function E(D,R,I,M,x){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===je)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const z=t.update(D),Z=D.material;if(Array.isArray(Z)){const K=z.groups;for(let X=0,$=K.length;X<$;X++){const H=K[X],st=Z[H.materialIndex];if(st&&st.visible){const ut=T(D,st,M,x);D.onBeforeShadow(i,D,R,I,z,ut,H),i.renderBufferDirect(I,null,z,ut,D,H),D.onAfterShadow(i,D,R,I,z,ut,H)}}}else if(Z.visible){const K=T(D,Z,M,x);D.onBeforeShadow(i,D,R,I,z,K,null),i.renderBufferDirect(I,null,z,K,D,null),D.onAfterShadow(i,D,R,I,z,K,null)}}const G=D.children;for(let z=0,Z=G.length;z<Z;z++)E(G[z],R,I,M,x)}function U(D){D.target.removeEventListener("dispose",U);for(const I in c){const M=c[I],x=D.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const kd={[Ws]:Xs,[Ys]:Ks,[qs]:js,[ri]:Zs,[Xs]:Ws,[Ks]:Ys,[js]:qs,[Zs]:ri};function Hd(i,t){function e(){let C=!1;const nt=new se;let k=null;const q=new se(0,0,0,0);return{setMask:function(lt){k!==lt&&!C&&(i.colorMask(lt,lt,lt,lt),k=lt)},setLocked:function(lt){C=lt},setClear:function(lt,ot,wt,ee,fe){fe===!0&&(lt*=ee,ot*=ee,wt*=ee),nt.set(lt,ot,wt,ee),q.equals(nt)===!1&&(i.clearColor(lt,ot,wt,ee),q.copy(nt))},reset:function(){C=!1,k=null,q.set(-1,0,0,0)}}}function n(){let C=!1,nt=!1,k=null,q=null,lt=null;return{setReversed:function(ot){if(nt!==ot){const wt=t.get("EXT_clip_control");nt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT);const ee=lt;lt=null,this.setClear(ee)}nt=ot},getReversed:function(){return nt},setTest:function(ot){ot?rt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ot){k!==ot&&!C&&(i.depthMask(ot),k=ot)},setFunc:function(ot){if(nt&&(ot=kd[ot]),q!==ot){switch(ot){case Ws:i.depthFunc(i.NEVER);break;case Xs:i.depthFunc(i.ALWAYS);break;case Ys:i.depthFunc(i.LESS);break;case ri:i.depthFunc(i.LEQUAL);break;case qs:i.depthFunc(i.EQUAL);break;case Zs:i.depthFunc(i.GEQUAL);break;case Ks:i.depthFunc(i.GREATER);break;case js:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=ot}},setLocked:function(ot){C=ot},setClear:function(ot){lt!==ot&&(nt&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){C=!1,k=null,q=null,lt=null,nt=!1}}}function s(){let C=!1,nt=null,k=null,q=null,lt=null,ot=null,wt=null,ee=null,fe=null;return{setTest:function(Yt){C||(Yt?rt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Yt){nt!==Yt&&!C&&(i.stencilMask(Yt),nt=Yt)},setFunc:function(Yt,Ue,We){(k!==Yt||q!==Ue||lt!==We)&&(i.stencilFunc(Yt,Ue,We),k=Yt,q=Ue,lt=We)},setOp:function(Yt,Ue,We){(ot!==Yt||wt!==Ue||ee!==We)&&(i.stencilOp(Yt,Ue,We),ot=Yt,wt=Ue,ee=We)},setLocked:function(Yt){C=Yt},setClear:function(Yt){fe!==Yt&&(i.clearStencil(Yt),fe=Yt)},reset:function(){C=!1,nt=null,k=null,q=null,lt=null,ot=null,wt=null,ee=null,fe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,m=[],v=null,y=!1,p=null,u=null,A=null,T=null,E=null,U=null,D=null,R=new qt(0,0,0),I=0,M=!1,x=null,w=null,G=null,z=null,Z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=$>=2);let st=null,ut={};const gt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),jt=new se().fromArray(gt),W=new se().fromArray(It);function tt(C,nt,k,q){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(C,ot),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<k;wt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const mt={};mt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(ri),Ft(!1),Ot(Yr),rt(i.CULL_FACE),b(fn);function rt(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Et(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Rt(C,nt){return f[C]!==nt?(i.bindFramebuffer(C,nt),f[C]=nt,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Nt(C,nt){let k=m,q=!1;if(C){k=d.get(nt),k===void 0&&(k=[],d.set(nt,k));const lt=C.textures;if(k.length!==lt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,wt=lt.length;ot<wt;ot++)k[ot]=i.COLOR_ATTACHMENT0+ot;k.length=lt.length,q=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,q=!0);q&&i.drawBuffers(k)}function te(C){return v!==C?(i.useProgram(C),v=C,!0):!1}const zt={[An]:i.FUNC_ADD,[No]:i.FUNC_SUBTRACT,[Fo]:i.FUNC_REVERSE_SUBTRACT};zt[Oo]=i.MIN,zt[Bo]=i.MAX;const ie={[zo]:i.ZERO,[ko]:i.ONE,[Ho]:i.SRC_COLOR,[Vs]:i.SRC_ALPHA,[qo]:i.SRC_ALPHA_SATURATE,[Xo]:i.DST_COLOR,[Go]:i.DST_ALPHA,[Vo]:i.ONE_MINUS_SRC_COLOR,[Gs]:i.ONE_MINUS_SRC_ALPHA,[Yo]:i.ONE_MINUS_DST_COLOR,[Wo]:i.ONE_MINUS_DST_ALPHA,[Zo]:i.CONSTANT_COLOR,[Ko]:i.ONE_MINUS_CONSTANT_COLOR,[jo]:i.CONSTANT_ALPHA,[$o]:i.ONE_MINUS_CONSTANT_ALPHA};function b(C,nt,k,q,lt,ot,wt,ee,fe,Yt){if(C===fn){y===!0&&(Et(i.BLEND),y=!1);return}if(y===!1&&(rt(i.BLEND),y=!0),C!==Io){if(C!==p||Yt!==M){if((u!==An||E!==An)&&(i.blendEquation(i.FUNC_ADD),u=An,E=An),Yt)switch(C){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qr:i.blendFunc(i.ONE,i.ONE);break;case Zr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,T=null,U=null,D=null,R.set(0,0,0),I=0,p=C,M=Yt}return}lt=lt||nt,ot=ot||k,wt=wt||q,(nt!==u||lt!==E)&&(i.blendEquationSeparate(zt[nt],zt[lt]),u=nt,E=lt),(k!==A||q!==T||ot!==U||wt!==D)&&(i.blendFuncSeparate(ie[k],ie[q],ie[ot],ie[wt]),A=k,T=q,U=ot,D=wt),(ee.equals(R)===!1||fe!==I)&&(i.blendColor(ee.r,ee.g,ee.b,fe),R.copy(ee),I=fe),p=C,M=!1}function Re(C,nt){C.side===$e?Et(i.CULL_FACE):rt(i.CULL_FACE);let k=C.side===Me;nt&&(k=!k),Ft(k),C.blending===ni&&C.transparent===!1?b(fn):b(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const q=C.stencilWrite;o.setTest(q),q&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Jt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){x!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),x=C)}function Ot(C){C!==Do?(rt(i.CULL_FACE),C!==w&&(C===Yr?i.cullFace(i.BACK):C===Lo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),w=C}function vt(C){C!==G&&(X&&i.lineWidth(C),G=C)}function Jt(C,nt,k){C?(rt(i.POLYGON_OFFSET_FILL),(z!==nt||Z!==k)&&(i.polygonOffset(nt,k),z=nt,Z=k)):Et(i.POLYGON_OFFSET_FILL)}function xt(C){C?rt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function S(C){C===void 0&&(C=i.TEXTURE0+K-1),st!==C&&(i.activeTexture(C),st=C)}function _(C,nt,k){k===void 0&&(st===null?k=i.TEXTURE0+K-1:k=st);let q=ut[k];q===void 0&&(q={type:void 0,texture:void 0},ut[k]=q),(q.type!==C||q.texture!==nt)&&(st!==k&&(i.activeTexture(k),st=k),i.bindTexture(C,nt||mt[C]),q.type=C,q.texture=nt)}function N(){const C=ut[st];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(C){jt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),jt.copy(C))}function ft(C){W.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),W.copy(C))}function Bt(C,nt){let k=c.get(nt);k===void 0&&(k=new WeakMap,c.set(nt,k));let q=k.get(C);q===void 0&&(q=i.getUniformBlockIndex(nt,C.name),k.set(C,q))}function Pt(C,nt){const q=c.get(nt).get(C);l.get(nt)!==q&&(i.uniformBlockBinding(nt,q,C.__bindingPointIndex),l.set(nt,q))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},f={},d=new WeakMap,m=[],v=null,y=!1,p=null,u=null,A=null,T=null,E=null,U=null,D=null,R=new qt(0,0,0),I=0,M=!1,x=null,w=null,G=null,z=null,Z=null,jt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Et,bindFramebuffer:Rt,drawBuffers:Nt,useProgram:te,setBlending:b,setMaterial:Re,setFlipSided:Ft,setCullFace:Ot,setLineWidth:vt,setPolygonOffset:Jt,setScissorTest:xt,activeTexture:S,bindTexture:_,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:dt,texImage3D:St,updateUBOMapping:Bt,uniformBlockBinding:Pt,texStorage2D:kt,texStorage3D:Q,texSubImage2D:V,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:Tt,viewport:ft,reset:$t}}function Vd(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,_){return m?new OffscreenCanvas(S,_):as("canvas")}function y(S,_,N){let Y=1;const j=xt(S);if((j.width>N||j.height>N)&&(Y=N/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(Y*j.width),_t=Math.floor(Y*j.height);f===void 0&&(f=v(V,_t));const at=_?v(V,_t):f;return at.width=V,at.height=_t,at.getContext("2d").drawImage(S,0,0,V,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+_t+")."),at}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function p(S){return S.generateMipmaps}function u(S){i.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,_,N,Y,j=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=_;if(_===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),_===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),_===i.RGBA){const _t=j?ss:Gt.getTransfer(Y);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=_t===Zt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function E(S,_){let N;return S?_===null||_===Dn||_===li?N=i.DEPTH24_STENCIL8:_===Je?N=i.DEPTH32F_STENCIL8:_===Si&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Dn||_===li?N=i.DEPTH_COMPONENT24:_===Je?N=i.DEPTH_COMPONENT32F:_===Si&&(N=i.DEPTH_COMPONENT16),N}function U(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==ke&&S.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function D(S){const _=S.target;_.removeEventListener("dispose",D),I(_),_.isVideoTexture&&h.delete(_)}function R(S){const _=S.target;_.removeEventListener("dispose",R),x(_)}function I(S){const _=n.get(S);if(_.__webglInit===void 0)return;const N=S.source,Y=d.get(N);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(S),Object.keys(Y).length===0&&d.delete(N)}n.remove(S)}function M(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const N=S.source,Y=d.get(N);delete Y[_.__cacheKey],a.memory.textures--}function x(S){const _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=S.textures;for(let Y=0,j=N.length;Y<j;Y++){const V=n.get(N[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(S)}let w=0;function G(){w=0}function z(){const S=w;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),w+=1,S}function Z(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function K(S,_){const N=n.get(S);if(S.isVideoTexture&&vt(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(N,S,_);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function X(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){W(N,S,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function $(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){W(N,S,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function H(S,_){const N=n.get(S);if(S.version>0&&N.__version!==S.version){tt(N,S,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const st={[Qs]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[tr]:i.MIRRORED_REPEAT},ut={[ke]:i.NEAREST,[ol]:i.NEAREST_MIPMAP_NEAREST,[Ci]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[fs]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},gt={[dl]:i.NEVER,[vl]:i.ALWAYS,[fl]:i.LESS,[so]:i.LEQUAL,[pl]:i.EQUAL,[gl]:i.GEQUAL,[ml]:i.GREATER,[_l]:i.NOTEQUAL};function It(S,_){if(_.type===Je&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===fs||_.magFilter===Ci||_.magFilter===Cn||_.minFilter===Ve||_.minFilter===fs||_.minFilter===Ci||_.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,st[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,gt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ke||_.minFilter!==Ci&&_.minFilter!==Cn||_.type===Je&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function jt(S,_){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",D));const Y=_.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const V=Z(_);if(V!==S.__cacheKey){j[V]===void 0&&(j[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[V].usedTimes++;const _t=j[S.__cacheKey];_t!==void 0&&(j[S.__cacheKey].usedTimes--,_t.usedTimes===0&&M(_)),S.__cacheKey=V,S.__webglTexture=j[V].texture}return N}function W(S,_,N){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const j=jt(S,_),V=_.source;e.bindTexture(Y,S.__webglTexture,i.TEXTURE0+N);const _t=n.get(V);if(V.version!==_t.__version||j===!0){e.activeTexture(i.TEXTURE0+N);const at=Gt.getPrimaries(Gt.workingColorSpace),ht=_.colorSpace===dn?null:Gt.getPrimaries(_.colorSpace),kt=_.colorSpace===dn||at===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Q=y(_.image,!1,s.maxTextureSize);Q=Jt(_,Q);const dt=r.convert(_.format,_.colorSpace),St=r.convert(_.type);let Tt=T(_.internalFormat,dt,St,_.colorSpace,_.isVideoTexture);It(Y,_);let ft;const Bt=_.mipmaps,Pt=_.isVideoTexture!==!0,$t=_t.__version===void 0||j===!0,C=V.dataReady,nt=U(_,Q);if(_.isDepthTexture)Tt=E(_.format===ci,_.type),$t&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Tt,Q.width,Q.height,0,dt,St,null));else if(_.isDataTexture)if(Bt.length>0){Pt&&$t&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Bt[0].width,Bt[0].height);for(let k=0,q=Bt.length;k<q;k++)ft=Bt[k],Pt?C&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,St,ft.data):e.texImage2D(i.TEXTURE_2D,k,Tt,ft.width,ft.height,0,dt,St,ft.data);_.generateMipmaps=!1}else Pt?($t&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Q.width,Q.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,St,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,Q.width,Q.height,0,dt,St,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,Bt[0].width,Bt[0].height,Q.depth);for(let k=0,q=Bt.length;k<q;k++)if(ft=Bt[k],_.format!==ze)if(dt!==null)if(Pt){if(C)if(_.layerUpdates.size>0){const lt=va(ft.width,ft.height,_.format,_.type);for(const ot of _.layerUpdates){const wt=ft.data.subarray(ot*lt/ft.data.BYTES_PER_ELEMENT,(ot+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ot,ft.width,ft.height,1,dt,wt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Tt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ft.width,ft.height,Q.depth,dt,St,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Tt,ft.width,ft.height,Q.depth,0,dt,St,ft.data)}else{Pt&&$t&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Bt[0].width,Bt[0].height);for(let k=0,q=Bt.length;k<q;k++)ft=Bt[k],_.format!==ze?dt!==null?Pt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?C&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft.width,ft.height,dt,St,ft.data):e.texImage2D(i.TEXTURE_2D,k,Tt,ft.width,ft.height,0,dt,St,ft.data)}else if(_.isDataArrayTexture)if(Pt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,Q.width,Q.height,Q.depth),C)if(_.layerUpdates.size>0){const k=va(Q.width,Q.height,_.format,_.type);for(const q of _.layerUpdates){const lt=Q.data.subarray(q*k/Q.data.BYTES_PER_ELEMENT,(q+1)*k/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,dt,St,lt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(_.isData3DTexture)Pt?($t&&e.texStorage3D(i.TEXTURE_3D,nt,Tt,Q.width,Q.height,Q.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(_.isFramebufferTexture){if($t)if(Pt)e.texStorage2D(i.TEXTURE_2D,nt,Tt,Q.width,Q.height);else{let k=Q.width,q=Q.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Tt,k,q,0,dt,St,null),k>>=1,q>>=1}}else if(Bt.length>0){if(Pt&&$t){const k=xt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Tt,k.width,k.height)}for(let k=0,q=Bt.length;k<q;k++)ft=Bt[k],Pt?C&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt,St,ft):e.texImage2D(i.TEXTURE_2D,k,Tt,dt,St,ft);_.generateMipmaps=!1}else if(Pt){if($t){const k=xt(Q);e.texStorage2D(i.TEXTURE_2D,nt,Tt,k.width,k.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,St,Q)}else e.texImage2D(i.TEXTURE_2D,0,Tt,dt,St,Q);p(_)&&u(Y),_t.__version=V.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function tt(S,_,N){if(_.image.length!==6)return;const Y=jt(S,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);const V=n.get(j);if(j.version!==V.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const _t=Gt.getPrimaries(Gt.workingColorSpace),at=_.colorSpace===dn?null:Gt.getPrimaries(_.colorSpace),ht=_.colorSpace===dn||_t===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const kt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let q=0;q<6;q++)!kt&&!Q?dt[q]=y(_.image[q],!0,s.maxCubemapSize):dt[q]=Q?_.image[q].image:_.image[q],dt[q]=Jt(_,dt[q]);const St=dt[0],Tt=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),Bt=T(_.internalFormat,Tt,ft,_.colorSpace),Pt=_.isVideoTexture!==!0,$t=V.__version===void 0||Y===!0,C=j.dataReady;let nt=U(_,St);It(i.TEXTURE_CUBE_MAP,_);let k;if(kt){Pt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Bt,St.width,St.height);for(let q=0;q<6;q++){k=dt[q].mipmaps;for(let lt=0;lt<k.length;lt++){const ot=k[lt];_.format!==ze?Tt!==null?Pt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,0,0,ot.width,ot.height,Tt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,Bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,0,0,ot.width,ot.height,Tt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt,Bt,ot.width,ot.height,0,Tt,ft,ot.data)}}}else{if(k=_.mipmaps,Pt&&$t){k.length>0&&nt++;const q=xt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Bt,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,dt[q].width,dt[q].height,Tt,ft,dt[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Bt,dt[q].width,dt[q].height,0,Tt,ft,dt[q].data);for(let lt=0;lt<k.length;lt++){const wt=k[lt].image[q].image;Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,0,0,wt.width,wt.height,Tt,ft,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,Bt,wt.width,wt.height,0,Tt,ft,wt.data)}}else{Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Tt,ft,dt[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Bt,Tt,ft,dt[q]);for(let lt=0;lt<k.length;lt++){const ot=k[lt];Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,0,0,Tt,ft,ot.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,lt+1,Bt,Tt,ft,ot.image[q])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),V.__version=j.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function mt(S,_,N,Y,j,V){const _t=r.convert(N.format,N.colorSpace),at=r.convert(N.type),ht=T(N.internalFormat,_t,at,N.colorSpace),kt=n.get(_),Q=n.get(N);if(Q.__renderTarget=_,!kt.__hasExternalTextures){const dt=Math.max(1,_.width>>V),St=Math.max(1,_.height>>V);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,V,ht,dt,St,_.depth,0,_t,at,null):e.texImage2D(j,V,ht,dt,St,0,_t,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Q.__webglTexture,0,Ft(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Q.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(S,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){const Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,V=E(_.stencilBuffer,j),_t=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ft(_);Ot(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,V,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,S)}else{const Y=_.textures;for(let j=0;j<Y.length;j++){const V=Y[j],_t=r.convert(V.format,V.colorSpace),at=r.convert(V.type),ht=T(V.internalFormat,_t,at,V.colorSpace),kt=Ft(_);N&&Ot(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,ht,_.width,_.height):Ot(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const j=Y.__webglTexture,V=Ft(_);if(_.depthTexture.format===ii)Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===ci)Ot(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Rt(S){const _=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Y}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Et(_.__webglFramebuffer,S)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(_.__webglDepthbuffer[Y],S,!1);else{const j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),rt(_.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(S,_,N){const Y=n.get(S);_!==void 0&&mt(Y.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Rt(S)}function te(S){const _=S.texture,N=n.get(S),Y=n.get(_);S.addEventListener("dispose",R);const j=S.textures,V=S.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),V){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let ht=0;ht<_.mipmaps.length;ht++)N.__webglFramebuffer[at][ht]=i.createFramebuffer()}else N.__webglFramebuffer[at]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)N.__webglFramebuffer[at]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(_t)for(let at=0,ht=j.length;at<ht;at++){const kt=n.get(j[at]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&Ot(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ht=j[at];N.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[at]);const kt=r.convert(ht.format,ht.colorSpace),Q=r.convert(ht.type),dt=T(ht.internalFormat,kt,Q,ht.colorSpace,S.isXRRenderTarget===!0),St=Ft(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,dt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,N.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),It(i.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)mt(N.__webglFramebuffer[at][ht],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else mt(N.__webglFramebuffer[at],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(_)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,ht=j.length;at<ht;at++){const kt=j[at],Q=n.get(kt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),It(i.TEXTURE_2D,kt),mt(N.__webglFramebuffer,S,kt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(kt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(at=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),It(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)mt(N.__webglFramebuffer[ht],S,_,i.COLOR_ATTACHMENT0,at,ht);else mt(N.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,at,0);p(_)&&u(at),e.unbindTexture()}S.depthBuffer&&Rt(S)}function zt(S){const _=S.textures;for(let N=0,Y=_.length;N<Y;N++){const j=_[N];if(p(j)){const V=A(S),_t=n.get(j).__webglTexture;e.bindTexture(V,_t),u(V),e.unbindTexture()}}}const ie=[],b=[];function Re(S){if(S.samples>0){if(Ot(S)===!1){const _=S.textures,N=S.width,Y=S.height;let j=i.COLOR_BUFFER_BIT;const V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(S),at=_.length>1;if(at)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const kt=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,j,i.NEAREST),l===!0&&(ie.length=0,b.length=0,ie.push(i.COLOR_ATTACHMENT0+ht),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ie.push(V),b.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const kt=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ft(S){return Math.min(s.maxSamples,S.samples)}function Ot(S){const _=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function vt(S){const _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Jt(S,_){const N=S.colorSpace,Y=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==ui&&N!==dn&&(Gt.getTransfer(N)===Zt?(Y!==ze||j!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function xt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Nt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ot}function Gd(i,t){function e(n,s=dn){let r;const a=Gt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Pr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ja)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Za)return i.BYTE;if(n===Ka)return i.SHORT;if(n===Si)return i.UNSIGNED_SHORT;if(n===Cr)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===Je)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===$a)return i.ALPHA;if(n===Ja)return i.RGB;if(n===ze)return i.RGBA;if(n===Qa)return i.LUMINANCE;if(n===to)return i.LUMINANCE_ALPHA;if(n===ii)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===eo)return i.RED;if(n===Lr)return i.RED_INTEGER;if(n===no)return i.RG;if(n===Ur)return i.RG_INTEGER;if(n===Ir)return i.RGBA_INTEGER;if(n===Ji||n===Qi||n===ts||n===es)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ji)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ji)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===er||n===nr||n===ir||n===sr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rr||n===ar||n===or)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rr||n===ar)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===or)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lr||n===cr||n===ur||n===hr||n===dr||n===fr||n===pr||n===mr||n===_r||n===gr||n===vr||n===xr||n===yr||n===Mr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ur)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_r)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mr)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ns||n===Sr||n===Er)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ns)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Er)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===Tr||n===br||n===Ar)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ns)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ar)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Wd={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const p=e.getJointPose(y,n),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Se,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:Xd,fragmentShader:Yd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zd extends In{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,v=null;const y=new qd,p=e.getContextAttributes();let u=null,A=null;const T=[],E=[],U=new Lt;let D=null;const R=new Le;R.viewport=new se;const I=new Le;I.viewport=new se;const M=[R,I],x=new pc;let w=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=T[W];return tt===void 0&&(tt=new ks,T[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=T[W];return tt===void 0&&(tt=new ks,T[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=T[W];return tt===void 0&&(tt=new ks,T[W]=tt),tt.getHandSpace()};function z(W){const tt=E.indexOf(W.inputSource);if(tt===-1)return;const mt=T[tt];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||a),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",K);for(let W=0;W<T.length;W++){const tt=E[W];tt!==null&&(E[W]=null,T[W].disconnect(tt))}w=null,G=null,y.reset(),t.setRenderTarget(u),m=null,d=null,f=null,s=null,A=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Ln(m.framebufferWidth,m.framebufferHeight,{format:ze,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,mt=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?ci:ii,mt=p.stencil?li:Dn);const Et={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new Ln(d.textureWidth,d.textureHeight,{format:ze,type:nn,depthTexture:new xo(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(W){for(let tt=0;tt<W.removed.length;tt++){const mt=W.removed[tt],rt=E.indexOf(mt);rt>=0&&(E[rt]=null,T[rt].disconnect(mt))}for(let tt=0;tt<W.added.length;tt++){const mt=W.added[tt];let rt=E.indexOf(mt);if(rt===-1){for(let Rt=0;Rt<T.length;Rt++)if(Rt>=E.length){E.push(mt),rt=Rt;break}else if(E[Rt]===null){E[Rt]=mt,rt=Rt;break}if(rt===-1)break}const Et=T[rt];Et&&Et.connect(mt)}}const X=new F,$=new F;function H(W,tt,mt){X.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);const rt=X.distanceTo($),Et=tt.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Nt=Et[14]/(Et[10]-1),te=Et[14]/(Et[10]+1),zt=(Et[9]+1)/Et[5],ie=(Et[9]-1)/Et[5],b=(Et[8]-1)/Et[0],Re=(Rt[8]+1)/Rt[0],Ft=Nt*b,Ot=Nt*Re,vt=rt/(-b+Re),Jt=vt*-b;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Jt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Et[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const xt=Nt+vt,S=te+vt,_=Ft-Jt,N=Ot+(rt-Jt),Y=zt*te/S*xt,j=ie*te/S*xt;W.projectionMatrix.makePerspective(_,N,Y,j,xt,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function st(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let tt=W.near,mt=W.far;y.texture!==null&&(y.depthNear>0&&(tt=y.depthNear),y.depthFar>0&&(mt=y.depthFar)),x.near=I.near=R.near=tt,x.far=I.far=R.far=mt,(w!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,G=x.far),R.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,x.layers.mask=R.layers.mask|I.layers.mask;const rt=W.parent,Et=x.cameras;st(x,rt);for(let Rt=0;Rt<Et.length;Rt++)st(Et[Rt],rt);Et.length===2?H(x,R,I):x.projectionMatrix.copy(R.projectionMatrix),ut(W,x,rt)};function ut(W,tt,mt){mt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ei*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let gt=null;function It(W,tt){if(h=tt.getViewerPose(c||a),v=tt,h!==null){const mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let rt=!1;mt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Rt=0;Rt<mt.length;Rt++){const Nt=mt[Rt];let te=null;if(m!==null)te=m.getViewport(Nt);else{const ie=f.getViewSubImage(d,Nt);te=ie.viewport,Rt===0&&(t.setRenderTargetTextures(A,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),t.setRenderTarget(A))}let zt=M[Rt];zt===void 0&&(zt=new Le,zt.layers.enable(Rt),zt.viewport=new se,M[Rt]=zt),zt.matrix.fromArray(Nt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Nt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(te.x,te.y,te.width,te.height),Rt===0&&(x.matrix.copy(zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(zt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Rt=f.getDepthInformation(mt[0]);Rt&&Rt.isValid&&Rt.texture&&y.init(t,Rt,s.renderState)}}for(let mt=0;mt<T.length;mt++){const rt=E[mt],Et=T[mt];rt!==null&&Et!==void 0&&Et.update(rt,tt,c||a)}gt&&gt(W,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),v=null}const jt=new yo;jt.setAnimationLoop(It),this.setAnimationLoop=function(W){gt=W},this.dispose=function(){}}}const Tn=new sn,Kd=new oe;function jd(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,mo(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,A,T,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),v(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),y(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,A,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Me&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Me&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=t.get(u),T=A.envMap,E=A.envMapRotation;T&&(p.envMap.value=T,Tn.copy(E),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),p.envMapRotation.value.setFromMatrix4(Kd.makeRotationFromEuler(Tn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,A,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=T*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Me&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const A=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $d(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const E=T.program;n.uniformBlockBinding(A,E)}function c(A,T){let E=s[A.id];E===void 0&&(v(A),E=h(A),s[A.id]=E,A.addEventListener("dispose",p));const U=T.program;n.updateUBOMapping(A,U);const D=t.render.frame;r[A.id]!==D&&(d(A),r[A.id]=D)}function h(A){const T=f();A.__bindingPointIndex=T;const E=i.createBuffer(),U=A.__size,D=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=s[A.id],E=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,R=E.length;D<R;D++){const I=Array.isArray(E[D])?E[D]:[E[D]];for(let M=0,x=I.length;M<x;M++){const w=I[M];if(m(w,D,M,U)===!0){const G=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let Z=0;for(let K=0;K<z.length;K++){const X=z[K],$=y(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,G+Z,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,Z),Z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,E,U){const D=A.value,R=T+"_"+E;if(U[R]===void 0)return typeof D=="number"||typeof D=="boolean"?U[R]=D:U[R]=D.clone(),!0;{const I=U[R];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return U[R]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function v(A){const T=A.uniforms;let E=0;const U=16;for(let R=0,I=T.length;R<I;R++){const M=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,w=M.length;x<w;x++){const G=M[x],z=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,K=z.length;Z<K;Z++){const X=z[Z],$=y(X),H=E%U,st=H%$.boundary,ut=H+st;E+=st,ut!==0&&U-ut<$.storage&&(E+=U-ut),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=$.storage}}}const D=E%U;return D>0&&(E+=U-D),A.__size=E,A.__cache={},this}function y(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Jd{constructor(t={}){const{canvas:e=Fl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),y=new Int32Array(4);let p=null,u=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=pn,this.toneMappingExposure=1;const E=this;let U=!1,D=0,R=0,I=null,M=-1,x=null;const w=new se,G=new se;let z=null;const Z=new qt(0);let K=0,X=e.width,$=e.height,H=1,st=null,ut=null;const gt=new se(0,0,X,$),It=new se(0,0,X,$);let jt=!1;const W=new vo;let tt=!1,mt=!1;const rt=new oe,Et=new oe,Rt=new F,Nt=new se,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ie(){return I===null?H:1}let b=n;function Re(g,P){return e.getContext(g,P)}try{const g={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wr}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),b===null){const P="webgl2";if(b=Re(P,g),b===null)throw Re(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Ft,Ot,vt,Jt,xt,S,_,N,Y,j,V,_t,at,ht,kt,Q,dt,St,Tt,ft,Bt,Pt,$t,C;function nt(){Ft=new oh(b),Ft.init(),Pt=new Gd(b,Ft),Ot=new eh(b,Ft,t,Pt),vt=new Hd(b,Ft),Ot.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),Jt=new uh(b),xt=new wd,S=new Vd(b,Ft,vt,xt,Ot,Pt,Jt),_=new ih(E),N=new ah(E),Y=new gc(b),$t=new Qu(b,Y),j=new lh(b,Y,Jt,$t),V=new dh(b,j,Y,Jt),Tt=new hh(b,Ot,S),Q=new nh(xt),_t=new Rd(E,_,N,Ft,Ot,$t,Q),at=new jd(E,xt),ht=new Pd,kt=new Fd(Ft),St=new Ju(E,_,N,vt,V,m,l),dt=new zd(E,V,Ot),C=new $d(b,Jt,Ot,vt),ft=new th(b,Ft,Jt),Bt=new ch(b,Ft,Jt),Jt.programs=_t.programs,E.capabilities=Ot,E.extensions=Ft,E.properties=xt,E.renderLists=ht,E.shadowMap=dt,E.state=vt,E.info=Jt}nt();const k=new Zd(E,b);this.xr=k,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const g=Ft.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ft.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(g){g!==void 0&&(H=g,this.setSize(X,$,!1))},this.getSize=function(g){return g.set(X,$)},this.setSize=function(g,P,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=g,$=P,e.width=Math.floor(g*H),e.height=Math.floor(P*H),O===!0&&(e.style.width=g+"px",e.style.height=P+"px"),this.setViewport(0,0,g,P)},this.getDrawingBufferSize=function(g){return g.set(X*H,$*H).floor()},this.setDrawingBufferSize=function(g,P,O){X=g,$=P,H=O,e.width=Math.floor(g*O),e.height=Math.floor(P*O),this.setViewport(0,0,g,P)},this.getCurrentViewport=function(g){return g.copy(w)},this.getViewport=function(g){return g.copy(gt)},this.setViewport=function(g,P,O,B){g.isVector4?gt.set(g.x,g.y,g.z,g.w):gt.set(g,P,O,B),vt.viewport(w.copy(gt).multiplyScalar(H).round())},this.getScissor=function(g){return g.copy(It)},this.setScissor=function(g,P,O,B){g.isVector4?It.set(g.x,g.y,g.z,g.w):It.set(g,P,O,B),vt.scissor(G.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(g){vt.setScissorTest(jt=g)},this.setOpaqueSort=function(g){st=g},this.setTransparentSort=function(g){ut=g},this.getClearColor=function(g){return g.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(g=!0,P=!0,O=!0){let B=0;if(g){let L=!1;if(I!==null){const J=I.texture.format;L=J===Ir||J===Ur||J===Lr}if(L){const J=I.texture.type,it=J===nn||J===Dn||J===Si||J===li||J===Pr||J===Dr,ct=St.getClearColor(),pt=St.getClearAlpha(),bt=ct.r,At=ct.g,yt=ct.b;it?(v[0]=bt,v[1]=At,v[2]=yt,v[3]=pt,b.clearBufferuiv(b.COLOR,0,v)):(y[0]=bt,y[1]=At,y[2]=yt,y[3]=pt,b.clearBufferiv(b.COLOR,0,y))}else B|=b.COLOR_BUFFER_BIT}P&&(B|=b.DEPTH_BUFFER_BIT),O&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),St.dispose(),ht.dispose(),kt.dispose(),xt.dispose(),_.dispose(),N.dispose(),V.dispose(),$t.dispose(),C.dispose(),_t.dispose(),k.dispose(),k.removeEventListener("sessionstart",zr),k.removeEventListener("sessionend",kr),gn.stop()};function q(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const g=Jt.autoReset,P=dt.enabled,O=dt.autoUpdate,B=dt.needsUpdate,L=dt.type;nt(),Jt.autoReset=g,dt.enabled=P,dt.autoUpdate=O,dt.needsUpdate=B,dt.type=L}function ot(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function wt(g){const P=g.target;P.removeEventListener("dispose",wt),ee(P)}function ee(g){fe(g),xt.remove(g)}function fe(g){const P=xt.get(g).programs;P!==void 0&&(P.forEach(function(O){_t.releaseProgram(O)}),g.isShaderMaterial&&_t.releaseShaderCache(g))}this.renderBufferDirect=function(g,P,O,B,L,J){P===null&&(P=te);const it=L.isMesh&&L.matrixWorld.determinant()<0,ct=Ao(g,P,O,B,L);vt.setMaterial(B,it);let pt=O.index,bt=1;if(B.wireframe===!0){if(pt=j.getWireframeAttribute(O),pt===void 0)return;bt=2}const At=O.drawRange,yt=O.attributes.position;let Ht=At.start*bt,Wt=(At.start+At.count)*bt;J!==null&&(Ht=Math.max(Ht,J.start*bt),Wt=Math.min(Wt,(J.start+J.count)*bt)),pt!==null?(Ht=Math.max(Ht,0),Wt=Math.min(Wt,pt.count)):yt!=null&&(Ht=Math.max(Ht,0),Wt=Math.min(Wt,yt.count));const re=Wt-Ht;if(re<0||re===1/0)return;$t.setup(L,B,ct,O,pt);let ne,Vt=ft;if(pt!==null&&(ne=Y.get(pt),Vt=Bt,Vt.setIndex(ne)),L.isMesh)B.wireframe===!0?(vt.setLineWidth(B.wireframeLinewidth*ie()),Vt.setMode(b.LINES)):Vt.setMode(b.TRIANGLES);else if(L.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),vt.setLineWidth(Mt*ie()),L.isLineSegments?Vt.setMode(b.LINES):L.isLineLoop?Vt.setMode(b.LINE_LOOP):Vt.setMode(b.LINE_STRIP)}else L.isPoints?Vt.setMode(b.POINTS):L.isSprite&&Vt.setMode(b.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Vt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Vt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Mt=L._multiDrawStarts,de=L._multiDrawCounts,Xt=L._multiDrawCount,Ie=pt?Y.get(pt).bytesPerElement:1,Fn=xt.get(B).currentProgram.getUniforms();for(let Ee=0;Ee<Xt;Ee++)Fn.setValue(b,"_gl_DrawID",Ee),Vt.render(Mt[Ee]/Ie,de[Ee])}else if(L.isInstancedMesh)Vt.renderInstances(Ht,re,L.count);else if(O.isInstancedBufferGeometry){const Mt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,de=Math.min(O.instanceCount,Mt);Vt.renderInstances(Ht,re,de)}else Vt.render(Ht,re)};function Yt(g,P,O){g.transparent===!0&&g.side===$e&&g.forceSinglePass===!1?(g.side=Me,g.needsUpdate=!0,wi(g,P,O),g.side=mn,g.needsUpdate=!0,wi(g,P,O),g.side=$e):wi(g,P,O)}this.compile=function(g,P,O=null){O===null&&(O=g),u=kt.get(O),u.init(P),T.push(u),O.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),g!==O&&g.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();const B=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const J=L.material;if(J)if(Array.isArray(J))for(let it=0;it<J.length;it++){const ct=J[it];Yt(ct,O,L),B.add(ct)}else Yt(J,O,L),B.add(J)}),T.pop(),u=null,B},this.compileAsync=function(g,P,O=null){const B=this.compile(g,P,O);return new Promise(L=>{function J(){if(B.forEach(function(it){xt.get(it).currentProgram.isReady()&&B.delete(it)}),B.size===0){L(g);return}setTimeout(J,10)}Ft.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ue=null;function We(g){Ue&&Ue(g)}function zr(){gn.stop()}function kr(){gn.start()}const gn=new yo;gn.setAnimationLoop(We),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(g){Ue=g,k.setAnimationLoop(g),g===null?gn.stop():gn.start()},k.addEventListener("sessionstart",zr),k.addEventListener("sessionend",kr),this.render=function(g,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(P),P=k.getCamera()),g.isScene===!0&&g.onBeforeRender(E,g,P,I),u=kt.get(g,T.length),u.init(P),T.push(u),Et.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,mt),p=ht.get(g,A.length),p.init(),A.push(p),k.enabled===!0&&k.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&hs(J,P,-1/0,E.sortObjects)}hs(g,P,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(st,ut),zt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,zt&&St.addToRenderList(p,g),this.info.render.frame++,tt===!0&&Q.beginShadows();const O=u.state.shadowsArray;dt.render(O,g,P),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,L=p.transmissive;if(u.setupLights(),P.isArrayCamera){const J=P.cameras;if(L.length>0)for(let it=0,ct=J.length;it<ct;it++){const pt=J[it];Vr(B,L,g,pt)}zt&&St.render(g);for(let it=0,ct=J.length;it<ct;it++){const pt=J[it];Hr(p,g,pt,pt.viewport)}}else L.length>0&&Vr(B,L,g,P),zt&&St.render(g),Hr(p,g,P);I!==null&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),g.isScene===!0&&g.onAfterRender(E,g,P),$t.resetDefaultState(),M=-1,x=null,T.pop(),T.length>0?(u=T[T.length-1],tt===!0&&Q.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function hs(g,P,O,B){if(g.visible===!1)return;if(g.layers.test(P.layers)){if(g.isGroup)O=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(P);else if(g.isLight)u.pushLight(g),g.castShadow&&u.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||W.intersectsSprite(g)){B&&Nt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Et);const it=V.update(g),ct=g.material;ct.visible&&p.push(g,it,ct,O,Nt.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||W.intersectsObject(g))){const it=V.update(g),ct=g.material;if(B&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Nt.copy(g.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),Nt.copy(it.boundingSphere.center)),Nt.applyMatrix4(g.matrixWorld).applyMatrix4(Et)),Array.isArray(ct)){const pt=it.groups;for(let bt=0,At=pt.length;bt<At;bt++){const yt=pt[bt],Ht=ct[yt.materialIndex];Ht&&Ht.visible&&p.push(g,it,Ht,O,Nt.z,yt)}}else ct.visible&&p.push(g,it,ct,O,Nt.z,null)}}const J=g.children;for(let it=0,ct=J.length;it<ct;it++)hs(J[it],P,O,B)}function Hr(g,P,O,B){const L=g.opaque,J=g.transmissive,it=g.transparent;u.setupLightsView(O),tt===!0&&Q.setGlobalState(E.clippingPlanes,O),B&&vt.viewport(w.copy(B)),L.length>0&&Ri(L,P,O),J.length>0&&Ri(J,P,O),it.length>0&&Ri(it,P,O),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Vr(g,P,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Ln(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ti:nn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const J=u.state.transmissionRenderTarget[B.id],it=B.viewport||w;J.setSize(it.z,it.w);const ct=E.getRenderTarget();E.setRenderTarget(J),E.getClearColor(Z),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),zt&&St.render(O);const pt=E.toneMapping;E.toneMapping=pn;const bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),tt===!0&&Q.setGlobalState(E.clippingPlanes,B),Ri(g,O,B),S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let yt=0,Ht=P.length;yt<Ht;yt++){const Wt=P[yt],re=Wt.object,ne=Wt.geometry,Vt=Wt.material,Mt=Wt.group;if(Vt.side===$e&&re.layers.test(B.layers)){const de=Vt.side;Vt.side=Me,Vt.needsUpdate=!0,Gr(re,O,B,ne,Vt,Mt),Vt.side=de,Vt.needsUpdate=!0,At=!0}}At===!0&&(S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J))}E.setRenderTarget(ct),E.setClearColor(Z,K),bt!==void 0&&(B.viewport=bt),E.toneMapping=pt}function Ri(g,P,O){const B=P.isScene===!0?P.overrideMaterial:null;for(let L=0,J=g.length;L<J;L++){const it=g[L],ct=it.object,pt=it.geometry,bt=B===null?it.material:B,At=it.group;ct.layers.test(O.layers)&&Gr(ct,P,O,pt,bt,At)}}function Gr(g,P,O,B,L,J){g.onBeforeRender(E,P,O,B,L,J),g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(E,P,O,B,g,J),L.transparent===!0&&L.side===$e&&L.forceSinglePass===!1?(L.side=Me,L.needsUpdate=!0,E.renderBufferDirect(O,P,B,L,g,J),L.side=mn,L.needsUpdate=!0,E.renderBufferDirect(O,P,B,L,g,J),L.side=$e):E.renderBufferDirect(O,P,B,L,g,J),g.onAfterRender(E,P,O,B,L,J)}function wi(g,P,O){P.isScene!==!0&&(P=te);const B=xt.get(g),L=u.state.lights,J=u.state.shadowsArray,it=L.state.version,ct=_t.getParameters(g,L.state,J,P,O),pt=_t.getProgramCacheKey(ct);let bt=B.programs;B.environment=g.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(g.isMeshStandardMaterial?N:_).get(g.envMap||B.environment),B.envMapRotation=B.environment!==null&&g.envMap===null?P.environmentRotation:g.envMapRotation,bt===void 0&&(g.addEventListener("dispose",wt),bt=new Map,B.programs=bt);let At=bt.get(pt);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===it)return Xr(g,ct),At}else ct.uniforms=_t.getUniforms(g),g.onBeforeCompile(ct,E),At=_t.acquireProgram(ct,pt),bt.set(pt,At),B.uniforms=ct.uniforms;const yt=B.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(yt.clippingPlanes=Q.uniform),Xr(g,ct),B.needsLights=wo(g),B.lightsStateVersion=it,B.needsLights&&(yt.ambientLightColor.value=L.state.ambient,yt.lightProbe.value=L.state.probe,yt.directionalLights.value=L.state.directional,yt.directionalLightShadows.value=L.state.directionalShadow,yt.spotLights.value=L.state.spot,yt.spotLightShadows.value=L.state.spotShadow,yt.rectAreaLights.value=L.state.rectArea,yt.ltc_1.value=L.state.rectAreaLTC1,yt.ltc_2.value=L.state.rectAreaLTC2,yt.pointLights.value=L.state.point,yt.pointLightShadows.value=L.state.pointShadow,yt.hemisphereLights.value=L.state.hemi,yt.directionalShadowMap.value=L.state.directionalShadowMap,yt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,yt.spotShadowMap.value=L.state.spotShadowMap,yt.spotLightMatrix.value=L.state.spotLightMatrix,yt.spotLightMap.value=L.state.spotLightMap,yt.pointShadowMap.value=L.state.pointShadowMap,yt.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function Wr(g){if(g.uniformsList===null){const P=g.currentProgram.getUniforms();g.uniformsList=is.seqWithValue(P.seq,g.uniforms)}return g.uniformsList}function Xr(g,P){const O=xt.get(g);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.batchingColor=P.batchingColor,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.instancingMorph=P.instancingMorph,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function Ao(g,P,O,B,L){P.isScene!==!0&&(P=te),S.resetTextureUnits();const J=P.fog,it=B.isMeshStandardMaterial?P.environment:null,ct=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ui,pt=(B.isMeshStandardMaterial?N:_).get(B.envMap||it),bt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,At=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!O.morphAttributes.position,Ht=!!O.morphAttributes.normal,Wt=!!O.morphAttributes.color;let re=pn;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(re=E.toneMapping);const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Vt=ne!==void 0?ne.length:0,Mt=xt.get(B),de=u.state.lights;if(tt===!0&&(mt===!0||g!==x)){const _e=g===x&&B.id===M;Q.setState(B,g,_e)}let Xt=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==de.state.version||Mt.outputColorSpace!==ct||L.isBatchedMesh&&Mt.batching===!1||!L.isBatchedMesh&&Mt.batching===!0||L.isBatchedMesh&&Mt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Mt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Mt.instancing===!1||!L.isInstancedMesh&&Mt.instancing===!0||L.isSkinnedMesh&&Mt.skinning===!1||!L.isSkinnedMesh&&Mt.skinning===!0||L.isInstancedMesh&&Mt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Mt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Mt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Mt.instancingMorph===!1&&L.morphTexture!==null||Mt.envMap!==pt||B.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==bt||Mt.vertexTangents!==At||Mt.morphTargets!==yt||Mt.morphNormals!==Ht||Mt.morphColors!==Wt||Mt.toneMapping!==re||Mt.morphTargetsCount!==Vt)&&(Xt=!0):(Xt=!0,Mt.__version=B.version);let Ie=Mt.currentProgram;Xt===!0&&(Ie=wi(B,P,L));let Fn=!1,Ee=!1,pi=!1;const Qt=Ie.getUniforms(),we=Mt.uniforms;if(vt.useProgram(Ie.program)&&(Fn=!0,Ee=!0,pi=!0),B.id!==M&&(M=B.id,Ee=!0),Fn||x!==g){vt.buffers.depth.getReversed()?(rt.copy(g.projectionMatrix),Bl(rt),zl(rt),Qt.setValue(b,"projectionMatrix",rt)):Qt.setValue(b,"projectionMatrix",g.projectionMatrix),Qt.setValue(b,"viewMatrix",g.matrixWorldInverse);const xe=Qt.map.cameraPosition;xe!==void 0&&xe.setValue(b,Rt.setFromMatrixPosition(g.matrixWorld)),Ot.logarithmicDepthBuffer&&Qt.setValue(b,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Qt.setValue(b,"isOrthographic",g.isOrthographicCamera===!0),x!==g&&(x=g,Ee=!0,pi=!0)}if(L.isSkinnedMesh){Qt.setOptional(b,L,"bindMatrix"),Qt.setOptional(b,L,"bindMatrixInverse");const _e=L.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),Qt.setValue(b,"boneTexture",_e.boneTexture,S))}L.isBatchedMesh&&(Qt.setOptional(b,L,"batchingTexture"),Qt.setValue(b,"batchingTexture",L._matricesTexture,S),Qt.setOptional(b,L,"batchingIdTexture"),Qt.setValue(b,"batchingIdTexture",L._indirectTexture,S),Qt.setOptional(b,L,"batchingColorTexture"),L._colorsTexture!==null&&Qt.setValue(b,"batchingColorTexture",L._colorsTexture,S));const Ce=O.morphAttributes;if((Ce.position!==void 0||Ce.normal!==void 0||Ce.color!==void 0)&&Tt.update(L,O,Ie),(Ee||Mt.receiveShadow!==L.receiveShadow)&&(Mt.receiveShadow=L.receiveShadow,Qt.setValue(b,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(we.envMap.value=pt,we.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(we.envMapIntensity.value=P.environmentIntensity),Ee&&(Qt.setValue(b,"toneMappingExposure",E.toneMappingExposure),Mt.needsLights&&Ro(we,pi),J&&B.fog===!0&&at.refreshFogUniforms(we,J),at.refreshMaterialUniforms(we,B,H,$,u.state.transmissionRenderTarget[g.id]),is.upload(b,Wr(Mt),we,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(is.upload(b,Wr(Mt),we,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Qt.setValue(b,"center",L.center),Qt.setValue(b,"modelViewMatrix",L.modelViewMatrix),Qt.setValue(b,"normalMatrix",L.normalMatrix),Qt.setValue(b,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const _e=B.uniformsGroups;for(let xe=0,ds=_e.length;xe<ds;xe++){const vn=_e[xe];C.update(vn,Ie),C.bind(vn,Ie)}}return Ie}function Ro(g,P){g.ambientLightColor.needsUpdate=P,g.lightProbe.needsUpdate=P,g.directionalLights.needsUpdate=P,g.directionalLightShadows.needsUpdate=P,g.pointLights.needsUpdate=P,g.pointLightShadows.needsUpdate=P,g.spotLights.needsUpdate=P,g.spotLightShadows.needsUpdate=P,g.rectAreaLights.needsUpdate=P,g.hemisphereLights.needsUpdate=P}function wo(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(g,P,O){xt.get(g.texture).__webglTexture=P,xt.get(g.depthTexture).__webglTexture=O;const B=xt.get(g);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,P){const O=xt.get(g);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(g,P=0,O=0){I=g,D=P,R=O;let B=!0,L=null,J=!1,it=!1;if(g){const pt=xt.get(g);if(pt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(pt.__webglFramebuffer===void 0)S.setupRenderTarget(g);else if(pt.__hasExternalTextures)S.rebindTextures(g,xt.get(g.texture).__webglTexture,xt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const yt=g.depthTexture;if(pt.__boundDepthTexture!==yt){if(yt!==null&&xt.has(yt)&&(g.width!==yt.image.width||g.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(g)}}const bt=g.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(it=!0);const At=xt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(At[P])?L=At[P][O]:L=At[P],J=!0):g.samples>0&&S.useMultisampledRTT(g)===!1?L=xt.get(g).__webglMultisampledFramebuffer:Array.isArray(At)?L=At[O]:L=At,w.copy(g.viewport),G.copy(g.scissor),z=g.scissorTest}else w.copy(gt).multiplyScalar(H).floor(),G.copy(It).multiplyScalar(H).floor(),z=jt;if(vt.bindFramebuffer(b.FRAMEBUFFER,L)&&B&&vt.drawBuffers(g,L),vt.viewport(w),vt.scissor(G),vt.setScissorTest(z),J){const pt=xt.get(g.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+P,pt.__webglTexture,O)}else if(it){const pt=xt.get(g.texture),bt=P||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,pt.__webglTexture,O||0,bt)}M=-1},this.readRenderTargetPixels=function(g,P,O,B,L,J,it){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=xt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&it!==void 0&&(ct=ct[it]),ct){vt.bindFramebuffer(b.FRAMEBUFFER,ct);try{const pt=g.texture,bt=pt.format,At=pt.type;if(!Ot.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=g.width-B&&O>=0&&O<=g.height-L&&b.readPixels(P,O,B,L,Pt.convert(bt),Pt.convert(At),J)}finally{const pt=I!==null?xt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(b.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(g,P,O,B,L,J,it){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=xt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&it!==void 0&&(ct=ct[it]),ct){const pt=g.texture,bt=pt.format,At=pt.type;if(!Ot.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=g.width-B&&O>=0&&O<=g.height-L){vt.bindFramebuffer(b.FRAMEBUFFER,ct);const yt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,yt),b.bufferData(b.PIXEL_PACK_BUFFER,J.byteLength,b.STREAM_READ),b.readPixels(P,O,B,L,Pt.convert(bt),Pt.convert(At),0);const Ht=I!==null?xt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(b.FRAMEBUFFER,Ht);const Wt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Ol(b,Wt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,yt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,J),b.deleteBuffer(yt),b.deleteSync(Wt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,P=null,O=0){g.isTexture!==!0&&(Jn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,g=arguments[1]);const B=Math.pow(2,-O),L=Math.floor(g.image.width*B),J=Math.floor(g.image.height*B),it=P!==null?P.x:0,ct=P!==null?P.y:0;S.setTexture2D(g,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,it,ct,L,J),vt.unbindTexture()};const Co=b.createFramebuffer(),Po=b.createFramebuffer();this.copyTextureToTexture=function(g,P,O=null,B=null,L=0,J=null){g.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,g=arguments[1],P=arguments[2],J=arguments[3]||0,O=null),J===null&&(L!==0?(Jn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=L,L=0):J=0);let it,ct,pt,bt,At,yt,Ht,Wt,re;const ne=g.isCompressedTexture?g.mipmaps[J]:g.image;if(O!==null)it=O.max.x-O.min.x,ct=O.max.y-O.min.y,pt=O.isBox3?O.max.z-O.min.z:1,bt=O.min.x,At=O.min.y,yt=O.isBox3?O.min.z:0;else{const Ce=Math.pow(2,-L);it=Math.floor(ne.width*Ce),ct=Math.floor(ne.height*Ce),g.isDataArrayTexture?pt=ne.depth:g.isData3DTexture?pt=Math.floor(ne.depth*Ce):pt=1,bt=0,At=0,yt=0}B!==null?(Ht=B.x,Wt=B.y,re=B.z):(Ht=0,Wt=0,re=0);const Vt=Pt.convert(P.format),Mt=Pt.convert(P.type);let de;P.isData3DTexture?(S.setTexture3D(P,0),de=b.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(S.setTexture2DArray(P,0),de=b.TEXTURE_2D_ARRAY):(S.setTexture2D(P,0),de=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,P.unpackAlignment);const Xt=b.getParameter(b.UNPACK_ROW_LENGTH),Ie=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Fn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ee=b.getParameter(b.UNPACK_SKIP_ROWS),pi=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ne.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ne.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,bt),b.pixelStorei(b.UNPACK_SKIP_ROWS,At),b.pixelStorei(b.UNPACK_SKIP_IMAGES,yt);const Qt=g.isDataArrayTexture||g.isData3DTexture,we=P.isDataArrayTexture||P.isData3DTexture;if(g.isDepthTexture){const Ce=xt.get(g),_e=xt.get(P),xe=xt.get(Ce.__renderTarget),ds=xt.get(_e.__renderTarget);vt.bindFramebuffer(b.READ_FRAMEBUFFER,xe.__webglFramebuffer),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let vn=0;vn<pt;vn++)Qt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.get(g).__webglTexture,L,yt+vn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.get(P).__webglTexture,J,re+vn)),b.blitFramebuffer(bt,At,it,ct,Ht,Wt,it,ct,b.DEPTH_BUFFER_BIT,b.NEAREST);vt.bindFramebuffer(b.READ_FRAMEBUFFER,null),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(L!==0||g.isRenderTargetTexture||xt.has(g)){const Ce=xt.get(g),_e=xt.get(P);vt.bindFramebuffer(b.READ_FRAMEBUFFER,Co),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Po);for(let xe=0;xe<pt;xe++)Qt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ce.__webglTexture,L,yt+xe):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ce.__webglTexture,L),we?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_e.__webglTexture,J,re+xe):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,_e.__webglTexture,J),L!==0?b.blitFramebuffer(bt,At,it,ct,Ht,Wt,it,ct,b.COLOR_BUFFER_BIT,b.NEAREST):we?b.copyTexSubImage3D(de,J,Ht,Wt,re+xe,bt,At,it,ct):b.copyTexSubImage2D(de,J,Ht,Wt,bt,At,it,ct);vt.bindFramebuffer(b.READ_FRAMEBUFFER,null),vt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else we?g.isDataTexture||g.isData3DTexture?b.texSubImage3D(de,J,Ht,Wt,re,it,ct,pt,Vt,Mt,ne.data):P.isCompressedArrayTexture?b.compressedTexSubImage3D(de,J,Ht,Wt,re,it,ct,pt,Vt,ne.data):b.texSubImage3D(de,J,Ht,Wt,re,it,ct,pt,Vt,Mt,ne):g.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,Ht,Wt,it,ct,Vt,Mt,ne.data):g.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,Ht,Wt,ne.width,ne.height,Vt,ne.data):b.texSubImage2D(b.TEXTURE_2D,J,Ht,Wt,it,ct,Vt,Mt,ne);b.pixelStorei(b.UNPACK_ROW_LENGTH,Xt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ie),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Fn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ee),b.pixelStorei(b.UNPACK_SKIP_IMAGES,pi),J===0&&P.generateMipmaps&&b.generateMipmap(de),vt.unbindTexture()},this.copyTextureToTexture3D=function(g,P,O=null,B=null,L=0){return g.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,g=arguments[2],P=arguments[3],L=arguments[4]||0),Jn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,P,O,B,L)},this.initRenderTarget=function(g){xt.get(g).__webglFramebuffer===void 0&&S.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?S.setTextureCube(g,0):g.isData3DTexture?S.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?S.setTexture2DArray(g,0):S.setTexture2D(g,0),vt.unbindTexture()},this.resetState=function(){D=0,R=0,I=null,vt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}const Ga={type:"change"},Br={type:"start"},bo={type:"end"},$i=new lo,Wa=new hn,Qd=Math.cos(70*Nl.DEG2RAD),le=new F,ye=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hs=1e-6;class tf extends mc{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Un,this._lastTargetPosition=new F,this._quat=new Un().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ga,this._sphericalDelta=new ga,this._scale=1,this._panOffset=new F,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new F,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nf.bind(this),this._onPointerDown=ef.bind(this),this._onPointerUp=sf.bind(this),this._onContextMenu=hf.bind(this),this._onMouseWheel=of.bind(this),this._onKeyDown=lf.bind(this),this._onTouchStart=cf.bind(this),this._onTouchMove=uf.bind(this),this._onMouseDown=rf.bind(this),this._onMouseMove=af.bind(this),this._interceptControlDown=df.bind(this),this._interceptControlUp=ff.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ga),this.update(),this.state=Kt.NONE}update(t=null){const e=this.object.position;le.copy(e).sub(this.target),le.applyQuaternion(this._quat),this._spherical.setFromVector3(le),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ye:n>Math.PI&&(n-=ye),s<-Math.PI?s+=ye:s>Math.PI&&(s-=ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(le.setFromSpherical(this._spherical),le.applyQuaternion(this._quatInverse),e.copy(this.target).add(le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=le.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($i.origin.copy(this.object.position),$i.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($i.direction))<Qd?this.object.lookAt(this.target):(Wa.setFromNormalAndCoplanarPoint(this.object.up,this.target),$i.intersectPlane(Wa,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hs||this._lastTargetPosition.distanceToSquared(this.target)>Hs?(this.dispatchEvent(Ga),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ye/60*this.autoRotateSpeed*t:ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){le.setFromMatrixColumn(e,0),le.multiplyScalar(-t),this._panOffset.add(le)}_panUp(t,e){this.screenSpacePanning===!0?le.setFromMatrixColumn(e,1):(le.setFromMatrixColumn(e,0),le.crossVectors(this.object.up,le)),le.multiplyScalar(t),this._panOffset.add(le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;le.copy(s).sub(this.target);let r=le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ye*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ye*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ye*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ye*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ef(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function nf(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sf(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bo),this.state=Kt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rf(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Kt.DOLLY;break;case ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}break;case ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Br)}function af(i){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function of(i){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(i.preventDefault(),this.dispatchEvent(Br),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(bo))}function lf(i){this.enabled!==!1&&this._handleKeyDown(i)}function cf(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Kt.TOUCH_ROTATE;break;case Qn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case Qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Kt.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Br)}function uf(i){switch(this._trackPointer(i),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Kt.NONE}}function hf(i){this.enabled!==!1&&i.preventDefault()}function df(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ff(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}JSON.parse("[[24,134,26],[46,127,40],[92,24,46],[71,64,58],[73,73,14],[53,99,10],[33,94,25],[49,98,5],[88,140,37],[22,150,6],[83,157,42],[68,41,7],[66,119,38],[37,173,4],[89,23,42],[76,70,19],[32,123,16],[17,175,42],[79,4,42],[75,38,11],[70,69,54],[74,65,58],[30,115,20],[46,124,38],[16,179,38],[93,26,40],[110,43,58],[55,85,0],[56,71,4],[35,93,26],[33,138,27],[18,151,7],[83,160,40],[81,30,22],[76,79,14],[54,98,0],[39,178,7],[83,160,37],[40,45,51],[53,113,40],[86,137,36],[36,159,19],[94,25,46],[53,54,4],[75,119,34],[22,152,5],[31,85,31],[105,39,57],[118,107,55],[34,124,17],[82,21,26],[79,3,41],[96,8,19],[43,46,48],[31,86,31],[51,130,42],[91,37,13],[57,71,11],[30,90,27],[58,101,6],[28,139,30],[47,127,46],[84,135,42],[17,176,36],[34,44,43],[114,7,38],[102,24,45],[69,37,2],[116,105,57],[52,124,47],[50,127,39],[47,170,50],[99,29,41],[42,47,49],[69,40,9],[108,40,49],[48,90,0],[51,102,5],[20,153,6],[34,179,1],[36,175,9],[70,43,6],[93,38,6],[37,88,24],[55,102,40],[116,105,56],[82,162,37],[41,50,48],[54,85,3],[105,118,54],[47,131,44],[16,150,6],[82,25,24],[50,85,4],[35,119,19],[64,119,32],[72,121,31],[11,177,43],[40,176,7],[96,4,22],[57,73,11],[89,135,44],[87,138,42],[43,169,45],[89,1,42],[50,92,1],[53,80,7],[55,62,0],[30,137,31],[69,127,32],[65,122,36],[39,176,0],[84,9,41],[43,47,48],[95,36,8],[30,89,26],[74,74,15],[57,110,41],[33,123,16],[85,137,36],[70,127,35],[71,35,7],[93,1,19],[67,126,34],[64,119,36],[70,124,37],[84,156,35],[81,164,38],[116,1,32],[73,63,53],[37,50,44],[55,60,1],[52,76,5],[34,83,26],[56,111,41],[107,116,58],[10,176,35],[34,44,48],[33,20,41],[74,67,49],[36,90,27],[55,106,35],[57,109,38],[87,141,41],[71,126,33],[34,89,29],[56,62,1],[73,74,53],[78,66,53],[31,90,28],[50,101,4],[34,117,20],[119,111,58],[72,46,6],[112,13,36],[113,10,35],[81,157,33],[70,66,49],[69,66,55],[33,93,27],[85,137,42],[70,126,36],[82,26,23],[110,1,41],[72,41,3],[102,25,41],[50,76,8],[69,66,53],[53,106,35],[76,24,20],[89,22,44],[84,1,47],[93,29,44],[108,42,58],[70,66,56],[29,136,31],[39,161,26],[86,156,38],[102,1,15],[84,36,10],[88,45,8],[51,71,13],[36,159,26],[52,55,2],[51,74,12],[81,68,16],[68,64,51],[34,117,12],[42,163,25],[46,163,48],[111,41,50],[70,67,55],[86,137,42],[83,9,40],[88,44,7],[55,114,41],[52,128,41],[49,128,39],[69,126,36],[13,176,35],[48,167,44],[77,159,35],[30,117,15],[36,116,11],[71,121,38],[102,25,45],[66,37,7],[89,36,3],[50,98,2],[69,116,34],[29,140,24],[84,134,36],[31,176,3],[90,25,43],[44,44,48],[111,39,59],[114,39,51],[49,128,47],[11,177,36],[84,5,45],[35,46,43],[85,36,5],[92,39,5],[33,89,23],[31,21,46],[84,10,42],[86,1,38],[98,10,20],[42,47,44],[85,38,10],[69,40,10],[73,68,19],[35,112,16],[25,138,27],[22,152,1],[31,175,1],[87,43,7],[33,22,42],[49,122,43],[78,28,22],[95,29,40],[97,32,42],[31,88,22],[79,68,10],[24,135,29],[36,162,21],[77,21,16],[92,27,40],[100,27,41],[53,71,2],[93,39,9],[55,84,0],[57,108,37],[49,133,42],[37,160,26],[36,159,25],[75,156,35],[37,47,43],[95,5,20],[102,3,17],[44,167,44],[111,3,32],[55,101,1],[86,40,6],[55,61,1],[77,66,54],[46,170,45],[44,171,46],[87,42,9],[87,39,12],[93,37,11],[111,46,52],[74,72,17],[43,168,44],[103,1,22],[92,25,45],[63,54,0],[59,60,2],[79,4,41],[90,25,40],[92,40,8],[92,42,8],[109,47,53],[87,143,40],[36,177,9],[89,45,9],[118,108,55],[49,129,46],[43,162,25],[77,22,17],[110,2,41],[73,64,59],[40,53,47],[36,89,26],[78,72,11],[77,70,10],[56,108,37],[24,134,25],[9,176,37],[55,57,4],[86,2,46],[33,115,11],[59,99,5],[32,116,21],[59,99,3],[32,139,28],[72,121,38],[39,178,1],[109,40,49],[92,25,41],[76,75,12],[71,68,50],[54,105,7],[32,121,14],[64,120,35],[83,159,41],[94,28,44],[106,39,51],[110,8,37],[53,86,2],[76,74,11],[27,137,24],[33,121,18],[33,179,3],[80,159,42],[37,44,51],[107,117,58],[109,118,53],[109,5,37],[42,45,50],[57,73,8],[54,109,43],[84,137,39],[66,122,37],[13,177,35],[44,172,50],[88,37,3],[64,120,33],[15,176,35],[77,157,34],[100,7,19],[100,29,44],[78,74,12],[81,68,11],[71,70,14],[38,119,16],[56,107,44],[48,128,46],[86,141,40],[37,160,18],[57,71,12],[104,1,19],[33,20,45],[75,71,52],[56,111,40],[65,119,38],[14,148,4],[32,121,17],[70,128,35],[18,175,39],[75,70,10],[117,1,38],[76,158,36],[112,42,51],[107,41,58],[52,79,8],[36,117,20],[50,98,9],[94,1,22],[89,39,12],[110,41,49],[79,71,16],[16,152,4],[94,24,39],[76,40,5],[46,85,3],[55,100,9],[43,163,23],[31,25,41],[85,22,23],[69,42,6],[74,68,50],[55,105,3],[88,142,40],[17,175,36],[94,26,38],[54,77,10],[46,126,40],[16,153,3],[72,71,14],[39,116,14],[18,148,8],[68,65,51],[48,72,9],[77,66,50],[111,45,52],[110,47,55],[108,41,58],[36,117,12],[47,128,46],[21,154,2],[44,168,52],[80,21,27],[54,57,3],[98,28,46],[24,134,28],[42,160,27],[101,27,41],[113,1,31],[36,87,22],[92,30,42],[52,105,5],[15,151,2],[12,179,42],[7,174,39],[101,4,17],[96,28,43],[56,52,0],[91,43,9],[52,108,36],[29,132,27],[54,125,44],[36,161,21],[47,167,44],[85,21,19],[42,44,42],[99,22,39],[75,21,19],[15,149,0],[97,32,44],[108,46,55],[52,84,5],[78,65,54],[100,3,15],[116,1,39],[109,6,36],[88,39,12],[35,85,31],[59,98,6],[38,118,18],[111,119,54],[85,139,40],[45,171,46],[106,41,52],[34,93,26],[52,103,7],[29,135,32],[89,141,37],[77,24,23],[71,69,55],[19,157,2],[13,176,44],[80,22,16],[113,2,41],[75,68,19],[30,23,39],[108,1,40],[42,168,51],[75,43,7],[69,37,12],[72,122,36],[83,21,16],[114,8,35],[40,45,41],[113,6,39],[112,12,36],[30,85,30],[58,107,38],[83,156,34],[77,26,22],[107,2,37],[97,24,38],[38,85,28],[49,106,39],[48,131,41],[71,69,14],[77,72,11],[76,72,17],[34,118,20],[36,179,7],[84,24,19],[81,7,40],[80,4,44],[115,40,53],[97,23,43],[98,28,40],[88,36,3],[55,73,4],[79,69,10],[81,69,15],[53,107,4],[67,125,34],[47,166,43],[38,47,50],[86,6,42],[81,156,43],[113,39,50],[33,91,23],[48,124,38],[9,174,36],[78,22,26],[90,22,38],[85,40,8],[53,126,40],[43,171,49],[67,39,7],[76,70,9],[34,117,11],[49,91,0],[30,131,27],[87,143,39],[88,140,36],[43,171,46],[58,71,5],[81,25,18],[83,156,43],[52,72,3],[72,71,13],[50,130,45],[53,125,40],[55,77,9],[88,37,13],[33,85,20],[32,118,20],[72,124,35],[65,120,31],[57,56,5],[109,41,58],[50,166,46],[82,23,17],[77,37,6],[30,87,22],[119,112,58],[65,122,34],[49,168,46],[78,24,17],[95,27,47],[58,71,9],[35,86,21],[28,134,22],[52,127,41],[84,159,37],[77,23,17],[94,4,17],[92,28,41],[91,42,9],[71,46,8],[51,78,8],[32,94,25],[36,115,21],[51,108,42],[70,119,29],[17,155,3],[70,39,11],[14,174,44],[81,21,16],[93,26,43],[117,2,38],[18,153,0],[49,74,8],[37,117,12],[53,103,40],[31,140,25],[65,121,34],[22,151,5],[50,166,50],[86,41,7],[8,175,38],[40,168,23],[83,158,41],[84,3,38],[103,3,19],[100,5,16],[48,83,5],[51,108,43],[34,134,29],[31,20,38],[33,20,40],[53,71,14],[62,55,2],[54,115,40],[32,175,1],[34,45,48],[59,106,41],[119,110,56],[82,163,39],[36,48,47],[49,85,4],[46,86,2],[69,64,49],[59,99,6],[39,115,15],[71,121,30],[16,174,44],[85,38,9],[102,25,43],[45,173,46],[57,73,7],[49,132,45],[80,23,17],[76,21,24],[86,5,44],[101,1,23],[91,24,45],[38,52,46],[72,71,15],[37,117,20],[55,99,10],[119,106,53],[49,128,46],[45,128,43],[22,151,0],[113,43,56],[32,21,45],[36,88,23],[78,74,16],[35,116,11],[37,115,12],[70,122,30],[77,38,6],[47,86,3],[50,88,3],[68,64,55],[67,126,35],[85,5,39],[95,2,23],[67,37,8],[73,119,38],[119,107,54],[50,125,38],[15,151,3],[100,7,21],[100,5,22],[112,42,50],[75,41,9],[118,107,54],[45,126,45],[33,176,8],[43,169,51],[85,157,39],[98,3,15],[57,57,4],[116,3,33],[74,66,57],[50,90,2],[27,136,31],[45,126,41],[114,40,51],[110,118,53],[80,160,34],[90,25,41],[34,115,11],[109,116,58],[79,156,33],[98,23,39],[69,39,4],[55,107,36],[25,137,29],[41,166,24],[46,173,49],[40,166,49],[84,21,17],[35,46,49],[71,70,53],[52,101,2],[30,117,19],[32,118,12],[23,151,1],[48,165,52],[85,21,18],[55,71,3],[79,72,14],[15,150,5],[23,152,3],[80,158,33],[75,158,38],[75,21,18],[100,28,43],[85,38,11],[108,3,36],[95,26,47],[51,101,3],[55,107,6],[15,179,37],[77,26,20],[97,29,40],[31,88,23],[38,118,17],[31,91,25],[49,130,46],[35,178,8],[97,29,46],[76,70,53],[91,37,3],[77,64,57],[50,95,0],[31,91,27],[113,119,58],[72,121,30],[86,140,39],[73,39,11],[32,23,42],[82,2,37],[40,160,17],[72,123,35],[88,142,38],[96,22,37],[92,39,10],[38,85,26],[73,64,48],[34,118,12],[89,133,39],[39,159,17],[38,165,22],[85,156,41],[54,59,0],[30,20,47],[76,159,40],[108,43,51],[76,74,17],[51,105,35],[50,108,41],[52,107,36],[34,134,27],[17,155,4],[90,42,10],[92,25,43],[46,159,22],[81,68,12],[26,134,23],[68,120,39],[40,166,20],[96,27,44],[100,26,40],[78,74,14],[89,44,7],[89,34,8],[32,88,30],[113,10,37],[75,41,8],[87,135,44],[16,175,43],[37,177,8],[111,9,37],[37,86,29],[39,116,18],[39,117,16],[34,119,20],[38,117,14],[111,118,53],[66,124,35],[68,124,31],[49,74,9],[31,20,46],[31,22,38],[88,2,42],[109,1,31],[85,134,44],[34,94,25],[58,107,40],[50,131,41],[20,156,3],[53,71,13],[44,45,48],[34,88,30],[73,62,53],[54,108,36],[72,119,30],[84,137,41],[35,172,4],[36,44,41],[85,3,38],[43,167,44],[106,41,55],[109,117,58],[51,130,45],[40,163,26],[33,175,0],[42,171,48],[87,3,43],[52,54,2],[97,26,39],[88,1,41],[98,3,14],[95,5,17],[96,26,45],[73,73,15],[110,42,58],[81,69,16],[71,70,55],[49,100,5],[56,98,10],[20,152,6],[41,175,1],[40,47,42],[80,5,40],[78,22,16],[69,38,3],[50,100,3],[54,110,43],[55,108,36],[76,158,37],[79,20,21],[116,3,39],[38,50,44],[94,25,39],[25,136,26],[55,124,43],[98,8,17],[111,9,35],[71,69,12],[56,111,39],[29,134,32],[33,137,27],[33,175,8],[78,1,45],[95,27,46],[114,8,36],[70,64,58],[95,22,47],[74,121,34],[93,27,43],[55,98,10],[57,100,9],[48,133,43],[67,120,39],[74,156,38],[80,162,36],[93,2,21],[56,75,6],[72,70,11],[33,115,21],[84,134,42],[72,123,34],[39,163,25],[83,23,24],[83,1,47],[62,54,3],[51,100,2],[51,91,1],[50,107,39],[15,174,34],[82,156,33],[94,3,22],[40,41,46],[66,121,30],[43,160,18],[46,171,46],[45,175,48],[80,22,26],[116,4,38],[30,90,26],[110,51,54],[30,117,18],[16,152,1],[45,159,21],[87,1,39],[70,43,7],[73,72,14],[16,174,43],[78,37,7],[33,116,21],[55,102,8],[81,165,37],[83,10,41],[44,45,47],[80,70,15],[77,71,10],[53,111,38],[12,179,36],[85,21,22],[83,9,43],[116,4,34],[54,87,0],[91,25,40],[108,115,58],[76,159,38],[75,21,22],[98,1,14],[55,76,6],[47,83,5],[31,115,12],[56,107,36],[54,104,40],[74,119,34],[25,136,25],[73,122,32],[73,45,6],[81,8,43],[97,1,24],[81,162,40],[75,66,57],[55,105,45],[68,123,31],[17,152,0],[16,153,4],[37,163,24],[80,26,18],[76,68,19],[32,178,3],[107,1,35],[38,166,21],[54,73,12],[77,67,14],[74,72,11],[117,105,55],[33,178,2],[78,1,40],[101,1,24],[61,54,3],[72,45,8],[72,34,7],[80,69,17],[73,65,48],[23,148,0],[89,139,36],[43,46,45],[33,113,16],[19,151,7],[83,160,36],[110,4,33],[52,56,0],[73,70,18],[51,90,2],[119,109,55],[89,136,43],[14,173,39],[38,178,0],[40,163,18],[110,47,52],[81,160,41],[83,7,44],[94,28,43],[47,168,45],[89,44,10],[77,70,18],[20,145,3],[46,167,44],[80,29,23],[109,4,33],[34,45,47],[56,104,6],[57,109,39],[36,123,16],[18,157,3],[86,1,46],[107,43,55],[94,3,20],[117,1,37],[53,106,45],[69,66,52],[81,158,42],[99,9,19],[73,76,53],[75,65,48],[64,119,35],[17,148,8],[79,162,36],[96,4,15],[72,41,11],[42,44,50],[87,40,5],[41,165,20],[82,160,35],[84,158,40],[83,21,26],[84,23,23],[54,58,0],[51,77,8],[17,154,2],[40,178,6],[44,170,45],[79,4,44],[99,1,14],[111,45,56],[55,106,45],[9,174,43],[82,10,43],[102,2,16],[81,68,13],[33,118,12],[32,93,25],[55,111,38],[51,131,43],[13,177,43],[41,164,25],[86,3,39],[78,72,17],[100,29,42],[74,42,9],[91,43,8],[19,146,3],[49,136,43],[37,162,20],[89,24,42],[39,52,45],[33,90,29],[34,117,21],[55,107,44],[117,105,54],[50,165,48],[83,158,34],[76,158,41],[58,56,4],[93,26,44],[32,83,26],[52,88,2],[79,70,17],[76,73,17],[30,91,26],[37,117,13],[56,105,35],[71,38,12],[71,125,35],[14,178,42],[82,8,44],[37,120,17],[57,103,4],[73,123,34],[10,178,37],[78,25,18],[79,1,39],[45,84,2],[74,62,53],[58,99,2],[54,97,5],[21,151,7],[102,24,43],[40,43,46],[106,39,50],[106,42,52],[109,39,49],[31,90,24],[49,126,48],[88,134,33],[15,150,3],[38,53,47],[81,28,23],[97,27,42],[36,172,3],[73,71,16],[51,102,7],[53,101,1],[80,157,43],[101,26,45],[35,46,47],[67,38,5],[15,148,0],[29,138,24],[14,150,3],[82,7,40],[112,1,31],[58,52,0],[57,71,5],[71,67,56],[35,124,16],[48,170,49],[74,37,2],[30,139,24],[45,160,24],[52,107,44],[35,87,22],[88,141,41],[41,177,4],[34,178,0],[95,3,23],[95,31,41],[51,99,9],[52,102,8],[53,104,40],[103,2,17],[111,41,58],[50,108,42],[30,142,28],[40,165,20],[37,159,26],[97,24,37],[37,116,20],[71,126,35],[108,3,35],[98,25,40],[71,65,58],[51,74,5],[49,72,5],[77,68,19],[72,61,53],[117,107,55],[14,148,1],[87,133,39],[52,55,1],[46,168,52],[81,21,26],[39,164,19],[58,108,39],[52,113,40],[11,175,34],[103,1,20],[97,25,40],[76,37,4],[37,44,41],[71,72,53],[57,98,9],[48,90,1],[49,92,1],[33,118,20],[69,119,39],[56,56,4],[70,122,38],[17,176,38],[37,179,7],[49,167,49],[81,9,42],[98,4,15],[114,118,58],[109,42,58],[74,67,57],[54,96,5],[31,121,16],[97,5,16],[89,40,5],[49,167,46],[77,156,34],[96,27,47],[33,87,30],[113,43,53],[48,89,2],[41,165,52],[78,162,37],[30,25,40],[89,42,10],[93,38,8],[57,75,8],[24,135,27],[23,150,2],[16,178,41],[96,29,40],[88,40,11],[87,3,42],[98,25,48],[96,29,46],[35,91,26],[70,64,57],[57,102,5],[51,125,38],[19,153,6],[17,177,39],[57,72,5],[71,36,7],[90,43,10],[57,98,0],[37,118,14],[71,120,29],[16,152,5],[79,164,37],[37,46,50],[89,23,44],[98,25,43],[97,25,48],[79,28,19],[72,70,12],[69,67,52],[36,162,23],[109,5,34],[54,68,8],[72,68,18],[54,102,9],[54,125,42],[41,163,25],[98,21,43],[115,39,57],[83,135,38],[11,177,35],[30,21,47],[97,3,23],[50,91,2],[87,42,7],[52,124,48],[76,23,24],[70,45,7],[54,107,4],[14,148,0],[83,134,37],[77,156,43],[113,8,34],[107,3,36],[76,66,13],[91,40,5],[31,119,14],[58,107,41],[27,134,32],[84,137,38],[42,161,18],[117,1,34],[85,38,7],[8,176,39],[97,5,22],[95,27,45],[36,90,26],[105,118,53],[34,127,16],[15,150,6],[41,176,6],[78,160,41],[74,73,16],[60,56,3],[94,31,43],[15,151,5],[44,160,19],[99,10,20],[110,6,34],[84,36,5],[107,41,50],[53,68,8],[95,29,45],[73,38,12],[33,44,46],[91,39,5],[52,102,2],[25,136,24],[32,22,44],[80,3,39],[36,47,44],[33,84,25],[75,76,15],[79,26,24],[40,49,49],[55,100,1],[54,100,10],[20,148,8],[35,123,15],[73,66,49],[52,74,12],[36,86,30],[76,64,48],[45,125,40],[19,156,1],[98,0,19],[96,28,42],[60,58,0],[115,1,40],[54,108,5],[66,121,38],[84,136,41],[43,161,25],[53,107,5],[88,44,8],[34,86,21],[72,71,12],[59,99,4],[73,121,36],[18,154,5],[77,38,8],[52,108,44],[33,124,16],[15,150,1],[114,2,41],[59,98,8],[16,174,35],[8,175,41],[40,164,25],[76,37,3],[74,41,10],[94,36,11],[108,41,50],[112,44,52],[49,98,4],[50,100,6],[31,117,20],[88,34,8],[27,138,24],[29,142,29],[88,138,35],[10,179,38],[32,176,1],[45,165,53],[90,24,39],[58,101,3],[99,22,42],[38,85,29],[80,25,25],[80,4,45],[97,27,43],[90,39,4],[38,85,23],[51,107,43],[28,131,27],[39,167,23],[38,162,18],[32,23,44],[76,23,23],[67,37,4],[109,3,40],[101,24,40],[78,28,20],[23,134,27],[79,29,20],[107,2,38],[70,39,3],[30,85,31],[57,99,1],[50,128,40],[51,130,43],[99,22,45],[37,88,25],[75,40,10],[84,157,41],[72,39,12],[19,152,6],[43,163,22],[78,26,19],[87,138,36],[80,68,10],[51,103,4],[20,155,1],[41,168,46],[31,24,44],[97,8,17],[102,4,20],[53,78,10],[112,6,33],[96,9,19],[76,157,35],[75,22,21],[78,24,18],[76,67,13],[36,85,22],[57,74,8],[36,115,11],[113,119,59],[46,165,53],[82,159,35],[115,5,36],[38,52,45],[78,64,52],[33,136,28],[39,157,22],[45,167,53],[114,41,54],[85,136,43],[8,174,36],[40,163,19],[81,6,44],[86,39,6],[87,132,39],[17,151,0],[77,23,25],[101,4,21],[92,40,6],[37,49,48],[107,42,56],[51,77,7],[80,154,38],[30,24,45],[114,1,41],[39,56,46],[111,118,54],[31,136,23],[18,156,4],[38,160,17],[82,5,45],[91,25,45],[57,58,4],[71,70,54],[56,112,39],[71,126,34],[69,128,35],[76,158,39],[31,23,45],[101,5,18],[105,40,53],[73,39,3],[58,100,8],[64,120,32],[44,172,46],[112,0,35],[91,24,43],[108,4,38],[38,49,49],[96,30,41],[13,175,34],[9,174,35],[82,21,16],[113,7,38],[92,36,13],[39,116,16],[26,134,31],[75,77,14],[109,41,50],[78,68,9],[34,115,21],[34,134,30],[67,124,36],[85,157,38],[73,42,10],[48,71,7],[29,131,26],[32,177,1],[80,23,25],[114,4,32],[108,4,34],[100,28,44],[50,74,11],[68,39,6],[71,44,5],[55,74,11],[81,68,14],[73,68,49],[57,53,0],[66,119,29],[71,127,34],[76,68,54],[20,157,3],[9,176,40],[99,26,39],[99,25,48],[49,73,6],[99,3,15],[36,46,50],[55,109,37],[28,133,27],[40,170,22],[80,20,20],[47,85,4],[109,46,56],[54,86,2],[55,102,2],[116,105,58],[67,126,33],[9,176,42],[80,19,20],[110,36,53],[72,66,49],[39,115,16],[49,99,7],[116,107,58],[117,106,55],[88,137,35],[12,178,36],[58,71,11],[43,171,47],[32,121,15],[96,28,44],[109,3,33],[94,36,8],[99,30,41],[31,92,26],[68,126,36],[66,121,31],[22,152,4],[68,40,9],[108,43,57],[76,71,10],[75,77,13],[69,120,29],[30,27,41],[82,23,25],[94,3,19],[94,37,9],[99,28,40],[93,27,42],[74,40,3],[48,88,2],[77,76,15],[42,165,22],[80,33,21],[75,42,7],[88,33,8],[73,35,7],[42,168,46],[78,2,41],[102,3,18],[116,1,33],[80,32,21],[115,3,32],[54,83,4],[84,23,24],[84,9,42],[108,45,53],[62,55,1],[60,59,1],[73,40,11],[48,168,45],[78,163,38],[75,156,37],[111,1,41],[74,37,12],[73,121,37],[49,169,48],[56,112,40],[88,42,10],[74,71,11],[57,110,39],[84,136,42],[36,162,24],[83,22,25],[81,6,40],[69,39,10],[75,70,18],[56,99,0],[32,140,27],[11,176,43],[10,176,42],[90,22,46],[91,42,7],[49,75,8],[76,66,57],[108,119,53],[86,142,39],[45,173,50],[56,55,5],[77,72,17],[76,72,11],[74,70,51],[32,137,25],[52,125,39],[93,1,21],[94,36,9],[56,103,3],[115,5,38],[97,21,43],[72,65,58],[72,35,7],[94,30,40],[93,30,43],[76,69,54],[112,119,55],[19,150,7],[81,161,41],[36,44,51],[33,21,40],[93,24,47],[78,159,35],[30,140,29],[18,154,1],[13,174,34],[44,161,24],[45,159,23],[41,167,50],[98,25,41],[49,71,4],[72,72,52],[66,120,30],[44,173,48],[101,25,40],[86,42,8],[30,23,46],[86,1,37],[99,28,46],[73,46,8],[74,40,10],[35,89,23],[78,71,11],[52,105,45],[18,156,2],[39,178,6],[45,166,53],[84,36,7],[84,37,7],[75,40,9],[48,127,39],[43,160,26],[68,39,7],[87,131,39],[38,179,7],[39,175,9],[75,156,39],[117,2,37],[99,23,40],[97,25,45],[51,89,2],[97,28,47],[76,156,42],[32,121,16],[77,37,10],[56,76,8],[51,76,10],[69,67,54],[54,108,44],[113,119,57],[48,125,48],[36,47,49],[35,177,8],[87,134,44],[70,69,53],[88,142,41],[83,5,45],[99,9,20],[72,44,5],[31,118,14],[14,148,2],[34,134,24],[31,21,38],[94,4,21],[100,28,42],[52,75,5],[54,111,37],[77,21,26],[68,40,7],[38,166,22],[76,156,41],[94,26,47],[52,127,45],[78,64,50],[52,105,4],[51,111,40],[17,154,4],[80,162,40],[81,25,24],[58,71,7],[54,79,7],[50,132,43],[16,178,37],[81,4,39],[69,39,11],[55,78,9],[72,71,16],[73,121,33],[77,25,23],[100,26,47],[77,38,9],[43,164,23],[81,1,47],[85,2,47],[96,7,19],[94,24,37],[96,24,38],[113,45,54],[31,117,19],[67,120,29],[18,157,2],[89,40,4],[90,42,6],[33,87,22],[52,80,7],[72,70,13],[43,166,43],[74,44,7],[111,40,49],[80,68,17],[77,64,50],[32,90,29],[89,134,44],[12,172,39],[33,177,8],[34,45,46],[81,70,14],[58,98,2],[50,129,40],[73,121,32],[44,165,43],[45,169,52],[98,7,22],[49,89,2],[34,135,26],[30,142,26],[74,120,33],[37,174,4],[43,165,53],[56,104,4],[41,48,49],[61,54,4],[109,48,53],[69,67,51],[40,167,21],[80,160,42],[41,45,41],[69,119,29],[17,151,7],[42,161,26],[109,2,32],[98,24,44],[109,1,40],[38,86,25],[88,45,7],[38,163,19],[50,166,49],[47,171,50],[37,50,45],[87,41,10],[75,74,12],[69,129,34],[74,120,35],[83,22,17],[38,47,42],[106,39,58],[40,157,21],[98,4,23],[56,57,4],[60,54,4],[56,75,10],[35,160,20],[107,1,38],[85,38,6],[95,31,43],[78,68,19],[86,140,40],[37,162,25],[32,178,5],[85,21,23],[80,3,38],[61,57,1],[38,116,13],[82,162,38],[75,21,23],[89,43,6],[75,65,58],[27,139,25],[37,179,1],[89,22,39],[112,3,41],[58,51,0],[111,47,53],[52,87,3],[75,67,14],[43,47,46],[15,178,36],[37,163,23],[108,118,53],[52,106,5],[52,111,38],[73,120,37],[47,168,44],[43,172,47],[92,26,43],[53,57,0],[78,74,13],[57,109,42],[119,105,53],[69,123,37],[10,178,41],[42,165,23],[109,48,55],[88,43,10],[73,44,9],[79,70,18],[80,70,16],[119,108,55],[81,162,36],[100,6,17],[74,43,5],[114,39,58],[33,112,16],[73,119,31],[26,137,25],[66,122,32],[112,9,35],[79,30,21],[14,149,4],[49,122,42],[34,177,8],[48,171,48],[98,2,14],[39,115,18],[52,73,4],[57,64,0],[85,157,36],[92,24,44],[100,27,45],[76,39,6],[69,67,53],[49,106,42],[76,73,11],[74,69,19],[72,68,11],[79,162,40],[76,160,38],[33,20,42],[79,3,42],[109,44,57],[73,65,58],[58,105,43],[70,123,31],[43,159,27],[42,167,51],[91,24,46],[44,45,46],[35,87,30],[30,134,22],[93,1,22],[112,4,40],[85,39,6],[55,78,7],[51,77,9],[24,134,27],[30,143,27],[47,131,42],[45,169,44],[40,166,50],[84,36,6],[83,3,38],[54,70,8],[39,177,1],[115,4,33],[71,39,11],[56,63,1],[45,83,0],[21,149,8],[44,125,44],[67,122,38],[99,5,16],[98,11,19],[52,69,8],[100,27,46],[50,76,9],[80,157,33],[30,86,22],[73,70,17],[51,98,0],[40,166,46],[80,158,43],[83,2,37],[94,27,41],[35,85,21],[112,43,57],[69,67,55],[71,65,48],[50,101,5],[54,98,11],[51,98,9],[47,125,48],[89,36,14],[80,27,19],[50,126,39],[114,42,54],[54,85,0],[69,66,50],[46,167,52],[79,24,25],[96,4,23],[55,58,3],[33,87,21],[45,127,41],[87,41,6],[110,40,59],[37,87,29],[33,87,31],[94,29,44],[90,44,7],[49,167,50],[54,113,41],[98,33,44],[53,99,0],[50,105,44],[48,129,40],[22,153,3],[9,174,42],[79,3,43],[61,57,0],[107,41,57],[31,89,23],[50,101,7],[77,24,19],[100,6,21],[43,46,44],[73,34,7],[56,72,4],[50,100,2],[44,45,45],[51,72,13],[73,67,49],[31,119,17],[52,109,43],[34,134,28],[89,140,37],[86,5,42],[53,57,1],[57,72,11],[70,69,52],[85,138,40],[84,24,23],[113,9,36],[38,52,47],[78,71,18],[53,100,9],[44,174,48],[44,166,43],[77,160,37],[99,5,22],[52,78,10],[77,160,40],[85,156,38],[115,3,39],[96,25,45],[96,23,43],[93,36,12],[108,45,54],[69,124,37],[69,130,34],[40,164,19],[85,156,35],[82,27,23],[89,35,7],[109,45,52],[51,102,4],[50,105,36],[48,124,48],[86,135,44],[45,165,54],[77,162,38],[34,45,45],[100,24,39],[115,2,40],[36,48,45],[50,81,0],[17,177,41],[87,2,39],[111,3,40],[35,44,50],[50,100,5],[16,152,2],[40,171,22],[78,163,37],[79,29,21],[81,7,44],[79,5,42],[90,40,11],[80,6,42],[98,22,45],[88,1,42],[32,119,13],[103,1,19],[97,9,18],[41,47,49],[73,71,11],[54,106,3],[65,119,31],[71,120,39],[80,162,41],[96,22,47],[49,72,11],[44,44,46],[33,119,19],[28,137,31],[68,126,32],[49,165,44],[77,26,21],[84,23,22],[58,57,4],[80,1,37],[97,30,45],[74,71,18],[68,118,34],[15,179,41],[40,176,1],[76,21,25],[117,2,34],[74,42,5],[53,127,45],[42,165,43],[84,24,22],[81,2,37],[101,2,23],[38,50,48],[85,39,7],[110,49,54],[53,79,7],[58,100,7],[88,136,44],[84,2,37],[35,47,47],[44,171,50],[101,3,23],[95,23,47],[48,166,52],[48,71,11],[56,75,7],[97,7,17],[94,21,41],[34,44,46],[34,114,15],[58,58,3],[76,39,7],[112,42,57],[79,73,13],[70,64,48],[53,98,10],[37,176,9],[45,162,48],[73,46,7],[77,75,16],[58,108,41],[25,135,24],[27,140,28],[44,124,43],[20,153,0],[36,163,22],[39,48,43],[85,4,45],[46,172,46],[97,32,41],[38,85,27],[51,109,39],[47,165,53],[83,21,25],[42,48,48],[75,37,11],[67,122,37],[89,139,42],[68,125,32],[43,161,18],[45,160,22],[44,161,20],[74,39,3],[29,135,22],[40,160,27],[45,171,50],[82,25,18],[83,9,41],[105,40,54],[103,119,59],[26,136,23],[31,141,28],[53,124,39],[83,159,35],[83,5,46],[34,46,46],[19,145,3],[81,160,35],[112,7,34],[54,100,0],[115,39,52],[56,62,0],[49,98,8],[56,106,35],[81,159,34],[80,167,38],[92,40,7],[70,68,53],[31,92,27],[9,177,37],[42,167,45],[80,23,16],[85,9,42],[112,8,34],[86,36,3],[109,44,51],[57,62,2],[59,98,4],[51,127,46],[85,138,39],[42,48,46],[51,107,36],[18,153,6],[40,175,1],[41,159,27],[115,40,56],[41,45,51],[77,66,53],[52,98,10],[57,105,36],[35,120,13],[72,122,31],[19,156,2],[51,54,0],[101,27,44],[92,22,47],[44,161,25],[73,41,10],[71,68,17],[77,66,55],[16,174,34],[40,157,22],[82,160,41],[70,40,3],[108,45,56],[55,83,3],[47,132,43],[72,120,30],[87,4,42],[57,58,3],[51,100,1],[57,110,40],[32,138,25],[46,126,39],[52,128,43],[16,151,6],[82,24,17],[107,41,51],[86,5,41],[107,1,36],[94,22,47],[81,26,18],[74,43,8],[72,42,10],[97,30,46],[53,68,7],[55,99,0],[20,156,4],[41,167,23],[43,44,50],[81,4,38],[102,4,19],[84,2,47],[81,158,34],[76,24,21],[81,2,47],[86,3,38],[33,136,27],[83,157,34],[83,6,45],[76,64,57],[55,74,12],[76,67,14],[53,105,45],[14,174,34],[79,163,40],[79,164,38],[73,46,6],[57,105,44],[9,177,38],[96,7,21],[95,30,41],[32,89,29],[46,128,45],[87,136,43],[116,3,38],[61,56,2],[72,34,6],[74,72,52],[51,127,39],[41,47,50],[52,86,4],[58,60,2],[31,91,26],[28,140,25],[77,159,41],[83,4,46],[107,44,53],[83,23,17],[95,1,14],[50,73,12],[46,84,3],[40,159,27],[43,171,50],[79,2,39],[98,27,39],[110,7,35],[93,37,5],[83,135,39],[71,125,32],[31,23,39],[83,2,47],[72,41,4],[107,115,58],[36,122,16],[46,127,45],[39,164,25],[82,156,43],[70,40,10],[51,83,5],[75,74,16],[45,126,46],[84,136,36],[86,138,42],[75,157,40],[80,1,46],[54,54,5],[55,101,9],[84,137,40],[71,122,31],[33,89,22],[52,83,5],[118,109,58],[27,141,28],[15,177,35],[13,178,42],[95,6,18],[92,36,12],[46,83,4],[49,105,39],[66,119,39],[32,178,6],[38,179,1],[83,25,22],[38,46,42],[79,72,13],[80,70,14],[76,68,9],[47,170,46],[98,23,43],[55,84,1],[108,44,52],[118,109,56],[37,172,4],[83,158,35],[80,19,21],[77,21,25],[92,40,9],[70,44,7],[108,39,49],[113,39,49],[56,111,42],[40,167,20],[83,161,37],[110,7,34],[39,52,47],[110,45,52],[75,70,53],[30,90,25],[34,134,25],[21,154,1],[115,6,35],[111,10,36],[90,41,11],[113,5,33],[113,5,39],[88,141,37],[50,75,9],[23,150,0],[84,10,43],[111,2,41],[101,27,45],[96,25,48],[103,24,43],[105,40,52],[52,89,2],[57,101,2],[25,137,26],[10,177,41],[77,156,33],[100,25,47],[57,56,4],[54,76,11],[77,68,9],[76,76,15],[73,71,12],[49,106,38],[20,156,2],[19,174,39],[72,37,1],[78,2,44],[33,21,42],[69,38,11],[34,116,11],[36,122,17],[18,175,41],[16,176,43],[39,46,50],[53,75,4],[47,172,47],[85,7,43],[93,38,11],[52,104,3],[58,98,9],[117,107,56],[41,164,19],[81,24,17],[76,23,22],[51,101,8],[53,125,46],[46,124,48],[88,135,34],[19,156,4],[49,165,45],[80,161,35],[44,44,49],[111,42,50],[50,73,11],[50,83,5],[56,101,2],[54,96,4],[14,179,42],[13,171,39],[57,52,0],[84,156,41],[86,141,39],[38,44,51],[92,40,10],[109,36,54],[103,119,57],[69,120,39],[78,160,35],[82,1,47],[34,44,49],[54,78,6],[76,70,10],[80,70,17],[36,90,25],[68,128,33],[33,20,43],[67,37,9],[50,87,3],[71,69,13],[31,140,27],[88,137,43],[21,154,5],[12,177,43],[41,167,49],[68,40,6],[57,107,37],[25,136,29],[34,134,26],[84,156,42],[54,72,3],[74,75,15],[65,121,35],[35,178,0],[41,167,46],[93,28,44],[43,46,46],[84,37,6],[52,85,4],[54,74,4],[32,92,24],[40,158,21],[42,164,20],[98,24,45],[40,46,42],[76,72,18],[32,93,26],[26,138,26],[49,127,47],[66,123,35],[75,22,19],[93,26,41],[47,71,8],[92,38,11],[57,65,0],[33,86,31],[42,162,26],[93,38,9],[75,75,12],[78,75,13],[18,174,36],[43,161,19],[32,21,39],[87,4,41],[92,29,43],[42,49,45],[110,7,37],[32,22,42],[53,126,44],[107,39,59],[52,70,8],[53,76,11],[48,126,47],[71,123,37],[96,1,24],[91,39,11],[30,136,31],[10,177,36],[86,4,44],[93,23,37],[53,103,2],[30,117,13],[49,105,41],[42,166,44],[83,158,42],[85,2,37],[108,46,53],[29,143,26],[32,22,45],[111,6,39],[108,3,34],[33,83,26],[87,36,13],[73,70,56],[49,105,38],[54,111,42],[74,119,31],[31,23,44],[81,27,19],[40,51,44],[81,8,41],[83,134,42],[21,151,0],[101,6,18],[32,138,28],[13,173,39],[37,164,21],[45,168,52],[75,156,41],[94,31,41],[72,65,48],[70,68,51],[30,142,27],[99,22,44],[46,85,0],[109,43,57],[75,71,53],[67,125,33],[20,157,2],[85,4,46],[86,38,11],[43,48,46],[77,69,19],[82,68,14],[76,64,58],[55,109,43],[86,136,35],[38,162,19],[54,57,2],[77,157,42],[90,24,42],[42,160,17],[81,8,42],[92,24,45],[73,68,18],[69,64,56],[71,71,54],[56,108,44],[33,137,28],[69,127,33],[31,85,21],[89,38,3],[47,88,0],[75,71,18],[39,162,26],[32,175,8],[40,165,50],[76,21,17],[35,45,43],[45,124,47],[72,123,32],[80,4,39],[115,5,37],[72,70,16],[113,118,59],[14,148,3],[45,159,20],[37,161,18],[31,175,5],[50,165,51],[75,157,39],[70,118,34],[76,64,49],[20,157,4],[9,176,36],[31,175,3],[40,163,25],[38,164,24],[82,28,21],[79,73,14],[21,154,3],[21,155,3],[45,166,43],[77,23,18],[99,24,42],[30,87,29],[37,87,25],[49,84,5],[70,70,53],[54,111,43],[71,123,31],[32,175,0],[79,1,38],[90,37,13],[107,2,36],[47,85,3],[55,60,0],[31,142,27],[73,43,5],[89,41,5],[114,43,54],[68,64,53],[20,149,8],[88,1,40],[72,45,9],[110,39,59],[69,65,50],[74,120,36],[10,176,36],[40,165,45],[83,21,17],[100,7,20],[72,36,6],[99,6,22],[29,146,27],[93,24,39],[114,3,40],[112,4,32],[43,47,47],[88,146,39],[11,179,41],[37,162,19],[113,9,37],[99,24,38],[53,77,6],[65,122,33],[97,2,24],[96,30,45],[75,69,51],[64,119,31],[49,127,39],[35,160,24],[48,169,48],[92,28,43],[55,72,13],[49,99,6],[44,124,42],[54,124,40],[42,170,49],[32,23,40],[99,9,18],[93,29,40],[78,69,19],[10,179,39],[81,26,24],[66,122,36],[55,111,42],[34,123,15],[86,140,37],[50,167,48],[94,1,23],[112,10,35],[108,47,54],[80,70,13],[57,99,9],[69,127,35],[75,21,21],[90,24,44],[110,37,53],[90,35,8],[36,87,29],[71,68,11],[19,156,5],[12,174,44],[16,177,41],[85,21,21],[87,39,5],[88,1,45],[89,42,5],[68,38,4],[110,41,58],[56,61,2],[96,29,41],[39,47,42],[73,37,2],[37,85,23],[56,63,0],[107,119,53],[18,146,3],[28,143,27],[24,135,26],[72,43,9],[43,168,51],[81,153,38],[79,24,17],[94,2,16],[71,122,38],[111,38,54],[37,85,29],[60,98,5],[97,8,21],[42,46,49],[39,178,2],[78,1,41],[112,45,54],[110,47,53],[47,130,42],[49,166,51],[80,159,34],[113,42,52],[56,72,12],[56,105,6],[29,134,22],[36,121,18],[15,177,42],[8,174,37],[85,7,44],[74,40,4],[74,70,10],[80,71,16],[54,95,5],[84,158,39],[100,2,24],[95,29,44],[58,61,2],[50,132,42],[15,151,4],[31,176,6],[84,21,24],[111,8,34],[77,74,12],[13,174,33],[48,165,43],[78,158,34],[32,22,43],[98,22,46],[110,39,48],[49,168,50],[99,2,24],[17,149,8],[53,70,7],[86,140,38],[21,155,4],[44,169,51],[50,82,0],[118,109,59],[25,134,31],[9,176,41],[44,162,21],[80,156,32],[30,26,41],[109,6,35],[35,115,11],[101,24,46],[103,118,59],[50,84,5],[33,116,11],[27,142,27],[28,140,29],[100,28,41],[111,7,34],[51,100,8],[83,135,41],[35,159,22],[56,74,10],[51,129,41],[90,25,44],[71,43,9],[51,126,39],[84,136,40],[36,161,19],[41,175,6],[50,165,49],[80,28,23],[76,22,24],[52,110,38],[75,72,11],[77,64,56],[51,109,40],[54,103,39],[108,115,57],[101,27,42],[35,47,46],[62,54,0],[78,64,56],[57,106,44],[50,133,42],[46,128,41],[47,168,52],[95,3,16],[37,49,44],[89,37,13],[114,42,52],[49,124,37],[65,121,32],[95,23,37],[37,50,46],[69,117,33],[22,148,8],[32,137,24],[35,160,23],[82,161,36],[107,42,57],[65,120,37],[78,24,24],[97,24,46],[96,28,41],[53,110,37],[79,72,15],[78,73,12],[53,96,5],[30,115,13],[84,10,41],[97,26,40],[60,58,2],[91,42,6],[109,46,52],[52,101,9],[56,110,42],[26,137,30],[52,126,39],[40,159,16],[69,41,8],[95,4,22],[45,173,47],[35,92,25],[89,137,43],[36,161,24],[41,167,51],[94,24,48],[67,38,7],[71,68,12],[35,122,18],[88,135,44],[94,3,21],[94,34,42],[46,85,2],[39,115,13],[50,91,1],[17,176,37],[102,25,42],[36,46,42],[35,91,24],[66,119,30],[16,176,35],[32,177,5],[40,162,26],[82,162,40],[87,1,38],[38,115,13],[110,6,38],[113,10,36],[108,46,54],[70,68,14],[54,113,38],[15,149,6],[51,127,47],[68,128,34],[98,26,47],[110,50,54],[112,2,41],[56,76,7],[65,121,33],[44,173,49],[80,23,26],[75,40,4],[71,42,10],[53,83,8],[70,125,32],[37,161,19],[79,18,21],[94,4,19],[85,38,5],[76,38,4],[50,89,3],[76,80,14],[28,137,23],[33,124,17],[82,8,40],[39,42,46],[58,102,5],[52,106,35],[58,107,43],[50,128,46],[45,167,44],[75,23,21],[92,25,42],[49,81,0],[83,3,46],[42,49,47],[54,86,0],[70,68,54],[14,149,3],[80,4,40],[57,61,2],[79,71,17],[39,166,20],[40,161,17],[48,167,45],[75,22,20],[75,39,11],[71,67,49],[30,141,25],[88,132,39],[8,174,40],[84,24,20],[112,39,59],[95,1,23],[108,3,37],[99,30,45],[41,165,45],[85,8,43],[99,23,44],[94,26,45],[48,71,6],[51,109,41],[28,138,24],[81,5,39],[93,26,46],[87,42,8],[81,69,13],[38,116,19],[14,171,39],[100,4,15],[40,48,49],[58,98,8],[59,106,38],[34,120,13],[52,73,12],[55,75,11],[84,23,19],[96,29,42],[31,89,29],[46,169,51],[96,31,45],[48,98,5],[84,135,36],[83,160,39],[58,72,8],[72,73,54],[38,117,18],[51,110,39],[79,161,35],[84,6,45],[69,41,9],[77,73,11],[47,129,45],[99,29,45],[73,69,10],[72,123,36],[81,7,43],[98,8,21],[50,101,3],[84,158,37],[117,108,59],[59,106,42],[82,163,38],[83,1,48],[117,1,33],[115,1,41],[99,22,40],[59,105,42],[92,36,3],[57,62,1],[72,68,17],[32,91,24],[30,138,24],[50,121,43],[52,130,43],[74,43,7],[100,28,45],[76,24,19],[75,76,13],[75,73,17],[76,72,10],[59,98,3],[52,104,6],[70,116,34],[105,119,54],[51,77,6],[32,20,38],[89,37,3],[112,44,56],[47,87,0],[47,89,0],[96,26,47],[97,26,43],[77,37,8],[89,143,38],[112,6,39],[32,89,23],[42,46,43],[39,49,49],[50,107,40],[40,175,7],[80,5,44],[103,1,18],[99,0,19],[40,52,47],[36,118,20],[85,156,36],[99,10,19],[58,72,6],[72,70,14],[34,112,16],[18,155,5],[81,29,20],[53,75,11],[76,40,8],[79,68,19],[44,160,25],[45,168,44],[94,20,42],[112,7,33],[42,44,41],[77,74,16],[78,64,54],[58,100,2],[54,99,0],[73,119,30],[89,131,39],[37,178,0],[99,30,43],[98,12,19],[100,26,46],[31,25,42],[32,139,27],[52,129,43],[46,169,45],[102,3,16],[101,27,43],[94,38,8],[105,40,55],[39,166,24],[39,46,41],[34,87,22],[54,80,7],[56,109,43],[68,119,39],[15,148,7],[49,167,48],[38,53,45],[68,39,4],[49,99,3],[49,99,5],[33,123,15],[79,163,36],[81,24,25],[86,6,41],[88,41,5],[100,3,23],[67,121,38],[79,154,38],[35,124,17],[50,108,40],[53,124,46],[85,136,42],[77,159,40],[93,28,40],[48,87,3],[60,57,2],[90,33,8],[105,39,54],[54,102,39],[107,118,53],[54,125,41],[51,127,40],[59,58,3],[100,8,20],[37,89,26],[51,85,4],[39,116,15],[58,100,5],[54,124,41],[83,134,39],[85,1,37],[97,35,43],[82,6,45],[113,42,51],[53,72,3],[73,68,10],[32,92,28],[59,105,40],[115,7,36],[40,42,46],[50,108,38],[86,136,43],[95,6,20],[96,25,38],[36,47,48],[40,50,48],[73,37,12],[79,70,11],[52,103,3],[49,125,38],[14,176,43],[112,10,37],[52,54,1],[91,22,46],[93,30,41],[75,66,14],[35,119,13],[83,135,40],[45,164,48],[84,7,40],[115,39,53],[50,71,13],[56,101,1],[34,136,27],[30,139,30],[56,59,3],[48,86,4],[28,132,27],[14,149,1],[88,138,36],[88,134,45],[85,22,21],[81,18,21],[90,45,7],[38,86,24],[110,119,53],[72,121,37],[67,125,32],[10,178,40],[86,36,12],[32,20,46],[40,44,51],[39,85,26],[55,110,37],[67,119,39],[76,158,40],[100,1,24],[79,30,20],[45,83,1],[76,65,57],[50,100,7],[52,111,39],[22,149,7],[39,163,19],[98,22,43],[73,45,7],[80,68,11],[74,72,54],[72,119,38],[35,177,0],[83,0,42],[87,5,42],[38,86,28],[70,120,29],[88,143,38],[84,158,41],[78,2,42],[96,27,39],[31,136,31],[32,86,31],[65,119,30],[23,149,6],[33,137,29],[86,3,46],[39,42,45],[44,174,47],[80,165,37],[95,4,17],[24,148,6],[56,106,5],[55,103,8],[35,90,24],[50,107,38],[52,125,47],[72,122,37],[84,136,39],[38,48,49],[45,172,50],[82,164,38],[41,160,27],[40,156,22],[84,22,24],[96,2,24],[54,103,8],[87,140,41],[14,177,35],[41,162,18],[92,41,9],[92,39,6],[90,37,3],[36,118,12],[54,98,10],[24,135,28],[35,122,14],[32,134,31],[89,33,7],[98,3,24],[101,26,41],[98,24,42],[68,128,35],[98,31,41],[107,39,58],[74,73,53],[14,148,5],[69,123,31],[38,162,25],[82,157,43],[94,37,7],[90,25,42],[74,38,2],[109,47,55],[73,61,53],[49,166,45],[98,24,38],[75,42,8],[74,66,49],[31,138,24],[46,129,43],[73,122,35],[15,175,44],[36,174,4],[41,165,44],[80,30,20],[30,24,39],[114,41,53],[49,88,3],[22,150,0],[77,21,17],[97,4,23],[93,23,47],[101,28,43],[72,47,7],[102,25,44],[39,46,51],[92,37,12],[51,74,4],[31,135,32],[85,134,34],[67,122,31],[39,44,40],[37,85,30],[70,123,37],[16,152,3],[15,150,4],[18,174,38],[10,178,39],[44,169,45],[56,71,3],[76,23,19],[79,25,18],[17,177,40],[48,167,51],[91,26,42],[91,42,8],[35,113,16],[116,105,59],[53,128,43],[85,135,43],[79,165,37],[97,31,45],[77,76,13],[34,93,27],[32,138,27],[19,154,6],[41,163,19],[78,161,36],[112,45,56],[30,118,14],[51,102,3],[83,134,40],[43,170,50],[40,165,47],[108,2,33],[100,27,40],[58,71,8],[90,34,8],[71,125,33],[33,178,6],[37,163,20],[79,3,39],[54,58,2],[72,67,57],[71,122,37],[41,167,45],[81,22,16],[54,85,2],[92,41,8],[78,156,43],[98,3,23],[67,37,6],[94,36,6],[74,75,14],[37,119,17],[31,116,20],[53,126,42],[13,179,42],[43,163,21],[71,40,3],[92,25,44],[90,24,45],[83,12,42],[51,99,1],[53,127,43],[69,127,36],[101,6,20],[50,73,4],[18,176,39],[45,174,49],[40,166,48],[89,23,40],[49,134,43],[31,87,30],[49,98,2],[34,113,16],[40,177,6],[42,165,24],[92,24,42],[84,37,9],[53,127,44],[72,125,34],[36,44,42],[71,68,16],[28,143,28],[92,24,38],[92,25,39],[37,46,42],[91,44,8],[119,111,56],[46,124,39],[87,136,35],[18,157,4],[13,172,39],[41,161,26],[60,56,4],[55,84,2],[21,150,7],[22,151,6],[19,154,0],[20,150,7],[88,3,42],[83,0,41],[32,84,26],[54,100,1],[118,105,54],[23,148,7],[33,120,19],[16,150,0],[41,168,47],[89,47,8],[97,32,45],[99,30,44],[72,70,17],[86,135,34],[82,24,25],[99,27,47],[95,24,48],[87,42,6],[33,95,26],[32,138,29],[70,127,34],[82,9,42],[101,25,46],[34,85,21],[40,178,2],[95,30,45],[49,71,11],[31,86,21],[33,177,7],[45,167,52],[97,25,38],[107,45,54],[55,103,40],[28,135,32],[14,175,44],[102,4,21],[108,40,59],[116,106,58],[47,171,48],[98,25,38],[111,43,51],[76,75,16],[47,169,51],[93,27,44],[70,43,8],[106,41,51],[45,84,1],[80,69,11],[57,109,40],[48,127,47],[37,161,25],[100,4,23],[68,40,5],[71,70,51],[71,69,51],[52,111,42],[46,128,44],[45,126,40],[97,24,48],[56,74,11],[79,68,9],[36,118,13],[54,103,40],[73,122,36],[9,175,36],[78,21,26],[79,4,43],[112,46,55],[94,3,17],[50,166,47],[41,166,45],[98,27,47],[33,91,24],[94,24,46],[37,159,18],[39,165,24],[42,169,50],[81,4,46],[27,135,32],[21,152,0],[96,33,42],[30,134,32],[101,5,21],[54,124,44],[37,47,50],[84,36,8],[34,122,14],[50,124,48],[41,175,7],[109,1,41],[56,53,0],[66,124,33],[32,177,3],[56,100,1],[97,34,43],[31,140,28],[67,124,32],[48,169,46],[102,1,23],[116,1,40],[89,45,7],[50,73,5],[77,65,56],[18,152,6],[77,158,41],[82,27,20],[44,44,47],[50,109,40],[18,174,40],[76,68,53],[108,42,50],[111,39,49],[72,68,10],[19,145,2],[44,162,22],[95,6,19],[97,22,38],[70,41,10],[36,48,48],[43,44,49],[55,78,8],[58,99,8],[33,134,30],[88,138,43],[17,176,39],[53,56,1],[41,167,48],[108,1,39],[42,166,21],[73,72,55],[45,169,51],[78,27,19],[47,87,2],[38,46,50],[76,39,4],[77,66,51],[39,45,41],[36,161,25],[83,4,38],[55,55,5],[30,22,38],[114,7,37],[24,148,4],[96,32,42],[72,70,15],[49,167,47],[67,38,6],[112,40,59],[51,105,45],[119,112,57],[99,10,18],[80,30,22],[84,36,9],[54,101,1],[51,110,40],[53,107,44],[53,124,40],[35,159,24],[78,159,42],[39,50,49],[93,39,6],[52,72,13],[78,64,55],[82,28,22],[109,2,40],[75,40,5],[94,36,7],[53,88,1],[50,71,3],[79,72,16],[69,118,34],[104,119,55],[47,126,47],[70,38,2],[82,163,37],[116,4,36],[32,179,4],[34,44,47],[69,41,6],[53,127,42],[43,46,43],[80,70,11],[71,67,50],[57,109,41],[36,161,20],[112,9,38],[42,48,45],[46,168,44],[69,122,30],[55,104,7],[60,105,40],[89,138,36],[83,134,38],[34,84,26],[84,36,11],[58,101,7],[59,107,40],[22,153,2],[41,157,22],[81,155,38],[115,2,32],[40,46,50],[54,125,45],[109,40,59],[68,65,52],[113,118,57],[89,137,35],[33,177,0],[97,9,19],[99,22,43],[41,44,51],[95,26,39],[46,86,1],[103,2,18],[96,7,17],[35,46,48],[106,42,54],[14,172,39],[40,51,48],[14,149,5],[52,124,39],[11,176,35],[16,179,40],[41,50,46],[48,72,7],[32,136,24],[13,178,43],[78,1,42],[87,39,11],[54,102,2],[52,90,1],[117,107,59],[45,161,22],[88,22,42],[91,43,7],[56,71,13],[107,1,39],[53,56,0],[74,74,14],[40,156,21],[45,160,20],[82,162,36],[85,5,45],[93,27,45],[113,2,31],[39,46,42],[37,115,21],[54,107,6],[36,121,14],[16,154,3],[44,174,49],[44,170,51],[81,20,21],[94,36,5],[76,21,18],[24,136,27],[49,135,43],[44,162,48],[81,23,17],[96,31,41],[58,100,6],[18,145,3],[44,125,43],[78,156,33],[83,13,42],[93,1,16],[94,4,20],[79,30,22],[70,37,2],[57,74,7],[48,71,8],[80,70,12],[77,68,53],[54,107,36],[103,118,55],[85,37,11],[72,124,33],[88,134,44],[38,165,21],[49,167,45],[79,23,17],[34,135,27],[58,101,5],[67,125,35],[33,176,0],[36,178,8],[91,27,41],[76,68,51],[50,107,42],[18,174,37],[42,169,49],[78,164,38],[75,21,24],[93,26,45],[114,7,35],[78,70,18],[93,24,38],[109,5,35],[39,115,14],[106,118,53],[53,126,41],[68,124,37],[85,21,24],[101,6,19],[96,21,43],[48,72,6],[94,26,46],[54,73,4],[113,118,55],[28,141,29],[53,126,45],[102,24,40],[55,59,2],[71,70,52],[108,117,58],[33,134,24],[112,3,40],[68,37,11],[49,74,6],[53,74,12],[56,112,41],[51,106,36],[48,132,44],[37,161,26],[81,29,21],[56,77,8],[101,3,16],[53,89,0],[72,69,50],[34,175,9],[80,25,18],[84,38,8],[72,40,11],[85,139,39],[40,52,45],[70,40,4],[81,68,15],[50,123,43],[17,155,2],[43,159,17],[101,26,44],[61,55,3],[30,140,25],[77,161,37],[77,25,22],[88,2,40],[93,21,42],[37,87,24],[33,93,28],[27,139,29],[32,178,2],[31,23,40],[85,4,38],[108,4,35],[92,41,7],[74,74,16],[75,77,15],[82,159,42],[33,20,44],[82,27,21],[80,25,17],[87,4,40],[73,69,18],[94,29,43],[113,1,41],[56,104,3],[31,118,13],[54,104,39],[14,149,2],[47,131,43],[70,66,50],[93,39,7],[108,42,51],[113,40,58],[52,79,7],[26,140,27],[51,130,41],[31,24,42],[85,36,12],[50,100,8],[54,114,41],[49,129,40],[68,127,34],[89,136,35],[34,177,0],[69,68,53],[92,37,4],[75,67,57],[53,102,40],[37,120,16],[42,169,47],[73,36,7],[70,44,6],[109,48,54],[51,77,10],[59,105,43],[103,118,57],[84,136,37],[45,174,47],[54,55,4],[91,26,40],[32,137,30],[65,121,37],[34,122,18],[115,39,55],[37,87,26],[54,102,8],[53,108,36],[101,1,15],[43,46,49],[38,117,13],[34,124,15],[54,124,45],[12,175,34],[89,22,41],[72,73,52],[31,87,22],[34,121,19],[110,2,31],[42,49,46],[83,10,43],[96,28,46],[57,74,10],[53,81,8],[20,147,3],[54,124,46],[97,9,20],[112,47,54],[48,72,8],[31,115,20],[90,22,45],[115,41,54],[73,122,34],[54,76,5],[118,110,57],[73,72,12],[47,124,38],[41,175,4],[33,179,2],[34,20,42],[110,3,40],[114,4,40],[49,98,3],[106,39,57],[95,30,44],[71,71,52],[114,5,33],[67,37,5],[75,69,19],[76,68,20],[31,91,24],[50,105,43],[25,137,25],[66,123,33],[23,150,5],[87,43,9],[83,27,21],[81,4,45],[95,2,15],[100,24,47],[8,174,38],[107,39,50],[88,136,34],[41,161,18],[41,175,2],[30,26,44],[108,4,36],[69,41,5],[54,113,42],[30,136,23],[23,151,3],[9,175,42],[46,173,47],[78,158,42],[36,85,31],[89,34,7],[112,45,53],[54,75,5],[56,111,38],[49,126,38],[16,178,39],[77,27,21],[42,47,43],[96,3,23],[53,83,4],[59,60,0],[78,74,15],[26,137,24],[97,7,21],[68,37,10],[106,41,56],[53,76,5],[30,85,22],[80,156,44],[85,8,41],[102,5,19],[34,44,45],[96,33,44],[108,44,56],[45,83,2],[56,109,37],[109,119,53],[36,121,17],[50,133,44],[38,51,48],[93,2,20],[91,26,43],[98,24,39],[17,174,36],[67,64,53],[110,8,36],[81,69,12],[34,113,15],[53,113,39],[26,139,27],[15,151,1],[40,167,24],[91,22,37],[92,26,39],[37,48,43],[34,91,24],[52,104,4],[54,104,3],[32,115,21],[37,120,15],[69,128,33],[75,157,37],[71,69,16],[80,26,24],[97,4,15],[110,1,31],[95,27,40],[79,21,16],[35,114,16],[30,135,22],[87,143,38],[80,5,43],[77,66,56],[99,32,43],[73,70,11],[36,91,26],[112,5,33],[99,25,38],[39,48,42],[38,86,26],[32,85,21],[38,118,14],[50,107,37],[18,147,3],[39,160,27],[80,164,36],[39,45,51],[85,7,41],[82,10,41],[113,3,40],[75,156,40],[107,43,54],[113,41,58],[78,64,51],[32,136,30],[87,3,39],[53,56,3],[40,177,4],[50,165,46],[80,29,20],[116,2,33],[72,69,56],[75,39,10],[52,128,42],[44,162,20],[45,159,25],[38,163,25],[96,28,40],[37,52,46],[53,126,43],[43,171,48],[101,7,19],[112,42,58],[39,176,8],[114,39,57],[80,71,12],[58,106,43],[49,132,44],[39,179,6],[44,166,53],[95,5,19],[44,44,45],[70,65,57],[68,122,38],[110,43,57],[10,174,44],[95,24,46],[107,40,58],[69,37,11],[90,44,9],[57,101,8],[86,134,34],[68,123,37],[79,27,19],[108,5,36],[72,36,7],[35,89,29],[53,77,11],[33,179,6],[40,177,7],[83,25,23],[111,6,33],[39,44,41],[51,124,38],[70,120,39],[31,22,45],[84,1,37],[97,22,47],[51,80,0],[69,41,7],[31,115,11],[57,105,35],[82,157,33],[44,44,44],[51,101,2],[58,100,3],[64,119,34],[85,136,36],[11,174,44],[45,169,45],[67,37,7],[105,39,51],[76,76,13],[71,66,49],[37,119,14],[57,107,44],[69,118,33],[35,160,22],[106,41,57],[79,159,34],[58,71,6],[67,119,29],[70,117,34],[83,136,39],[96,32,44],[87,36,3],[91,38,12],[104,39,54],[54,106,45],[39,165,48],[78,23,25],[74,44,6],[32,118,19],[54,116,40],[96,32,43],[52,100,9],[119,113,58],[49,168,48],[31,26,42],[80,21,16],[79,22,16],[80,6,43],[37,88,26],[112,5,39],[102,24,41],[112,9,34],[116,4,35],[70,37,12],[57,102,6],[56,101,8],[54,105,45],[23,151,2],[97,26,38],[36,48,46],[49,121,43],[40,177,2],[114,6,38],[37,47,49],[88,38,4],[95,31,42],[57,73,6],[70,124,31],[49,165,52],[84,5,39],[117,3,36],[40,50,44],[71,45,8],[52,99,0],[41,159,17],[35,44,49],[71,41,10],[111,47,54],[58,62,1],[78,65,52],[49,126,47],[38,165,20],[34,44,44],[53,104,3],[74,119,35],[19,147,2],[103,2,19],[116,3,36],[74,74,12],[53,77,10],[51,79,8],[35,117,12],[49,124,38],[77,159,36],[94,37,6],[37,118,13],[118,108,56],[48,168,46],[108,3,33],[72,39,3],[53,87,1],[36,122,15],[19,155,1],[11,178,42],[36,174,3],[96,25,46],[50,80,0],[49,91,1],[29,131,27],[85,138,41],[34,159,22],[47,169,45],[78,2,43],[91,23,46],[34,119,13],[33,85,21],[33,93,25],[85,4,39],[91,38,4],[39,179,2],[43,166,53],[114,5,39],[35,86,31],[76,69,19],[74,70,55],[34,116,21],[41,168,49],[49,167,51],[98,31,45],[11,177,42],[36,175,10],[42,168,45],[95,21,42],[72,38,12],[72,72,54],[49,105,37],[50,106,37],[29,141,29],[85,22,19],[110,41,59],[16,178,40],[41,166,51],[32,24,42],[93,22,47],[77,73,17],[105,39,56],[113,44,53],[80,68,18],[26,136,31],[50,125,48],[45,159,19],[77,160,38],[89,42,11],[97,26,42],[32,22,40],[34,87,30],[70,64,49],[35,117,20],[59,98,2],[97,23,38],[95,30,43],[75,73,11],[88,133,39],[103,1,17],[100,8,19],[114,4,39],[97,33,44],[60,59,0],[112,41,50],[56,75,8],[53,80,9],[55,107,5],[108,1,32],[42,50,46],[47,130,44],[85,136,35],[42,166,22],[83,26,21],[56,105,5],[97,31,41],[49,87,3],[58,105,44],[43,164,22],[40,159,17],[113,4,32],[88,38,12],[81,69,14],[52,90,0],[49,126,39],[78,162,36],[36,46,49],[31,140,26],[77,160,39],[110,7,36],[95,25,46],[53,73,3],[53,106,5],[56,108,43],[29,142,26],[46,129,42],[36,159,18],[46,170,51],[45,163,48],[87,42,10],[98,1,13],[77,67,51],[72,63,53],[47,127,40],[70,121,30],[76,23,18],[83,24,23],[97,6,16],[76,69,9],[81,161,35],[79,158,42],[110,8,35],[68,122,30],[37,87,28],[36,88,28],[48,89,1],[57,74,6],[55,106,5],[85,6,40],[99,1,24],[106,42,53],[55,77,6],[66,123,32],[37,164,22],[97,27,47],[109,42,50],[23,150,6],[98,32,43],[35,121,14],[49,130,41],[97,1,14],[114,3,32],[88,43,6],[71,68,56],[57,108,43],[72,119,39],[116,106,57],[83,8,44],[111,10,37],[98,32,44],[57,111,40],[48,131,45],[77,156,42],[78,1,43],[54,58,1],[94,30,44],[74,71,17],[38,118,16],[50,166,48],[79,157,33],[101,1,14],[76,39,10],[57,108,42],[15,150,2],[30,26,43],[80,5,42],[115,6,36],[55,74,4],[49,73,10],[35,118,20],[25,136,28],[27,141,26],[66,120,38],[78,157,33],[107,1,33],[40,52,46],[71,69,15],[56,100,9],[59,106,39],[103,119,56],[42,175,4],[76,25,21],[89,43,10],[76,68,52],[69,121,38],[45,159,22],[80,158,42],[80,164,37],[94,29,40],[85,39,10],[108,116,57],[29,133,27],[80,155,37],[59,54,5],[78,65,53],[32,90,23],[58,108,38],[89,134,34],[31,24,40],[91,26,44],[38,45,51],[88,40,5],[57,63,1],[53,75,5],[53,79,9],[34,85,31],[78,71,17],[77,67,53],[61,56,1],[46,125,47],[111,43,57],[71,119,29],[67,127,34],[81,29,22],[93,24,40],[41,52,46],[29,139,24],[80,29,19],[98,29,46],[38,117,16],[69,119,28],[31,141,26],[66,122,31],[98,29,40],[58,108,40],[49,73,11],[77,71,18],[44,124,44],[17,174,43],[79,27,23],[86,4,40],[43,46,47],[44,83,0],[74,72,53],[74,73,54],[52,105,35],[83,3,47],[98,1,24],[89,40,11],[50,85,5],[81,68,17],[28,142,28],[32,120,18],[84,159,36],[79,23,25],[37,45,51],[80,72,14],[37,115,11],[57,106,36],[30,137,23],[46,166,53],[86,2,38],[82,5,39],[77,66,14],[101,26,40],[116,2,39],[107,42,52],[79,68,18],[82,29,21],[81,23,25],[109,39,59],[53,109,37],[33,136,24],[24,150,3],[50,165,47],[79,21,26],[97,10,19],[91,40,11],[41,46,42],[45,127,42],[13,178,36],[42,162,25],[87,3,40],[98,5,23],[102,4,17],[56,51,0],[112,5,32],[111,1,31],[52,104,5],[119,108,54],[23,150,3],[41,169,48],[77,161,39],[89,22,40],[107,2,35],[71,37,12],[53,70,8],[78,70,10],[46,127,46],[86,141,38],[37,159,27],[81,163,40],[59,57,3],[50,98,8],[51,101,7],[51,107,37],[36,160,19],[102,24,42],[108,3,39],[33,83,25],[76,40,9],[29,138,30],[51,125,48],[31,175,7],[99,8,17],[70,42,5],[51,91,0],[43,163,20],[30,22,46],[37,51,46],[35,118,12],[69,117,34],[50,131,45],[40,175,8],[43,162,19],[36,173,3],[35,174,4],[36,47,43],[36,179,8],[114,40,57],[30,116,13],[32,117,12],[53,110,43],[86,4,39],[90,23,39],[40,49,43],[54,71,3],[55,76,10],[68,64,52],[52,126,40],[37,163,21],[101,3,15],[97,22,46],[35,46,45],[113,44,54],[47,87,1],[30,141,29],[32,22,41],[39,53,47],[93,38,5],[52,129,42],[33,21,41],[80,21,26],[42,48,44],[57,60,2],[54,86,1],[68,121,38],[41,176,5],[40,175,0],[79,3,44],[114,1,31],[87,43,8],[61,56,0],[32,117,20],[34,45,44],[94,33,42],[74,73,12],[34,121,18],[80,20,21],[81,7,42],[74,38,12],[54,79,9],[69,64,57],[53,102,8],[113,42,57],[51,98,1],[24,148,2],[34,135,29],[84,158,38],[76,24,22],[84,4,38],[100,9,19],[86,39,11],[45,176,48],[101,24,47],[54,74,12],[77,67,55],[75,67,49],[18,174,39],[35,159,20],[32,23,41],[102,3,20],[98,9,20],[47,84,4],[35,47,48],[39,115,17],[31,140,29],[19,157,4],[8,175,37],[59,55,5],[73,42,4],[37,118,18],[94,26,39],[41,44,41],[32,122,15],[87,135,34],[80,155,38],[83,23,18],[54,104,2],[86,1,47],[99,26,47],[93,25,46],[116,3,35],[52,71,13],[92,38,5],[48,72,10],[56,71,12],[73,73,13],[34,92,24],[40,115,16],[79,22,26],[44,45,44],[49,73,8],[35,88,30],[78,65,55],[56,101,9],[87,140,37],[41,167,21],[47,168,51],[53,55,3],[97,6,22],[114,2,31],[82,24,24],[74,64,48],[10,174,43],[82,158,34],[34,89,23],[67,38,8],[110,42,50],[33,88,22],[57,107,36],[42,159,17],[39,44,52],[72,68,50],[49,82,0],[70,67,56],[36,120,14],[85,157,40],[79,25,24],[108,1,33],[79,72,12],[53,86,3],[33,89,29],[35,91,28],[15,175,34],[47,172,48],[42,170,48],[42,46,42],[69,123,30],[96,27,40],[76,40,7],[87,40,11],[94,30,43],[59,105,37],[85,135,35],[83,159,40],[99,23,43],[115,4,34],[38,49,43],[39,175,0],[43,170,46],[33,20,39],[80,6,41],[77,64,49],[43,172,49],[84,7,44],[37,115,20],[53,95,5],[34,123,18],[32,177,6],[31,20,47],[85,22,22],[83,5,39],[102,3,22],[38,42,46],[75,69,9],[54,105,3],[49,106,41],[26,136,24],[51,131,44],[44,125,41],[64,120,36],[49,71,5],[39,175,8],[76,24,23],[85,6,44],[115,4,38],[88,139,36],[57,66,0],[52,98,0],[12,174,34],[42,165,21],[102,26,43],[95,19,42],[111,0,36],[86,38,5],[55,105,7],[85,139,38],[75,21,20],[75,37,3],[110,45,57],[26,136,30],[85,21,20],[45,44,46],[56,105,45],[51,128,46],[86,139,41],[83,135,37],[33,175,9],[76,156,34],[75,64,58],[53,87,2],[68,66,53],[53,102,2],[52,101,1],[119,112,59],[26,134,32],[69,121,30],[62,54,2],[73,61,52],[24,149,5],[50,132,44],[72,124,34],[18,155,1],[48,169,49],[80,28,19],[72,37,13],[90,22,39],[82,9,43],[58,109,40],[53,108,44],[46,128,43],[72,122,32],[69,122,38],[37,175,9],[30,89,27],[77,37,9],[80,71,13],[70,65,49],[66,123,36],[96,6,21],[96,8,18],[58,53,0],[53,85,3],[53,78,6],[97,26,48],[39,47,50],[115,39,51],[72,71,55],[73,63,52],[40,168,21],[43,172,48],[77,24,24],[99,7,17],[37,48,49],[11,179,37],[40,165,49],[42,170,47],[48,168,51],[78,21,16],[89,40,12],[53,98,0],[53,107,36],[48,169,47],[31,24,41],[50,86,4],[72,71,51],[38,117,17],[49,98,7],[32,137,29],[21,156,3],[75,156,36],[52,54,3],[33,96,26],[28,136,31],[70,128,33],[92,25,38],[111,47,55],[94,36,10],[73,73,54],[27,138,30],[87,142,39],[72,43,4],[50,105,37],[38,161,26],[82,0,42],[96,33,43],[110,43,51],[55,79,8],[53,82,8],[72,73,53],[32,93,27],[53,107,6],[73,121,34],[85,36,11],[84,3,46],[83,1,37],[92,29,42],[70,121,38],[51,76,6],[55,83,2],[89,135,34],[71,124,36],[42,165,52],[97,26,47],[93,31,43],[71,44,9],[31,115,21],[32,91,28],[118,109,57],[50,133,43],[86,137,43],[19,152,7],[39,50,48],[78,23,17],[111,10,35],[39,179,5],[91,41,10],[50,77,8],[34,86,31],[54,107,35],[18,149,8],[33,134,31],[16,151,5],[76,39,5],[16,175,35],[47,173,48],[77,158,34],[78,1,39],[97,24,45],[15,178,42],[60,58,1],[57,100,8],[88,133,38],[9,178,39],[17,174,35],[84,23,18],[83,11,42],[38,45,41],[85,3,46],[51,98,10],[74,119,36],[41,160,17],[95,3,22],[36,89,28],[77,38,5],[94,37,10],[54,102,40],[29,142,25],[71,125,34],[39,177,7],[39,43,46],[36,85,30],[74,68,9],[89,23,41],[91,42,10],[115,39,56],[35,175,9],[37,178,8],[77,161,38],[78,3,42],[112,1,41],[97,26,41],[110,47,56],[100,24,48],[75,76,14],[71,37,2],[85,36,4],[107,42,51],[48,89,0],[30,115,12],[55,110,43],[24,149,2],[61,56,3],[86,140,41],[16,151,0],[41,165,51],[25,135,30],[37,45,41],[72,40,3],[37,119,16],[42,167,44],[39,43,45],[30,88,24],[48,121,43],[8,175,40],[41,158,22],[80,165,39],[111,9,36],[113,41,50],[36,46,43],[80,71,14],[68,65,53],[54,104,8],[38,115,12],[87,1,45],[102,3,19],[41,49,44],[106,43,54],[33,136,26],[111,8,38],[72,39,11],[36,179,0],[38,159,17],[84,158,35],[84,24,21],[94,3,18],[9,177,39],[51,108,37],[32,139,26],[52,128,45],[44,124,46],[44,164,48],[90,26,42],[96,30,42],[53,88,0],[48,73,8],[52,77,6],[50,130,41],[36,172,4],[31,22,39],[97,22,43],[72,41,10],[23,151,5],[31,175,2],[44,163,22],[100,25,39],[92,29,41],[89,38,4],[53,79,6],[57,71,4],[17,156,3],[80,164,40],[30,26,40],[78,27,23],[94,27,40],[93,39,8],[36,88,29],[36,89,27],[73,72,16],[55,107,4],[29,134,33],[32,136,31],[13,176,43],[99,30,42],[50,165,45],[93,1,18],[96,25,39],[10,179,40],[39,51,48],[55,75,5],[32,87,22],[33,136,30],[66,124,34],[31,175,4],[39,52,44],[99,31,43],[53,83,5],[49,73,7],[31,118,18],[8,174,41],[89,38,13],[45,165,43],[32,115,11],[60,57,3],[31,92,25],[85,137,37],[40,177,5],[41,168,48],[82,28,20],[118,1,36],[37,51,45],[111,48,54],[72,64,48],[31,134,22],[45,124,40],[10,176,43],[77,1,42],[106,42,56],[69,65,56],[58,98,1],[52,100,1],[54,99,10],[40,165,51],[78,24,25],[89,48,8],[24,148,0],[36,121,16],[32,175,7],[115,1,32],[107,44,55],[50,127,47],[68,121,30],[21,151,6],[50,165,50],[80,5,41],[32,134,22],[111,36,54],[105,39,55],[79,160,41],[114,8,37],[71,34,7],[48,125,38],[89,138,42],[36,177,8],[39,44,51],[81,159,42],[59,100,5],[47,86,2],[74,119,32],[25,137,28],[73,120,31],[91,24,38],[70,43,9],[76,71,18],[54,95,4],[70,127,33],[23,150,1],[102,2,22],[89,33,8],[90,45,8],[56,73,5],[79,74,14],[38,118,15],[55,105,35],[31,137,24],[22,151,1],[72,45,6],[102,1,16],[96,24,46],[10,174,35],[89,38,12],[30,89,28],[77,76,14],[33,137,26],[47,126,39],[49,132,41],[92,27,44],[72,44,9],[33,82,26],[80,71,15],[106,119,53],[85,7,40],[115,4,39],[98,30,41],[38,53,46],[55,97,5],[43,165,22],[84,160,38],[79,1,45],[56,54,5],[106,41,53],[49,74,10],[33,119,13],[40,167,23],[36,176,9],[73,45,8],[68,39,9],[37,87,27],[36,121,15],[15,176,43],[39,177,0],[46,174,49],[80,160,41],[54,56,4],[113,7,34],[94,20,41],[98,32,42],[74,68,56],[32,119,19],[98,10,18],[101,26,43],[84,37,8],[76,68,55],[53,97,5],[24,148,1],[21,148,8],[51,132,43],[40,179,4],[49,168,49],[89,46,8],[44,168,44],[90,36,3],[55,73,12],[116,105,55],[35,123,17],[91,41,6],[106,42,55],[48,71,10],[53,113,41],[31,135,22],[45,160,21],[110,46,56],[72,43,10],[53,106,6],[25,148,3],[54,126,43],[42,169,46],[96,6,17],[69,40,5],[55,106,6],[49,105,43],[89,142,39],[36,161,23],[40,169,22],[48,169,50],[98,1,25],[31,88,29],[112,41,58],[52,68,8],[68,65,55],[54,107,44],[47,127,47],[85,158,38],[88,2,44],[76,41,7],[94,21,42],[42,165,20],[46,165,43],[73,41,4],[54,112,38],[49,132,42],[18,150,7],[82,161,40],[84,158,36],[80,29,22],[94,25,47],[54,54,4],[39,165,20],[30,27,42],[92,24,41],[93,27,41],[49,105,42],[50,87,4],[119,111,59],[74,120,34],[19,152,0],[86,6,43],[99,23,42],[92,28,42],[69,42,7],[111,4,40],[53,73,4],[34,115,22],[29,136,32],[18,175,37],[51,73,12],[115,5,34],[98,26,42],[56,60,2],[75,72,17],[75,67,50],[53,109,43],[77,158,42],[52,76,11],[52,74,4],[77,75,12],[76,65,13],[26,138,27],[103,1,16],[92,1,19],[97,26,44],[53,75,12],[53,126,46],[45,172,46],[78,162,40],[86,7,42],[33,117,20],[72,70,55],[80,18,20],[92,23,47],[52,89,0],[51,106,44],[13,174,45],[78,157,43],[109,4,38],[58,62,0],[55,96,5],[116,106,56],[34,123,14],[51,124,48],[8,174,39],[41,176,3],[43,47,44],[27,137,31],[35,123,16],[82,9,41],[50,107,41],[105,41,54],[31,88,30],[74,64,58],[33,117,12],[97,36,43],[52,91,0],[33,120,13],[50,129,46],[95,27,39],[109,4,34],[41,51,45],[79,73,15],[53,104,7],[52,106,45],[48,130,41],[87,3,44],[71,68,14],[59,99,7],[31,175,6],[79,157,43],[75,68,50],[29,134,21],[28,135,22],[89,142,40],[80,161,41],[98,24,41],[56,83,0],[110,41,50],[53,87,0],[34,115,10],[54,103,2],[78,1,44],[91,22,47],[35,44,43],[87,142,38],[44,161,21],[33,84,26],[19,150,8],[12,175,44],[32,177,4],[47,165,43],[56,74,5],[56,73,4],[25,136,27],[44,162,23],[42,165,53],[112,1,30],[91,25,39],[72,37,12],[90,40,5],[25,137,27],[34,121,14],[49,128,40],[41,168,50],[93,25,38],[57,59,3],[54,75,11],[75,66,49],[52,112,40],[95,29,41],[71,43,5],[49,105,40],[108,118,52],[26,138,29],[44,124,40],[31,137,30],[54,124,42],[88,138,42],[68,39,5],[33,178,7],[33,85,31],[55,106,4],[27,135,22],[49,124,48],[12,176,35],[83,159,36],[101,2,15],[71,40,11],[100,7,17],[91,25,44],[73,44,5],[89,44,6],[52,77,10],[37,88,28],[33,93,24],[52,111,40],[97,0,19],[98,5,15],[35,46,44],[94,19,41],[111,2,31],[114,41,51],[59,61,1],[74,68,19],[51,108,38],[37,121,16],[46,126,46],[87,1,46],[112,45,55],[52,86,3],[80,153,38],[106,1,36],[99,22,41],[58,63,0],[54,69,8],[50,101,6],[45,164,47],[80,163,40],[83,26,22],[86,39,5],[56,75,9],[74,63,53],[75,70,52],[53,105,7],[38,117,15],[29,136,23],[95,5,18],[111,40,59],[33,92,28],[117,107,58],[113,119,56],[29,144,27],[53,106,4],[45,124,46],[87,142,40],[41,168,22],[97,22,37],[60,55,4],[40,48,43],[89,39,4],[36,85,21],[38,85,24],[28,141,25],[47,124,48],[17,153,5],[36,49,47],[32,177,2],[92,28,44],[17,174,42],[26,137,29],[70,125,36],[89,142,38],[41,168,23],[76,159,37],[86,5,40],[100,29,43],[52,112,39],[41,162,26],[80,160,35],[12,178,42],[58,71,10],[54,97,4],[44,165,53],[30,25,44],[97,3,15],[109,1,32],[72,43,5],[71,67,57],[9,176,38],[43,165,43],[80,154,37],[95,25,38],[51,88,3],[38,177,8],[31,176,4],[59,61,0],[29,142,28],[66,121,37],[96,4,16],[99,27,46],[93,26,39],[54,109,5],[90,43,6],[75,70,51],[32,116,11],[58,101,4],[71,119,39],[48,165,44],[36,44,50],[74,119,37],[81,22,26],[97,2,14],[117,2,36],[111,37,54],[38,86,27],[36,89,25],[29,137,31],[82,3,38],[84,8,40],[54,72,13],[110,38,54],[32,177,7],[47,166,53],[46,173,48],[80,18,21],[84,22,18],[98,9,21],[76,40,6],[94,23,37],[30,118,16],[48,129,46],[45,126,44],[90,23,45],[98,22,38],[57,103,6],[88,39,4],[72,69,11],[49,99,4],[28,143,26],[31,139,25],[73,121,31],[17,177,37],[72,48,7],[82,1,37],[42,166,52],[42,168,50],[77,158,35],[97,28,46],[41,175,3],[35,115,21],[53,105,35],[10,177,42],[41,175,5],[43,159,26],[74,71,10],[72,72,53],[73,73,52],[42,167,22],[30,26,42],[30,20,37],[97,28,40],[108,2,39],[113,41,57],[52,80,8],[77,67,52],[13,179,36],[73,43,9],[48,105,40],[72,119,29],[72,120,38],[41,156,22],[40,165,46],[75,157,38],[86,21,21],[49,83,5],[112,3,32],[89,36,13],[68,127,33],[39,167,21],[79,1,46],[81,3,38],[76,39,9],[24,135,25],[33,136,29],[35,121,18],[49,131,45],[36,178,0],[79,2,45],[95,3,15],[88,45,9],[95,26,45],[54,104,7],[56,105,4],[53,114,40],[56,110,38],[52,108,43],[47,128,40],[45,159,24],[76,37,10],[97,25,39],[79,3,40],[72,38,2],[74,70,18],[78,71,10],[58,54,5],[38,43,46],[70,42,9],[85,39,9],[30,88,23],[37,87,23],[46,86,0],[33,90,23],[56,58,3],[93,19,42],[69,66,56],[24,149,1],[31,120,15],[17,177,38],[93,2,18],[97,25,44],[52,78,6],[99,2,14],[94,24,47],[79,160,35],[42,47,48],[112,45,52],[55,112,42],[89,132,39],[41,176,2],[84,159,40],[80,3,45],[57,51,0],[100,2,14],[98,25,44],[100,4,22],[79,64,53],[25,134,23],[38,176,9],[93,22,37],[32,85,31],[48,128,40],[33,178,1],[83,26,20],[101,4,16],[89,44,9],[36,119,13],[28,142,26],[93,36,5],[72,42,4],[112,46,53],[110,40,49],[50,89,2],[57,107,43],[52,110,42],[69,121,39],[86,36,4],[57,98,1],[69,119,40],[68,117,34],[30,133,27],[85,137,41],[13,173,38],[46,174,47],[33,97,26],[57,98,10],[32,134,23],[54,125,43],[16,150,7],[91,26,41],[115,40,55],[55,104,3],[34,91,28],[26,139,26],[31,137,23],[83,134,41],[88,136,35],[74,61,53],[35,88,29],[50,71,12],[18,174,41],[12,171,39],[44,162,24],[87,4,43],[113,6,33],[34,88,22],[108,42,57],[73,66,57],[32,94,26],[46,129,44],[35,48,46],[50,75,7],[30,135,32],[84,134,43],[17,151,6],[17,178,39],[14,177,43],[40,177,3],[86,39,10],[82,4,38],[101,3,22],[92,26,45],[109,4,39],[81,1,37],[112,118,55],[44,159,18],[84,159,39],[83,160,38],[73,74,14],[32,88,22],[74,74,13],[76,65,49],[38,117,19],[118,106,54],[39,162,18],[96,2,14],[71,45,7],[90,24,43],[110,4,39],[101,5,17],[42,44,51],[80,31,21],[88,36,13],[59,98,7],[52,126,47],[10,175,43],[59,57,4],[68,38,10],[52,99,10],[49,106,40],[22,152,3],[21,153,5],[40,159,28],[83,7,39],[38,41,46],[110,3,32],[75,65,14],[30,117,14],[73,119,37],[67,125,36],[71,122,30],[78,163,39],[109,6,37],[76,37,11],[109,47,54],[58,72,10],[75,75,16],[51,105,44],[34,120,19],[11,174,34],[102,4,18],[42,48,47],[107,39,49],[76,77,13],[13,148,3],[84,138,39],[16,179,39],[97,10,18],[98,24,40],[41,51,46],[94,19,42],[101,26,42],[51,126,47],[72,123,33],[32,20,39],[75,22,23],[95,1,24],[94,5,19],[97,27,41],[110,36,54],[47,130,43],[103,2,20],[108,3,38],[19,147,3],[85,37,5],[39,116,17],[54,110,5],[51,110,41],[44,124,41],[16,153,2],[95,28,44],[68,39,10],[109,5,38],[114,41,56],[71,68,13],[28,142,27],[44,125,45],[69,40,4],[72,37,2],[32,87,30],[73,71,17],[72,64,58],[33,114,16],[29,140,25],[17,154,3],[40,44,41],[96,7,18],[20,152,0],[73,70,51],[31,119,15],[54,109,44],[69,123,38],[113,41,51],[78,76,14],[30,119,16],[51,105,36],[31,120,16],[39,159,27],[80,168,38],[30,23,38],[48,84,5],[100,26,39],[109,38,54],[27,140,25],[79,158,34],[87,2,45],[96,24,48],[40,53,45],[52,89,1],[85,138,38],[95,30,42],[45,167,43],[85,156,40],[35,159,19],[87,39,4],[113,43,54],[30,118,15],[27,136,23],[24,149,3],[22,150,7],[113,3,32],[67,37,10],[93,20,42],[91,24,39],[60,54,5],[51,86,4],[50,72,12],[76,76,16],[73,72,15],[50,102,5],[93,1,17],[74,43,6],[86,137,35],[37,177,0],[44,161,22],[80,158,34],[78,27,22],[37,47,42],[76,67,50],[15,150,0],[106,40,57],[9,177,41],[93,3,19],[92,24,40],[56,104,7],[53,114,41],[112,7,39],[72,39,2],[25,134,30],[34,121,13],[34,94,26],[38,166,23],[70,38,12],[90,41,5],[57,102,3],[31,91,28],[48,91,0],[51,103,6],[30,175,4],[35,46,46],[55,83,1],[73,66,58],[76,67,51],[85,134,43],[82,134,39],[20,154,1],[84,6,39],[111,42,58],[80,2,38],[13,171,38],[39,160,17],[45,170,45],[99,4,15],[99,31,44],[113,39,59],[108,39,59],[54,71,13],[56,74,6],[72,67,49],[30,132,27],[48,166,44],[77,37,4],[91,22,38],[74,21,21],[72,66,57],[16,176,42],[82,158,42],[57,73,5],[34,112,15],[65,119,37],[14,178,36],[51,165,48],[80,153,37],[98,5,16],[33,86,21],[35,90,28],[58,100,4],[56,113,40],[55,113,41],[54,109,36],[117,108,56],[50,124,38],[52,80,9],[112,1,42],[83,25,21],[53,112,42],[28,139,24],[22,148,7],[38,165,24],[91,39,12],[29,138,23],[52,129,44],[86,3,45],[117,1,39],[46,87,0],[38,164,20],[42,167,52],[79,153,38],[92,25,46],[77,77,14],[108,117,57],[48,132,42],[38,175,9],[87,38,12],[93,31,41],[45,84,0],[74,73,52],[118,110,59],[88,139,42],[39,50,44],[51,72,3],[49,86,4],[29,141,25],[40,162,18],[98,5,22],[116,3,34],[76,38,10],[73,71,55],[20,154,5],[39,168,22],[96,1,14],[78,75,15],[51,78,7],[87,134,34],[76,22,18],[41,47,43],[89,36,2],[110,38,53],[39,168,23],[45,165,42],[83,24,18],[80,25,24],[112,7,38],[88,44,9],[44,46,46],[73,71,51],[104,118,54],[30,27,43],[109,5,36],[43,44,43],[51,78,9],[74,75,13],[68,64,50],[50,99,8],[54,101,9],[52,101,8],[84,0,42],[67,38,9],[50,76,7],[51,81,0],[76,67,55],[77,65,50],[73,68,50],[55,98,0],[17,176,42],[43,47,45],[80,24,17],[80,1,47],[94,1,16],[10,174,34],[57,101,3],[28,134,32],[49,168,47],[113,9,35],[77,67,54],[75,37,12],[94,32,42],[53,69,8],[53,124,47],[93,2,19],[110,4,40],[59,56,4],[75,71,54],[53,114,39],[45,127,43],[17,176,40],[95,7,19],[52,71,3],[76,66,56],[56,98,0],[56,103,7],[35,159,25],[105,39,53],[67,123,37],[18,175,40],[39,158,22],[78,29,21],[102,118,58],[71,71,53],[118,105,53],[76,66,49],[111,46,56],[78,69,9],[69,66,51],[35,116,21],[38,161,18],[42,169,48],[38,48,43],[45,127,44],[114,41,57],[75,64,48],[52,111,41],[116,106,59],[20,151,7],[40,166,47],[80,27,18],[87,38,4],[29,132,26],[49,73,9],[54,83,3],[51,87,3],[47,88,1],[55,77,10],[54,100,9],[74,119,33],[25,134,24],[74,41,4],[19,155,5],[99,3,23],[98,25,42],[69,124,31],[54,78,10],[73,72,54],[118,110,58],[10,177,37],[82,162,39],[89,22,43],[35,45,49],[79,4,40],[115,39,54],[95,4,21],[54,79,8],[110,48,55],[53,103,8],[59,98,5],[33,121,14],[46,125,39],[65,121,31],[37,163,22],[73,38,2],[108,4,37],[54,85,1],[48,71,9],[36,87,23],[38,178,1],[31,176,5],[44,167,52],[90,38,12],[88,143,40],[39,179,4],[80,163,36],[81,19,21],[50,100,4],[43,164,21],[77,25,19],[33,89,30],[46,171,50],[93,1,20],[42,164,24],[48,71,5],[55,104,40],[51,109,38],[9,177,40],[83,156,33],[114,42,53],[89,41,11],[72,35,6],[36,88,24],[79,71,12],[74,65,48],[58,107,42],[19,154,5],[39,41,45],[81,156,33],[82,3,46],[116,5,36],[9,176,39],[35,124,15],[32,121,18],[67,123,31],[41,167,22],[38,165,23],[94,26,40],[94,29,42],[54,110,37],[111,44,57],[33,88,30],[77,69,9],[73,72,51],[64,119,33],[87,137,43],[43,162,20],[86,40,10],[110,9,36],[112,39,49],[56,73,11],[49,80,0],[72,72,14],[37,119,15],[41,168,21],[76,23,21],[41,51,47],[93,39,10],[110,45,56],[13,175,44],[43,159,18],[42,165,44],[78,159,41],[36,48,44],[87,37,3],[37,118,19],[52,128,44],[17,153,1],[17,154,1],[43,173,48],[115,6,37],[53,54,3],[90,24,41],[112,11,36],[68,40,8],[72,49,7],[107,44,54],[50,106,43],[27,137,23],[46,164,48],[83,9,44],[71,39,3],[115,5,35],[55,113,40],[38,178,8],[110,44,57],[77,77,15],[52,108,37],[16,177,37],[81,27,23],[35,88,22],[72,70,51],[50,122,43],[66,123,34],[81,154,38],[113,40,50],[59,106,40],[26,138,28],[19,153,0],[39,161,18],[82,159,34],[33,21,44],[89,22,45],[35,91,27],[88,42,6],[94,30,41],[51,103,5],[31,93,26],[35,179,1],[83,7,45],[41,48,43],[53,72,13],[32,118,13],[96,5,22],[97,10,20],[112,3,31],[95,25,48],[90,38,4],[73,122,33],[44,173,47],[85,1,47],[35,91,25],[106,40,51],[55,77,7],[30,87,23],[40,177,1],[41,165,24],[36,160,25],[79,29,22],[62,54,1],[89,22,42],[32,122,16],[86,138,36],[45,173,49],[77,25,20],[111,4,32],[48,86,3],[19,148,8],[34,178,7],[96,26,39],[113,43,55],[51,107,44],[22,152,2],[92,23,37],[52,79,9],[75,71,10],[58,105,37],[69,131,34],[19,160,3],[48,167,52],[92,39,11],[110,37,54],[76,77,15],[57,101,7],[54,107,45],[59,105,39],[32,138,26],[93,27,39],[99,31,42],[72,46,8],[16,149,7],[48,126,39],[88,142,37],[89,141,41],[83,8,40],[101,5,19],[37,50,48],[24,134,24],[33,21,43],[103,2,21],[107,2,34],[53,105,3],[61,58,0],[110,48,53],[75,68,9],[23,148,6],[39,156,22],[98,6,22],[43,44,42],[48,170,48],[96,5,16],[92,28,40],[39,54,46],[88,1,43],[95,1,15],[75,41,5],[114,41,55],[57,102,4],[54,105,46],[27,140,29],[42,159,27],[76,158,35],[81,3,46],[108,45,52],[102,3,21],[55,83,0],[30,117,16],[54,109,37],[87,3,45],[74,43,9],[65,123,34],[95,20,42],[30,143,26],[51,73,4],[53,85,4],[30,85,21],[53,73,12],[79,69,18],[52,105,6],[26,138,25],[85,38,8],[73,72,13],[29,143,28],[52,127,40],[44,161,23],[98,30,45],[26,139,28],[54,124,43],[16,178,38],[35,159,21],[40,165,24],[70,41,4],[70,40,11],[37,86,23],[52,75,11],[33,92,24],[46,126,47],[89,143,40],[8,174,42],[39,48,49],[78,2,40],[37,117,19],[68,116,34],[32,122,17],[88,144,39],[94,1,15],[86,40,7],[33,122,14],[53,127,41],[84,137,37],[15,174,44],[81,157,43],[80,21,15],[75,72,53],[86,41,8],[78,28,21],[91,27,43],[39,49,43],[58,106,37],[53,69,7],[34,94,27],[35,92,26],[39,115,19],[38,178,7],[40,167,48],[82,159,41],[77,160,36],[71,46,7],[79,155,38],[38,115,19],[51,129,45],[45,126,42],[116,3,37],[93,38,7],[54,80,9],[76,74,12],[70,68,55],[76,23,20],[98,6,16],[93,31,42],[69,43,7],[29,137,23],[19,158,3],[14,179,36],[95,24,38],[69,39,3],[58,63,1],[30,115,19],[49,92,0],[53,100,1],[34,135,25],[79,156,43],[83,6,39],[93,40,8],[75,70,55],[53,112,38],[113,118,58],[15,148,6],[114,4,33],[97,28,42],[41,49,48],[58,72,9],[34,119,19],[27,140,26],[45,124,39],[78,159,34],[70,44,8],[24,148,5],[86,139,37],[34,178,8],[83,161,38],[98,22,39],[75,41,7],[74,45,7],[34,123,17],[48,130,45],[111,7,38],[83,36,8],[72,45,5],[71,64,48],[75,67,56],[103,118,58],[115,1,31],[68,37,3],[14,148,6],[11,178,36],[37,159,17],[81,165,39],[94,23,47],[53,79,10],[56,73,12],[32,94,27],[19,154,1],[48,168,50],[75,22,22],[89,23,43],[97,28,39],[112,43,51],[48,165,53],[43,168,45],[83,162,38],[94,25,38],[98,33,43],[110,39,49],[55,71,13],[42,162,18],[76,156,35],[32,20,45],[93,2,17],[96,22,43],[110,46,52],[38,85,25],[51,74,11],[88,134,34],[23,151,4],[17,154,5],[37,162,24],[113,0,36],[89,35,8],[98,24,48],[79,70,10],[117,109,58],[35,120,19],[45,127,45],[39,51,44],[35,47,44],[50,74,6],[59,105,38],[34,179,7],[82,26,19],[93,25,40],[57,55,5],[77,65,14],[24,134,30],[78,162,38],[85,157,37],[30,28,42],[82,22,16],[98,2,24],[53,71,3],[96,8,20],[76,68,8],[68,64,54],[12,173,39],[77,23,24],[99,7,21],[62,55,0],[107,43,53],[72,69,17],[75,68,56],[56,102,8],[31,177,4],[34,178,1],[77,24,18],[55,54,5],[98,9,17],[87,3,41],[108,45,55],[30,88,29],[78,73,16],[28,138,30],[35,134,27],[51,128,40],[15,152,3],[86,41,9],[33,179,4],[36,162,22],[92,36,4],[116,39,54],[58,73,8],[54,77,6],[74,69,50],[73,67,57],[34,93,25],[86,40,9],[47,130,41],[13,172,38],[40,161,26],[54,106,7],[56,104,5],[57,104,5],[22,154,3],[91,28,42],[37,50,47],[111,48,55],[31,118,19],[49,125,48],[43,163,24],[115,3,33],[35,47,45],[45,85,0],[18,152,0],[78,27,20],[102,1,22],[93,24,46],[71,42,4],[73,68,56],[37,116,12],[49,98,6],[30,138,30],[81,28,19],[82,7,44],[93,28,43],[113,44,55],[13,178,35],[71,125,36],[76,70,18],[57,100,2],[39,168,21],[100,1,14],[100,22,42],[88,35,8],[31,137,31],[80,164,39],[82,27,19],[82,24,18],[88,1,39],[91,27,42],[34,125,16],[50,99,2],[69,116,33],[16,148,8],[49,123,43],[49,133,44],[80,24,25],[109,7,36],[60,60,0],[95,22,37],[112,118,54],[46,127,41],[79,161,41],[30,21,37],[50,74,5],[90,44,8],[105,40,56],[55,74,5],[54,112,42],[89,143,39],[36,177,0],[77,37,7],[84,37,10],[93,36,4],[56,99,10],[20,146,3],[47,129,41],[50,126,47],[40,165,48],[58,55,5],[113,43,52],[55,72,3],[35,88,23],[51,100,9],[46,124,47],[84,134,35],[95,5,21],[106,41,54],[111,5,33],[89,42,6],[53,101,9],[118,111,58],[92,24,43],[54,56,3],[12,177,35],[43,167,52],[76,157,41],[97,24,49],[109,3,32],[15,177,36],[31,120,17],[18,175,38],[48,85,4],[75,41,6],[115,40,54],[32,82,26],[52,112,41],[113,118,56],[32,178,4],[79,159,42],[39,53,45],[79,71,11],[66,125,34],[85,134,35],[84,157,35],[96,3,15],[116,4,37],[90,24,40],[53,56,2],[88,41,11],[76,69,52],[34,114,16],[26,134,22],[17,150,7],[12,176,43],[40,158,22],[42,45,42],[79,28,23],[84,9,43],[98,7,21],[35,173,4],[111,44,51],[30,118,17],[68,125,36],[87,139,42],[21,155,2],[39,177,8],[80,27,23],[41,46,50],[103,118,56],[26,135,31],[52,124,38],[74,69,56],[56,102,2],[24,148,3],[32,135,31],[44,125,42],[46,128,42],[23,150,4],[21,154,4],[68,64,56],[110,5,39],[97,27,39],[68,37,4],[44,159,19],[112,2,31],[53,57,2],[73,70,55],[73,69,56],[45,170,51],[101,24,39],[76,76,12],[110,44,51],[91,23,38],[107,1,37],[40,47,50],[71,46,6],[77,38,7],[30,88,28],[33,94,27],[81,164,37],[71,41,4],[21,152,6],[84,23,21],[87,4,44],[99,23,41],[75,69,55],[13,174,44],[46,172,50],[76,159,36],[84,21,18],[103,1,21],[99,24,48],[70,119,39],[100,30,43],[70,68,52],[32,136,23],[36,120,18],[35,159,23],[77,22,25],[113,42,56],[86,37,4],[93,36,11],[93,30,42],[68,127,35],[16,177,42],[42,166,23],[80,156,43],[77,39,7],[112,0,36],[117,1,35],[98,9,18],[111,48,53],[64,119,37],[48,122,43],[83,134,36],[85,138,37],[30,23,45],[98,24,43],[109,37,54],[93,26,42],[74,76,14],[54,102,1],[117,108,57],[13,176,34],[55,77,8],[20,155,5],[35,160,21],[97,23,46],[46,85,1],[36,49,45],[81,30,20],[69,37,3],[50,71,4],[26,135,23],[49,124,49],[44,159,26],[55,57,3],[112,9,37],[58,107,37],[54,106,4],[90,45,9],[34,82,26],[51,71,3],[73,68,9],[71,66,57],[104,118,55],[21,153,1],[35,44,42],[83,23,25],[71,38,2],[53,73,13],[30,86,30],[57,103,5],[76,39,8],[109,45,56],[36,89,24],[29,139,30],[114,7,36],[110,4,32],[95,32,43],[83,3,37],[99,8,21],[94,22,48],[38,44,41],[112,46,54],[54,84,3],[71,68,15],[29,136,22],[31,141,27],[32,176,7],[90,36,13],[85,39,8],[77,37,5],[103,119,58],[19,148,9],[29,133,26],[32,135,23],[33,124,15],[52,54,0],[74,44,8],[87,37,13],[94,37,8],[114,42,56],[59,60,1],[49,90,2],[50,108,39],[36,45,50],[49,131,41],[84,136,38],[87,141,37],[78,27,21],[119,111,57],[86,38,12],[61,57,2],[105,39,52],[59,62,0],[37,85,22],[74,69,9],[88,145,39],[39,55,46],[86,4,45],[10,175,35],[33,122,18],[88,136,43],[18,156,3],[46,166,43],[76,158,38],[49,107,40],[30,87,30],[58,108,42],[110,5,33],[115,3,40],[50,72,4],[107,40,50],[74,120,32],[8,175,39],[40,161,27],[97,24,39],[114,9,36],[74,39,11],[33,123,17],[109,43,51],[31,138,30],[85,156,37],[84,4,46],[80,1,38],[88,2,43],[49,73,5],[115,40,52],[76,67,56],[38,160,27],[97,23,42],[36,50,46],[79,165,38],[73,72,52],[48,132,43],[65,122,35],[53,84,4],[51,92,0],[48,133,42],[35,176,9],[83,7,40],[113,39,58],[46,174,48],[107,1,34],[55,112,38],[32,86,21],[54,60,0],[75,70,54],[28,136,23],[32,120,14],[38,159,27],[111,5,39],[55,56,4],[33,177,1],[36,179,1],[44,159,25],[31,20,37],[32,22,39],[86,5,43],[70,126,32],[57,73,9],[78,75,14],[50,93,0],[57,108,38],[86,134,44],[88,132,38],[36,162,20],[42,46,50],[53,74,4],[77,66,52],[78,64,53],[34,126,16],[92,38,4],[56,106,45],[49,121,42],[49,123,42],[68,120,29],[78,25,24],[81,5,45],[113,8,38],[54,80,8],[76,74,16],[32,134,32],[52,126,46],[64,121,34],[94,3,16],[62,56,0],[114,42,55],[31,134,32],[44,163,48],[94,24,38],[86,38,4],[115,105,58],[24,149,4],[67,122,30],[69,126,32],[15,177,43],[83,161,39],[85,156,39],[56,108,36],[43,45,43],[56,76,9],[36,118,19],[34,90,29],[108,116,58],[84,23,20],[53,58,0],[72,62,53],[51,130,44],[94,2,22],[73,66,48],[36,87,30],[27,141,27],[45,125,46],[22,153,4],[11,175,44],[47,167,52],[98,26,39],[52,55,0],[55,60,2],[30,117,17],[36,173,4],[80,2,46],[98,23,45],[39,50,43],[73,40,3],[112,40,49],[57,73,10],[76,69,53],[39,179,3],[41,176,4],[69,42,8],[70,67,50],[54,105,34],[29,138,31],[33,135,24],[87,137,35],[34,176,9],[40,166,24],[57,54,5],[82,4,46],[112,8,38],[96,29,43],[81,163,36],[50,75,8],[31,119,16],[50,94,0],[23,149,0],[71,124,32],[18,174,42],[47,171,46],[51,84,5],[80,156,33],[45,171,51],[57,105,45],[47,171,49],[45,177,48],[82,2,47],[68,65,54],[36,86,22],[72,68,56],[50,107,43],[45,126,43],[16,176,36],[36,45,42],[91,39,4],[54,106,6],[55,114,39],[19,159,3],[88,1,44],[117,1,36],[74,40,11],[87,139,36],[10,178,38],[42,162,19],[49,165,51],[77,25,21],[100,4,16],[31,139,29],[57,60,3],[52,104,7],[57,100,1],[55,108,44],[48,133,44],[39,167,22],[76,159,39],[41,47,42],[31,24,43],[31,25,43],[35,92,27],[57,102,7],[34,92,28],[30,116,19],[46,130,43],[17,176,41],[94,27,45],[71,45,6],[109,3,39],[55,61,0],[70,128,34],[40,161,18],[40,178,4],[79,3,45],[97,22,42],[86,37,12],[78,65,51],[38,115,20],[54,105,35],[19,149,8],[41,166,20],[38,162,26],[98,0,18],[91,36,3],[97,21,42],[92,22,37]]");JSON.parse('[{"geometry":[[73,101,35]],"status":"alive","kills":0},{"geometry":[[56,139,34]],"status":"alive","kills":0},{"geometry":[[68,138,31]],"status":"alive","kills":0},{"geometry":[[51,29,5]],"status":"alive","kills":0},{"geometry":[[94,26,11]],"status":"alive","kills":0},{"geometry":[[11,176,29]],"status":"alive","kills":0},{"geometry":[[0,152,42]],"status":"alive","kills":0},{"geometry":[[67,179,29]],"status":"alive","kills":0},{"geometry":[[69,69,2],[68,69,2],[67,69,2],[66,69,2],[65,69,2],[64,69,2]],"status":"alive","kills":0},{"geometry":[[1,133,4]],"status":"alive","kills":0},{"geometry":[[79,140,48]],"status":"alive","kills":0},{"geometry":[[51,155,8]],"status":"alive","kills":0},{"geometry":[[76,8,22]],"status":"alive","kills":0},{"geometry":[[96,61,34]],"status":"alive","kills":0},{"geometry":[[32,129,52]],"status":"alive","kills":0},{"geometry":[[74,34,18]],"status":"alive","kills":0},{"geometry":[[97,89,31],[97,90,31]],"status":"alive","kills":0},{"geometry":[[46,99,17]],"status":"alive","kills":0},{"geometry":[[81,99,50]],"status":"alive","kills":0},{"geometry":[[77,43,10]],"status":"alive","kills":0},{"geometry":[[118,83,4],[118,82,4],[118,81,4],[119,81,4]],"status":"alive","kills":0},{"geometry":[[81,144,30]],"status":"alive","kills":0},{"geometry":[[87,178,33]],"status":"alive","kills":0},{"geometry":[[44,9,7]],"status":"alive","kills":0},{"geometry":[[79,61,0],[79,60,0],[79,59,0],[79,58,0],[79,57,0],[79,56,0],[78,56,0],[77,56,0],[76,56,0],[75,56,0],[75,56,1],[75,56,2],[75,56,3],[75,56,4],[75,57,4],[75,57,5],[75,58,5],[75,59,5],[75,60,5],[75,61,5],[75,62,5],[76,62,5],[76,63,5]],"status":"alive","kills":1},{"geometry":[[96,52,56]],"status":"alive","kills":0},{"geometry":[[35,66,4]],"status":"alive","kills":0},{"geometry":[[65,70,54]],"status":"alive","kills":0},{"geometry":[[97,97,8]],"status":"alive","kills":0},{"geometry":[[114,97,57]],"status":"alive","kills":0},{"geometry":[[86,152,47]],"status":"alive","kills":0},{"geometry":[[48,58,15],[48,59,15],[48,59,14],[48,60,14]],"status":"alive","kills":1},{"geometry":[[57,30,2],[57,31,2],[57,32,2],[57,32,1],[57,32,0],[57,31,0],[57,30,0],[56,30,0],[56,29,0],[57,29,0],[58,29,0],[58,29,1],[58,29,2],[58,29,3],[58,30,3],[57,30,3]],"status":"alive","kills":1},{"geometry":[[45,84,49],[45,85,49]],"status":"alive","kills":0},{"geometry":[[67,65,33]],"status":"alive","kills":1},{"geometry":[[93,73,18]],"status":"alive","kills":0},{"geometry":[[14,165,20]],"status":"alive","kills":0},{"geometry":[[65,1,56]],"status":"alive","kills":0},{"geometry":[[40,47,4]],"status":"alive","kills":0},{"geometry":[[84,43,19]],"status":"alive","kills":0},{"geometry":[[109,79,2]],"status":"alive","kills":0},{"geometry":[[97,91,31],[97,92,31]],"status":"alive","kills":0},{"geometry":[[29,126,47]],"status":"alive","kills":0},{"geometry":[[76,140,57],[75,140,57]],"status":"alive","kills":0},{"geometry":[[58,6,49]],"status":"alive","kills":0},{"geometry":[[79,23,47]],"status":"alive","kills":0},{"geometry":[[35,33,4]],"status":"alive","kills":0},{"geometry":[[50,115,15],[51,115,15],[52,115,15],[53,115,15],[54,115,15]],"status":"alive","kills":0},{"geometry":[[33,133,42]],"status":"alive","kills":0},{"geometry":[[41,28,18]],"status":"alive","kills":0},{"geometry":[[31,59,20],[30,59,20]],"status":"alive","kills":0},{"geometry":[[77,115,8]],"status":"alive","kills":0},{"geometry":[[29,127,27]],"status":"alive","kills":1},{"geometry":[[84,156,46]],"status":"alive","kills":0},{"geometry":[[61,29,22]],"status":"alive","kills":0},{"geometry":[[53,66,8]],"status":"alive","kills":0},{"geometry":[[43,85,28]],"status":"alive","kills":0},{"geometry":[[69,60,2]],"status":"alive","kills":0},{"geometry":[[112,65,57]],"status":"alive","kills":0},{"geometry":[[35,179,34]],"status":"alive","kills":0},{"geometry":[[87,164,57]],"status":"alive","kills":0},{"geometry":[[63,115,11]],"status":"alive","kills":0},{"geometry":[[97,92,32],[97,93,32],[97,94,32],[97,95,32],[96,95,32],[95,95,32],[94,95,32],[93,95,32],[93,95,31],[93,96,31],[93,97,31],[93,98,31],[93,99,31],[93,100,31],[93,101,31],[93,102,31],[93,103,31],[93,104,31],[92,104,31],[91,104,31],[90,104,31],[90,105,31],[90,106,31],[89,106,31],[88,106,31],[87,106,31],[86,106,31],[86,106,32],[86,106,33],[86,106,34],[86,106,35],[86,106,36],[86,106,37],[86,106,38],[86,106,39],[86,106,40],[86,106,41],[86,106,42],[86,106,43],[86,106,44],[86,107,44],[86,108,44],[86,109,44],[86,110,44],[86,111,44],[86,112,44],[86,113,44],[86,114,44],[85,114,44],[85,114,45],[85,114,46],[85,113,46],[85,112,46],[85,111,46],[85,110,46],[85,109,46],[85,108,46],[85,107,46],[85,106,46],[85,105,46],[85,104,46],[85,103,46],[85,102,46],[85,101,46],[85,100,46],[85,99,46],[85,98,46],[85,97,46],[85,96,46],[85,95,46],[85,95,45],[85,95,44],[85,95,43],[85,94,43],[85,93,43],[85,92,43]],"status":"alive","kills":4},{"geometry":[[4,179,59]],"status":"alive","kills":1},{"geometry":[[39,175,19]],"status":"alive","kills":0},{"geometry":[[107,71,43],[107,72,43],[107,73,43],[107,74,43],[107,75,43],[106,75,43],[106,75,42],[105,75,42],[105,74,42],[105,73,42],[105,72,42],[105,71,42],[104,71,42],[103,71,42],[102,71,42],[101,71,42],[100,71,42],[100,71,41],[100,71,40],[100,71,39],[100,70,39],[100,69,39],[100,68,39],[101,68,39],[101,68,38],[101,68,37],[101,67,37],[101,67,36],[101,67,35],[101,68,35],[101,69,35],[101,70,35],[101,71,35],[101,72,35],[101,73,35],[101,74,35],[101,75,35],[101,76,35],[101,77,35],[101,78,35],[101,79,35],[102,79,35],[103,79,35],[103,79,34],[103,79,33],[103,79,32],[103,79,31],[103,79,30],[103,79,29],[103,79,28],[103,79,27],[103,79,26],[103,79,25],[103,79,24],[103,79,23],[103,79,22],[103,79,21],[103,80,21],[103,81,21],[103,82,21],[102,82,21],[101,82,21],[100,82,21],[99,82,21],[99,82,20],[99,81,20],[99,80,20],[99,79,20],[99,78,20],[99,77,20],[99,76,20],[99,75,20],[99,74,20],[99,73,20],[99,72,20],[99,71,20],[99,70,20],[99,69,20],[99,68,20],[99,67,20],[99,66,20],[99,65,20],[99,64,20],[99,63,20],[99,62,20],[99,61,20],[100,61,20],[100,60,20],[99,60,20],[98,60,20],[98,59,20],[98,58,20],[98,57,20],[98,56,20],[97,56,20],[96,56,20],[95,56,20]],"status":"alive","kills":2},{"geometry":[[105,78,35]],"status":"alive","kills":0},{"geometry":[[109,118,16]],"status":"alive","kills":0},{"geometry":[[103,112,41]],"status":"alive","kills":0},{"geometry":[[45,157,31],[45,158,31],[45,159,31],[45,160,31],[45,161,31],[45,162,31],[45,163,31],[45,164,31],[45,165,31],[45,166,31],[46,166,31],[47,166,31],[47,166,30],[47,166,29],[47,167,29],[47,168,29],[47,169,29]],"status":"alive","kills":1},{"geometry":[[57,21,40],[56,21,40],[55,21,40],[54,21,40],[53,21,40],[53,21,39],[53,21,38],[53,20,38],[52,20,38],[51,20,38],[51,20,37],[51,20,36],[51,19,36],[51,18,36],[51,17,36],[51,16,36],[51,15,36]],"status":"alive","kills":0},{"geometry":[[67,51,26]],"status":"alive","kills":0},{"geometry":[[94,14,56],[94,14,55],[94,14,54],[94,14,53],[94,14,52],[94,15,52],[94,16,52],[94,17,52],[94,18,52],[94,19,52],[94,20,52],[93,20,52],[92,20,52],[92,20,53],[92,20,54],[92,20,55],[92,21,55],[92,22,55],[92,23,55],[92,24,55],[92,25,55],[92,26,55],[92,27,55],[92,28,55],[91,28,55],[91,29,55],[91,30,55]],"status":"alive","kills":0},{"geometry":[[109,41,38]],"status":"alive","kills":0},{"geometry":[[66,95,15]],"status":"alive","kills":0},{"geometry":[[89,136,20]],"status":"alive","kills":0},{"geometry":[[85,169,16]],"status":"alive","kills":0},{"geometry":[[18,21,20]],"status":"alive","kills":0},{"geometry":[[90,75,42]],"status":"alive","kills":0},{"geometry":[[74,99,27]],"status":"alive","kills":0},{"geometry":[[65,90,17]],"status":"alive","kills":0},{"geometry":[[105,104,12]],"status":"alive","kills":0},{"geometry":[[32,159,1]],"status":"alive","kills":0},{"geometry":[[28,167,39]],"status":"alive","kills":0},{"geometry":[[34,35,16]],"status":"alive","kills":0},{"geometry":[[77,36,43]],"status":"alive","kills":0},{"geometry":[[102,70,38]],"status":"alive","kills":0},{"geometry":[[36,117,11]],"status":"alive","kills":0},{"geometry":[[85,100,20],[85,100,21],[85,100,22],[85,100,23],[85,100,24],[85,100,25],[85,100,26],[85,100,27],[85,100,28],[85,99,28],[85,99,29],[85,99,30],[86,99,30]],"status":"alive","kills":0},{"geometry":[[76,96,34],[75,96,34]],"status":"alive","kills":0},{"geometry":[[64,149,0]],"status":"alive","kills":0},{"geometry":[[52,153,17]],"status":"alive","kills":0},{"geometry":[[33,160,43]],"status":"alive","kills":0},{"geometry":[[43,11,18]],"status":"alive","kills":0},{"geometry":[[33,44,47]],"status":"alive","kills":0},{"geometry":[[44,47,35]],"status":"alive","kills":0},{"geometry":[[125,55,24],[125,56,24],[125,57,24],[126,57,24],[127,57,24],[128,57,24],[128,58,24],[127,58,24],[126,58,24],[125,58,24],[124,58,24],[123,58,24],[122,58,24],[121,58,24],[120,58,24],[119,58,24],[119,58,25],[119,57,25],[118,57,25],[117,57,25],[116,57,25],[115,57,25]],"status":"alive","kills":0},{"geometry":[[106,41,18],[106,42,18],[106,43,18],[106,44,18],[106,44,19],[106,44,20],[106,44,21],[106,44,22],[106,44,23],[106,44,24],[107,44,24],[108,44,24],[108,43,24],[108,42,24],[108,42,25],[108,42,26],[108,42,27],[108,42,28],[108,42,29],[108,42,30],[108,42,31],[108,42,32]],"status":"alive","kills":1},{"geometry":[[105,83,20]],"status":"alive","kills":0},{"geometry":[[100,75,49],[101,75,49],[102,75,49],[103,75,49],[104,75,49],[105,75,49],[105,75,48],[105,75,47],[105,74,47]],"status":"alive","kills":0},{"geometry":[[7,177,17]],"status":"alive","kills":0},{"geometry":[[73,1,15]],"status":"alive","kills":0},{"geometry":[[48,19,30]],"status":"alive","kills":0},{"geometry":[[61,46,6]],"status":"alive","kills":0},{"geometry":[[84,39,34]],"status":"alive","kills":0},{"geometry":[[101,33,20]],"status":"alive","kills":0},{"geometry":[[14,140,17]],"status":"alive","kills":0},{"geometry":[[58,128,19]],"status":"alive","kills":0},{"geometry":[[15,177,50]],"status":"alive","kills":0},{"geometry":[[31,154,7]],"status":"alive","kills":0},{"geometry":[[71,28,6]],"status":"alive","kills":0},{"geometry":[[89,14,23]],"status":"alive","kills":0},{"geometry":[[34,53,21],[33,53,21],[32,53,21],[31,53,21]],"status":"alive","kills":0},{"geometry":[[46,59,20]],"status":"alive","kills":0},{"geometry":[[38,31,58]],"status":"alive","kills":0},{"geometry":[[71,29,9]],"status":"alive","kills":0},{"geometry":[[95,14,22]],"status":"alive","kills":0},{"geometry":[[82,88,41]],"status":"alive","kills":0},{"geometry":[[59,116,17]],"status":"alive","kills":0},{"geometry":[[79,105,57]],"status":"alive","kills":0},{"geometry":[[81,140,43]],"status":"alive","kills":0},{"geometry":[[55,158,51]],"status":"alive","kills":0},{"geometry":[[64,4,10],[64,4,9]],"status":"alive","kills":2},{"geometry":[[76,34,45]],"status":"alive","kills":0},{"geometry":[[80,63,28]],"status":"alive","kills":0},{"geometry":[[31,100,28]],"status":"alive","kills":0},{"geometry":[[103,95,58],[103,94,58]],"status":"alive","kills":0},{"geometry":[[66,164,21]],"status":"alive","kills":0},{"geometry":[[66,88,25]],"status":"alive","kills":0},{"geometry":[[75,139,56]],"status":"alive","kills":0},{"geometry":[[13,154,34]],"status":"alive","kills":0},{"geometry":[[81,163,4],[81,163,3],[82,163,3],[82,163,4]],"status":"alive","kills":0},{"geometry":[[67,8,35]],"status":"alive","kills":0},{"geometry":[[78,0,45]],"status":"alive","kills":0},{"geometry":[[116,40,19]],"status":"alive","kills":0},{"geometry":[[93,104,12]],"status":"alive","kills":0},{"geometry":[[36,126,1]],"status":"alive","kills":0},{"geometry":[[32,12,4]],"status":"alive","kills":0},{"geometry":[[76,37,45]],"status":"alive","kills":0},{"geometry":[[72,88,31]],"status":"alive","kills":0},{"geometry":[[88,67,43],[89,67,43],[90,67,43]],"status":"alive","kills":0},{"geometry":[[110,83,1]],"status":"alive","kills":0},{"geometry":[[96,116,46],[95,116,46],[94,116,46],[93,116,46],[92,116,46],[91,116,46],[90,116,46],[89,116,46],[88,116,46],[87,116,46],[86,116,46],[85,116,46],[84,116,46]],"status":"alive","kills":0},{"geometry":[[112,34,53],[113,34,53],[114,34,53],[115,34,53]],"status":"alive","kills":0},{"geometry":[[33,103,49]],"status":"alive","kills":0},{"geometry":[[99,117,55]],"status":"alive","kills":0},{"geometry":[[89,136,28]],"status":"alive","kills":0},{"geometry":[[82,139,40],[82,139,39]],"status":"alive","kills":1},{"geometry":[[74,127,42]],"status":"alive","kills":0},{"geometry":[[58,161,2],[58,161,3],[58,161,4],[58,160,4],[59,160,4],[60,160,4],[61,160,4],[62,160,4],[63,160,4],[64,160,4]],"status":"alive","kills":0},{"geometry":[[117,11,1]],"status":"alive","kills":0},{"geometry":[[30,30,56]],"status":"alive","kills":0},{"geometry":[[92,46,18],[92,47,18],[92,48,18]],"status":"alive","kills":0},{"geometry":[[164,130,48],[165,130,48],[165,129,48],[164,129,48],[163,129,48],[162,129,48],[161,129,48],[160,129,48],[159,129,48],[158,129,48],[157,129,48],[157,129,47],[157,129,46],[157,129,45],[157,129,44],[157,129,43],[157,128,43],[157,127,43],[157,126,43],[157,125,43],[157,124,43],[157,123,43],[157,122,43],[156,122,43],[155,122,43],[154,122,43],[153,122,43],[152,122,43],[151,122,43],[150,122,43],[149,122,43],[148,122,43],[148,122,42],[148,122,41],[148,122,40],[148,122,39],[148,122,38],[148,122,37],[148,122,36],[148,122,35],[148,122,34],[148,123,34],[149,123,34],[150,123,34],[151,123,34],[151,123,33]],"status":"alive","kills":2},{"geometry":[[67,113,33]],"status":"alive","kills":0},{"geometry":[[103,101,33]],"status":"alive","kills":0},{"geometry":[[23,142,45]],"status":"alive","kills":0},{"geometry":[[43,131,36]],"status":"alive","kills":0},{"geometry":[[12,176,17]],"status":"alive","kills":0},{"geometry":[[70,32,37]],"status":"alive","kills":0},{"geometry":[[58,79,46]],"status":"alive","kills":0},{"geometry":[[42,60,33]],"status":"alive","kills":0},{"geometry":[[67,71,16],[67,70,16],[66,70,16],[66,69,16],[66,69,17],[66,69,18],[66,69,19],[66,69,20],[66,69,21],[66,69,22],[66,69,23],[66,69,24],[66,69,25]],"status":"alive","kills":0},{"geometry":[[65,107,0]],"status":"alive","kills":0},{"geometry":[[114,94,0]],"status":"alive","kills":0},{"geometry":[[72,146,18]],"status":"alive","kills":0},{"geometry":[[25,172,8]],"status":"alive","kills":0},{"geometry":[[55,0,47]],"status":"alive","kills":0},{"geometry":[[79,21,16]],"status":"alive","kills":0},{"geometry":[[90,1,9]],"status":"alive","kills":0},{"geometry":[[104,24,43]],"status":"alive","kills":2},{"geometry":[[41,57,40]],"status":"alive","kills":0},{"geometry":[[113,64,21],[112,64,21],[112,65,21],[112,66,21],[112,67,21],[112,67,22],[112,67,23],[112,67,24],[112,67,25],[112,67,26],[112,67,27],[112,67,28],[112,67,29],[112,67,30],[112,67,31],[111,67,31],[110,67,31],[109,67,31],[108,67,31],[107,67,31],[106,67,31],[105,67,31],[104,67,31],[103,67,31],[103,67,32],[103,67,33],[103,68,33],[103,69,33],[103,70,33],[103,71,33],[103,72,33],[103,73,33],[103,74,33],[103,75,33],[103,76,33],[103,77,33],[102,77,33],[101,77,33],[101,78,33],[101,79,33],[101,80,33],[102,80,33],[103,80,33],[103,80,32],[103,80,31],[103,80,30],[103,80,29],[103,80,28],[103,80,27],[103,80,26],[103,80,25],[103,81,25],[103,82,25],[103,83,25],[103,84,25],[103,85,25],[103,86,25],[103,87,25],[104,87,25],[105,87,25],[105,87,24]],"status":"alive","kills":2},{"geometry":[[108,119,8]],"status":"alive","kills":0},{"geometry":[[32,130,34]],"status":"alive","kills":0},{"geometry":[[30,24,25]],"status":"alive","kills":0},{"geometry":[[86,20,39]],"status":"alive","kills":0},{"geometry":[[104,24,40]],"status":"alive","kills":0},{"geometry":[[85,54,2]],"status":"alive","kills":0},{"geometry":[[61,31,10]],"status":"alive","kills":0},{"geometry":[[65,103,58]],"status":"alive","kills":0},{"geometry":[[81,93,33]],"status":"alive","kills":0},{"geometry":[[46,139,41],[47,139,41],[48,139,41],[48,139,40],[48,139,39],[48,139,38],[48,139,37],[48,139,36],[48,140,36],[48,141,36]],"status":"alive","kills":0},{"geometry":[[48,159,23],[48,159,24],[48,160,24],[48,161,24],[48,162,24],[48,163,24],[48,164,24],[48,165,24],[48,166,24],[48,167,24],[48,168,24],[47,168,24],[47,169,24],[47,170,24],[47,171,24]],"status":"alive","kills":1},{"geometry":[[64,57,52],[63,57,52]],"status":"alive","kills":0},{"geometry":[[100,34,1]],"status":"alive","kills":0},{"geometry":[[92,85,4],[92,86,4]],"status":"alive","kills":0},{"geometry":[[99,87,54],[99,87,55],[99,87,56]],"status":"alive","kills":1},{"geometry":[[31,127,16]],"status":"alive","kills":0},{"geometry":[[83,164,2],[82,164,2]],"status":"alive","kills":0},{"geometry":[[106,12,54]],"status":"alive","kills":3}]');JSON.parse('[{"c":[45,61,29],"points":190,"type":0},{"c":[31,51,50],"points":115,"type":0},{"c":[56,66,50],"points":223,"type":0},{"c":[4,150,12],"points":32,"type":0},{"c":[70,117,44],"points":270,"type":0},{"c":[33,135,7],"points":85,"type":0},{"c":[34,139,50],"points":0,"type":0},{"c":[107,1,26],"points":66,"type":0},{"c":[105,51,0],"points":199,"type":0},{"c":[72,87,28],"points":368,"type":0},{"c":[37,113,58],"points":133,"type":0},{"c":[97,113,0],"points":259,"type":0},{"c":[41,152,29],"points":0,"type":0},{"c":[50,32,8],"points":0,"type":0},{"c":[38,104,57],"points":147,"type":0},{"c":[58,101,59],"points":230,"type":0},{"c":[106,118,4],"points":245,"type":0},{"c":[52,174,18],"points":60,"type":0},{"c":[81,68,0],"points":208,"type":0},{"c":[28,158,7],"points":56,"type":0},{"c":[30,176,36],"points":0,"type":0},{"c":[54,107,40],"points":24,"type":0},{"c":[17,163,38],"points":0,"type":0},{"c":[113,26,35],"points":120,"type":0},{"c":[113,59,4],"points":22,"type":0},{"c":[73,119,41],"points":275,"type":0},{"c":[101,110,18],"points":326,"type":0},{"c":[85,7,34],"points":8,"type":0},{"c":[116,48,10],"points":191,"type":0},{"c":[78,90,15],"points":363,"type":0},{"c":[29,140,31],"points":88,"type":0},{"c":[50,75,8],"points":107,"type":0},{"c":[99,114,22],"points":320,"type":0},{"c":[61,152,8],"points":121,"type":0},{"c":[87,2,40],"points":7,"type":0},{"c":[30,172,49],"points":38,"type":0},{"c":[38,6,6],"points":41,"type":0},{"c":[28,173,2],"points":31,"type":0},{"c":[89,160,28],"points":127,"type":0},{"c":[64,39,54],"points":156,"type":0},{"c":[105,41,18],"points":194,"type":0},{"c":[108,31,12],"points":133,"type":0},{"c":[69,78,12],"points":302,"type":0},{"c":[82,139,41],"points":182,"type":0},{"c":[45,163,58],"points":60,"type":0},{"c":[59,10,8],"points":57,"type":0},{"c":[116,50,5],"points":189,"type":0},{"c":[56,65,51],"points":0,"type":0},{"c":[12,130,42],"points":57,"type":0},{"c":[64,4,11],"points":0,"type":0},{"c":[18,140,4],"points":57,"type":0},{"c":[1,128,53],"points":23,"type":0},{"c":[1,159,52],"points":17,"type":0},{"c":[48,5,0],"points":46,"type":0},{"c":[73,4,8],"points":66,"type":0},{"c":[50,78,38],"points":240,"type":0},{"c":[67,93,41],"points":0,"type":0},{"c":[62,79,0],"points":240,"type":0},{"c":[42,110,59],"points":149,"type":0},{"c":[62,113,15],"points":256,"type":0},{"c":[72,135,34],"points":212,"type":0},{"c":[71,116,58],"points":239,"type":0},{"c":[81,0,48],"points":49,"type":0},{"c":[116,7,9],"points":69,"type":0},{"c":[114,46,54],"points":182,"type":0},{"c":[93,62,16],"points":295,"type":0},{"c":[99,87,44],"points":376,"type":0},{"c":[35,103,8],"points":145,"type":0},{"c":[74,109,2],"points":264,"type":0},{"c":[101,3,19],"points":57,"type":0},{"c":[55,19,22],"points":77,"type":0},{"c":[118,6,28],"points":71,"type":0},{"c":[57,63,51],"points":216,"type":0},{"c":[101,98,57],"points":301,"type":0},{"c":[8,174,19],"points":15,"type":0},{"c":[48,167,47],"points":62,"type":0},{"c":[84,153,34],"points":0,"type":0},{"c":[19,122,39],"points":100,"type":0},{"c":[63,38,6],"points":151,"type":0},{"c":[70,83,56],"points":0,"type":0},{"c":[104,79,14],"points":0,"type":0},{"c":[111,98,53],"points":291,"type":0},{"c":[95,117,48],"points":288,"type":0},{"c":[91,108,2],"points":285,"type":0},{"c":[29,145,26],"points":44,"type":0},{"c":[43,128,32],"points":162,"type":0},{"c":[74,37,22],"points":144,"type":0},{"c":[75,103,45],"points":331,"type":0},{"c":[73,12,17],"points":92,"type":0},{"c":[67,112,44],"points":278,"type":0},{"c":[5,144,47],"points":32,"type":0},{"c":[57,52,49],"points":189,"type":0},{"c":[66,81,6],"points":276,"type":0},{"c":[82,67,53],"points":284,"type":0},{"c":[77,67,52],"points":252,"type":0},{"c":[104,24,42],"points":0,"type":0},{"c":[30,55,50],"points":119,"type":0},{"c":[38,47,54],"points":122,"type":0},{"c":[89,55,1],"points":203,"type":0},{"c":[92,84,10],"points":353,"type":0},{"c":[2,140,46],"points":40,"type":0},{"c":[78,34,31],"points":175,"type":0},{"c":[31,89,33],"points":168,"type":0},{"c":[34,147,25],"points":95,"type":0},{"c":[71,120,29],"points":274,"type":0},{"c":[70,140,33],"points":170,"type":0},{"c":[76,150,43],"points":153,"type":0},{"c":[73,34,37],"points":101,"type":0},{"c":[0,145,53],"points":3,"type":0},{"c":[18,151,17],"points":55,"type":0},{"c":[78,179,13],"points":64,"type":0},{"c":[108,46,46],"points":164,"type":0},{"c":[113,119,57],"points":157,"type":0},{"c":[85,20,58],"points":109,"type":0},{"c":[71,17,32],"points":109,"type":0},{"c":[106,4,24],"points":59,"type":0},{"c":[8,176,13],"points":13,"type":0},{"c":[54,50,5],"points":167,"type":0},{"c":[107,66,47],"points":282,"type":0},{"c":[85,115,33],"points":326,"type":0},{"c":[99,117,12],"points":283,"type":0},{"c":[110,108,56],"points":264,"type":0},{"c":[93,56,30],"points":281,"type":0},{"c":[87,114,56],"points":274,"type":0},{"c":[23,126,17],"points":104,"type":0},{"c":[51,37,59],"points":0,"type":0},{"c":[48,159,19],"points":90,"type":0},{"c":[21,148,59],"points":50,"type":0},{"c":[34,2,50],"points":33,"type":0},{"c":[35,17,51],"points":0,"type":0},{"c":[106,34,8],"points":155,"type":0},{"c":[78,143,24],"points":186,"type":0},{"c":[78,151,44],"points":150,"type":0},{"c":[105,26,6],"points":127,"type":0},{"c":[70,143,33],"points":177,"type":0},{"c":[63,12,22],"points":86,"type":0},{"c":[68,3,0],"points":28,"type":0},{"c":[82,8,24],"points":87,"type":0},{"c":[31,48,13],"points":101,"type":0},{"c":[108,54,45],"points":238,"type":0},{"c":[69,148,23],"points":0,"type":0},{"c":[45,160,22],"points":8,"type":0},{"c":[38,172,57],"points":34,"type":0},{"c":[42,98,43],"points":204,"type":0},{"c":[85,5,38],"points":7,"type":0},{"c":[98,0,23],"points":6,"type":0},{"c":[89,41,0],"points":0,"type":0},{"c":[51,85,5],"points":221,"type":0},{"c":[36,81,46],"points":176,"type":0},{"c":[15,158,59],"points":31,"type":0},{"c":[116,11,11],"points":80,"type":0},{"c":[5,137,52],"points":36,"type":0},{"c":[72,167,11],"points":91,"type":0},{"c":[70,12,17],"points":63,"type":0},{"c":[54,52,20],"points":191,"type":0},{"c":[68,80,3],"points":0,"type":0},{"c":[67,77,21],"points":314,"type":0},{"c":[46,111,8],"points":19,"type":0},{"c":[63,106,0],"points":235,"type":0},{"c":[70,68,51],"points":189,"type":0},{"c":[83,10,38],"points":65,"type":0},{"c":[110,27,2],"points":121,"type":0},{"c":[98,58,48],"points":264,"type":0},{"c":[78,82,57],"points":209,"type":0},{"c":[68,112,32],"points":296,"type":0},{"c":[112,60,11],"points":243,"type":0},{"c":[52,8,29],"points":60,"type":0},{"c":[76,59,30],"points":282,"type":0},{"c":[79,94,22],"points":393,"type":0},{"c":[8,145,18],"points":46,"type":0},{"c":[46,173,12],"points":54,"type":0},{"c":[80,178,7],"points":64,"type":0},{"c":[16,131,15],"points":78,"type":0},{"c":[83,127,20],"points":257,"type":0},{"c":[44,41,9],"points":113,"type":0},{"c":[46,51,57],"points":146,"type":0},{"c":[76,38,59],"points":143,"type":0},{"c":[84,72,58],"points":283,"type":0},{"c":[65,90,57],"points":268,"type":0},{"c":[59,24,46],"points":111,"type":0},{"c":[50,77,7],"points":0,"type":0},{"c":[72,94,7],"points":305,"type":0},{"c":[104,117,22],"points":295,"type":0},{"c":[10,175,14],"points":15,"type":0},{"c":[35,179,44],"points":34,"type":0},{"c":[33,67,42],"points":154,"type":0},{"c":[54,114,40],"points":161,"type":0},{"c":[64,10,29],"points":83,"type":0},{"c":[108,0,3],"points":54,"type":0},{"c":[47,86,37],"points":234,"type":0},{"c":[41,108,12],"points":165,"type":0},{"c":[32,107,12],"points":152,"type":0},{"c":[65,163,23],"points":103,"type":0},{"c":[42,148,21],"points":108,"type":0},{"c":[59,143,43],"points":123,"type":0},{"c":[71,59,39],"points":264,"type":0},{"c":[93,73,57],"points":292,"type":0},{"c":[60,96,9],"points":266,"type":0},{"c":[20,132,22],"points":0,"type":0},{"c":[66,6,5],"points":65,"type":0},{"c":[35,97,7],"points":164,"type":0},{"c":[112,85,27],"points":342,"type":0},{"c":[113,64,28],"points":278,"type":0},{"c":[41,135,46],"points":106,"type":0},{"c":[15,171,9],"points":0,"type":0},{"c":[39,70,49],"points":172,"type":0},{"c":[74,76,15],"points":324,"type":0},{"c":[43,95,52],"points":177,"type":0},{"c":[94,14,57],"points":83,"type":0},{"c":[69,49,9],"points":203,"type":0},{"c":[62,83,44],"points":292,"type":0},{"c":[113,27,5],"points":122,"type":0},{"c":[100,8,22],"points":77,"type":0},{"c":[42,112,13],"points":0,"type":0},{"c":[86,176,8],"points":63,"type":0},{"c":[112,8,10],"points":74,"type":0},{"c":[93,26,50],"points":123,"type":0},{"c":[79,49,42],"points":232,"type":0},{"c":[88,60,32],"points":302,"type":0},{"c":[106,69,0],"points":227,"type":0},{"c":[72,160,42],"points":116,"type":0},{"c":[113,106,51],"points":277,"type":0},{"c":[85,9,45],"points":70,"type":0},{"c":[80,15,53],"points":0,"type":0},{"c":[97,12,55],"points":44,"type":0},{"c":[99,3,51],"points":61,"type":0},{"c":[45,164,49],"points":64,"type":0},{"c":[47,16,16],"points":61,"type":0},{"c":[45,84,25],"points":225,"type":0},{"c":[100,64,42],"points":0,"type":0},{"c":[56,93,4],"points":23,"type":0},{"c":[33,100,12],"points":162,"type":0},{"c":[7,139,5],"points":36,"type":0},{"c":[34,83,9],"points":163,"type":0},{"c":[28,138,47],"points":75,"type":0},{"c":[114,99,18],"points":312,"type":0},{"c":[73,124,0],"points":212,"type":0},{"c":[64,28,26],"points":95,"type":0},{"c":[71,86,8],"points":306,"type":0},{"c":[91,72,22],"points":360,"type":0},{"c":[44,114,9],"points":18,"type":0},{"c":[72,106,58],"points":267,"type":0},{"c":[68,128,7],"points":207,"type":0},{"c":[1,172,32],"points":10,"type":0},{"c":[45,154,27],"points":100,"type":0},{"c":[114,7,33],"points":77,"type":0},{"c":[54,44,59],"points":144,"type":0},{"c":[69,38,21],"points":159,"type":0},{"c":[32,102,35],"points":149,"type":0},{"c":[62,40,17],"points":169,"type":0},{"c":[66,119,52],"points":235,"type":0},{"c":[51,171,10],"points":62,"type":0},{"c":[50,75,42],"points":231,"type":0},{"c":[73,164,27],"points":107,"type":0},{"c":[37,47,42],"points":129,"type":0},{"c":[37,116,15],"points":144,"type":0},{"c":[2,148,44],"points":29,"type":0},{"c":[33,8,6],"points":39,"type":0},{"c":[48,19,30],"points":88,"type":0},{"c":[41,101,57],"points":158,"type":0},{"c":[118,101,56],"points":253,"type":0},{"c":[51,179,47],"points":47,"type":0},{"c":[56,42,11],"points":157,"type":0},{"c":[65,71,1],"points":239,"type":0},{"c":[78,141,51],"points":142,"type":0},{"c":[112,5,38],"points":58,"type":0},{"c":[25,128,27],"points":98,"type":0},{"c":[118,83,2],"points":251,"type":0},{"c":[63,117,12],"points":241,"type":0},{"c":[60,133,24],"points":194,"type":0},{"c":[64,166,53],"points":85,"type":0},{"c":[101,34,1],"points":149,"type":0},{"c":[56,87,16],"points":267,"type":0},{"c":[60,72,6],"points":240,"type":0},{"c":[118,83,0],"points":195,"type":0},{"c":[112,67,36],"points":290,"type":0},{"c":[53,44,36],"points":167,"type":0},{"c":[114,56,34],"points":243,"type":0},{"c":[77,83,54],"points":312,"type":0},{"c":[79,76,50],"points":320,"type":0},{"c":[50,15,3],"points":69,"type":0},{"c":[66,113,8],"points":252,"type":0},{"c":[41,123,13],"points":95,"type":0},{"c":[22,165,30],"points":33,"type":0},{"c":[58,161,1],"points":86,"type":0},{"c":[79,32,25],"points":167,"type":0},{"c":[111,36,44],"points":165,"type":0},{"c":[34,88,49],"points":167,"type":0},{"c":[43,61,37],"points":181,"type":0},{"c":[100,113,31],"points":329,"type":0},{"c":[46,31,47],"points":109,"type":0},{"c":[107,104,12],"points":0,"type":0},{"c":[85,4,51],"points":49,"type":0},{"c":[55,133,10],"points":168,"type":0},{"c":[88,163,28],"points":117,"type":0},{"c":[92,45,16],"points":218,"type":0},{"c":[109,51,53],"points":209,"type":0},{"c":[13,142,13],"points":57,"type":0},{"c":[40,124,2],"points":139,"type":0},{"c":[77,133,7],"points":203,"type":0},{"c":[88,170,56],"points":75,"type":0},{"c":[39,158,40],"points":55,"type":0},{"c":[56,25,49],"points":108,"type":0},{"c":[114,55,7],"points":213,"type":0},{"c":[32,81,1],"points":129,"type":0},{"c":[113,107,29],"points":310,"type":0},{"c":[66,132,48],"points":198,"type":0},{"c":[1,164,20],"points":17,"type":0},{"c":[82,110,12],"points":0,"type":0},{"c":[13,140,55],"points":55,"type":0},{"c":[41,134,35],"points":141,"type":0},{"c":[47,130,43],"points":131,"type":0},{"c":[10,158,49],"points":29,"type":0},{"c":[106,110,47],"points":0,"type":0},{"c":[0,179,17],"points":5,"type":0},{"c":[86,159,53],"points":58,"type":0},{"c":[57,31,6],"points":121,"type":0},{"c":[44,46,51],"points":138,"type":0},{"c":[67,53,1],"points":195,"type":0},{"c":[118,63,49],"points":236,"type":0},{"c":[67,130,37],"points":0,"type":0},{"c":[72,125,33],"points":203,"type":0},{"c":[78,58,46],"points":263,"type":0},{"c":[16,177,17],"points":19,"type":0},{"c":[46,92,16],"points":222,"type":0},{"c":[75,96,4],"points":299,"type":0},{"c":[8,142,5],"points":39,"type":0},{"c":[15,175,35],"points":17,"type":0},{"c":[75,115,25],"points":305,"type":0},{"c":[98,9,38],"points":81,"type":0},{"c":[50,37,47],"points":132,"type":0},{"c":[82,67,46],"points":307,"type":0},{"c":[56,104,49],"points":245,"type":0},{"c":[82,172,18],"points":85,"type":0},{"c":[70,50,23],"points":227,"type":0},{"c":[32,136,44],"points":87,"type":0},{"c":[50,14,7],"points":70,"type":0},{"c":[64,58,51],"points":222,"type":0},{"c":[92,107,8],"points":314,"type":0},{"c":[111,90,48],"points":0,"type":0},{"c":[31,56,2],"points":115,"type":0},{"c":[36,31,56],"points":83,"type":0},{"c":[60,74,27],"points":281,"type":0},{"c":[17,147,10],"points":56,"type":0},{"c":[73,153,46],"points":109,"type":0},{"c":[86,104,17],"points":0,"type":0},{"c":[57,45,42],"points":176,"type":0},{"c":[86,40,30],"points":205,"type":0},{"c":[67,139,31],"points":169,"type":0},{"c":[30,20,43],"points":42,"type":0},{"c":[81,68,12],"points":304,"type":0},{"c":[70,65,43],"points":279,"type":0},{"c":[30,130,37],"points":95,"type":0},{"c":[51,120,48],"points":195,"type":0},{"c":[28,165,42],"points":44,"type":0},{"c":[36,135,36],"points":113,"type":0},{"c":[77,8,10],"points":79,"type":0},{"c":[114,44,16],"points":189,"type":0},{"c":[70,74,41],"points":283,"type":0},{"c":[69,68,30],"points":300,"type":0},{"c":[56,103,57],"points":204,"type":0},{"c":[117,106,53],"points":257,"type":0},{"c":[48,126,0],"points":137,"type":0},{"c":[79,15,56],"points":56,"type":0},{"c":[55,6,6],"points":57,"type":0},{"c":[53,9,13],"points":46,"type":0},{"c":[100,79,51],"points":326,"type":0},{"c":[118,86,36],"points":308,"type":0},{"c":[45,109,12],"points":177,"type":0},{"c":[8,147,9],"points":40,"type":0},{"c":[64,151,23],"points":125,"type":0},{"c":[38,126,29],"points":151,"type":0},{"c":[0,179,32],"points":5,"type":0},{"c":[62,121,12],"points":226,"type":0},{"c":[57,150,25],"points":132,"type":0},{"c":[119,0,0],"points":0,"type":0},{"c":[96,37,46],"points":18,"type":0},{"c":[94,85,47],"points":369,"type":0},{"c":[22,147,18],"points":55,"type":0},{"c":[49,22,24],"points":0,"type":0},{"c":[97,9,51],"points":67,"type":0},{"c":[47,125,7],"points":147,"type":0},{"c":[45,52,17],"points":163,"type":0},{"c":[43,124,46],"points":163,"type":0},{"c":[4,127,15],"points":39,"type":0},{"c":[30,103,26],"points":158,"type":0},{"c":[46,166,43],"points":56,"type":0},{"c":[116,100,8],"points":274,"type":0},{"c":[46,84,1],"points":173,"type":0},{"c":[27,170,38],"points":40,"type":0},{"c":[6,176,52],"points":10,"type":0},{"c":[85,18,46],"points":68,"type":0},{"c":[97,89,26],"points":430,"type":0},{"c":[21,149,9],"points":54,"type":0},{"c":[31,123,20],"points":93,"type":0},{"c":[52,123,43],"points":177,"type":0},{"c":[51,157,59],"points":8,"type":0},{"c":[65,36,2],"points":128,"type":0},{"c":[49,112,49],"points":204,"type":0},{"c":[31,120,13],"points":133,"type":0},{"c":[62,139,42],"points":156,"type":0},{"c":[19,174,25],"points":23,"type":0},{"c":[15,167,55],"points":26,"type":0},{"c":[66,34,58],"points":124,"type":0},{"c":[117,45,48],"points":182,"type":0},{"c":[115,110,10],"points":263,"type":0},{"c":[3,134,54],"points":35,"type":0},{"c":[61,135,20],"points":186,"type":0},{"c":[34,72,41],"points":165,"type":0},{"c":[93,66,49],"points":299,"type":0},{"c":[65,104,45],"points":290,"type":0},{"c":[33,55,26],"points":138,"type":0},{"c":[44,57,28],"points":177,"type":0},{"c":[107,39,41],"points":185,"type":0},{"c":[75,1,9],"points":36,"type":0},{"c":[109,9,38],"points":84,"type":0},{"c":[63,36,57],"points":141,"type":0},{"c":[54,101,59],"points":217,"type":0},{"c":[55,135,44],"points":152,"type":0},{"c":[80,144,23],"points":183,"type":0},{"c":[83,156,47],"points":13,"type":0},{"c":[119,59,43],"points":231,"type":0},{"c":[84,146,7],"points":161,"type":0},{"c":[77,146,9],"points":159,"type":0},{"c":[80,128,37],"points":252,"type":0},{"c":[58,13,46],"points":81,"type":0},{"c":[78,41,24],"points":182,"type":0},{"c":[74,153,52],"points":132,"type":0},{"c":[50,12,10],"points":61,"type":0},{"c":[115,3,38],"points":39,"type":0},{"c":[52,42,26],"points":127,"type":0},{"c":[108,65,53],"points":259,"type":0},{"c":[65,95,54],"points":277,"type":0},{"c":[36,145,25],"points":103,"type":0},{"c":[7,168,13],"points":0,"type":0},{"c":[106,58,3],"points":229,"type":0},{"c":[77,168,57],"points":76,"type":0},{"c":[101,58,58],"points":233,"type":0},{"c":[44,137,28],"points":142,"type":0},{"c":[64,122,53],"points":218,"type":0},{"c":[11,168,40],"points":22,"type":0},{"c":[64,152,16],"points":132,"type":0},{"c":[72,28,6],"points":131,"type":0},{"c":[42,56,16],"points":162,"type":0},{"c":[79,176,47],"points":72,"type":0},{"c":[48,9,30],"points":45,"type":0},{"c":[80,7,55],"points":74,"type":0},{"c":[100,98,58],"points":298,"type":0},{"c":[60,135,18],"points":182,"type":0},{"c":[21,159,46],"points":42,"type":0},{"c":[88,170,59],"points":72,"type":0},{"c":[55,17,50],"points":85,"type":0}]');function pf(){const i=new Jd;i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);const t=new Le(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(-200,200,-200);const e=new tf(t,i.domElement);e.target.set(0,5,0),e.update();const n=new lc;throw n.background=new qt("white"),Error("API_URL must be set")}pf();
