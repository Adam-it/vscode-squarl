import { BookmarkViewType } from "../models";
import { BookmarkView } from "../views/BookmarkView";


export class ViewService {
  public static globalView: BookmarkView;
  public static projectView: BookmarkView;
  public static teamView: BookmarkView;

  public static init() {
    ViewService.globalView = new BookmarkView(BookmarkViewType.global);
    ViewService.projectView = new BookmarkView(BookmarkViewType.project);
    ViewService.teamView = new BookmarkView(BookmarkViewType.team);
  }
}