---
title: Admonitions
---

Admonitions are things like notes, tips, and warnings. They are formatted to stand out. Each theme includes its own styling for admonitions.

Created with https://www.npmjs.com/package/markdown-it-admonition. The plugin offers 12 admonitions, but not all themes provide styling for all of them. You can add your own styling however.

[DEBS NOTE: may wish to limit the available admonitions, probs don't want to include all these, will cause confusion. Can pass as opts.

## Supported admonitions

### Abstract

### Bug

### Danger

### Example

### Failure

### Info

### Note

```
!!! note This is a note
This is the note's contents
!!!
```

Outputs:

!!! note This is a note
This is the note's contents
!!!

### Question

### Quote

### Success

### Tip

### Warning

```
!!! warning This is a warning
This is the warning's contents
!!!
```

Outputs:

!!! warning This is a warning
This is the warning's contents
!!!

### 