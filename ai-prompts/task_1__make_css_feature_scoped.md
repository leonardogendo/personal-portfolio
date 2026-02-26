[TASK REQUEST] — Task 1: Make CSS component-scoped

### INTENT / CONTRACT SPECIFICATION
Describe:
- Purpose of this task
- Inputs and outputs
- Constraints
- Edge cases

Then produce a **Change Plan**.

#### Purpose
Make CSS styles component-scoped. This means that each component(grouped jsx files) should have its own CSS file and not have all the styles included in the global `styles/styles.css` file.

Make the global `styles/styles.css` file only contain the styles that are common to all components.

#### Inputs
- Current `styles/styles.css` file
- Components = ["hero", "about", "technical-skills", "experiences", "projects", "certificates", "footer-area"] and are located in the `src/components` directory

#### Outputs
- New CSS files for each component
- Updated `styles/styles.css` file


#### Constraints
- The global `styles/styles.css` file should only contain the styles that are common to all components.
- The new CSS files should just be named `styles.css` but placed inside the component's directory.
- The components are assummed to be the following: ["hero", "about", "technical-skills", "experiences", "projects", "certificates", "footer-area"] 
- The components are grouped into subfolders in the `src/components` directory.
- Each group of components should have its own CSS file, that is each component folder should have its own CSS file.
- The CSS files should be named `styles.css`.
- If a file to be created already exists; clean it up, the extend or modify

#### Edge Cases
- Components folder having only one component. They should be treated the same and have their own CSS file within that folder.

#### Success Criteria
- All components have their own CSS file.
- The global `styles/styles.css` file only contains the styles that are common to all components.

---

### PLANNING PHASE (Before Code/SQL)
Produce:
1. Files to modify
2. Rationale


WAIT for confirmation before applying.

Example Plan Skeleton:

"""
Files:
- *.jsx
- *.css

Changes:
- Move all styles from global `styles/styles.css` to the new CSS files.
- Update the JSX files to import the new CSS files.
"""

---

### AFTER PLAN CONFIRMATION
Generate:
1. Files to modify
2. Rationale

---

## END TASK #1