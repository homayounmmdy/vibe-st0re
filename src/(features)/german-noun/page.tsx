import React, { useState, createContext, useContext, useCallback } from 'react';
import * as XLSX from 'xlsx';
import { Book, Upload, Download, Play, Check, X, Edit2, Trash2, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types
interface Noun {
  id: string;
  noun: string;
  gender: 'der' | 'die' | 'das';
}

interface ValidationError {
  row: number;
  error: string;
}

interface QuizQuestion {
  noun: Noun;
  options: Array<'der' | 'die' | 'das'>;
}

interface QuizResult {
  question: QuizQuestion;
  userAnswer: 'der' | 'die' | 'das';
  isCorrect: boolean;
}

// Context
interface AppContextType {
  nouns: Noun[];
  setNouns: (nouns: Noun[]) => void;
  addNoun: (noun: Omit<Noun, 'id'>) => void;
  removeNoun: (id: string) => void;
  updateNoun: (id: string, noun: Omit<Noun, 'id'>) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

// Sample data generator
const generateSampleData = (): Noun[] => [
  { id: '1', noun: 'Mann', gender: 'der' },
  { id: '2', noun: 'Frau', gender: 'die' },
  { id: '3', noun: 'Kind', gender: 'das' },
  { id: '4', noun: 'Tisch', gender: 'der' },
  { id: '5', noun: 'Lampe', gender: 'die' },
  { id: '6', noun: 'Buch', gender: 'das' },
  { id: '7', noun: 'Stuhl', gender: 'der' },
  { id: '8', noun: 'Tür', gender: 'die' },
  { id: '9', noun: 'Fenster', gender: 'das' },
  { id: '10', noun: 'Lehrer', gender: 'der' },
  { id: '11', noun: 'Schule', gender: 'die' },
  { id: '12', noun: 'Auto', gender: 'das' },
];

// App Provider
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nouns, setNouns] = useState<Noun[]>(generateSampleData());

  const addNoun = useCallback((noun: Omit<Noun, 'id'>) => {
    setNouns(prev => [...prev, { ...noun, id: Date.now().toString() }]);
  }, []);

  const removeNoun = useCallback((id: string) => {
    setNouns(prev => prev.filter(n => n.id !== id));
  }, []);

  const updateNoun = useCallback((id: string, noun: Omit<Noun, 'id'>) => {
    setNouns(prev => prev.map(n => n.id === id ? { ...noun, id } : n));
  }, []);

  return (
    <AppContext.Provider value={{ nouns, setNouns, addNoun, removeNoun, updateNoun }}>
      {children}
    </AppContext.Provider>
  );
};

// Header Component
const Header: React.FC = () => (
  <header className="bg-slate-900 text-white shadow-lg">
    <div className="h-1 bg-gradient-to-r from-red-700 via-yellow-500 to-slate-900"></div>
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-3">
        <Link to="/">
        <ArrowLeft className="w-8 h-8 text-yellow-400" />
        </Link>
        <Book className="w-8 h-8 text-yellow-400" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deutsche Nomen</h1>
          <p className="text-slate-300 text-sm mt-1">Master German noun genders with interactive quizzes</p>
        </div>
      </div>
    </div>
  </header>
);

// File Upload Component
const FileUpload: React.FC<{ onImport: (data: Noun[], errors: ValidationError[]) => void }> = ({ onImport }) => {
  const [isDragging, setIsDragging] = useState(false);

  const validateAndParse = (data: any[]): { nouns: Noun[], errors: ValidationError[] } => {
    const nouns: Noun[] = [];
    const errors: ValidationError[] = [];
    const validGenders = ['der', 'die', 'das'];

    data.forEach((row, index) => {
      const rowNum = index + 2; // Account for header
      
      if (!row.noun || !row.gender) {
        if (row.noun || row.gender) {
          errors.push({ row: rowNum, error: 'Missing noun or gender' });
        }
        return;
      }

      const gender = row.gender.toLowerCase().trim();
      if (!validGenders.includes(gender)) {
        errors.push({ row: rowNum, error: `Invalid gender: ${row.gender}` });
        return;
      }

      nouns.push({
        id: `import-${Date.now()}-${index}`,
        noun: row.noun.trim(),
        gender: gender as 'der' | 'die' | 'das'
      });
    });

    return { nouns, errors };
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        const { nouns, errors } = validateAndParse(jsonData);
        onImport(nouns, errors);
      } catch (error) {
        alert('Error reading file. Please ensure it\'s a valid Excel file.');
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        isDragging ? 'border-yellow-500 bg-yellow-50' : 'border-slate-300 bg-white hover:border-slate-400'
      }`}
    >
      <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
      <p className="text-slate-700 font-medium mb-2">Drag & drop an Excel file here</p>
      <p className="text-slate-500 text-sm mb-4">or click to browse (supports .xlsx, .xls, .csv)</p>
      <label className="inline-block px-4 py-2 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-800 transition-colors">
        Choose File
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileInput}
          className="hidden"
          aria-label="Upload Excel file"
        />
      </label>
    </div>
  );
};

// Import Preview Component
const ImportPreview: React.FC<{
  nouns: Noun[];
  errors: ValidationError[];
  onConfirm: () => void;
  onCancel: () => void;
  onEdit: (id: string, noun: Omit<Noun, 'id'>) => void;
  onRemove: (id: string) => void;
}> = ({ nouns, errors, onConfirm, onCancel, onEdit, onRemove }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editNoun, setEditNoun] = useState('');
  const [editGender, setEditGender] = useState<'der' | 'die' | 'das'>('der');

  const startEdit = (noun: Noun) => {
    setEditingId(noun.id);
    setEditNoun(noun.noun);
    setEditGender(noun.gender);
  };

  const saveEdit = (id: string) => {
    onEdit(id, { noun: editNoun, gender: editGender });
    setEditingId(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Import Preview</h2>
          <p className="text-slate-600 mt-1">Review and edit before importing</p>
        </div>

        {errors.length > 0 && (
          <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-900">Import Errors</p>
                {errors.map((err, i) => (
                  <p key={i} className="text-sm text-red-700">Row {err.row}: {err.error}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {nouns.map((noun) => (
              <div key={noun.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                {editingId === noun.id ? (
                  <>
                    <input
                      type="text"
                      value={editNoun}
                      onChange={(e) => setEditNoun(e.target.value)}
                      className="flex-1 px-3 py-1 border border-slate-300 rounded"
                    />
                    <select
                      value={editGender}
                      onChange={(e) => setEditGender(e.target.value as 'der' | 'die' | 'das')}
                      className="px-3 py-1 border border-slate-300 rounded"
                    >
                      <option value="der">der</option>
                      <option value="die">die</option>
                      <option value="das">das</option>
                    </select>
                    <button
                      onClick={() => saveEdit(noun.id)}
                      className="p-2 text-green-600 hover:bg-green-50 rounded"
                      aria-label="Save edit"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="p-2 text-slate-600 hover:bg-slate-100 rounded"
                      aria-label="Cancel edit"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-1 font-medium text-slate-900">{noun.noun}</span>
                    <span className="px-3 py-1 bg-white rounded font-medium text-slate-700">{noun.gender}</span>
                    <button
                      onClick={() => startEdit(noun)}
                      className="p-2 text-slate-600 hover:bg-slate-100 rounded"
                      aria-label="Edit noun"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemove(noun.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded"
                      aria-label="Remove noun"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={nouns.length === 0}
            className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Import {nouns.length} Noun{nouns.length !== 1 ? 's' : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

// Data Management Component
const DataManagement: React.FC = () => {
  const { nouns, setNouns } = useAppContext();
  const [previewNouns, setPreviewNouns] = useState<Noun[] | null>(null);
  const [previewErrors, setPreviewErrors] = useState<ValidationError[]>([]);

  const handleImport = (importedNouns: Noun[], errors: ValidationError[]) => {
    setPreviewNouns(importedNouns);
    setPreviewErrors(errors);
  };

  const confirmImport = () => {
    if (previewNouns) {
      setNouns(previewNouns);
      setPreviewNouns(null);
      setPreviewErrors([]);
    }
  };

  const handleExport = () => {
    const data = nouns.map(n => ({ noun: n.noun, gender: n.gender }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Nouns');
    XLSX.writeFile(workbook, 'german-nouns.xlsx');
  };

  const downloadSample = () => {
    const sampleData = generateSampleData().map(n => ({ noun: n.noun, gender: n.gender }));
    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sample');
    XLSX.writeFile(workbook, 'sample-german-nouns.xlsx');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Management</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-slate-900 mb-3">Import Data</h3>
          <FileUpload onImport={handleImport} />
          <button
            onClick={downloadSample}
            className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Sample File
          </button>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-3">Current Dataset</h3>
          <div className="p-4 bg-slate-50 rounded-lg mb-3">
            <p className="text-3xl font-bold text-slate-900">{nouns.length}</p>
            <p className="text-slate-600">Total Nouns</p>
            <div className="mt-3 flex gap-2 text-sm">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                {nouns.filter(n => n.gender === 'der').length} der
              </span>
              <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded">
                {nouns.filter(n => n.gender === 'die').length} die
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                {nouns.filter(n => n.gender === 'das').length} das
              </span>
            </div>
          </div>
          <button
            onClick={handleExport}
            disabled={nouns.length === 0}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Export to Excel
          </button>
        </div>
      </div>

      {previewNouns && (
        <ImportPreview
          nouns={previewNouns}
          errors={previewErrors}
          onConfirm={confirmImport}
          onCancel={() => { setPreviewNouns(null); setPreviewErrors([]); }}
          onEdit={(id, noun) => {
            setPreviewNouns(prev => prev!.map(n => n.id === id ? { ...noun, id } : n));
          }}
          onRemove={(id) => {
            setPreviewNouns(prev => prev!.filter(n => n.id !== id));
          }}
        />
      )}
    </div>
  );
};

// Quiz Setup Component
const QuizSetup: React.FC<{ onStart: (count: number) => void }> = ({ onStart }) => {
  const { nouns } = useAppContext();
  const [count, setCount] = useState(10);
  const [customCount, setCustomCount] = useState('');

  const presets = [10, 20, 50];
  const maxQuestions = nouns.length;

  const handleStart = () => {
    const finalCount = customCount ? parseInt(customCount) : count;
    onStart(Math.min(finalCount, maxQuestions));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Start Quiz</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Number of Questions
        </label>
        <div className="grid grid-cols-3 gap-3 mb-3">
          {presets.map((preset) => (
            <button
              key={preset}
              onClick={() => { setCount(preset); setCustomCount(''); }}
              disabled={preset > maxQuestions}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                count === preset && !customCount
                  ? 'bg-red-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {preset}
            </button>
          ))}
        </div>
        <input
          type="number"
          min="1"
          max={maxQuestions}
          value={customCount}
          onChange={(e) => { setCustomCount(e.target.value); setCount(parseInt(e.target.value) || 10); }}
          placeholder="Custom amount"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
        />
        <p className="text-sm text-slate-500 mt-2">
          Maximum: {maxQuestions} questions available
        </p>
      </div>

      <button
        onClick={handleStart}
        disabled={nouns.length === 0}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="w-5 h-5" />
        Start Quiz
      </button>
    </div>
  );
};

// Quiz Component
const Quiz: React.FC<{ questionCount: number; onComplete: (results: QuizResult[]) => void }> = ({ questionCount, onComplete }) => {
  const { nouns } = useAppContext();
  const [questions] = useState<QuizQuestion[]>(() => {
    const shuffled = [...nouns].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, questionCount).map(noun => ({
      noun,
      options: ['der', 'die', 'das']
    }));
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<'der' | 'die' | 'das' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: 'der' | 'die' | 'das') => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === currentQuestion.noun.gender;
    setResults([...results, { question: currentQuestion, userAnswer: answer, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      onComplete([...results, { 
        question: currentQuestion, 
        userAnswer: selectedAnswer!, 
        isCorrect: selectedAnswer === currentQuestion.noun.gender 
      }]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-600 mb-2">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{results.filter(r => r.isCorrect).length} correct</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-sm text-slate-600 mb-2">Select the correct article for:</p>
        <h3 className="text-4xl font-bold text-slate-900">{currentQuestion.noun.noun}</h3>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentQuestion.noun.gender;
          const showCorrect = showFeedback && isCorrect;
          const showIncorrect = showFeedback && isSelected && !isCorrect;

          return (
            <button
              key={option}
              onClick={() => !showFeedback && handleAnswer(option)}
              disabled={showFeedback}
              className={`px-6 py-4 rounded-lg font-semibold text-lg transition-all ${
                showCorrect
                  ? 'bg-green-500 text-white ring-4 ring-green-200'
                  : showIncorrect
                  ? 'bg-red-500 text-white ring-4 ring-red-200'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              } disabled:cursor-not-allowed`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className={`p-4 rounded-lg mb-6 ${
          selectedAnswer === currentQuestion.noun.gender
            ? 'bg-green-50 border border-green-200'
            : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-center gap-2">
            {selectedAnswer === currentQuestion.noun.gender ? (
              <>
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">Correct!</span>
              </>
            ) : (
              <>
                <X className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-900">
                  Incorrect. The correct answer is <strong>{currentQuestion.noun.gender}</strong>
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {showFeedback && (
        <button
          onClick={handleNext}
          className="w-full px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors"
        >
          {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
        </button>
      )}
    </div>
  );
};

// Results Component
const QuizResults: React.FC<{ results: QuizResult[]; onRestart: () => void }> = ({ results, onRestart }) => {
  const correctCount = results.filter(r => r.isCorrect).length;
  const accuracy = Math.round((correctCount / results.length) * 100);
  const incorrectResults = results.filter(r => !r.isCorrect);

  const getSuggestion = () => {
    if (accuracy >= 90) return 'Ausgezeichnet! Your German is excellent!';
    if (accuracy >= 70) return 'Sehr gut! Keep practicing to master all genders.';
    if (accuracy >= 50) return 'Good effort! Focus on the nouns you missed.';
    return 'Keep practicing! Consider studying gender patterns.';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Quiz Complete!</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-slate-50 rounded-lg text-center">
          <p className="text-3xl font-bold text-slate-900">{results.length}</p>
          <p className="text-slate-600">Total Questions</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg text-center">
          <p className="text-3xl font-bold text-green-700">{correctCount}</p>
          <p className="text-slate-600">Correct</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg text-center">
          <p className="text-3xl font-bold text-yellow-700">{accuracy}%</p>
          <p className="text-slate-600">Accuracy</p>
        </div>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
        <p className="text-blue-900 font-medium">{getSuggestion()}</p>
      </div>

      {incorrectResults.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Review Incorrect Answers</h3>
          <div className="space-y-2">
            {incorrectResults.map((result, i) => (
              <div key={i} className="p-3 bg-red-50 rounded-lg flex justify-between items-center">
                <span className="font-medium text-slate-900">{result.question.noun.noun}</span>
                <div className="flex gap-2 text-sm">
                  <span className="px-2 py-1 bg-red-200 text-red-900 rounded">
                    Your answer: {result.userAnswer}
                  </span>
                  <span className="px-2 py-1 bg-green-200 text-green-900 rounded">
                    Correct: {result.question.noun.gender}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onRestart}
        className="w-full px-6 py-3 bg-yellow-500 text-slate-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
      >
        Start New Quiz
      </button>
    </div>
  );
};

// Main App Component
const GermanNoun: React.FC = () => {
  const [view, setView] = useState<'setup' | 'quiz' | 'results'>('setup');
  const [questionCount, setQuestionCount] = useState(10);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  const handleStartQuiz = (count: number) => {
    setQuestionCount(count);
    setView('quiz');
  };

  const handleQuizComplete = (results: QuizResult[]) => {
    setQuizResults(results);
    setView('results');
  };

  const handleRestart = () => {
    setView('setup');
    setQuizResults([]);
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {view === 'setup' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <DataManagement />
              <QuizSetup onStart={handleStartQuiz} />
            </div>
          )}

          {view === 'quiz' && (
            <div className="max-w-2xl mx-auto">
              <Quiz questionCount={questionCount} onComplete={handleQuizComplete} />
            </div>
          )}

          {view === 'results' && (
            <div className="max-w-2xl mx-auto">
              <QuizResults results={quizResults} onRestart={handleRestart} />
            </div>
          )}
        </main>

        <footer className="mt-16 py-6 text-center text-slate-600 text-sm">
          <p>Deutsche Nomen Quiz App • Built with React & TypeScript</p>
        </footer>
      </div>
    </AppProvider>
  );
};

export default GermanNoun;