import { useState } from 'react';
import { Plus, Minus, Eye, Trash2, List } from 'lucide-react';

interface StackItem {
  id: number;
  value: string;
}

export default function StackVisualizer() {
  const [stack, setStack] = useState<StackItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [animating, setAnimating] = useState(false);
  const [nextId, setNextId] = useState(1);

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  const push = () => {
    if (!inputValue.trim()) {
      showMessage('Please enter a value!');
      return;
    }
    setAnimating(true);
    const newItem: StackItem = { id: nextId, value: inputValue.trim() };
    setStack([newItem, ...stack]);
    setInputValue('');
    setNextId(nextId + 1);
    showMessage(`Pushed: ${newItem.value}`);
    setTimeout(() => setAnimating(false), 300);
  };

  const pop = () => {
    if (stack.length === 0) {
      showMessage('Stack is empty!');
      return;
    }
    setAnimating(true);
    const poppedItem = stack[0];
    showMessage(`Popped: ${poppedItem.value}`);
    setTimeout(() => {
      setStack(stack.slice(1));
      setAnimating(false);
    }, 300);
  };

  const peek = () => {
    if (stack.length === 0) {
      showMessage('Stack is empty!');
      return;
    }
    showMessage(`Top element: ${stack[0].value}`);
  };

  const clear = () => {
    if (stack.length === 0) {
      showMessage('Stack is already empty!');
      return;
    }
    setStack([]);
    showMessage('Stack cleared!');
  };

  const isEmpty = () => {
    showMessage(stack.length === 0 ? 'Stack is empty ✓' : 'Stack is not empty ✗');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Stack Data Structure</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A stack follows the <span className="font-semibold text-purple-600">Last-In-First-Out (LIFO)</span> principle. 
            Think of it like a stack of plates - you can only add or remove from the top!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Control Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operations</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Value
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && push()}
                placeholder="Type a value..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={push}
                disabled={animating}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition disabled:opacity-50"
              >
                <Plus size={20} />
                Push
              </button>
              <button
                onClick={pop}
                disabled={animating}
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition disabled:opacity-50"
              >
                <Minus size={20} />
                Pop
              </button>
              <button
                onClick={peek}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition"
              >
                <Eye size={20} />
                Peek
              </button>
              <button
                onClick={isEmpty}
                className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-lg transition"
              >
                <List size={20} />
                Is Empty?
              </button>
              <button
                onClick={clear}
                className="col-span-2 flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition"
              >
                <Trash2 size={20} />
                Clear
              </button>
            </div>

            {/* Operation Descriptions */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div><span className="font-semibold">Push:</span> Add element to top of stack</div>
              <div><span className="font-semibold">Pop:</span> Remove and return top element</div>
              <div><span className="font-semibold">Peek:</span> View top element without removing</div>
              <div><span className="font-semibold">Is Empty:</span> Check if stack has elements</div>
              <div><span className="font-semibold">Clear:</span> Remove all elements</div>
            </div>

            {/* Status Message */}
            {message && (
              <div className="mt-4 bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded-lg text-center font-medium">
                {message}
              </div>
            )}

            {/* Stack Info */}
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <span>Size: <span className="font-bold text-gray-800">{stack.length}</span></span>
              <span>Top: <span className="font-bold text-gray-800">{stack.length > 0 ? stack[0].value : 'Empty'}</span></span>
            </div>
          </div>

          {/* Visual Stack */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visual Stack</h2>
            
            <div className="relative">
              {/* Stack Container */}
              <div className="min-h-96 flex flex-col-reverse items-center justify-start border-4 border-gray-300 rounded-lg bg-gray-50 p-4">
                {stack.length === 0 ? (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
                    Stack is empty
                  </div>
                ) : (
                  <div className="w-full space-y-2">
                    {stack.map((item, index) => (
                      <div
                        key={item.id}
                        className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg shadow-md transform transition-all duration-300 ${
                          index === 0 && animating ? 'scale-105' : 'scale-100'
                        }`}
                        style={{
                          animation: index === 0 && animating ? 'pulse 0.3s ease-in-out' : 'none'
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-mono font-bold text-lg">{item.value}</span>
                          {index === 0 && (
                            <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                              TOP
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Base Label */}
              <div className="text-center mt-2 text-gray-600 font-medium">
                ↑ LIFO: Last In, First Out ↑
              </div>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-World Examples</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="font-semibold text-purple-700 mb-2">Function Calls</div>
              <div className="text-sm text-gray-600">Programs use stacks to track function calls - the most recent call must complete first</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="font-semibold text-blue-700 mb-2">Undo/Redo</div>
              <div className="text-sm text-gray-600">Text editors use stacks to remember your actions for undo functionality</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="font-semibold text-green-700 mb-2">Browser History</div>
              <div className="text-sm text-gray-600">The back button works like popping from a stack of visited pages</div>
            </div>
          </div>
        </div>
      </div>
 </div>
);
}
