export default function () {
  const tab = document.querySelector(".m-recommend-tab");
  const tabContentList = document.querySelectorAll(
    ".m-recommend-content .m-recommend-list",
  );
  let prevTabItem = tab.children[0];
  let prevContent = tabContentList[0];

  // With closure, the callback has access to the variables outside.
  tab.addEventListener("click", (e) => {
    // Get current tab item (li)
    const target = e.target.closest("li");

    // If target is null OR target tagName is not LI, do nothing.
    if (target === null || target.tagName !== "LI") return;

    // If prevTabItem is the same as the current tab item, do nothing.
    if (prevTabItem === target) return;

    // Get current index
    const currentIndex = Number(target.dataset.index);
    // Get current content
    const currentContent = tabContentList[currentIndex];

    // Remove prevTabItem styles
    prevTabItem.classList.remove("active");
    // Set nextTabItem styles
    target.classList.add("active");
    // Hide current content
    prevContent.classList.remove("active");
    // Show next content
    currentContent.classList.add("active");
    // Update previous reference
    prevTabItem = target;
    prevContent = currentContent;
  });
}
