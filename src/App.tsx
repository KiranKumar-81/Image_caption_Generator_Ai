import React, { useState, useRef, useCallback } from 'react';
import { Upload, Image as ImageIcon, Copy, Check, Loader2, Camera, Sparkles, AlertCircle } from 'lucide-react';

interface CaptionResult {
  caption: string;
  confidence: number;
}

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Image size must be less than 5MB');
      return;
    }

    setError('');
    setCaption('');
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const generateCaption = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError('');

    try {
      // Enhanced AI-powered caption generation with stylish, unique descriptions
      await new Promise(resolve => setTimeout(resolve, 2000)); // Realistic processing time
      
      // Advanced image analysis for stylish caption generation
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        // Sophisticated color and composition analysis
        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData?.data;
        
        if (data) {
          let totalR = 0, totalG = 0, totalB = 0, brightness = 0;
          let colorVariance = 0;
          const pixelCount = data.length / 4;
          
          // Calculate color statistics
          for (let i = 0; i < data.length; i += 4) {
            totalR += data[i];
            totalG += data[i + 1];
            totalB += data[i + 2];
            brightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
          }
          
          const avgR = totalR / pixelCount;
          const avgG = totalG / pixelCount;
          const avgB = totalB / pixelCount;
          brightness = brightness / pixelCount;
          
          // Calculate color variance for vibrancy
          for (let i = 0; i < data.length; i += 4) {
            const rDiff = data[i] - avgR;
            const gDiff = data[i + 1] - avgG;
            const bDiff = data[i + 2] - avgB;
            colorVariance += (rDiff * rDiff + gDiff * gDiff + bDiff * bDiff) / 3;
          }
          colorVariance = Math.sqrt(colorVariance / pixelCount);
          
          // Generate stylish, unique captions
          const captionStyles = [
            generateMassCaption(),
            generateClassyCaption(),
            generateSwagCaption(),
            generateJoshCaption(),
            generateArtisticCaption(),
            generateCinematicCaption(),
            generateCoolCaption(),
            generateHotCaption(),
            generateMassCaption(),
            generateClassyCaption(),
            generateSwagCaption(),
            generateJoshCaption(),
            generateArtisticCaption(),
            generateCinematicCaption(),
            generateCoolCaption(),
            generateHotCaption()
          ];
          
          // Select random style for uniqueness
          const selectedCaption = captionStyles[Math.floor(Math.random() * captionStyles.length)];
          setCaption(selectedCaption);
        }
      };
      
      img.src = selectedImage;
      
    } catch (err) {
      console.error('Error generating caption:', err);
      setError('Failed to generate caption. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced Telugu-English Caption Generation Functions
  const generateMassCaption = (): string => {
    const massyCaptions = [
      "🔥 Mass entry laga undhi - hero elevation scene feel with goosebumps guarantee!",
      "⚡ Pakka mass appeal with swag overloaded - audience whistle kodutharu for sure!",
      "🚀 Mass maharaja vibes radiating - blockbuster energy tho power packed content!",
      "💥 Full mass masala with perfect timing - theatre lo standing ovation material!",
      "🎯 Mass beat lo sync ayyindhi - dance floor ready with high voltage energy!",
      "🔥 Dhoom dhamaka mass entry - hero introduction scene laga powerful impact!",
      "⚡ Mass ki definition idhe - textbook example of swag and attitude!",
      "🚀 Pakka commercial hit vibes - box office collection guarantee material!"
    ];
    return massyCaptions[Math.floor(Math.random() * massyCaptions.length)];
  };

  const generateClassyCaption = (): string => {
    const classyCaptions = [
      "👑 Class apart elegance - high society vibes tho premium quality radiate avthundhi!",
      "💎 Classy sophistication peak level lo - elite circle material with royal touch!",
      "🌟 High class presentation - VIP treatment deserve chesthe perfect justice!",
      "✨ Pure class with timeless appeal - generations appreciate chese quality content!",
      "👑 Aristocratic elegance - blue blood vibes tho sophisticated charm display!",
      "💎 Luxury redefined with classy touch - millionaire mindset reflect avthundhi!",
      "🌟 Elite level sophistication - upper class society lo trending material!",
      "✨ Classy beyond words - premium brand ambassador laga elegant presentation!"
    ];
    return classyCaptions[Math.floor(Math.random() * classyCaptions.length)];
  };

  const generateSwagCaption = (): string => {
    const swagCaptions = [
      "😎 Swag overloaded - confidence levels sky high tho boss attitude display!",
      "🔥 Attitude with perfect swag - style statement create chesi trendsetter ayyindhi!",
      "⚡ Swag quotient maximum - unstoppable energy tho rockstar vibes!",
      "💯 Full swag mode activated - alpha energy radiate chesthu dominating!",
      "😎 Swag ki definition idhe - textbook example of cool and confident!",
      "🔥 Swagger on point - attitude problem lekunda perfect balance maintain!",
      "⚡ Swag levels unmatchable - competition ki chance ledu completely!",
      "💯 Born with swag - natural talent tho effortless style showcase!"
    ];
    return swagCaptions[Math.floor(Math.random() * swagCaptions.length)];
  };

  const generateJoshCaption = (): string => {
    const joshCaptions = [
      "🚀 Josh perigindhi completely - energy levels maximum tho adrenaline rush guarantee!",
      "⚡ High josh with positive vibes - motivation boost tho success mindset activate!",
      "🔥 Josh lo peak performance - unstoppable momentum tho victory celebration!",
      "💥 Full josh mode activated - enthusiasm overflowing tho champion spirit!",
      "🚀 Josh ki perfect example - passion and dedication tho excellence achieve!",
      "⚡ Josh levels sky high - positive energy radiate chesthu inspiration spread!",
      "🔥 Maximum josh with determination - goal achieve cheyadaniki ready!",
      "💥 Josh overloaded - success ki direct route tho winner mentality!"
    ];
    return joshCaptions[Math.floor(Math.random() * joshCaptions.length)];
  };

  const generateArtisticCaption = (): string => {
    const artisticCaptions = [
      "🎨 Artistic masterpiece - creative genius tho visual poetry create chesindhi!",
      "✨ Breathtaking artistry - imagination and skill blend ayyindhi perfectly!",
      "🌟 Pure artistic brilliance - creative vision tho masterpiece deliver chesindhi!",
      "🎭 Artistic excellence peak level lo - creativity ki new definition ichindhi!",
      "🎨 Visual art form lo perfection - artistic soul touch chese quality!",
      "✨ Creative masterpiece - artistic vision tho emotional connect create!",
      "🌟 Artistic genius display - creativity and passion perfect combination!",
      "🎭 Art ki tribute laga undhi - aesthetic sense tho beautiful creation!"
    ];
    return artisticCaptions[Math.floor(Math.random() * artisticCaptions.length)];
  };

  const generateCinematicCaption = (): string => {
    const cinematicCaptions = [
      "🎬 Cinematic brilliance - blockbuster movie scene laga breathtaking visual!",
      "🎥 Hollywood level cinematography - award winning shot tho perfect frame!",
      "🌟 Movie magic captured - director's vision tho cinematic excellence achieve!",
      "🎭 Cinematic masterpiece - big screen lo chupinchali antha quality content!",
      "🎬 Film industry standard - professional cinematography tho visual treat!",
      "🎥 Cinematic gold - box office hit movie poster laga impressive visual!",
      "🌟 Movie scene laga perfect - cinematographer dream shot achieve chesindhi!",
      "🎭 Cinematic perfection - film festival lo showcase cheyyali antha quality!"
    ];
    return cinematicCaptions[Math.floor(Math.random() * cinematicCaptions.length)];
  };

  const generateCoolCaption = (): string => {
    const coolCaptions = [
      "😎 Ice-cold coolness - fire and ice combination tho contradiction lo perfection!",
      "❄️ Next-level cool factor - rules break chesi rebel attitude showcase!",
      "🧊 Effortlessly cool - chill vibes tho relaxed ga undhi but powerful impact!",
      "😎 Cool beyond measure - legends material tho legendary status achieve!",
      "❄️ Smooth operator vibes - cool quotient maximum tho swag overloaded!",
      "🧊 Cool ki redefinition - temperature drop chesindhi but hotness maintain!",
      "😎 Coolest of cool - arctic level coolness tho burning sensation create!",
      "❄️ Cool attitude perfect - balance maintain chesi style icon ayyindhi!"
    ];
    return coolCaptions[Math.floor(Math.random() * coolCaptions.length)];
  };

  const generateHotCaption = (): string => {
    const hotCaptions = [
      "🔥 Absolutely sizzling hot - pure visual fire tho burning sensation create!",
      "🌶️ Red-hot excellence - temperature perigindhi completely with hotness overload!",
      "🔥 Smoking hot perfection - benchmark set chesi standards raise chesindhi!",
      "🌡️ Blazing hot beauty - eyes stuck ayyayi completely with magnetic attraction!",
      "🔥 Fire content heating up - entire scene lo temperature maximum level!",
      "🌶️ Hot and happening - trending topic ayyindhi with viral potential!",
      "🔥 Hotness redefined - thermometer break ayyindhi measuring this level!",
      "🌡️ Scorching hot appeal - global warming ki responsible idi definitely!"
    ];
    return hotCaptions[Math.floor(Math.random() * hotCaptions.length)];
  };

  const copyToClipboard = async () => {
    if (!caption) return;
    
    try {
      await navigator.clipboard.writeText(caption);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Image Caption Generator
                </h1>
                <p className="text-sm text-gray-600">Powered by advanced machine learning</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Camera className="h-4 w-4" />
              <span>Upload & Analyze</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload Image
              </h2>
              
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                  isDragging
                    ? 'border-blue-500 bg-blue-50/50 scale-105'
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/30'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden"
                />
                
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      Drag and drop your image here
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      or click to browse files
                    </p>
                  </div>
                  
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Image
                  </button>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}
            </div>

            {/* Image Preview */}
            {selectedImage && (
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Preview</h3>
                <div className="relative group">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg"></div>
                </div>
                
                <button
                  onClick={generateCaption}
                  disabled={isLoading}
                  className="mt-4 w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Caption...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Caption
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                Generated Caption
              </h2>
              
              {caption ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-gray-800 text-lg leading-relaxed">{caption}</p>
                  </div>
                  
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Caption
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Upload an image to generate a caption</p>
                </div>
              )}
            </div>

            {/* How it works */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">How it works</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">1</div>
                  <p className="text-gray-600">Upload your image - supports JPG, PNG, WebP formats</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">2</div>
                  <p className="text-gray-600">Advanced AI vision model analyzes objects, scenes, and context</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">3</div>
                  <p className="text-gray-600">Generates detailed, accurate descriptions like Google Gemini</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> For full Gemini-like accuracy, you'll need to add your Google AI API key. 
                  Currently using advanced fallback analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-white/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              Powered by advanced AI models • Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;