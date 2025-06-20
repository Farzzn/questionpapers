
'use client';
import { useState } from 'react';
interface Question {
  id: number;
  question: string;
  type: 'single' | 'multiple' | 'numerical';
  options?: string[];
  correctIndex?: number;
  correctIndices?: number[];
  numericalAnswer?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "If '→' denotes increasing order of intensity, then the meaning of the words [dry → arid → parched] is analogous to [diet → fast → ________ ]. Which one of the given options is appropriate to fill the blank?",
    type: 'single',
    options: ["starve", "reject", "feast", "deny"],
    correctIndex: 0
  },
  {
    id: 2,
    question: "If two distinct non-zero real variables x and y are such that (x + y) is proportional to (x − y) then the value of x/y",
    type: 'single',
    options: ["depends on xy", "depends only on x and not on y", "depends only on y and not on x", "is a constant"],
    correctIndex: 3
  },
  {
    id: 3,
    question: "Consider the following sample of numbers: 9, 18, 11, 14, 15, 17, 10, 69, 11, 13. The median of the sample is",
    type: 'single',
    options: ["13.5", "14", "11", "18.7"],
    correctIndex: 0
  },
  {
    id: 4,
    question: "The number of coins of ₹1, ₹5, and ₹10 denominations that a person has are in the ratio 5:3:13. Of the total amount, the percentage of money in ₹5 coins is",
    type: 'single',
    options: ["21%", "14 2/7%", "10%", "30%"],
    correctIndex: 2
  },
  {
    id: 5,
    question: "For positive non-zero real variables p and q, if log(p² + q²) = log p + log q + 2 log 3, then, the value of (p⁴ + q⁴)/(p²q²) is",
    type: 'single',
    options: ["79", "81", "9", "83"],
    correctIndex: 0
  },
  {
    id: 6,
    question: "In the given text, the blanks are numbered (i)−(iv). Select the best match for all the blanks. Steve was advised to keep his head (i) before heading (ii) to bat; for, while he had a head (iii) batting, he could only do so with a cool head (iv) his shoulders.",
    type: 'single',
    options: ["(i) down (ii) down (iii) on (iv) for", "(i) on (ii) down (iii) for (iv) on", "(i) down (ii) out (iii) for (iv) on", "(i) on (ii) out (iii) on (iv) for"],
    correctIndex: 2
  },
  {
    id: 7,
    question: "A rectangular paper sheet of dimensions 54 cm × 4 cm is taken. The two longer edges of the sheet are joined together to create a cylindrical tube. A cube whose surface area is equal to the area of the sheet is also taken. Then, the ratio of the volume of the cylindrical tube to the volume of the cube is",
    type: 'single',
    options: ["1/π", "2/π", "3/π", "4/π"],
    correctIndex: 0
  },
  {
    id: 8,
    question: "The pie chart presents the percentage contribution of different macronutrients to a typical 2,000 kcal diet of a person. The typical energy density (kcal/g) of these macronutrients is given in the table. The total fat (all three types), in grams, this person consumes is",
    type: 'single',
    options: ["44.4", "77.8", "100", "3,600"],
    correctIndex: 2
  },
  {
    id: 9,
    question: "A rectangular paper of 20 cm × 8 cm is folded 3 times. Each fold is made along the line of symmetry, which is perpendicular to its long edge. The perimeter of the final folded sheet (in cm) is",
    type: 'single',
    options: ["18", "24", "20", "21"],
    correctIndex: 0
  },
  {
    id: 10,
    question: "The least number of squares to be added in the figure to make AB a line of symmetry is",
    type: 'single',
    options: ["6", "4", "5", "7"],
    correctIndex: 0
  },
  {
    id: 11,
    question: "Let f: ℝ → ℝ be a function such that f(x) = max{x, x³}, x ∈ ℝ, where ℝ is the set of all real numbers. The set of all points where f(x) is NOT differentiable is",
    type: 'single',
    options: ["{−1, 1, 2}", "{−2, −1, 1}", "{0, 1}", "{−1, 0, 1}"],
    correctIndex: 3
  },
  {
    id: 12,
    question: "The product of all eigenvalues of the matrix [1 2 3; 4 5 6; 7 8 9] is",
    type: 'single',
    options: ["−1", "0", "1", "2"],
    correctIndex: 1
  },
  {
    id: 13,
    question: "Consider a system that uses 5 bits for representing signed integers in 2's complement format. In this system, two integers A and B are represented as A=01010 and B=11010. Which one of the following operations will result in either an arithmetic overflow or an arithmetic underflow?",
    type: 'single',
    options: ["A + B", "A − B", "B − A", "2 * B"],
    correctIndex: 1
  },
  {
    id: 14,
    question: "Consider a permutation sampled uniformly at random from the set of all permutations of {1, 2, 3, ⋯, n} for some n ≥ 4. Let X be the event that 1 occurs before 2 in the permutation, and Y the event that 3 occurs before 4. Which one of the following statements is TRUE?",
    type: 'single',
    options: ["The events X and Y are mutually exclusive", "The events X and Y are independent", "Either event X or Y must occur", "Event X is more likely than event Y"],
    correctIndex: 1
  },
  {
    id: 15,
    question: "Which one of the following statements is FALSE?",
    type: 'single',
    options: ["In the cycle stealing mode of DMA, one word of data is transferred between an I/O device and main memory in a stolen cycle", "For bulk data transfer, the burst mode of DMA has a higher throughput than the cycle stealing mode", "Programmed I/O mechanism has a better CPU utilization than the interrupt driven I/O mechanism", "The CPU can start executing an interrupt service routine faster with vectored interrupts than with non-vectored interrupts"],
    correctIndex: 2
  },
  {
    id: 16,
    question: "A user starts browsing a webpage hosted at a remote server. The browser opens a single TCP connection to fetch the entire webpage from the server. The webpage consists of a top-level index page with multiple embedded image objects. Assume that all caches (e.g., DNS cache, browser cache) are all initially empty. The following packets leave the user's computer in some order. (i) HTTP GET request for the index page (ii) DNS request to resolve the web server's name to its IP address (iii) HTTP GET request for an image object (iv) TCP SYN to open a connection to the web server. Which one of the following is the CORRECT chronological order (earliest in time to latest) of the packets leaving the computer?",
    type: 'single',
    options: ["(iv), (ii), (iii), (i)", "(ii), (iv), (iii), (i)", "(ii), (iv), (i), (iii)", "(iv), (ii), (i), (iii)"],
    correctIndex: 2
  },
  {
    id: 17,
    question: "Given an integer array of size N, we want to check if the array is sorted (in either ascending or descending order). An algorithm solves this problem by making a single pass through the array and comparing each element of the array only with its adjacent elements. The worst-case time complexity of this algorithm is",
    type: 'single',
    options: ["both O(N) and Ω(N)", "O(N) but not Ω(N)", "Ω(N) but not O(N)", "neither O(N) nor Ω(N)"],
    correctIndex: 0
  },
  {
    id: 18,
    question: "Consider the following C program: #include <stdio.h> int main(){ int a = 6; int b = 0; while(a < 10) { a = a / 12 + 1; a += b;} printf(\"%d\", a); return 0;} Which one of the following statements is CORRECT?",
    type: 'single',
    options: ["The program prints 9 as output", "The program prints 10 as output", "The program gets stuck in an infinite loop", "The program prints 6 as output"],
    correctIndex: 2
  },
  {
    id: 19,
    question: "Consider the following C program: #include <stdio.h> void fX(); int main(){ fX(); return 0;} void fX(){ char a; if((a=getchar()) != '\\n') fX(); if(a != '\\n') putchar(a);} Assume that the input to the program from the command line is 1234 followed by a newline character. Which one of the following statements is CORRECT?",
    type: 'single',
    options: ["The program will not terminate", "The program will terminate with no output", "The program will terminate with 4321 as output", "The program will terminate with 1234 as output"],
    correctIndex: 2
  },
  {
    id: 20,
    question: "Let S be the specification: \"Instructors teach courses. Students register for courses. Courses are allocated classrooms. Instructors guide students.\" Which one of the following ER diagrams CORRECTLY represents S?",
    type: 'single',
    options: ["(i)", "(ii)", "(iii)", "(iv)"],
    correctIndex: 3
  },
  {
    id: 21,
    question: "In a B+ tree, the requirement of at least half-full (50%) node occupancy is relaxed for which one of the following cases?",
    type: 'single',
    options: ["Only the root node", "All leaf nodes", "All internal nodes", "Only the leftmost leaf node"],
    correctIndex: 0
  },
  {
    id: 22,
    question: "Which of the following statements about a relation R in first normal form (1NF) is/are TRUE?",
    type: 'multiple',
    options: ["R can have a multi-attribute key", "R cannot have a foreign key", "R cannot have a composite attribute", "R cannot have more than one candidate key"],
    correctIndices: [0, 2]
  },
  {
    id: 23,
    question: "Let L₁, L₂ be two regular languages and L₃ a language which is not regular. Which of the following statements is/are always TRUE?",
    type: 'multiple',
    options: ["L₁ = L₂ if and only if L₁ ∩ L₂̅ = φ", "L₁ ∪ L₃ is not regular", "L₃̅ is not regular", "L₁̅ ∪ L₂̅ is regular"],
    correctIndices: [2, 3]
  },
  {
    id: 24,
    question: "Which of the following statements about threads is/are TRUE?",
    type: 'multiple',
    options: ["Threads can only be implemented in kernel space", "Each thread has its own file descriptor table for open files", "All the threads belonging to a process share a common stack", "Threads belonging to a process are by default not protected from each other"],
    correctIndices: [3]
  },
  {
    id: 25,
    question: "Which of the following process state transitions is/are NOT possible?",
    type: 'multiple',
    options: ["Running to Ready", "Waiting to Running", "Ready to Waiting", "Running to Terminated"],
    correctIndices: [1, 2]
  },
  {
    id: 26,
    question: "Which of the following is/are Bottom-Up Parser(s)?",
    type: 'multiple',
    options: ["Shift-reduce Parser", "Predictive Parser", "LL(1) Parser", "LR Parser"],
    correctIndices: [0, 3]
  },
  {
    id: 27,
    question: "Let A and B be two events in a probability space with P(A) = 0.3, P(B) = 0.5, and P(A ∩ B) = 0.1. Which of the following statements is/are TRUE?",
    type: 'multiple',
    options: ["The two events A and B are independent", "P(A ∪ B) = 0.7", "P(A ∩ Bᶜ) = 0.2, where Bᶜ is the complement of the event B", "P(Aᶜ ∩ Bᶜ) = 0.4, where Aᶜ and Bᶜ are the complements of the events A and B, respectively"],
    correctIndices: [1, 2]
  },
  {
    id: 28,
    question: "Consider the circuit shown below where the gates may have propagation delays. Assume that all signal transitions occur instantaneously and that wires have no delays. Which of the following statements about the circuit is/are CORRECT?",
    type: 'multiple',
    options: ["With no propagation delays, the output Y is always logic Zero", "With no propagation delays, the output Y is always logic One", "With propagation delays, the output Y can have a transient logic One after X transitions from logic Zero to logic One", "With propagation delays, the output Y can have a transient logic Zero after X transitions from logic One to logic Zero"],
    correctIndices: [0, 2]
  },
  {
    id: 29,
    question: "TCP client P successfully establishes a connection to TCP server Q. Let Nₚ denote the sequence number in the SYN sent from P to Q. Let Nᵨ denote the acknowledgement number in the SYN ACK from Q to P. Which of the following statements is/are CORRECT?",
    type: 'multiple',
    options: ["The sequence number Nₚ is chosen randomly by P", "The sequence number Nₚ is always 0 for a new connection", "The acknowledgement number Nᵨ is equal to Nₚ", "The acknowledgement number Nᵨ is equal to Nₚ + 1"],
    correctIndices: [0, 3]
  },
  {
    id: 30,
    question: "Consider a 5-stage pipelined processor with Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Register Writeback (WB) stages. Which of the following statements about forwarding is/are CORRECT?",
    type: 'multiple',
    options: ["In a pipelined execution, forwarding means the result from a source stage of an earlier instruction is passed on to the destination stage of a later instruction", "In forwarding, data from the output of the MEM stage can be passed on to the input of the EX stage of the next instruction", "Forwarding cannot prevent all pipeline stalls", "Forwarding does not require any extra hardware to retrieve the data from the pipeline stages"],
    correctIndices: [0, 2]
  },
  {
    id: 31,
    question: "Which of the following fields is/are modified in the IP header of a packet going out of a network address translation (NAT) device from an internal network to an external network?",
    type: 'multiple',
    options: ["Source IP", "Destination IP", "Header Checksum", "Total Length"],
    correctIndices: [0, 2]
  },
  {
    id: 32,
    question: "Let A and B be non-empty finite sets such that there exist one-to-one and onto functions (i) from A to B and (ii) from A × A to A ∪ B. The number of possible values of |A| is",
    type: 'numerical',
    numericalAnswer: "2"
  },
  {
    id: 33,
    question: "Consider the operator precedence and associativity rules for the integer arithmetic operators given in the table below. Operator + (Highest precedence, Left associativity), - (High precedence, Right associativity), * (Medium precedence, Right associativity), / (Low precedence, Right associativity). The value of the expression 3 + 1 + 5 * 2 / 7 + 2 − 4 − 7 − 6 / 2 as per the above rules is",
    type: 'numerical',
    numericalAnswer: "6"
  },
  {
    id: 34,
    question: "The number of spanning trees in a complete graph of 4 vertices labelled A, B, C, and D is",
    type: 'numerical',
    numericalAnswer: "16"
  },
  {
    id: 35,
    question: "Consider the following two relations, R(A,B) and S(A,C): R: A=10,B=20; A=20,B=30; A=30,B=40; A=30,B=50; S: A=10,C=90; A=30,C=45; A=40,C=80; A=50,C=95. The total number of tuples obtained by evaluating the following expression σ_{B<C}(R ⋈_{R.A=S.A} S) is",
    type: 'numerical',
    numericalAnswer: "2"
  },
  {
    id: 36,
    question: "Consider a network path P—Q—R between nodes P and R via router Q. Node P sends a file of size 10⁶ bytes to R via this path by splitting the file into chunks of 10³ bytes each. Node P sends these chunks one after the other without any wait time between the successive chunk transmissions. Assume that the size of extra headers added to these chunks is negligible, and that the chunk size is less than the MTU. Each of the links P—Q and Q—R has a bandwidth of 10⁶ bits/sec, and negligible propagation latency. Router Q immediately transmits every packet it receives from P to R, with negligible processing and queueing delays. Router Q can simultaneously receive on link P—Q and transmit on link Q—R. Assume P starts transmitting the chunks at time t = 0. Which one of the following options gives the time (in seconds, rounded off to 3 decimal places) at which R receives all the chunks of the file?",
    type: 'single',
    options: ["8.000", "8.008", "15.992", "16.000"],
    correctIndex: 1
  },
  {
    id: 37,
    question: "Consider the following syntax-directed definition (SDD). S → DHTU { S.val = D.val + H.val + T.val + U.val; } D → \"M\"D₁ { D.val = 5 + D₁.val; } D → ε { D.val = −5; } H → \"L\"H₁ { H.val = 5 * 10 + H₁.val; } H → ε { H.val = −10; } T → \"C\"T₁ { T.val = 5 * 100 + T₁.val; } T → ε { T.val = −5; } U → \"K\" { U.val = 5; } Given \"MMLK\" as the input, which one of the following options is the CORRECT value computed by the SDD (in the attribute S.val)?",
    type: 'single',
    options: ["45", "50", "55", "65"],
    correctIndex: 0
  },
  {
    id: 38,
    question: "Consider the following grammar G, with S as the start symbol. The grammar G has three incomplete productions denoted by (1), (2), and (3). S → daT | (1) T → aS | bT | (2) R → (3) | ε The set of terminals is {a, b, c, d, f}. The FIRST and FOLLOW sets of the different non-terminals are as follows. FIRST(S) = {c, d, f}, FIRST(T) = {a, b, ε}, FIRST(R) = {c, ε} FOLLOW(S) = FOLLOW(T) = {c, f, $}, FOLLOW(R) = {f} Which one of the following options CORRECTLY fills in the incomplete productions?",
    type: 'single',
    options: ["(1) S → Rf (2) T → ε (3) R → cTR", "(1) S → fR (2) T → ε (3) R → cTR", "(1) S → fR (2) T → cT (3) R → cR", "(1) S → Rf (2) T → cT (3) R → cR"],
    correctIndex: 0
  },
  {
    id: 39,
    question: "Consider the following pseudo-code. L1: t1 = −1 L2: t2 = 0 L3: t3 = 0 L4: t4 = 4 * t3 L5: t5 = 4 * t2 L6: t6 = t5 * M L7: t7 = t4 + t6 L8: t8 = a[t7] L9: if t8 <= max goto L11 L10: t1 = t8 L11: t3 = t3 + 1 L12: if t3 < M goto L4 L13: t2 = t2 + 1 L14: if t2 < N goto L3 L15: max = t1 Which one of the following options CORRECTLY specifies the number of basic blocks and the number of instructions in the largest basic block, respectively?",
    type: 'single',
    options: ["6 and 6", "6 and 7", "7 and 7", "7 and 6"],
    correctIndex: 3
  },
  {
    id: 40,
    question: "Consider the following two threads T1 and T2 that update two shared variables a and b. Assume that initially a = b = 1. Though context switching between threads can happen at any time, each statement of T1 or T2 is executed atomically without interruption. T1: a = a + 1; b = b + 1; T2: b = 2 * b; a = 2 * a; Which one of the following options lists all the possible combinations of values of a and b after both T1 and T2 finish execution?",
    type: 'single',
    options: ["(a = 4, b = 4); (a = 3, b = 3); (a = 4, b = 3)", "(a = 3, b = 4); (a = 4, b = 3); (a = 3, b = 3)", "(a = 4, b = 4); (a = 4, b = 3); (a = 3, b = 4)", "(a = 2, b = 2); (a = 2, b = 3); (a = 3, b = 4)"],
    correctIndex: 0
  },
  {
    id: 41,
    question: "An array [82, 101, 90, 11, 111, 75, 33, 131, 44, 93] is heapified. Which one of the following options represents the first three elements in the heapified array?",
    type: 'single',
    options: ["82, 90, 101", "82, 11, 93", "131, 11, 93", "131, 111, 90"],
    correctIndex: 3
  },
  {
    id: 42,
    question: "Consider the following recurrence relation: T(n) = √n T(√n) + n for n ≥ 1, 1 for n = 1. Which one of the following options is CORRECT?",
    type: 'single',
    options: ["T(n) = Θ(n log log n)", "T(n) = Θ(n log n)", "T(n) = Θ(n² log n)", "T(n) = Θ(n² log log n)"],
    correctIndex: 0
  },
  {
    id: 43,
    question: "Consider a binary min-heap containing 105 distinct elements. Let k be the index (in the underlying array) of the maximum element stored in the heap. The number of possible values of k is",
    type: 'single',
    options: ["53", "52", "27", "1"],
    correctIndex: 0
  }
];


export default function gate2024Page() {
  const [selected, setSelected] = useState<Record<number, number | number[] | string>>({});
  const [showNumerical, setShowNumerical] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({}); // ✅ for multiple check

  const handleSingleOptionClick = (qid: number, idx: number) => {
    setSelected((prev) => ({ ...prev, [qid]: idx }));
  };

  const handleMultipleOptionClick = (qid: number, idx: number) => {
    setSelected((prev) => {
      const current = (prev[qid] as number[]) || [];
      const updated = current.includes(idx)
        ? current.filter((i) => i !== idx)
        : [...current, idx];
      return { ...prev, [qid]: updated };
    });
  };

  const handleNumericalInputChange = (qid: number, value: string) => {
    setSelected((prev) => ({ ...prev, [qid]: value }));
  };

  const checkNumericalAnswer = (qid: number) => {
    setShowNumerical((prev) => ({ ...prev, [qid]: true }));
  };

  const checkMultipleAnswer = (qid: number) => {
    setChecked((prev) => ({ ...prev, [qid]: true }));
  };

  const isMultipleCorrect = (qid: number, correctIndices: number[]) => {
    const selectedIndices = (selected[qid] as number[]) || [];
    const sortedSelected = [...selectedIndices].sort();
    const sortedCorrect = [...correctIndices].sort();
    return (
      sortedSelected.length === sortedCorrect.length &&
      sortedSelected.every((val, i) => val === sortedCorrect[i])
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Gate 2022 - Quiz</h1>

      {questions.map((q) => (
        <div key={q.id} className="mb-8 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          {q.id}. {q.question}
          {q.type === "multiple" && (
            <span className="text-sm text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
              MCA 
            </span>
          )}
        </h2>

          {q.type === "numerical" ? (
            <div>
              <input
                type="text"
                placeholder="Enter your answer"
                className="border px-2 py-1 rounded mr-2"
                value={(selected[q.id] as string) || ""}
                onChange={(e) => handleNumericalInputChange(q.id, e.target.value)}
              />
              <button
                onClick={() => checkNumericalAnswer(q.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Check
              </button>
              {showNumerical[q.id] && (
                <div
                  className={`mt-2 p-2 rounded ${
                    (selected[q.id] as string)?.trim() === q.numericalAnswer?.trim()
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  Answer: {q.numericalAnswer} —{" "}
                  {(selected[q.id] as string)?.trim() === q.numericalAnswer?.trim()
                    ? "✅ Correct"
                    : "❌ Incorrect"}
                </div>
              )}
            </div>
          ) : q.options?.length ? (
            <ul className="space-y-2">
              {q.options.map((option, idx) => {
                const key = `${q.id}-${idx}`;
                const userSelected = selected[q.id];
                const selectedArray = (userSelected as number[]) || [];
                const isSelected =
                  q.type === "single" ? userSelected === idx : selectedArray.includes(idx);
                const hasChecked = q.type === "single" || checked[q.id];

                const isCorrect =
                  q.type === "single"
                    ? idx === q.correctIndex
                    : q.correctIndices?.includes(idx);

                return (
                  <li
                    key={key}
                    className={`p-2 border rounded cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-blue-100 border-blue-400"
                        : "hover:bg-gray-100"
                    } ${
                      hasChecked && isSelected && isCorrect
                        ? "bg-green-100 border-green-500"
                        : hasChecked && isSelected && !isCorrect
                        ? "bg-red-100 border-red-500"
                        : ""
                    } ${
                      hasChecked && !isSelected && isCorrect && q.type === "multiple"
                        ? "bg-yellow-100 border-yellow-500"
                        : ""
                    }`}
                    onClick={() =>
                      q.type === "single"
                        ? handleSingleOptionClick(q.id, idx)
                        : handleMultipleOptionClick(q.id, idx)
                    }
                  >
                    {option}
                    {hasChecked && q.type === "single" && isSelected && (
                      <span className="ml-2 font-semibold">
                        {isCorrect ? "✅ Correct" : "❌ Wrong"}
                      </span>
                    )}
                    {hasChecked &&
                      q.type === "multiple" &&
                      ((isSelected && isCorrect && " ✅") ||
                        (isSelected && !isCorrect && " ❌") ||
                        (!isSelected && isCorrect && " ⚠️"))}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="text-red-600">⚠️ No options available</div>
          )}

          {/* Show Check Answer for Multiple Correct Questions */}
          {q.type === "multiple" && (
            <div className="mt-3">
              <button
                onClick={() => checkMultipleAnswer(q.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Check Answer
              </button>
              {checked[q.id] && (
                <div className="mt-2 font-semibold">
                  Overall:{" "}
                  {isMultipleCorrect(q.id, q.correctIndices!)
                    ? "✅ Correct"
                    : "❌ Incorrect or Incomplete"}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
