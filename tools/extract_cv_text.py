from __future__ import annotations

from pathlib import Path


def main() -> int:
    try:
        from pypdf import PdfReader
    except Exception as exc:  # pragma: no cover
        raise SystemExit(
            "Missing dependency 'pypdf'. Install with: python -m pip install pypdf"
        ) from exc

    repo_root = Path(__file__).resolve().parents[1]
    pdf_path = repo_root / "RayenKorbi.pdf"
    if not pdf_path.exists():
        raise SystemExit(f"PDF not found: {pdf_path}")

    reader = PdfReader(str(pdf_path))
    text_parts: list[str] = []

    for page_index, page in enumerate(reader.pages, start=1):
        text = (page.extract_text() or "").strip()
        text_parts.append(f"--- Page {page_index} ---\n{text}".rstrip())

    full_text = "\n\n".join(text_parts).strip() + "\n"

    out_path = repo_root / "cv.txt"
    out_path.write_text(full_text, encoding="utf-8")
    print(f"Wrote {out_path} ({len(full_text)} chars)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
