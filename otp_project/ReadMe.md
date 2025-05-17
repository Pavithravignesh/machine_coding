## 💻 Problem Statement: Develop an OTP Input Component (Duration: 20 minutes)

### 🎯 Objective

Implement an OTP (One-Time Password) input UI component that supports **customizable digit length** and smooth user experience, adhering to the behavior described below.

### ✅ Functional Requirements (Happy Flow)

1. **Dynamic Input Fields**  - DONE

   * The number of OTP input fields should be dynamically rendered based on a given `otpLength` (e.g., 4 or 6 digits).

2. **Single Character Input**  - DONE

   * Each input field should accept only **a single numeric digit (0–9)**.

3. **Auto-Focus Navigation**  - DONE

   * On page/component load, the **first input field** should automatically receive focus.
   * After a digit is entered, focus should **automatically move to the next** input field.
   * If a character is deleted using **Backspace**, focus should **move to the previous** input field (if available).

4. **Manual Focus Override**  - DONE

   * Users should be able to manually click/focus on any input field.

5. **Validation**  - DONE

   * Input must strictly allow only numeric digits. Any non-numeric input should be ignored.

---

### 🔄 Edge Case Behavior

* If user pastes a string longer than 1 character, it should be ignored or sanitized. - DONE
* If a user tries to enter a non-digit character (like a letter or symbol), it should not appear in the input. - DONE

---

### 📦 Input

* `otpLength` (Number): Determines how many input fields to render.

---

### 📤 Output

* An array or string representing the final OTP value after all fields are filled.

---

### 🛠 Constraints

* Do **not use any third-party libraries** for input masking or formatting.
* The implementation should be in **React (preferred)** or plain JavaScript.

1st time - done - [49m]